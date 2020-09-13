import React from "react";
import BaseFacility from "./BaseFacility";
import FacilityType from "./operators/facility-type";

interface FactoryProps {
  level: 1 | 2 | 3;
}

export default function Factory(props: FactoryProps): React.ReactElement {
  const { level } = props;
  return <BaseFacility type={FacilityType.FACTORY} level={level} />;
}
