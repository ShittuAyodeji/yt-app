import React from "react";

const VideoDetail = (props) => {
  if (!props.video) return <div>Loading...</div>;

  return (
    <div>
      <div className="ui embed">
        <iframe
          width="560"
          height="315"
          title="video player"
          src={`https://www.youtube.com/embed/${props.video.id.videoId}`}
          frameBorder="0"
        />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{props.video.snippet.title}</h4>
        <p>{props.video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
