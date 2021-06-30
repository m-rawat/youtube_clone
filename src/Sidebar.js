import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import { Avatar } from "@material-ui/core";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarRow selected Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={WhatshotIcon} title="Trending" />
      <SidebarRow Icon={SubscriptionsIcon} title="Subscription" />
      <hr />
      <SidebarRow Icon={VideoLibraryIcon} title="Library" />
      <SidebarRow Icon={HistoryIcon} title="History" />
      <SidebarRow Icon={OndemandVideoIcon} title="Your Videos" />
      <SidebarRow Icon={WatchLaterIcon} title="Watch Later" />
      <SidebarRow Icon={ThumbUpIcon} title="Liked Videos" />
      <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Show More" />
      <hr />
      <h3 className="sidebar__head">Subscriptions</h3>
        <div className="sidebar__sub">
          <Avatar
          className="sidebar__avatar"
            src="https://yt3.ggpht.com/ytc/AAUvwniWFbtX2drltDWOBZGP1KhLVTqDypqg4oQPK7Pc=s68-c-k-c0x00ffffff-no-rj"
            alt="avatar"
          />
          <h3 className="sidebar__title">Apna College</h3>
        </div>
        <div className="sidebar__sub">
          <Avatar
          className="sidebar__avatar"
            src="https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s68-c-k-c0x00ffffff-no-rj"
            alt="avatar"
          />
          <h3 className="sidebar__title">Clever Programmer</h3>
        </div>
        <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Show 50 More" />
        <hr />
      </div>
  );
};

export default Sidebar;
