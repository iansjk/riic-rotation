import {
  bindPopover,
  bindTrigger,
  usePopupState,
} from "material-ui-popup-state/hooks";
import React from "react";
import OperatorButton from "./OperatorButton";
import OperatorEliteSelectPopover from "./OperatorEliteSelectPopover";
import { EliteLevel, Operator } from "../scheduler/operator";

interface OperatorCellProps {
  operator: Operator;
  eliteLevel?: EliteLevel;
  onEliteSelect: (operatorName: string, eliteLevel?: EliteLevel) => void;
}

export default function OperatorCell(
  props: OperatorCellProps
): React.ReactElement {
  const { operator, eliteLevel, onEliteSelect } = props;
  const popoverState = usePopupState({
    variant: "popover",
    popupId: "eliteStatusPopover",
  });

  return (
    <>
      <OperatorButton
        operator={operator}
        eliteLevel={eliteLevel}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...bindTrigger(popoverState)}
      />
      <OperatorEliteSelectPopover
        operator={operator}
        onEliteSelect={onEliteSelect}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...bindPopover(popoverState)}
      />
    </>
  );
}
