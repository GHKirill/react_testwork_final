import { RotatingLines } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <RotatingLines
      strokeColor="#4b2a99"
      strokeWidth="5"
      animationDuration="0.75"
      width="55"
      visible={true}
    />
  );
};
