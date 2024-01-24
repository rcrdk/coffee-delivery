import styled from 'styled-components'

export const CartAmountsContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
	margin-bottom: 1.5rem;

	p {
		display: flex;
		justify-content: space-between;

		small {
			font-size: var(--text-sm);
		}

		span {
			font-variant-numeric: tabular-nums;
		}

		&:last-child {
			font-size: var(--text-lg);
			font-weight: bold;
			color: ${(props) => props.theme['base-subtitle']};

			small {
				font-size: 1em;
			}
		}
	}
`
