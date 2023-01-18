import { SyntheticEvent } from 'react';
const Avatar = ({
  src,
  author,
  size = '50px',
}: {
  src: string;
  size: string;
  author: string;
}) => {
  const handleOnError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src = 'https://picsum.photos/id/2/50/50';
  };
  return (
    <img
      src={src}
      width={size}
      height={size}
      alt={author}
      style={{ borderRadius: '50px' }}
      onError={handleOnError}
    />
  );
};

export default Avatar;
