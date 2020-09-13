import React from "react";
import BaseFacility from "./BaseFacility";
import FacilityType from "./operators/facility-type";

interface PowerPlantProps {
  level: 1 | 2 | 3;
}

export default function PowerPlant(props: PowerPlantProps): React.ReactElement {
  const { level } = props;
  return <BaseFacility type={FacilityType.POWER_PLANT} level={level} />;
}
