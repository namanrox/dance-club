import AwesomeSlider from "react-awesome-slider";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "react-awesome-slider/dist/styles.css";
import dance1 from "./images/dance1.jpg";
import dance2 from "./images/dance2.jpg";
import dance3 from "./images/dance3.jpg";
import dance4 from "./images/dance4.jpg";
import dance5 from "./images/dance5.jpg";

const useStyles = makeStyles((theme) => ({
  gallery: {
    height: "80%",
    marginTop: "3%",
  },
}));

const ImageGallery = () => {
  const classes = useStyles();
  return (
    <Grid item container>
      <Grid item xs={1} />
      <Grid item xs={10}>
        <AwesomeSlider
          className={classes.gallery}
          media={[
            {
              source: dance1,
            },
            {
              source: dance2,
            },
            {
              source: dance3,
            },
            {
              source: dance4,
            },
            {
              source: dance5,
            },
          ]}
        />
      </Grid>
      <Grid item xs={1} />
    </Grid>
  );
};

export default ImageGallery;
