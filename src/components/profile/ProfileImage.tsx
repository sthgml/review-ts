import styled from 'styled-components';
import ImageDefault from '../../assets/icon/profile-Image-default.png';

type ProfileImageProps = {
  src: string;
}

const Container = styled.div`
  &.profile-image {
    width: 120px;
    aspect-ratio: 1/1;
    background-color: ${(props) => props.theme.colors.icon};
    border-radius: 100%;
    overflow: hidden;
  }

  img.profile-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default function ProfileImage({ src }: ProfileImageProps) {
  const handleImageError = (e) => {
    e.target.src = ImageDefault;
  };

  return (
    <Container className="profile-image">
      <img className="profile-image" src={src} alt="user profile" onError={handleImageError} />
    </Container>
  );
}
