import React from "react";
import { Avatar } from "@material-ui/core";
import './VideoCard.css';

const VideoCard = ({
  link,
  image,
  title,
  channel,
  views,
  timestamp,
  channelImage,
}) => {
  return (
    <div className="videoCard">
      <img className="videoCard__thumbnail" src={image} alt={channel} />
      <div className="videoCard__info">
        <Avatar
          className="videoCard__avatar"
          alt={channel}
          src={channelImage}
        />
        <div className="videoCard__text">
          <h3><a href={link} target="_blank">{title}</a></h3>
          <p className="videoCard__p1">{channel}</p>
          <p className="videoCard__p2">{views} - {timestamp}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
