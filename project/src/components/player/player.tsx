import { useEffect, useRef } from 'react';

type CardPlayerProps = {
  previewImage: string;
  previewVideoLink: string | undefined;
  play: boolean;
};

export default function Player({ previewImage, previewVideoLink, play }: CardPlayerProps): JSX.Element {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    if(!videoElement)
    {
      return;
    }

    if (play) {
      const timeout = setTimeout(() => {
        videoElement.play();
      }, 1000);
      return () => clearTimeout(timeout);
    } else {
      videoElement.load();
    }
  }, [play]);

  return (
    <video ref={videoRef} className="small-film-card__image" muted loop poster={previewImage}>
      <source src={previewVideoLink} />
    </video>
  );
}
