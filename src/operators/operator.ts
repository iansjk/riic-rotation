import FacilityType from "./facility-type";

export type EliteLevel = "E0" | "E1" | "E2" | "E0MaxLevel";

export interface OperatorBonus {
  facility: FacilityType;
  bonus: number;
  limitIncrease?: number;
  eliteRequired?: EliteLevel;
  goldOnly?: boolean;
  expOnly?: boolean;
  moraleDrainModifier?: number;
}

export interface Operator {
  name: string;
  rarity: number;
  bonuses: OperatorBonus[];
}
