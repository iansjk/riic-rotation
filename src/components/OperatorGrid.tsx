import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { EliteLevel, Operator } from "../operators/operator";
import OperatorCell from "./OperatorCell";

interface OperatorGridProps {
  operators: Operator[];
  ownedOperators: Map<string, EliteLevel>;
  onEliteSelect: (operatorName: string, eliteLevel?: EliteLevel) => void;
}

function OperatorGrid(props: OperatorGridProps): React.ReactElement {
  const { operators, ownedOperators, onEliteSelect } = props;

  return (
    <>
      <Box mt={3} mb={1}>
        <Typography component="h2" variant="h5">
          Owned Operators
        </Typography>
      </Box>
      <Grid container>
        {operators.map((operator) => (
          <OperatorCell
            key={operator.name}
            operator={operator}
            eliteLevel={ownedOperators.get(operator.name)}
            onEliteSelect={onEliteSelect}
          />
        ))}
      </Grid>
    </>
  );
}
export default OperatorGrid;
