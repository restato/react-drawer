import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";
import ImageGridList from "./GridList";
import images from "../images";

const styles = theme => ({
  textBlock: {
    maxWidth: 700,
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3
  }
});

function PageContent(props) {
  const { classes } = props;
  return (
    <div>
      <Typography variant="display1">Main Content</Typography>
      <Typography componenet="p" className={classes.textBlock}>
        In mollit duis pariatur duis deserunt quis esse ex in ipsum deserunt
        excepteur laborum adipisicing. Commodo ullamco nostrud eu consectetur
        elit reprehenderit ullamco dolore ut.
      </Typography>
      <ImageGridList images={images} />
    </div>
  );
}

export default withStyles(styles, { withTheme: true })(PageContent);