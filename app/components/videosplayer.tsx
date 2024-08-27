import React from "react";

interface VideoPlayerProps {
  src: string;
  width: 600; // La largeur est optionnelle
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, width = 600 }) => {
  return (
    <div>
      <video controls width={width}>
        <source src={src} type="video/mp4" />
        Votre navigateur ne prend pas en charge la balise vidéo.
      </video>
    </div>
  );
};

export default VideoPlayer;
