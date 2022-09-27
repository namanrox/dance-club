import React from "react";
import { Grid, Typography, Divider, Box } from "@material-ui/core";

const About = () => {
  return (
    <div id="About">
      <Grid container>
        <Grid item xs={1} />
        <Grid item container justifyContent="center" xs={10}>
          <Typography style={{ marginBottom: 10 }} variant="h1">
            <Box fontWeight="fontWeightBold">About</Box>
          </Typography>
          <Grid item container justifyContent="center">
            <Grid item lg={1} xl={2} />
            <Grid item lg={10} xl={8}>
              <Typography variant="body1">
                One of the institute's active clubs is the Dance Club, which is
                managed by students with enthusiasm. Students can train to
                improve their dance talents at the Dance Club. The club members
                organize and also takes part in various cultural initiatives at
                the institutional level. Students are encouraged to compete in
                dance competitions at the Institute, State, and National levels
                through the Dance Club. This club also helps members renew their
                minds so they have more energy for other pursuits.
              </Typography>
            </Grid>
            <Grid item lg={1} xl={2} />
          </Grid>
          <Divider style={{ width: "100%", marginTop: 25, marginBottom: 10 }} />
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </div>
  );
};

export default About;
