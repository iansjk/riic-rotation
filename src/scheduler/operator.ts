import FacilityType from "./facility-type";

export type EliteLevel = "Elite 0" | "Elite 0 Lv. 30" | "Elite 1" | "Elite 2";

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

export function maxEliteLevel(operator: Operator): EliteLevel {
  if (operator.rarity >= 4) {
    return "Elite 2";
  }
  if (operator.rarity >= 3) {
    return "Elite 1";
  }
  return "Elite 0 Lv. 30";
}
