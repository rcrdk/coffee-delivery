import styled from 'styled-components'

export const CartProductContainer = styled.div`
	padding-bottom: 1.5rem;
	margin-bottom: 1.5rem;
	border-bottom: 1px solid ${(props) => props.theme['base-button']};
	display: grid;
	gap: 0.5rem 1.25rem;
	grid-template-columns: 4rem 1fr auto;
	grid-template-rows: auto 1fr;
	grid-template-areas: 'image title amount' 'image actions actions';

	> img {
		grid-area: image;
		width: 4rem;
		height: 4rem;
		object-fit: contain;
		object-position: center;
	}

	> strong {
		grid-area: title;
		display: block;
		color: ${(props) => props.theme['base-subtitle']};
		font-weight: 400;
	}

	> b {
		grid-area: amount;
		display: block;
		white-space: nowrap;
		font-size: var(--text-md);
		font-weight: bold;
	}

	> div {
		grid-area: actions;
		display: flex;
		gap: 0.75rem;
	}
`

export const CartProductControls = styled.div`
	display: flex;
	align-items: center;
	position: relative;
	width: 4.5rem;
	height: 2rem;
	padding: 0 0.5rem;
	border-radius: 0.375rem;
	color: ${(props) => props.theme['base-title']};
	background: ${(props) => props.theme['base-button']};
	text-align: center;

	> button {
		display: block;
		background: none;
		color: ${(props) => props.theme.purple};
		cursor: pointer;
		transition: color 200ms ease;

		&:disabled {
			cursor: not-allowed;
		}

		&:not(:disabled):hover {
			color: ${(props) => props.theme['purple-dark']};
		}
	}

	> span {
		flex-grow: 1;
	}
`

export const CartProductRemove = styled.button`
	display: flex;
	align-items: center;
	gap: 0.25rem;
	height: 2rem;
	padding: 0 0.5rem;
	border-radius: 0.375rem;
	color: ${(props) => props.theme['base-title']};
	background: ${(props) => props.theme['base-button']};
	font-size: var(--text-xs);
	text-transform: uppercase;
	cursor: pointer;

	svg {
		color: ${(props) => props.theme.purple};
	}
`
