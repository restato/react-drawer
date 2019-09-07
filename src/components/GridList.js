import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { withWidth } from "@material-ui/core";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";

const styles = theme => ({
  root: {
    width: "100%",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)"
  },
  titleBar: {
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
      "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
  },
  icon: {
    color: "white"
  }
});

function ResponsiveGridList(props) {
  const { classes, width = "xs", images = [] } = props;
  const breakpoints = ["xs", "sm", "md", "lg", "xl"];
  const cols = { xs: 2, sm: 2, md: 3, lg: 4, xl: 4 };
  const cellHeight = { xs: 140, sm: 140, md: 200, lg: 240, xl: 240 };

  return (
    <GridList
      className={classes.gridList}
      cols={cols[width]}
      cellHeight={cellHeight[width]}
      spacing={breakpoints.indexOf(width) > 2 ? 16 : 8}
    >
      {images.map(tile => (
        <GridListTile
          key={tile.img}
          cols={tile.featured ? 2 : 1}
          rows={cols === 2 ? (tile.featured ? 2 : 1) : 1}
        >
          <img src={tile.img} alt={tile.title} />
          <GridListTileBar
            title={tile.title}
            titlePosition="top"
            actionIcon={
              <IconButton className={classes.icon}>
                <StarBorderIcon />
              </IconButton>
            }
            actionPosition="left"
            className={classes.titleBar}
          />
        </GridListTile>
      ))}
    </GridList>
  );
}

ResponsiveGridList.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]).isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      images: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      featured: PropTypes.bool
    })
  )
};

export default withStyles(styles, { withTheme: true })(
  withWidth()(ResponsiveGridList)
);
