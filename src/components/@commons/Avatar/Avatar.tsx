const Avatar = ({
  src,
  author,
  size = '50px',
}: {
  src: string;
  size: string;
  author: string;
}) => {
  return (
    <>
      <img
        src={src}
        width={size}
        height={size}
        alt={author}
        style={{ borderRadius: '50px' }}
      />
    </>
  );
};

export default Avatar;
