import styled from 'styled-components'
import { defaultTheme } from '../../styles/theme/default'

export const CartContainer = styled.form`
	display: grid;
	grid-template-columns: 1fr 41%;
	gap: 2rem;
	padding: 2.5rem 0 6rem;

	@media (max-width: 991px) {
		grid-template-columns: 1fr;
		padding-top: 0;
	}

	h5 {
		margin-bottom: 1rem;
	}
`

interface CartCardProps {
	radius: 'normal' | 'fancy'
}

export const CartCard = styled.div<CartCardProps>`
	display: block;
	margin-top: 0.75rem;
	padding: 2.5rem;
	background: ${(props) => props.theme['base-card']};
	border-radius: ${(props) =>
		props.radius === 'fancy'
			? '0.375rem 3.5rem  0.375rem 3.5rem '
			: '0.375rem'};

	@media (max-width: 575px) {
		padding: 1.75rem;
	}
`

interface CartCardHeaderProps {
	variant: keyof typeof defaultTheme
}

export const CardCardHeader = styled.div<CartCardHeaderProps>`
	display: grid;
	grid-template-columns: auto 1fr;
	grid-template-areas: 'icon title' '. text';
	align-items: center;
	gap: 0.15rem 0.5rem;
	margin-bottom: 2rem;

	svg {
		grid-area: icon;
		color: ${(props) => props.theme[props.variant]};
	}

	strong {
		grid-area: title;
		color: ${(props) => props.theme['base-subtitle']};
		font-size: var(--text-md);
		font-weight: 400;
	}

	p {
		grid-area: text;
		color: ${(props) => props.theme['base-text']};
		font-size: var(--text-sm);
		text-wrap: pretty;
	}
`

export const CartAddress = styled.div`
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

export const CartPayment = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 0.75rem;

	@media (max-width: 575px) {
		grid-template-columns: 1fr;
	}

	label {
		position: relative;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 1rem 0.75rem 1rem 1rem;
		cursor: pointer;
		font-size: var(--text-xs);
		line-height: 1.3;
		text-transform: uppercase;
		text-wrap: balance;
		background: ${(props) => props.theme['base-button']};
		border: 1px solid ${(props) => props.theme['base-button']};
		border-radius: 0.375rem;
		transition:
			background 200ms ease,
			border 200ms ease;

		&:has(:checked) {
			background: ${(props) => props.theme['purple-light']} !important;
			border: 1px solid ${(props) => props.theme.purple};
		}

		&:hover {
			background: ${(props) => props.theme['base-hover']};
		}

		input {
			position: absolute;
			inset: 0;
			opacity: 0;
			cursor: pointer;
		}

		svg {
			color: ${(props) => props.theme.purple};
			flex-shrink: 0;
		}
	}
`

export const CartConfirmButton = styled.button`
	height: 2.875rem;
	width: 100%;
	border-radius: 0.375rem;
	background: ${(props) => props.theme.yellow};
	color: ${(props) => props.theme.white};
	text-transform: uppercase;
	font-weight: bold;
	cursor: pointer;
	transition: background 200ms ease;

	&:disabled {
		cursor: not-allowed;
		background: ${(props) => props.theme['base-hover']};
		color: ${(props) => props.theme['base-label']};
	}

	&:not(:disabled):hover {
		background: ${(props) => props.theme['yellow-dark']};
	}
`
