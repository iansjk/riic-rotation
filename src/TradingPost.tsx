import React from "react";
import BaseFacility from "./BaseFacility";
import FacilityType from "./operators/facility-type";

interface TradingPostProps {
  level: 1 | 2 | 3;
}

export default function TradingPost(
  props: TradingPostProps
): React.ReactElement {
  const { level } = props;
  return <BaseFacility type={FacilityType.TRADING_POST} level={level} />;
}
