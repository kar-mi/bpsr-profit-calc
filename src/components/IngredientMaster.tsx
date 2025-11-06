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

  return (
    <div className="flex flex-col bg-[#0E1117] text-white p-4 rounded-2xl shadow-md border border-[#1B1F27] w-full max-w-sm max-h-screen">
      <h2 className="text-lg font-semibold mb-3 text-center">Ingredient Master</h2>

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
