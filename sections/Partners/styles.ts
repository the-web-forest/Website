import { CarouselProvider } from 'pure-react-carousel';
import styled from 'styled-components';

//@ts-ignore
export const StyledCarouselProvider = styled(CarouselProvider)`
  > div > div > div {
    gap: 25px;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5em 0;
  background-color: #ececec;
`;

export const DescriptionSection = styled.div`
  width: 100%;
  padding: 0.5em 11.5em;
  margin-bottom: 2rem;

  span {
    color: var(--dark-gray);
    font-family: 'Aprova';
    font-style: normal;
    font-weight: 300;
    font-size: 1rem;
    width: 100%;
    text-align: flex-start;
  }

  @media screen and (max-width: 400px) {
    padding: 25px;
  }

  @media screen and (max-width: 500px) {
    padding: 25px;
  }

  @media screen and (max-width: 700px) {
    padding: 25px;
  }

  @media screen and (max-width: 1000px) {
    padding: 25px;
  }
`;

export const CardPartner = styled.div`
  border-radius: 4px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  width: 260px;
  height: 180px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('https://drive.google.com/uc?export=view&id=1XoFPx7Ioay7tCiosBSQEMrm1PVPNJSsZ');
  background-position: center center;
  background-size: cover;
  cursor: pointer;
  background-repeat: no-repeat;

  @media screen and (max-width: 400px) {
    padding: 25px;
  }

  @media screen and (max-width: 500px) {
    width: 180px;
    height: 120px;
  }

  @media screen and (max-width: 700px) {
    width: 200px;
    height: 150px;
  }

  @media screen and (max-width: 1200px) {
    width: 250px;
    height: 150px;
  }

  @media screen and (max-width: 1500px) {
    width: 250px;
    height: 110px;
  }
`;
