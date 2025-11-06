// src/data/recipes.ts

import { INGREDIENT_MAP } from "./ingredients";

export interface RecipeIngredient {
  id: string;
  qty: number;
}

export interface Recipe {
  id: string;
  name: string;
  skill: string;
  sellValue: number;
  output: number;
  craftingFocus: number;
  icon?: string;
  ingredients: RecipeIngredient[];

  totalIngredientCost: number;
  focusEfficiency: number;
}

// Base recipe definitions (minimal info)
const BASE_RECIPES: Omit<Recipe, "totalIngredientCost" | "focusEfficiency">[] = [
  {
    "id": "mystery_medal",
    "name": "Mystery Medal",
    "skill": "Smelting",
    "sellValue": 2083,
    "output": 1,
    "craftingFocus": 10,
    "icon": "https://cdn.questlog.gg/blue-protocol/assets/item_icons_god_metal_01.webp",
    "ingredients": [
      { "id": "baru_ore", "qty": 8 },
      { "id": "burning_powder", "qty": 1 },
    ]
  },
  {
    "id": "fine_forgestone",
    "name": "Fine Forgestone",
    "skill": "Smelting",
    "sellValue": 2083,
    "output": 1,
    "craftingFocus": 10,
    "icon": "https://cdn.questlog.gg/blue-protocol/assets/item_icons_god_metal_02.webp",
    "ingredients": [
      { "id": "luna_ore", "qty": 8 },
      { "id": "burning_powder", "qty": 1 },
    ]
  },
  {
    "id": "radiant_stone",
    "name": "Radiant Stone",
    "skill": "Smelting",
    "sellValue": 2083,
    "output": 1,
    "craftingFocus": 10,
    "icon": "https://cdn.questlog.gg/blue-protocol/assets/item_icons_aluminium_01.webp",
    "ingredients": [
      { "id": "azte_ore", "qty": 8 },
      { "id": "burning_powder", "qty": 1 },
    ]
  },
  {
    "id": "buri_mech_shard",
    "name": "Buri Mech Shard",
    "skill": "Smelting",
    "sellValue": 6000,
    "output": 1,
    "craftingFocus": 10,
    "icon": "https://cdn.questlog.gg/blue-protocol/assets/item_icons_equipment%20gems_01.webp",
    "ingredients": [
      { "id": "stokes_rich_ore", "qty": 9 },
      { "id": "fast_burning_powder", "qty": 3 },
    ]
  },
  {
    "id": "ruby",
    "name": "Ruby",
    "skill": "Gemcrafting",
    "sellValue": 3200,
    "output": 1,
    "craftingFocus": 20,
    "icon": "https://cdn.questlog.gg/blue-protocol/assets/red_crystal_stone_basic.webp",
    "ingredients": [
      { "id": "starlight_ruby1", "qty": 7 },
    ]
  },
  {
    "id": "ruby_power_3",
    "name": "Ruby - Power 3",
    "skill": "Gemcrafting",
    "sellValue": 6200,
    "output": 1,
    "craftingFocus": 20,
    "icon": "https://cdn.questlog.gg/blue-protocol/assets/red_crystal_stone_triangle_2.webp",
    "ingredients": [
      { "id": "starlight_ruby2", "qty": 5 },
      { "id": "gem_wax", "qty": 2 },
      { "id": "ruby", "qty": 1 },
    ]
  },
  {
    "id": "ruby_bulwark_3",
    "name": "Ruby - Bulwark 3",
    "skill": "Gemcrafting",
    "sellValue": 6696,
    "output": 1,
    "craftingFocus": 20,
    "icon": "https://cdn.questlog.gg/blue-protocol/assets/red_crystal_stone_square_2.webp",
    "ingredients": [
      { "id": "starlight_ruby2", "qty": 5 },
      { "id": "gem_wax", "qty": 2 },
      { "id": "ruby", "qty": 1 }, 
    ]
  },
  {
    "id": "ruby_agility_3",
    "name": "Ruby - Agility 3",
    "skill": "Gemcrafting",
    "sellValue": 6448,
    "output": 1,
    "craftingFocus": 20,
    "icon": "https://cdn.questlog.gg/blue-protocol/assets/red_crystal_stone_special_2.webp",
    "ingredients": [
      { "id": "starlight_ruby2", "qty": 5 },
      { "id": "gem_wax", "qty": 2 },
      { "id": "ruby", "qty": 1 },
    ]
  },
  {
    "id": "ruby_abyss_3",
    "name": "Ruby - Abyss 3",
    "skill": "Gemcrafting",
    "sellValue": 6448,
    "output": 1,
    "craftingFocus": 20,
    "icon": "https://cdn.questlog.gg/blue-protocol/assets/red_crystal_stone_pear_2.webp", 
    "ingredients": [
      { "id": "starlight_ruby2", "qty": 5 },
      { "id": "gem_wax", "qty": 2 },
      { "id": "ruby", "qty": 1 },
    ]
  },
  {
    "id": "sapphire",
    "name": "Sapphire",
    "skill": "Gemcrafting",
    "sellValue": 3200,
    "output": 1,
    "craftingFocus": 20,
    "icon": "https://cdn.questlog.gg/blue-protocol/assets/blue_crystal_stone_basic.webp",
    "ingredients": [
      { "id": "starlight_sapphire1", "qty": 7 }
    ]
  },
  {
    "id": "sapphire_power_3",
    "name": "Sapphire - Power 3",
    "skill": "Gemcrafting",
    "sellValue": 6200,
    "output": 1,
    "craftingFocus": 20,
    "icon": "https://cdn.questlog.gg/blue-protocol/assets/blue_crystal_stone_triangle_2.webp",
    "ingredients": [
      { "id": "starlight_sapphire2", "qty": 5 },
      { "id": "gem_wax", "qty": 2 },
      { "id": "sapphire", "qty": 1 }
    ]
  },
  {
    "id": "sapphire_bulwark_3",
    "name": "Sapphire - Bulwark 3",
    "skill": "Gemcrafting",
    "sellValue": 6696,
    "output": 1,
    "craftingFocus": 20,
    "icon": "https://cdn.questlog.gg/blue-protocol/assets/blue_crystal_stone_square_2.webp",
    "ingredients": [
      { "id": "starlight_sapphire2", "qty": 5 },
      { "id": "gem_wax", "qty": 2 },
      { "id": "sapphire", "qty": 1 }
    ]
  },
  {
    "id": "sapphire_agility_3",
    "name": "Sapphire - Agility 3",
    "skill": "Gemcrafting",
    "sellValue": 6448,
    "output": 1,
    "craftingFocus": 20,
    "icon": "https://cdn.questlog.gg/blue-protocol/assets/blue_crystal_stone_special_2.webp",
    "ingredients": [
      { "id": "starlight_sapphire2", "qty": 5 },
      { "id": "gem_wax", "qty": 2 },
      { "id": "sapphire", "qty": 1 }
    ]
  },
  {
    "id": "sapphire_abyss_3",
    "name": "Sapphire - Abyss 3",
    "skill": "Gemcrafting",
    "sellValue": 6448,
    "output": 1,
    "craftingFocus": 20,
    "icon": "https://cdn.questlog.gg/blue-protocol/assets/blue_crystal_stone_pear_2.webp",
    "ingredients": [
      { "id": "starlight_sapphire2", "qty": 5 },
      { "id": "gem_wax", "qty": 2 },
      { "id": "sapphire", "qty": 1 }
    ]
  },
  {
  "id": "diamond",
  "name": "Diamond",
  "skill": "Gemcrafting",
  "sellValue": 3200,
  "output": 1,
  "craftingFocus": 20,
  "icon": "https://cdn.questlog.gg/blue-protocol/assets/yellow_crystal_stone_basic.webp",
  "ingredients": [
    { "id": "starlight_diamond1", "qty": 7 }
  ]
  },
  {
    "id": "diamond_power_3",
    "name": "Diamond - Power 3",
    "skill": "Gemcrafting",
    "sellValue": 6200,
    "output": 1,
    "craftingFocus": 20,
    "icon": "https://cdn.questlog.gg/blue-protocol/assets/yellow_crystal_stone_triangle_2.webp",
    "ingredients": [
      { "id": "starlight_diamond2", "qty": 5 },
      { "id": "gem_wax", "qty": 2 },
      { "id": "diamond", "qty": 1 }
    ]
  },
  {
    "id": "diamond_bulwark_3",
    "name": "Diamond - Bulwark 3",
    "skill": "Gemcrafting",
    "sellValue": 6696,
    "output": 1,
    "craftingFocus": 20,
    "icon": "https://cdn.questlog.gg/blue-protocol/assets/yellow_crystal_stone_square_2.webp",
    "ingredients": [
      { "id": "starlight_diamond2", "qty": 5 },
      { "id": "gem_wax", "qty": 2 },
      { "id": "diamond", "qty": 1 }
    ]
  },
  {
    "id": "diamond_agility_3",
    "name": "Diamond - Agility 3",
    "skill": "Gemcrafting",
    "sellValue": 6448,
    "output": 1,
    "craftingFocus": 20,
    "icon": "https://cdn.questlog.gg/blue-protocol/assets/yellow_crystal_stone_special_2.webp",
    "ingredients": [
      { "id": "starlight_diamond2", "qty": 5 },
      { "id": "gem_wax", "qty": 2 },
      { "id": "diamond", "qty": 1 }
    ]
  },
  {
    "id": "diamond_abyss_3",
    "name": "Diamond - Abyss 3",
    "skill": "Gemcrafting",
    "sellValue": 6448,
    "output": 1,
    "craftingFocus": 20,
    "icon": "https://cdn.questlog.gg/blue-protocol/assets/yellow_crystal_stone_pear_2.webp",
    "ingredients": [
      { "id": "starlight_diamond2", "qty": 5 },
      { "id": "gem_wax", "qty": 2 },
      { "id": "diamond", "qty": 1 }
    ]
  },
  {
  "id": "emerald",
  "name": "Emerald",
  "skill": "Gemcrafting",
  "sellValue": 3200,
  "output": 1,
  "craftingFocus": 20,
  "icon": "https://cdn.questlog.gg/blue-protocol/assets/green_crystal_stone_basic.webp",
  "ingredients": [
    { "id": "starlight_emerald1", "qty": 7 }
  ]
  },
  {
    "id": "emerald_power_3",
    "name": "Emerald - Power 3",
    "skill": "Gemcrafting",
    "sellValue": 6200,
    "output": 1,
    "craftingFocus": 20,
    "icon": "https://cdn.questlog.gg/blue-protocol/assets/green_crystal_stone_triangle_2.webp",
    "ingredients": [
      { "id": "starlight_emerald2", "qty": 5 },
      { "id": "gem_wax", "qty": 2 },
      { "id": "emerald", "qty": 1 }
    ]
  },
  {
    "id": "emerald_bulwark_3",
    "name": "Emerald - Bulwark 3",
    "skill": "Gemcrafting",
    "sellValue": 6696,
    "output": 1,
    "craftingFocus": 20,
    "icon": "https://cdn.questlog.gg/blue-protocol/assets/green_crystal_stone_square_2.webp",
    "ingredients": [
      { "id": "starlight_emerald2", "qty": 5 },
      { "id": "gem_wax", "qty": 2 },
      { "id": "emerald", "qty": 1 }
    ]
  },
  {
    "id": "emerald_agility_3",
    "name": "Emerald - Agility 3",
    "skill": "Gemcrafting",
    "sellValue": 6448,
    "output": 1,
    "craftingFocus": 20,
    "icon": "https://cdn.questlog.gg/blue-protocol/assets/green_crystal_stone_special_2.webp",
    "ingredients": [
      { "id": "starlight_emerald2", "qty": 5 },
      { "id": "gem_wax", "qty": 2 },
      { "id": "emerald", "qty": 1 }
    ]
  },
  {
    "id": "emerald_abyss_3",
    "name": "Emerald - Abyss 3",
    "skill": "Gemcrafting",
    "sellValue": 6448,
    "output": 1,
    "craftingFocus": 20,
    "icon": "https://cdn.questlog.gg/blue-protocol/assets/green_crystal_stone_pear_2.webp",
    "ingredients": [
      { "id": "starlight_emerald2", "qty": 5 },
      { "id": "gem_wax", "qty": 2 },
      { "id": "emerald", "qty": 1 }
    ]
  },
  {
    "id": "red_dye",
    "name": "Red Dye",
    "skill": "Weaving",
    "sellValue": 2777,
    "output": 1,
    "craftingFocus": 20,
    "icon": "https://cdn.questlog.gg/blue-protocol/assets/item_icons_red_dye_01.webp",
    "ingredients": [
      { "id": "natural_pig_red", "qty": 8 },
      { "id": "boiled_water", "qty": 1 },
    ]
  },
  {
    "id": "orange_dye",
    "name": "Orange Dye",
    "skill": "Weaving",
    "sellValue": 2777,
    "output": 1,
    "craftingFocus": 20,
    "icon": "https://cdn.questlog.gg/blue-protocol/assets/item_icons_orange_dye_02.webp",
    "ingredients": [
      { "id": "natural_pig_orange", "qty": 8 },
      { "id": "boiled_water", "qty": 1 },
    ]
  },
  {
    "id": "yellow_dye",
    "name": "Yellow Dye",
    "skill": "Weaving",
    "sellValue": 2777,
    "output": 1,
    "craftingFocus": 20,
    "icon": "https://cdn.questlog.gg/blue-protocol/assets/item_icons_yellow_dye_01.webp",
    "ingredients": [
      { "id": "natural_pig_yellow", "qty": 8 },
      { "id": "boiled_water", "qty": 1 },
    ]
  },
  {
    "id": "green_dye",
    "name": "Green Dye",
    "skill": "Weaving",
    "sellValue": 2777,
    "output": 1,
    "craftingFocus": 20,
    "icon": "https://cdn.questlog.gg/blue-protocol/assets/item_icons_green_dye_01.webp",
    "ingredients": [
      { "id": "natural_pig_green", "qty": 8 },
      { "id": "boiled_water", "qty": 1 },
    ]
  },
  {
    "id": "cyan_dye",
    "name": "Cyan Dye",
    "skill": "Weaving",
    "sellValue": 2777,
    "output": 1,
    "craftingFocus": 20,
    "icon": "https://cdn.questlog.gg/blue-protocol/assets/item_icons_cyan_dye_01.webp",
    "ingredients": [
      { "id": "natural_pig_cyan", "qty": 8 },
      { "id": "boiled_water", "qty": 1 },
    ]
  },
  {
    "id": "blue_dye",
    "name": "Blue Dye",
    "skill": "Weaving",
    "sellValue": 2777,
    "output": 1,
    "craftingFocus": 20,
    "icon": "https://cdn.questlog.gg/blue-protocol/assets/item_icons_blue_dye_01.webp",
    "ingredients": [
      { "id": "natural_pig_blue", "qty": 8 },
      { "id": "boiled_water", "qty": 1 },
    ]
  },
  {
    "id": "purple_dye",
    "name": "Purple Dye",
    "skill": "Weaving",
    "sellValue": 2777,
    "output": 1,
    "craftingFocus": 20,
    "icon": "https://cdn.questlog.gg/blue-protocol/assets/item_icons_purple_dye_01.webp",
    "ingredients": [
      { "id": "natural_pig_purple", "qty": 8 },
      { "id": "boiled_water", "qty": 1 },
    ]
  },
  /* These recipes are negative money
  {
    "id": "burning_powder",
    "name": "Burning Powder",
    "skill": "Artisanry",
    "sellValue": 138,
    "output": 15,
    "craftingFocus": 20,
    "ingredients": []
  },
  {
    "id": "gem_wax",
    "name": "Gem Wax",
    "skill": "Artisanry",
    "sellValue": 128,
    "output": 15,
    "craftingFocus": 20,
    "ingredients": []
  },
  {
    "id": "fast_burning_powder",
    "name": "Fast Burning Powder",
    "skill": "Artisanry",
    "sellValue": 472,
    "output": 3,
    "craftingFocus": 20,
    "ingredients": []
  }
    */
];

// Calculate derived values from ingredient data
export const RECIPES: Recipe[] = BASE_RECIPES.map((recipe) => {
  const totalIngredientCost = recipe.ingredients.reduce((sum, ing) => {
    const item = INGREDIENT_MAP[ing.id];
    return sum + (item?.defaultPrice ?? 0) * ing.qty;
  }, 0);

  const focusEfficiency = recipe.sellValue / recipe.craftingFocus;

  return {
    ...recipe,
    totalIngredientCost,
    focusEfficiency,
  };
});
