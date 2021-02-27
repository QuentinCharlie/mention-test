import React from "react";
import { Avatar, Badge } from "@material-ui/core";
import StyledBadge from "./StyledBadge";

const AvatarWithBadge = ({ avatar }) => {
  return (
    <Badge
      overlap="circle"
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      badgeContent={
        <StyledBadge alt="badge-image" src="https://reactjs.org/logo-og.png" />
      }
    >
      <Avatar alt="avatar-image" src={avatar} />
    </Badge>
  );
};

export default AvatarWithBadge;
