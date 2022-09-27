import React from "react";
import { Grid, Typography, Button, Link, Box } from "@material-ui/core";

const Photos = () => {
  return (
    <div id="Photos">
      <Grid container>
        <Grid item xs={1} />
        <Grid item container xs={10}>
          <Grid item sm={1} xl={2} />
          <Grid item container justifyContent="center" sm={10} xl={8}>
            <Typography style={{ marginBottom: 10 }} variant="h1">
              <Box fontWeight="fontWeightBold">Photos Published</Box>
            </Typography>
            <Typography variant="body1">
              By competing and taking home awards at the state and national
              levels, our Club is becoming more well-known. Several newspapers
              have published the images of our club members.
            </Typography>
            <Button
              style={{ marginTop: 10 }}
              variant="contained"
              color="primary"
            >
              <Link color="inherit" href="/" rel="noopener" target="_self">
                Visit for Photos Published
              </Link>
            </Button>
          </Grid>
          <Grid item sm={1} xl={2} />
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </div>
  );
};

export default Photos;
