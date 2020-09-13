import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import React from "react";
import OperatorCell from "./OperatorCell";
import OPERATORS from "./operators/operators";

function OperatorGrid(): React.ReactElement {
  return (
    <>
      <Typography component="h2" variant="h5">
        Owned Operators
      </Typography>
      <Grid container>
        {OPERATORS.map((operator) => (
          <OperatorCell key={operator.name} operator={operator} />
        ))}
      </Grid>
    </>
  );
}
export default OperatorGrid;
