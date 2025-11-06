// src/data/ingredients.ts

export interface Ingredient {
  id: string;
  name: string;
  defaultPrice: number; // market price
  total: number; // total value (can be the same as defaultPrice for raw items)
  gatherCount: number;
  gatheringFocus: number;
  valuePerFocus: number; // derived metric
  icon?: string;
}

// Base data (raw info only)
const BASE_INGREDIENTS: Omit<Ingredient, "valuePerFocus">[] = [
  {
    "id": "baru_ore",
    "name": "Baru Ore",
    "defaultPrice": 180.0,
    "total": 180.0,
    "gatherCount": 10.0,
    "gatheringFocus": 20.0,
    "icon": "https://cdn.questlog.gg/blue-protocol/assets/item_icons_iron_ore_01.webp"
  },
  {
    "id": "baru_rich_ore",
    "name": "Baru Rich Ore",
    "defaultPrice": 208.0,
    "total": 208.0,
    "gatherCount": 10.0,
    "gatheringFocus": 20,
    "icon": "https://cdn.questlog.gg/blue-protocol/assets/item_icons_iron_ore_02.webp"

  },
  {
    "id": "baru_rich_ore",
    "name": "Baru Rich Ore",
    "defaultPrice": 20,
    "total": 0.0,
    "gatherCount": 10.0,
    "gatheringFocus": 20,
    "icon": "https://cdn.questlog.gg/blue-protocol/assets/item_icons_iron_ore_03.webp"
  },
  {
    "id": "azte_ore",
    "name": "Azte Ore",
    "defaultPrice": 180.0,
    "total": 180.0,
    "gatherCount": 10.0,
    "gatheringFocus": 20,
    "icon": "https://cdn.questlog.gg/blue-protocol/assets/item_icons_copper_ore_01.webp"
  },
  {
    "id": "azte_rich_ore",
    "name": "Azte Rich Ore",
    "defaultPrice": 208.0,
    "total": 208.0,
    "gatherCount": 10.0,
    "gatheringFocus": 20,
    "icon": "https://cdn.questlog.gg/blue-protocol/assets/item_icons_copper_ore_02.webp"
  },
  {
    "id": "azte_rich_ore",
    "name": "Azte Rich Ore",
    "defaultPrice": 20,
    "total": 0.0,
    "gatherCount": 10.0,
    "gatheringFocus": 20,
    "icon": "https://cdn.questlog.gg/blue-protocol/assets/item_icons_copper_ore_03.webp"
  },
  {
    "id": "luna_ore",
    "name": "Luna Ore",
    "defaultPrice": 180.0,
    "total": 180.0,
    "gatherCount": 10.0,
    "gatheringFocus": 20,
    "icon": "https://cdn.questlog.gg/blue-protocol/assets/item_icons_silver_ore_01.webp"
  },
  {
    "id": "luna_rich_ore",
    "name": "Luna Rich Ore",
    "defaultPrice": 208.0,
    "total": 208.0,
    "gatherCount": 10.0,
    "gatheringFocus": 20,
    "icon": "https://cdn.questlog.gg/blue-protocol/assets/item_icons_silver_ore_02.webp"
  },
  {
    "id": "luna_rich_ore",
    "name": "Luna Rich Ore",
    "defaultPrice": 20,
    "total": 0.0,
    "gatherCount": 10.0,
    "gatheringFocus": 20,
    "icon": "https://cdn.questlog.gg/blue-protocol/assets/item_icons_silver_ore_03.webp"
  },
  {
    "id": "stokes_rich_ore",
    "name": "Stokes Rich Ore",
    "defaultPrice": 606.0,
    "total": 606.0,
    "gatherCount": 2.0,
    "gatheringFocus": 20,
    "icon": "https://cdn.questlog.gg/blue-protocol/assets/item_icons_gold_ore_02.webp"
  },
  {
    "id": "stokes_pure_ore",
    "name": "Stokes Pure Ore",
    "defaultPrice": 20,
    "total": 0.0,
    "gatherCount": 2.0,
    "gatheringFocus": 20,
    "icon": "https://cdn.questlog.gg/blue-protocol/assets/item_icons_gold_ore_03.webp"
  },
  {
    "id": "starlight_ruby1",
    "name": "Starlight Ruby Lv.1",
    "defaultPrice": 144.0,
    "total": 144.0,
    "gatherCount": 9.0,
    "gatheringFocus": 20,
    "icon": "https://cdn.questlog.gg/blue-protocol/assets/item_icons_red_roughstone_01.webp"
  },
  {
    "id": "starlight_ruby2",
    "name": "Starlight Ruby Lv.2",
    "defaultPrice": 218.0,
    "total": 218.0,
    "gatherCount": 7.0,
    "gatheringFocus": 20,
    "icon": "https://cdn.questlog.gg/blue-protocol/assets/item_icons_red_roughstone_02.webp"
  },
  {
    "id": "starlight_ruby3",
    "name": "Starlight Ruby Lv.3",
    "defaultPrice": 20,
    "total": 0.0,
    "gatherCount": 5.0,
    "gatheringFocus": 20,
    "icon": "https://cdn.questlog.gg/blue-protocol/assets/item_icons_red_roughstone_03.webp"
  },
  {
    "id": "starlight_sapphire1",
    "name": "Starlight Sapphire Lv.1",
    "defaultPrice": 144.0,
    "total": 144.0,
    "gatherCount": 9.0,
    "gatheringFocus": 20,
    "icon": "https://cdn.questlog.gg/blue-protocol/assets/item_icons_blue_roughstone_01.webp"
  },
  {
    "id": "starlight_sapphire2",
    "name": "Starlight Sapphire Lv.2",
    "defaultPrice": 218.0,
    "total": 218.0,
    "gatherCount": 5.0,
    "gatheringFocus": 20,
    "icon": "https://cdn.questlog.gg/blue-protocol/assets/item_icons_blue_roughstone_02.webp"
  },
  {
    "id": "starlight_sapphire3",
    "name": "Starlight Sapphire Lv.3",
    "defaultPrice": 20,
    "total": 0.0,
    "gatherCount": 5.0,
    "gatheringFocus": 20,
    "icon": "https://cdn.questlog.gg/blue-protocol/assets/item_icons_blue_roughstone_03.webp"
  },
  {
    "id": "starlight_diamond1",
    "name": "Starlight Diamond Lv.1",
    "defaultPrice": 144.0,
    "total": 144.0,
    "gatherCount": 9.0,
    "gatheringFocus": 20,
    "icon": "https://cdn.questlog.gg/blue-protocol/assets/item_icons_yellow_roughstone_01.webp"
  },
  {
    "id": "starlight_diamond2",
    "name": "Starlight Diamond Lv.2",
    "defaultPrice": 306.0,
    "total": 306.0,
    "gatherCount": 7.0,
    "gatheringFocus": 20,
    "icon": "https://cdn.questlog.gg/blue-protocol/assets/item_icons_yellow_roughstone_02.webp"
  },
  {
    "id": "starlight_diamond3",
    "name": "Starlight Diamond Lv.3",
    "defaultPrice": 20,
    "total": 0.0,
    "gatherCount": 5.0,
    "gatheringFocus": 20,
    "icon": "https://cdn.questlog.gg/blue-protocol/assets/item_icons_yellow_roughstone_03.webp"
  },
  {
    "id": "starlight_emerald1",
    "name": "Starlight Emerald Lv.1",
    "defaultPrice": 144.0,
    "total": 144.0,
    "gatherCount": 9.0,
    "gatheringFocus": 20,
    "icon": "https://cdn.questlog.gg/blue-protocol/assets/item_icons_green_roughstone_01.webp"
  },
  {
    "id": "starlight_emerald2",
    "name": "Starlight Emerald Lv.2",
    "defaultPrice": 218.0,
    "total": 218.0,
    "gatherCount": 7.0,
    "gatheringFocus": 20,
    "icon": "https://cdn.questlog.gg/blue-protocol/assets/item_icons_green_roughstone_02.webp"
  },
  {
    "id": "starlight_emerald3",
    "name": "Starlight Emerald Lv.3",
    "defaultPrice": 20,
    "total": 0.0,
    "gatherCount": 5.0,
    "gatheringFocus": 20,
    "icon": "https://cdn.questlog.gg/blue-protocol/assets/item_icons_green_roughstone_03.webp"
  },
  {
    "id": "sweet_berry",
    "name": "Sweet Berry",
    "defaultPrice": 110.0,
    "total": 110.0,
    "gatherCount": 13.0,
    "gatheringFocus": 20,
    "icon": "https://cdn.questlog.gg/blue-protocol/assets/item_icons_berry.webp"
  },
  {
    "id": "umu_fruit",
    "name": "Umu Fruit",
    "defaultPrice": 88.0,
    "total": 88.0,
    "gatherCount": 11.0,
    "gatheringFocus": 20,
    "icon": "https://cdn.questlog.gg/blue-protocol/assets/item_icons_um_fruit_01.webp"
  },
  {
    "id": "azure_fruit",
    "name": "Azure Fruit",
    "defaultPrice": 20,
    "total": 0.0,
    "gatherCount": 9.0,
    "gatheringFocus": 20,
    "icon": "https://cdn.questlog.gg/blue-protocol/assets/item_icons_deepblue_fruit_01.webp"
  },
  {
    "id": "meadow_mushroom",
    "name": "Meadow Mushroom",
    "defaultPrice": 98.0,
    "total": 98.0,
    "gatherCount": 13.0,
    "gatheringFocus": 20,
    "icon": "https://cdn.questlog.gg/blue-protocol/assets/item_icons_mushroom.webp"
  },
  {
    "id": "glowshroom",
    "name": "Glowshroom",
    "defaultPrice": 99.0,
    "total": 99.0,
    "gatherCount": 11.0,
    "gatheringFocus": 20,
    "icon": "https://cdn.questlog.gg/blue-protocol/assets/item_icons_fluorescent_mushroom_01.webp"
  },
  {
    "id": "granny_pine",
    "name": "Granny Pine",
    "defaultPrice": 20,
    "total": 0.0,
    "gatherCount": 9.0,
    "gatheringFocus": 20,
    "icon": "https://cdn.questlog.gg/blue-protocol/assets/item_icons_matsutake.webp"
  },
  {
    "id": "snowflake_parsley",
    "name": "Snowflake Parsley",
    "defaultPrice": 79.0,
    "total": 79.0,
    "gatherCount": 13.0,
    "gatheringFocus": 20,
    "icon": "https://cdn.questlog.gg/blue-protocol/assets/item_icons_snowflower.webp"
  },
  {
    "id": "pink_musk",
    "name": "Pink Musk",
    "defaultPrice": 99.0,
    "total": 99.0,
    "gatherCount": 11.0,
    "gatheringFocus": 20,
    "icon": "https://cdn.questlog.gg/blue-protocol/assets/item_icons_pinkflower.webp"
  },
  {
    "id": "whispering_orchid",
    "name": "Whispering Orchid",
    "defaultPrice": 20,
    "total": 0.0,
    "gatherCount": 9.0,
    "gatheringFocus": 20,
    "icon": "https://cdn.questlog.gg/blue-protocol/assets/item_icons_purpleflower_02.webp"
  },
  {
    "id": "emerald_apple",
    "name": "Emerald Apple",
    "defaultPrice": 3472.0,
    "total": 3472.0,
    "gatherCount": 1.0,
    "gatheringFocus": 20,
    "icon": "https://cdn.questlog.gg/blue-protocol/assets/item_icons_lifematerial_kiwifruit01.webp"
  },
  {
    "id": "tokiwa_grass",
    "name": "Tokiwa Grass",
    "defaultPrice": 3472.0,
    "total": 3472.0,
    "gatherCount": 1.0,
    "gatheringFocus": 20,
    "icon": "https://cdn.questlog.gg/blue-protocol/assets/item_icons_lifematerial_evergreengrass01.webp"
  },
  {
    "id": "burning_powder",
    "name": "Burning Powder",
    "defaultPrice": 138.0,
    "total": 138.0,
    "gatherCount": 1.0,
    "gatheringFocus": 20,
    "icon": "https://cdn.questlog.gg/blue-protocol/assets/item_icons_lifematerial_carbon_powder_01.webp"
  },
  {
    "id": "fast_burning_powder",
    "name": "Fast-Burning Powder",
    "defaultPrice": 473.0,
    "total": 138.0,
    "gatherCount": 1.0,
    "gatheringFocus": 20,
    "icon": "https://cdn.questlog.gg/blue-protocol/assets/item_icons_lifematerial_carbon_powder_02.webp"
  },
  {
    "id": "gem_wax",
    "name": "Gem Wax",
    "defaultPrice": 138.0,
    "total": 138.0,
    "gatherCount": 1.0,
    "gatheringFocus": 20,
    "icon": "https://cdn.questlog.gg/blue-protocol/assets/item_icons_lifematerial_gem_wax_01.webp"
  },  
  {
    "id": "natural_pig_purple",
    "name": "Natural Pigment - Purple",
    "defaultPrice": 0.0,
    "total": 0.0,
    "gatherCount": 0,
    "gatheringFocus": 0,
    "icon": "https://cdn.questlog.gg/blue-protocol/assets/item_icons_lifematerial_natural_pigment07.webp"
  },
{
    "id": "natural_pig_red",
    "name": "Natural Pigment - Red",
    "defaultPrice": 0.0,
    "total": 0.0,
    "gatherCount": 0,
    "gatheringFocus": 0,
    "icon": "https://cdn.questlog.gg/blue-protocol/assets/item_icons_lifematerial_natural_pigment01.webp"
  },
  {
    "id": "natural_pig_orange",
    "name": "Natural Pigment - Orange",
    "defaultPrice": 0.0,
    "total": 0.0,
    "gatherCount": 0,
    "gatheringFocus": 0,
    "icon": "https://cdn.questlog.gg/blue-protocol/assets/item_icons_lifematerial_natural_pigment02.webp"
  },
  {
    "id": "natural_pig_yellow",
    "name": "Natural Pigment - Yellow",
    "defaultPrice": 0.0,
    "total": 0.0,
    "gatherCount": 0,
    "gatheringFocus": 0,
    "icon": "https://cdn.questlog.gg/blue-protocol/assets/item_icons_lifematerial_natural_pigment03.webp"
  },
  {
    "id": "natural_pig_green",
    "name": "Natural Pigment - Green",
    "defaultPrice": 0.0,
    "total": 0.0,
    "gatherCount": 0,
    "gatheringFocus": 0,
    "icon": "https://cdn.questlog.gg/blue-protocol/assets/item_icons_lifematerial_natural_pigment04.webp"
  },
  {
    "id": "natural_pig_cyan",
    "name": "Natural Pigment - Cyan",
    "defaultPrice": 0.0,
    "total": 0.0,
    "gatherCount": 0,
    "gatheringFocus": 0,
    "icon": "https://cdn.questlog.gg/blue-protocol/assets/item_icons_lifematerial_natural_pigment05.webp"
  },
  {
    "id": "natural_pig_blue",
    "name": "Natural Pigment - Blue",
    "defaultPrice": 0.0,
    "total": 0.0,
    "gatherCount": 0,
    "gatheringFocus": 0,
    "icon": "https://cdn.questlog.gg/blue-protocol/assets/item_icons_lifematerial_natural_pigment06.webp"
  }
];

// Add derived fields dynamically
export const INGREDIENTS: Ingredient[] = BASE_INGREDIENTS.map((i) => ({
  ...i,
  valuePerFocus: (i.defaultPrice * i.gatherCount) / i.gatheringFocus,
}));

// Fast lookup table
export const INGREDIENT_MAP: Record<string, Ingredient> = Object.fromEntries(
  INGREDIENTS.map((i) => [i.id, i])
);