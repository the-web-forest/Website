import { CarouselProvider } from 'pure-react-carousel';
import styled from 'styled-components';

//@ts-ignore
export const StyledCarouselProvider = styled(CarouselProvider)`
  > div > div > div {
    gap: 25px;
  }
`;
