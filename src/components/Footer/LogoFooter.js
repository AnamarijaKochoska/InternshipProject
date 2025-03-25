import styled from 'styled-components';

const LogoFooter = styled.img`
  border-radius: 50%;
  object-fit: cover;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.4);
  }

  @media (max-width: 600px) {
    width: 50%;
    height: 100%;
  }

  @media (min-width: 768px) {
    width: 70%;
    height: 70%;
  }

  @media (min-width: 1024px) {
    width: 50%;
    height: 100%;
  }
`;


export { LogoFooter };