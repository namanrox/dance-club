import React from "react";
import { Grid, Link } from "@material-ui/core";
import {
  LinkedIn,
  Twitter,
  Instagram,
  YouTube,
  Facebook,
} from "@material-ui/icons";

const renderIcons = (icons) => {
  return icons.map((icon, index) => {
    return (
      <Link
        key={index}
        style={{ marignLeft: 10, marginRight: 10 }}
        href={icon.url}
        rel="noopener"
        target="_blank"
      >
        {icon.icon}
      </Link>
    );
  });
};

const icons = renderIcons([
  { url: "https://www.linkedin.com/", icon: <LinkedIn /> },
  { url: "https://twitter.com/", icon: <Twitter /> },
  {
    url: "https://www.facebook.com",
    icon: <Facebook />,
  },
  { url: "https://www.instagram.com/", icon: <Instagram /> },
  {
    url: "https://www.youtube.com/",
    icon: <YouTube />,
  },
]);

const Footer = () => {
  return (
    <Grid container style={{ marginTop: 20 }}>
      <Grid item xs={1} />
      <Grid item container justifyContent="center" xs={10}>
        {icons}
      </Grid>
      <Grid item xs={1} />
    </Grid>
  );
};

export default Footer;
