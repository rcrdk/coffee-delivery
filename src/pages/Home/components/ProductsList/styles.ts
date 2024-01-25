import styled from 'styled-components'

export const ListContainer = styled.section`
	position: relative;
	z-index: 2;
	padding: 2rem 0 6rem;

	@media (max-width: 767px) {
		padding-top: 0;
	}

	> div {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 2rem;
		padding-top: 1.5rem;

		@media (max-width: 1199px) {
			grid-template-columns: repeat(3, 1fr);
		}

		@media (max-width: 767px) {
			gap: 1.5rem;
			grid-template-columns: repeat(2, 1fr);
		}

		@media (max-width: 499px) {
			gap: 1rem;
			grid-template-columns: repeat(1, 1fr);
		}
	}
`
