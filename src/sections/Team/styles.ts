import { CarouselProvider } from 'pure-react-carousel';
import styled from 'styled-components';

export const StyledCarouselProvider = styled(CarouselProvider)<{ id: string }>`
	> div > div > div {
		gap: 25px;
	}
`;
