import React, { useEffect, useState } from "react";
import { RECIPES } from "@/data/recipes";
import {INGREDIENT_MAP, Ingredient } from "@/data/ingredients";
import RecipeCard from "@/components/RecipeCard";
import IngredientMaster from "@/components/IngredientMaster";

// Helper to group recipes by life skill
const groupRecipesBySkill = (recipes = RECIPES) => {
  const grouped: Record<string, typeof RECIPES> = {};
  recipes.forEach((r) => {
    if (!grouped[r.skill]) grouped[r.skill] = [];
    grouped[r.skill].push(r);
  });
  return grouped;
};

const LifeSkillCalculator: React.FC = () => {
  const [ingredients, setIngredients] = useState<Record<string, Ingredient>>(INGREDIENT_MAP);
  const [recipes, setRecipes] = useState(RECIPES);
  const [_, setGroupedRecipes] = useState(groupRecipesBySkill(RECIPES));
  const [selectedSkill, setSelectedSkill] = useState<string>("All");
  const [selectedRecipe, setSelectedRecipe] = useState(RECIPES[0]);
  const [sortBy, setSortBy] = useState<"name" | "profit" | "totalCost">("name");

  // 🧠 Load saved data (prices & recipes)
  useEffect(() => {
    const savedIngredients = localStorage.getItem("ingredients");
    const savedRecipes = localStorage.getItem("recipes");

    if (savedIngredients) {
      setIngredients(JSON.parse(savedIngredients));
    }

    if (savedRecipes) {
      const parsed = JSON.parse(savedRecipes);
      setRecipes((prev) =>
        prev.map((r) => ({
          ...r,
          sellValue: parsed[r.id]?.sellValue ?? r.sellValue,
        }))
      );
    }
  }, []);

  // 🧾 Save ingredients & recipes persistently
  useEffect(() => {
    localStorage.setItem("ingredients", JSON.stringify(ingredients));
  }, [ingredients]);

  useEffect(() => {
    const saveObj = Object.fromEntries(
      recipes.map((r) => [r.id, { sellValue: r.sellValue }])
    );
    localStorage.setItem("recipes", JSON.stringify(saveObj));
  }, [recipes]);

  // 🔧 Handlers
  const handleIngredientPriceChange = (id: string, newPrice: number) => {
    setIngredients((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        defaultPrice: newPrice,
      },
    }));
  };

  const handleRecipeSellValueChange = (id: string, newValue: number) => {
    setRecipes((prev) => {
      const updated = prev.map((r) =>
        r.id === id ? { ...r, sellValue: newValue } : r
      );
      setGroupedRecipes(groupRecipesBySkill(updated));
      const selected = updated.find((r) => r.id === selectedRecipe.id);
      if (selected) setSelectedRecipe(selected);
      return updated;
    });
  };

  // Helper to calculate recipe cost
  const calculateRecipeCost = (recipe: typeof recipes[0]) => {
    return recipe.ingredients.reduce((sum, { id, qty }) => {
      const ing = ingredients[id];
      if (ing) {
        return sum + ing.defaultPrice * qty;
      }
      const nestedRecipe = recipes.find(r => r.id === id);
      if (nestedRecipe) {
        return sum + nestedRecipe.sellValue * qty;
      }
      return sum;
    }, 0);
  };

  // 🧩 Filter recipes by selected skill
  const filteredRecipes = (
    selectedSkill === "All"
      ? recipes
      : recipes.filter((r) => r.skill === selectedSkill)
  ).sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "profit") {
      const profitA = a.sellValue - calculateRecipeCost(a);
      const profitB = b.sellValue - calculateRecipeCost(b);
      return profitB - profitA; // Highest profit first
    } else {
      // totalCost
      const costA = calculateRecipeCost(a);
      const costB = calculateRecipeCost(b);
      return costA - costB; // Lowest cost first
    }
  });

  const displayedGroups = groupRecipesBySkill(filteredRecipes);

  return (
  <div className="p-6 text-white min-h-screen bg-[#0B0E13]">
    {/*  Header */}
    <h1 className="text-3xl font-bold mb-8 text-center md:text-center">
      🐥 Life Skill Calculator
    </h1>

    {/*  Main Layout Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
      {/* Recipe Section */}
      <div className="space-y-6">
        {/* Skill Filter Buttons and Sort Dropdown */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          {["All", "Smelting", "Gemcrafting", "Weaving"].map((skill) => (
            <button
              key={skill}
              onClick={() => setSelectedSkill(skill)}
              className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${
                selectedSkill === skill
                  ? "bg-blue-600 border-blue-700 text-white"
                  : "bg-[#15181E] border-[#232730] hover:bg-[#1A1E26] text-slate-300"
              }`}
            >
              {skill}
            </button>
          ))}

          {/* Sort Dropdown - aligned to the right */}
          <div className="ml-auto">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as "name" | "profit" | "totalCost")}
              className="px-3 py-2 rounded-lg bg-[#15181E] text-sm border border-[#232730] focus:ring-2 focus:ring-blue-600 focus:outline-none cursor-pointer"
            >
              <option value="name">Name (A-Z)</option>
              <option value="profit">Profit (High to Low)</option>
              <option value="totalCost">Total Cost (Low to High)</option>
            </select>
          </div>
        </div>

        {/* Recipe Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              ingredients={ingredients}
              recipes={recipes}
              onIngredientPriceChange={handleIngredientPriceChange}
              onRecipeSellValueChange={handleRecipeSellValueChange}
            />
          ))}
        </div>
      </div>

      {/* 📋 Ingredient Master Panel (Right Side) */}
      <div className="sticky top-8 h-fit">
        <IngredientMaster
          ingredients={Object.values(ingredients)}
          onPriceChange={handleIngredientPriceChange}
        />
      </div>
    </div>
  </div>
);

};

export default LifeSkillCalculator;
