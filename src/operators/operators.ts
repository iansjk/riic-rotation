import FacilityType from "./facility-type";
import { Operator } from "./operator";

export const FREE_OPERATOR_NAMES = [
  "Amiya",
  "Yato",
  "Durin",
  "12F",
  "Rangers",
  "Noir Corne",
  "Hibiscus",
  "Adnachiel",
  "Jessica",
  "Fang",
  "Plume",
  "Lava",
  "Beagle",
  "Ansel",
  "Melantha",
  "Kroos",
  "Orchid",
  "Lancet-2",
  "Shaw",
  "Cliffheart",
];
export const OPERATORS: Operator[] = [
  {
    name: "Gravel",
    rarity: 4,
    bonuses: [
      {
        facility: FacilityType.FACTORY,
        bonus: 35,
        eliteRequired: "Elite 1",
        goldOnly: true,
      },
    ],
  },
  {
    name: "Spot",
    rarity: 3,
    bonuses: [
      {
        facility: FacilityType.FACTORY,
        bonus: 30,
        eliteRequired: "Elite 1",
        goldOnly: true,
      },
    ],
  },
  {
    name: "Haze",
    rarity: 4,
    bonuses: [
      {
        facility: FacilityType.FACTORY,
        bonus: 30,
        goldOnly: true,
      },
      {
        facility: FacilityType.TRADING_POST,
        bonus: 30,
        eliteRequired: "Elite 1",
      },
    ],
  },
  {
    name: "FEater",
    rarity: 5,
    bonuses: [
      {
        facility: FacilityType.FACTORY,
        bonus: 30,
        expOnly: true,
      },
      {
        facility: FacilityType.FACTORY,
        bonus: 35,
        expOnly: true,
        eliteRequired: "Elite 2",
      },
    ],
  },
  {
    name: "Castle-3",
    rarity: 1,
    bonuses: [
      {
        facility: FacilityType.POWER_PLANT,
        bonus: 10,
      },
      {
        facility: FacilityType.FACTORY,
        bonus: 30,
        eliteRequired: "Elite 0 Lv. 30",
      },
    ],
  },
  {
    name: "Shirayuki",
    rarity: 4,
    bonuses: [
      {
        facility: FacilityType.FACTORY,
        bonus: 30,
        eliteRequired: "Elite 1",
        expOnly: true,
      },
      {
        facility: FacilityType.RECEPTION_ROOM,
        bonus: 20,
      },
    ],
  },
  {
    name: "Vigna",
    rarity: 4,
    bonuses: [
      {
        facility: FacilityType.FACTORY,
        bonus: 30,
        expOnly: true,
      },
    ],
  },
  {
    name: "Frostleaf",
    rarity: 4,
    bonuses: [
      {
        facility: FacilityType.FACTORY,
        bonus: 30,
        expOnly: true,
        eliteRequired: "Elite 1",
      },
    ],
  },
  {
    name: "Waai Fu",
    rarity: 5,
    bonuses: [
      {
        facility: FacilityType.FACTORY,
        bonus: 40,
        eliteRequired: "Elite 2",
      },
    ],
  },
  {
    name: "Mayer",
    rarity: 5,
    bonuses: [
      {
        facility: FacilityType.FACTORY,
        bonus: 30,
        eliteRequired: "Elite 2",
      },
    ],
  },
  {
    name: "Popukar",
    rarity: 3,
    bonuses: [
      {
        facility: FacilityType.FACTORY,
        bonus: 25,
        moraleDrainModifier: 0.25,
      },
    ],
  },
  {
    name: "Ceobe",
    rarity: 6,
    bonuses: [
      {
        facility: FacilityType.FACTORY,
        bonus: 0,
        limitIncrease: 8,
        moraleDrainModifier: -0.25,
      },
      {
        facility: FacilityType.FACTORY,
        bonus: 25,
        eliteRequired: "Elite 2",
      },
    ],
  },
  {
    name: "Fang",
    rarity: 3,
    bonuses: [
      {
        facility: FacilityType.FACTORY,
        bonus: 25,
      },
      {
        facility: FacilityType.TRADING_POST,
        bonus: 30,
        eliteRequired: "Elite 1",
      },
    ],
  },
  {
    name: "Kroos",
    rarity: 3,
    bonuses: [
      {
        facility: FacilityType.FACTORY,
        bonus: 25,
      },
    ],
  },
  {
    name: "Jessica",
    rarity: 4,
    bonuses: [
      {
        facility: FacilityType.FACTORY,
        bonus: 25,
      },
      {
        facility: FacilityType.RECEPTION_ROOM,
        bonus: 10,
        eliteRequired: "Elite 1",
      },
    ],
  },
  {
    name: "Perfumer",
    rarity: 4,
    bonuses: [
      {
        facility: FacilityType.FACTORY,
        bonus: 25,
        eliteRequired: "Elite 1",
      },
    ],
  },
  {
    name: "Vanilla",
    rarity: 3,
    bonuses: [
      {
        facility: FacilityType.FACTORY,
        bonus: 25,
      },
      {
        facility: FacilityType.TRADING_POST,
        bonus: 20,
        eliteRequired: "Elite 1",
      },
    ],
  },
  {
    name: "Steward",
    rarity: 3,
    bonuses: [
      {
        facility: FacilityType.FACTORY,
        bonus: 25,
        eliteRequired: "Elite 1",
      },
    ],
  },
  {
    name: "Ptilopsis",
    rarity: 5,
    bonuses: [
      {
        facility: FacilityType.FACTORY,
        bonus: 15,
      },
      {
        facility: FacilityType.FACTORY,
        bonus: 25,
        eliteRequired: "Elite 2",
      },
    ],
  },
  {
    name: "Silence",
    rarity: 5,
    bonuses: [
      {
        facility: FacilityType.FACTORY,
        bonus: 15,
      },
      {
        facility: FacilityType.FACTORY,
        bonus: 25,
        eliteRequired: "Elite 2",
      },
    ],
  },
  {
    name: "Vermeil",
    rarity: 4,
    bonuses: [
      {
        facility: FacilityType.FACTORY,
        bonus: 0,
        limitIncrease: 8,
        moraleDrainModifier: -0.25,
      },
      {
        facility: FacilityType.FACTORY,
        bonus: 0,
        eliteRequired: "Elite 1",
      },
    ],
  },
  {
    name: "Meteor",
    rarity: 4,
    bonuses: [
      {
        facility: FacilityType.FACTORY,
        bonus: 15,
      },
    ],
  },
  {
    name: "Yato",
    rarity: 2,
    bonuses: [
      {
        facility: FacilityType.TRADING_POST,
        bonus: 30,
      },
      {
        facility: FacilityType.FACTORY,
        bonus: 15,
        eliteRequired: "Elite 0 Lv. 30",
      },
    ],
  },
  {
    name: "Cardigan",
    rarity: 3,
    bonuses: [
      {
        facility: FacilityType.FACTORY,
        bonus: 10,
        limitIncrease: 6,
      },
    ],
  },
  {
    name: "Beagle",
    rarity: 3,
    bonuses: [
      {
        facility: FacilityType.FACTORY,
        bonus: 10,
        limitIncrease: 6,
      },
    ],
  },
  {
    name: "Cuora",
    rarity: 4,
    bonuses: [
      {
        facility: FacilityType.FACTORY,
        bonus: 10,
        limitIncrease: 10,
      },
      {
        facility: FacilityType.TRADING_POST,
        bonus: 20,
        eliteRequired: "Elite 1",
      },
    ],
  },
  {
    name: "Noir Corne",
    rarity: 2,
    bonuses: [
      {
        facility: FacilityType.FACTORY,
        bonus: 10,
        limitIncrease: 10,
      },
      {
        facility: FacilityType.TRADING_POST,
        bonus: 10,
        limitIncrease: 1,
        eliteRequired: "Elite 0 Lv. 30",
      },
    ],
  },
  {
    name: "Snowsant",
    rarity: 5,
    bonuses: [
      {
        facility: FacilityType.TRADING_POST,
        bonus: 25,
      },
      {
        facility: FacilityType.TRADING_POST,
        bonus: 35,
        eliteRequired: "Elite 2",
      },
    ],
  },
  {
    name: "Bison",
    rarity: 5,
    bonuses: [
      {
        facility: FacilityType.TRADING_POST,
        bonus: 20,
      },
      {
        facility: FacilityType.TRADING_POST,
        bonus: 30,
        limitIncrease: 1,
        eliteRequired: "Elite 2",
      },
    ],
  },
  {
    name: "Ambriel",
    rarity: 4,
    bonuses: [
      {
        facility: FacilityType.TRADING_POST,
        bonus: 30,
        eliteRequired: "Elite 1",
      },
    ],
  },
  {
    name: "Courier",
    rarity: 4,
    bonuses: [
      {
        facility: FacilityType.TRADING_POST,
        bonus: 15,
        limitIncrease: 1,
      },
      {
        facility: FacilityType.RECEPTION_ROOM,
        bonus: 10,
        eliteRequired: "Elite 1",
      },
    ],
  },
  {
    name: "Matoimaru",
    rarity: 4,
    bonuses: [
      {
        facility: FacilityType.TRADING_POST,
        bonus: 30,
        eliteRequired: "Elite 1",
      },
    ],
  },
  {
    name: "Mousse",
    rarity: 4,
    bonuses: [
      {
        facility: FacilityType.TRADING_POST,
        bonus: 30,
      },
    ],
  },
  {
    name: "Matterhorn",
    rarity: 4,
    bonuses: [
      {
        facility: FacilityType.TRADING_POST,
        bonus: 15,
        limitIncrease: 1,
      },
    ],
  },
  {
    name: "Gummy",
    rarity: 4,
    bonuses: [
      {
        facility: FacilityType.TRADING_POST,
        bonus: 30,
        moraleDrainModifier: -0.25,
      },
    ],
  },
  {
    name: "Midnight",
    rarity: 3,
    bonuses: [
      {
        facility: FacilityType.TRADING_POST,
        bonus: 30,
        moraleDrainModifier: -0.25,
      },
    ],
  },
  {
    name: "Catapult",
    rarity: 3,
    bonuses: [
      {
        facility: FacilityType.TRADING_POST,
        bonus: 30,
        moraleDrainModifier: -0.25,
      },
    ],
  },
  {
    name: "Gitano",
    rarity: 4,
    bonuses: [
      {
        facility: FacilityType.TRADING_POST,
        bonus: 25,
        limitIncrease: 1,
      },
      {
        facility: FacilityType.RECEPTION_ROOM,
        bonus: 25,
        eliteRequired: "Elite 1",
      },
    ],
  },
  {
    name: "Melantha",
    rarity: 3,
    bonuses: [
      {
        facility: FacilityType.TRADING_POST,
        bonus: 25,
        limitIncrease: 1,
      },
    ],
  },
  {
    name: "Plume",
    rarity: 3,
    bonuses: [
      {
        facility: FacilityType.TRADING_POST,
        bonus: 10,
        limitIncrease: 1,
      },
    ],
  },
  {
    name: "Adnachiel",
    rarity: 3,
    bonuses: [
      {
        facility: FacilityType.TRADING_POST,
        bonus: 20,
      },
    ],
  },
  {
    name: "Orchid",
    rarity: 3,
    bonuses: [
      {
        facility: FacilityType.OFFICE,
        bonus: 40,
      },
      {
        facility: FacilityType.TRADING_POST,
        bonus: 25,
        limitIncrease: 1,
        eliteRequired: "Elite 1",
      },
    ],
  },
  {
    name: "Deepcolor",
    rarity: 4,
    bonuses: [
      {
        facility: FacilityType.TRADING_POST,
        bonus: 20,
      },
    ],
  },
  {
    name: "Sora",
    rarity: 5,
    bonuses: [
      {
        facility: FacilityType.TRADING_POST,
        bonus: 30,
        eliteRequired: "Elite 2",
      },
    ],
  },
  {
    name: "Exusiai",
    rarity: 6,
    bonuses: [
      {
        facility: FacilityType.TRADING_POST,
        bonus: 20,
      },
      {
        facility: FacilityType.TRADING_POST,
        bonus: 35,
        eliteRequired: "Elite 2",
      },
    ],
  },
  {
    name: "SilverAsh",
    rarity: 6,
    bonuses: [
      {
        facility: FacilityType.TRADING_POST,
        bonus: 15,
        limitIncrease: 1,
      },
      {
        facility: FacilityType.TRADING_POST,
        bonus: 20,
        limitIncrease: 3,
        eliteRequired: "Elite 2",
      },
    ],
  },
  {
    name: "Cliffheart",
    rarity: 5,
    bonuses: [
      {
        facility: FacilityType.TRADING_POST,
        bonus: 15,
        limitIncrease: 2,
      },
    ],
  },
  {
    name: "Texas",
    rarity: 5,
    bonuses: [
      {
        facility: FacilityType.TRADING_POST,
        bonus: 65,
      },
    ],
  },
  {
    name: "Croissant",
    rarity: 5,
    bonuses: [
      {
        facility: FacilityType.TRADING_POST,
        bonus: 20,
      },
      {
        facility: FacilityType.TRADING_POST,
        bonus: 30,
        limitIncrease: 1,
        eliteRequired: "Elite 2",
      },
    ],
  },
  {
    name: "Lancet-2",
    rarity: 1,
    bonuses: [
      {
        facility: FacilityType.POWER_PLANT,
        bonus: 10,
      },
    ],
  },
  {
    name: "Blaze",
    rarity: 6,
    bonuses: [
      {
        facility: FacilityType.POWER_PLANT,
        bonus: 10,
      },
    ],
  },
  {
    name: "Greyy",
    rarity: 4,
    bonuses: [
      {
        facility: FacilityType.POWER_PLANT,
        bonus: 20,
      },
    ],
  },
  {
    name: "Glaucus",
    rarity: 5,
    bonuses: [
      {
        facility: FacilityType.POWER_PLANT,
        bonus: 10,
      },
      {
        facility: FacilityType.POWER_PLANT,
        bonus: 15,
        eliteRequired: "Elite 2",
      },
    ],
  },
  {
    name: "Lava",
    rarity: 3,
    bonuses: [
      {
        facility: FacilityType.POWER_PLANT,
        bonus: 10,
      },
    ],
  },
  {
    name: "Shaw",
    rarity: 4,
    bonuses: [
      {
        facility: FacilityType.POWER_PLANT,
        bonus: 15,
        eliteRequired: "Elite 1",
      },
    ],
  },
  {
    name: "Ifrit",
    rarity: 6,
    bonuses: [
      {
        facility: FacilityType.POWER_PLANT,
        bonus: 10,
      },
      {
        facility: FacilityType.POWER_PLANT,
        bonus: 15,
        eliteRequired: "Elite 2",
      },
    ],
  },
  {
    name: "Liskarm",
    rarity: 5,
    bonuses: [
      {
        facility: FacilityType.POWER_PLANT,
        bonus: 15,
      },
      {
        facility: FacilityType.POWER_PLANT,
        bonus: 20,
        eliteRequired: "Elite 2",
      },
    ],
  },
];
export default OPERATORS;
