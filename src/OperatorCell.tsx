import {
  bindPopover,
  bindTrigger,
  usePopupState,
} from "material-ui-popup-state/hooks";
import React from "react";
import OperatorButton from "./OperatorButton";
import OperatorEliteSelectPopover from "./OperatorEliteSelectPopover";
import { Operator } from "./operators/operator";

interface OperatorCellProps {
  operator: Operator;
}

export default function OperatorCell(
  props: OperatorCellProps
): React.ReactElement {
  const { operator } = props;
  const popoverState = usePopupState({
    variant: "popover",
    popupId: "eliteStatusPopover",
  });

  return (
    <>
      <OperatorButton
        operator={operator}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...bindTrigger(popoverState)}
      />
      <OperatorEliteSelectPopover
        operator={operator}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...bindPopover(popoverState)}
      />
    </>
  );
}
