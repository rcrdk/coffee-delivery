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

export const CartCard = styled.div`
	display: block;
	margin-top: 0.75rem;
	padding: 2.5rem;
	background: ${(props) => props.theme['base-card']};
	border-radius: 0.375rem;

	@media (max-width: 575px) {
		padding: 1.75rem;
	}
`

export const CartResumeCard = styled(CartCard)`
	border-radius: 0.375rem 3.5rem 0.375rem 3.5rem;
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

	&:focus-visible {
		box-shadow:
			0 0 0 2px ${(props) => props.theme.white},
			0 0 0 0.25rem ${(props) => props.theme.yellow};
	}

	&:not(:disabled):hover {
		background: ${(props) => props.theme['yellow-dark']};
	}
`

export const CartEmpty = styled.div`
	padding: 1.5rem;
	text-wrap: balance;
	border-radius: 0.375rem;
	margin-bottom: 2.25rem;
	font-size: var(--text-sm);
	color: ${(props) => props.theme['base-label']};
	background: ${(props) => props.theme['base-button']};

	@media (max-width: 575px) {
		margin-bottom: 1.5rem;
	}
`
