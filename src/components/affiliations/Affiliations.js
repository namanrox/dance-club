import React from "react";
import { Typography, Grid, Divider, Box } from "@material-ui/core";
import AffiliationCard from "./AffiliationCard";
import ndcaLogo from "./images/ndca.png";

const Affiliations = () => {
  return (
    <div id="Affiliations">
      <Grid container>
        <Grid item xs={1} />
        <Grid item container justifyContent="center" xs={10}>
          <Typography style={{ marginBottom: 10 }} variant="h1">
            <Box fontWeight="fontWeightBold">Affiliations</Box>
          </Typography>
          <Grid container justifyContent="center">
            <AffiliationCard image={ndcaLogo} />
            <AffiliationCard image={ndcaLogo} />
            <AffiliationCard image={ndcaLogo} />
            <Divider
              style={{ width: "100%", marginTop: 25, marginBottom: 10 }}
            />
          </Grid>
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </div>
  );
};

export default Affiliations;
