import React from "react";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SettingsIcon from "@material-ui/icons/Settings";
import ShareIcon from "@material-ui/icons/Share";

export default function(props) {
  return (
    <div {...props}>
      <IconButton color="inherit">
        <ShareIcon />
      </IconButton>
      <IconButton color="inherit">
        <SettingsIcon />
      </IconButton>
      <IconButton color="inherit">
        <MoreVertIcon />
      </IconButton>
    </div>
  );
}
