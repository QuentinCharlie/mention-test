import { Avatar, withStyles } from "@material-ui/core";

const SmallAvatar = withStyles(() => ({
  root: {
    width: 15,
    height: 15,
    border: `2px solid white`,
  },
}))(Avatar);

export default SmallAvatar;