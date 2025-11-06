import React, { useState } from "react";
import { Ingredient } from "@/data/ingredients";

interface IngredientMasterProps {
  ingredients: Ingredient[];
  onPriceChange: (id: string, newPrice: number) => void;
}

const IngredientMaster: React.FC<IngredientMasterProps> = ({
  ingredients,
  onPriceChange,
}) => {
  const [search, setSearch] = useState("");

  const filtered = ingredients.filter((ing) =>
    ing.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleDownload = () => {
    // Create JSON object with ingredient prices
    const priceData = ingredients.reduce((acc, ing) => {
      acc[ing.id] = ing.defaultPrice;
      return acc;
    }, {} as Record<string, number>);

    // Create blob and download
    const blob = new Blob([JSON.stringify(priceData, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `ingredient-prices-${new Date().toISOString().split("T")[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const priceData = JSON.parse(e.target?.result as string);

        // Update each ingredient price
        Object.entries(priceData).forEach(([id, price]) => {
          if (typeof price === "number") {
            onPriceChange(id, price);
          }
        });

        alert("Ingredient prices updated successfully!");
      } catch (error) {
        alert("Failed to parse JSON file. Please check the format.");
      }
    };
    reader.readAsText(file);

    // Reset input so same file can be uploaded again
    event.target.value = "";
  };

  return (
    <div className="flex flex-col bg-[#0E1117] text-white p-4 rounded-2xl shadow-md border border-[#1B1F27] w-full max-w-sm max-h-screen">
      <h2 className="text-lg font-semibold mb-3 text-center">Ingredient Master</h2>

      {/* Import/Export Buttons */}
      <div className="flex gap-2 mb-3">
        <button
          onClick={handleDownload}
          className="flex-1 px-3 py-2 bg-[#1A1D23] hover:bg-[#232730] text-sm rounded-lg border border-[#2A2E36] transition-colors focus:ring-2 focus:ring-blue-600 focus:outline-none"
        >
          Download JSON
        </button>
        <label className="flex-1 px-3 py-2 bg-[#1A1D23] hover:bg-[#232730] text-sm rounded-lg border border-[#2A2E36] transition-colors cursor-pointer text-center focus-within:ring-2 focus-within:ring-blue-600">
          Upload JSON
          <input
            type="file"
            accept=".json"
            onChange={handleUpload}
            className="hidden"
          />
        </label>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search ingredient..."
        className="w-full mb-4 px-3 py-2 rounded-lg bg-[#1A1D23] text-sm border border-[#2A2E36] focus:ring-2 focus:ring-blue-600 focus:outline-none"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Ingredient list */}
      <div className="flex-1 min-h-0 space-y-2 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-[#2A2E36] scrollbar-track-[#15181E] hover:scrollbar-thumb-[#343841]">
        {filtered.map((ing) => (
          <div
            key={ing.id}
            className="flex items-center justify-between bg-[#15181E] hover:bg-[#1A1E26] transition-colors rounded-xl p-2 border border-[#232730]"
          >
            <div className="flex items-center space-x-3">
              {ing.icon && (
                <img
                  src={ing.icon}
                  alt={ing.name}
                  className="w-6 h-6 rounded-md object-cover"
                />
              )}
              <span className="text-sm font-medium">{ing.name}</span>
            </div>
            <input
              type="number"
              value={ing.defaultPrice}
              onChange={(e) => onPriceChange(ing.id, parseFloat(e.target.value))}
              className="w-20 bg-[#1A1D23] text-right text-sm px-2 py-1 rounded-md border border-[#2A2E36] focus:ring-1 focus:ring-blue-600 focus:outline-none"
            />
          </div>
        ))}

        {filtered.length === 0 && (
          <p className="text-sm text-gray-400 text-center py-4">No ingredients found.</p>
        )}
      </div>
    </div>

  );
};

export default IngredientMaster;
