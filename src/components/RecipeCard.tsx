import React from "react";
import { Recipe } from "@/data/recipes";
import { Ingredient } from "@/data/ingredients";

interface RecipeCardProps {
  recipe: Recipe;
  ingredients: Record<string, Ingredient>;
  recipes: Recipe[];
  onIngredientPriceChange: (id: string, newPrice: number) => void;
  onRecipeSellValueChange: (id: string, newValue: number) => void;
}

const RecipeCard: React.FC<RecipeCardProps> = ({
  recipe,
  ingredients,
  recipes,
  onIngredientPriceChange,
  onRecipeSellValueChange,
}) => {
  if (!recipe) return null;

  // Helper function to calculate cost recursively for nested recipes
  const calculateIngredientCost = (id: string, qty: number): number => {
    // First check if it's an ingredient
    const ing = ingredients[id];
    if (ing) {
      return ing.defaultPrice * qty;
    }

    // If not found in ingredients, check if it's a nested recipe
    const nestedRecipe = recipes.find(r => r.id === id);
    if (nestedRecipe) {
      return nestedRecipe.sellValue * qty;
    }

    return 0;
  };

  const totalCost = recipe.ingredients.reduce((sum, { id, qty }) => {
    return sum + calculateIngredientCost(id, qty);
  }, 0);

  // Calculate total focus cost (gathering ingredients + crafting)
  const totalFocusCost = recipe.ingredients.reduce((sum, { id, qty }) => {
    const ing = ingredients[id];
    if (ing && ing.gatheringFocus > 0) {
      // Calculate focus needed to gather this ingredient
      const focusPerItem = ing.gatheringFocus / ing.gatherCount;
      return sum + (focusPerItem * qty);
    }
    // For recipes or items with no gathering focus, don't add to focus cost
    return sum;
  }, recipe.craftingFocus); // Start with the crafting focus

  const profit = recipe.sellValue - totalCost;
  const roi = totalCost > 0 ? (profit / totalCost) * 100 : 0;
  const profitPerFocus = totalFocusCost > 0 ? profit / totalFocusCost : 0;

  return (
    <div className="bg-[#0E1117] text-white p-6 rounded-2xl shadow-md border border-[#1B1F27] w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          {recipe.icon && (
            <img
              src={recipe.icon}
              alt={recipe.name}
              className="w-10 h-10 rounded-xl object-cover"
            />
          )}
          <div>
            <h3 className="text-lg font-semibold">{recipe.name}</h3>
            <p className="text-sm text-gray-400">{recipe.skill}</p>
          </div>
        </div>
        <div className="text-right">
          <label className="text-xs text-gray-400">Market Price:</label>
          <input
            type="number"
            className="ml-2 w-24 bg-[#1A1D23] text-sm text-right px-2 py-1 rounded-md border border-[#2A2E36] focus:ring-1 focus:ring-blue-600 focus:outline-none"
            value={recipe.sellValue}
            onChange={(e) => onRecipeSellValueChange(recipe.id, parseFloat(e.target.value))}
          />
        </div>
      </div>

      {/* Ingredients */}
      <div className="space-y-3 mb-5">
        {recipe.ingredients.map(({ id, qty }) => {
          const ing = ingredients[id];
          const nestedRecipe = recipes.find(r => r.id === id);

          // Skip if neither ingredient nor recipe found
          if (!ing && !nestedRecipe) return null;

          const isRecipe = !!nestedRecipe && !ing;
          const displayItem = isRecipe ? nestedRecipe : ing;
          const price = isRecipe ? nestedRecipe!.sellValue : ing!.defaultPrice;
          const icon = displayItem?.icon;
          const name = displayItem?.name || id;

          return (
            <div
              key={id}
              className={`flex items-center justify-between transition-colors rounded-xl p-3 border ${
                isRecipe
                  ? "bg-[#1A1520] hover:bg-[#1F1A26] border-[#332740]"
                  : "bg-[#15181E] hover:bg-[#1A1E26] border-[#232730]"
              }`}
            >
              <div className="flex items-center space-x-3">
                {icon && (
                  <img
                    src={icon}
                    alt={name}
                    className="w-7 h-7 rounded-md object-cover"
                  />
                )}
                <div>
                  <p className="text-sm font-medium">
                    {name}
                    {isRecipe && <span className="ml-2 text-xs text-purple-400">(Recipe)</span>}
                  </p>
                  <p className="text-xs text-gray-400">
                    Needed: {qty}
                    {!isRecipe && ing && ing.gatheringFocus > 0 && (
                      <span className="ml-2 text-amber-400">
                        ⚡ {((ing.gatheringFocus / ing.gatherCount) * qty).toFixed(1)}
                      </span>
                    )}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                {isRecipe ? (
                  // For nested recipes, show price but make it editable via recipe sell value
                  <>
                    <input
                      type="number"
                      value={price}
                      onChange={(e) =>
                        onRecipeSellValueChange(id, parseFloat(e.target.value))
                      }
                      className="w-20 bg-[#1A1D23] text-right text-sm px-2 py-1 rounded-md border border-[#2A2E36] focus:ring-1 focus:ring-purple-600 focus:outline-none"
                    />
                    <span className="text-sm text-gray-400">
                      = {(price * qty).toFixed(0)}
                    </span>
                  </>
                ) : (
                  // For regular ingredients
                  <>
                    <input
                      type="number"
                      value={price}
                      onChange={(e) =>
                        onIngredientPriceChange(id, parseFloat(e.target.value))
                      }
                      className="w-20 bg-[#1A1D23] text-right text-sm px-2 py-1 rounded-md border border-[#2A2E36] focus:ring-1 focus:ring-blue-600 focus:outline-none"
                    />
                    <span className="text-sm text-gray-400">
                      = {(price * qty).toFixed(0)}
                    </span>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="bg-[#15181E] p-3 rounded-xl border border-[#232730] text-center">
          <p className="text-xs text-gray-400">Total Cost</p>
          <p className="text-lg font-semibold">{totalCost.toFixed(0)}</p>
        </div>
        <div className="bg-[#15181E] p-3 rounded-xl border border-[#232730] text-center">
          <p className="text-xs text-gray-400">Expected Revenue</p>
          <p className="text-lg font-semibold">{recipe.sellValue.toFixed(0)}</p>
        </div>
        <div
          className={`p-3 rounded-xl border text-center ${
            profit >= 0
              ? "bg-[#102618] border-green-700"
              : "bg-[#261010] border-red-700"
          }`}
        >
          <p className="text-xs text-gray-400">Profit</p>
          <p className="text-lg font-semibold">
            {profit.toFixed(0)}{" "}
            <span className="text-sm text-gray-400">({roi.toFixed(2)}%)</span>
          </p>
        </div>
        <div className="bg-[#15181E] p-3 rounded-xl border border-[#232730] text-center">
          <p className="text-xs text-gray-400">Focus Cost</p>
          <p className="text-lg font-semibold">
            {totalFocusCost.toFixed(1)}
            <span className="text-xs text-gray-400 block mt-1">
              {profitPerFocus.toFixed(1)}/focus
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
