import Spinner, { Container } from './Spinner.style';

const LoadingSpinner = ({
  size = '50px',
  speed = '1s',
  loadingMessage,
}: {
  size: string;
  speed?: string;
  loadingMessage?: string;
}) => {
  return (
    <Container>
      <Spinner size={size} speed={speed} />
      <span>{loadingMessage}</span>
    </Container>
  );
};

export default LoadingSpinner;
