import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
  medium: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
  large: {
    width: theme.spacing(11),
    height: theme.spacing(11),
  },
}));

const UserAvatar = ({ src = "", size = "medium" }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {size === "large" && (
        <Avatar alt="avatar" src={src} className={classes.large} />
      )}
      {size === "medium" && (
        <Avatar alt="avatar" src={src} className={classes.medium} />
      )}
      {size === "small" && (
        <Avatar alt="avatar" src={src} className={classes.small} />
      )}
    </div>
  );
};

export default UserAvatar;
