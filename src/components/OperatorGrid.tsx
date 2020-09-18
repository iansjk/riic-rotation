import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import React from "react";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
import { EliteLevel, Operator } from "../scheduler/operator";
import OperatorCell from "./OperatorCell";

interface OperatorGridProps {
  operators: Operator[];
  ownedOperators: Record<string, EliteLevel>;
  onEliteSelect: (operatorName: string, eliteLevel?: EliteLevel) => void;
  onAddAll: () => void;
  onReset: () => void;
}

function OperatorGrid(props: OperatorGridProps): React.ReactElement {
  const { operators, ownedOperators, onEliteSelect, onAddAll, onReset } = props;

  return (
    <>
      <Box display="flex" mt={3} mb={2}>
        <Typography component="h2" variant="h5">
          Owned Operators
        </Typography>
        {
          // TODO buttons need to split onto another line at sm breakpoint
        }
        <Box ml={4} mr={2}>
          <Button
            color="primary"
            variant="contained"
            startIcon={<GroupAddIcon />}
            onClick={onAddAll}
          >
            Add All
          </Button>
        </Box>
        <Button
          variant="outlined"
          startIcon={<RotateLeftIcon />}
          onClick={onReset}
        >
          Reset
        </Button>
      </Box>
      <Grid container>
        {operators.map((operator) => (
          <OperatorCell
            key={operator.name}
            operator={operator}
            eliteLevel={ownedOperators[operator.name]}
            onEliteSelect={onEliteSelect}
          />
        ))}
      </Grid>
    </>
  );
}
export default OperatorGrid;
