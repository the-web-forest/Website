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
`;

export const CardPartner = styled.a`
  border-radius: 4px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  width: 260px;
  height: 178px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;
