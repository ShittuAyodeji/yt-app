import React from "react";
import VideoItem from "./VideoItems";

const VideoList = (props) => {
  // console.log(props.videos);
  const renderedList = props.videos.map((video) => (
    <VideoItem
      key={video.id.videoId}
      onVideoSelect={props.onVideoSelect}
      video={video}
    />
  ));
  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
