import { ButtonStyled, Container, Text } from './HomePage.styled';
import image from '../images/pexels-fauxels-3184325.jpg';

export const HomePage = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        backgroundImage: `url(${image})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <Container>
        <Text>Welcome to our TweetsBase</Text>
        <ButtonStyled to="/tweets">To tweets</ButtonStyled>
      </Container>
    </div>
  );
};
