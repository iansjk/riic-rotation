import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import React, { useState } from "react";
import { EliteLevel, Operator } from "../operators/operator";
import { OPERATORS, FREE_OPERATOR_NAMES } from "../operators/operators";
import OperatorCell from "./OperatorCell";

function OperatorGrid(): React.ReactElement {
  const [ownedOperators, setOwnedOperators] = useState(
    new Map(FREE_OPERATOR_NAMES.map((name) => [name, "Elite 0"])) as Map<
      string,
      EliteLevel
    >
  );

  function operatorSort(a: Operator, b: Operator) {
    const byOwned =
      (ownedOperators.has(a.name) ? -1 : 1) -
      (ownedOperators.has(b.name) ? -1 : 1);
    if (byOwned !== 0) {
      return byOwned;
    }
    const byRarityAsc = a.rarity - b.rarity;
    if (byRarityAsc !== 0) {
      return byRarityAsc;
    }
    return a.name.localeCompare(b.name);
  }

  function handleEliteSelect(
    operatorName: string,
    eliteLevel?: EliteLevel
  ): void {
    setOwnedOperators((prevMap: Map<string, EliteLevel>) => {
      if (!eliteLevel) {
        prevMap.delete(operatorName);
      } else {
        prevMap.set(operatorName, eliteLevel);
      }
      return new Map(prevMap);
    });
  }

  return (
    <>
      <Box mt={3} mb={1}>
        <Typography component="h2" variant="h5">
          Owned Operators
        </Typography>
      </Box>
      <Grid container>
        {OPERATORS.sort(operatorSort).map((operator) => (
          <OperatorCell
            key={operator.name}
            operator={operator}
            eliteLevel={ownedOperators.get(operator.name)}
            onEliteSelect={handleEliteSelect}
          />
        ))}
      </Grid>
    </>
  );
}
export default OperatorGrid;
