import { useSelector, useDispatch } from 'react-redux';
import { numberFormatted } from '../services/numberNormalize';
import { FollowUsers } from 'Redux/followTweets/selectors';
import { changeFollowStatus } from 'Redux/followTweets/slice';
import {
  CardContainer,
  ImageQuestTick,
  ImageLogo,
  CenteredLine,
  AvatarContainer,
  InfoTweets,
  InfoFollowers,
  CardButton,
  AvatarImage,
} from './Card.styled';
import questTickImage from '../../images/Quest_tick.png';
import logo from '../../images/Logo.png';
import { changeFollowersNumber } from 'Redux/followTweets/slice';
import { changeDBFollowersNumber } from 'components/services/services';

export const Card = ({ tweetsNumber, followersNumber, avatar, id }) => {
  const FollowingUsers = useSelector(FollowUsers);
  const dispatch = useDispatch();

  const buttonHandling = id => {
    const currentFollowersNumber = FollowingUsers.includes(id)
      ? followersNumber - 1
      : followersNumber + 1;

    changeDBFollowersNumber(id, currentFollowersNumber);
    dispatch(changeFollowersNumber({ id, currentFollowersNumber }));
    dispatch(changeFollowStatus(id));
  };
  const color = () => (FollowingUsers.includes(id) ? '#5cd3a8' : '#ebd8ff');

  return (
    <CardContainer>
      <ImageQuestTick src={questTickImage} alt="question and tick signs" />
      <ImageLogo src={logo} alt="logo" />
      <CenteredLine />
      <AvatarContainer>
        <AvatarImage src={avatar} alt="avatar" />
      </AvatarContainer>
      <InfoTweets> {numberFormatted(tweetsNumber)} tweets</InfoTweets>
      <InfoFollowers>
        {numberFormatted(followersNumber)} followers
      </InfoFollowers>
      <CardButton onClick={() => buttonHandling(id)} bgColor={color}>
        {FollowingUsers.includes(id) ? 'Following' : 'Follow'}
      </CardButton>
    </CardContainer>
  );
};
