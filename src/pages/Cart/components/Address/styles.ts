import styled from 'styled-components'

export const CartAddressContainer = styled.div`
	display: grid;
	grid-template-columns: 35% 1fr 3.75rem;
	gap: 1rem 0.75rem;

	@media (max-width: 767px) {
		grid-template-columns: 3.75rem 1fr 1fr 3.75rem;
	}

	> div {
		&:nth-child(2) {
			grid-column: 1 / span 3;
		}

		&:nth-child(4) {
			grid-column: span 2;
		}

		@media (max-width: 767px) {
			&:nth-child(1),
			&:nth-child(2),
			&:nth-child(5) {
				grid-column: 1 / span 4;
			}

			&:nth-child(3) {
				grid-column: 1 / span 2;
			}

			&:nth-child(4) {
				grid-column: span 2;
			}

			&:nth-child(6) {
				grid-column: 1 / span 3;
			}
		}
	}

	hr {
		border: 3px solid currentColor;
	}
`
