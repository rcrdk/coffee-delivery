import styled from 'styled-components'
import { ButtonStateType } from '.'

export const ProductContainer = styled.div`
	display: block;
	text-align: center;
	margin-top: 1.5rem;
	background: ${(props) => props.theme['base-card']};
	border-radius: 0.375rem 3.5rem 0.375rem 3.5rem;
	padding: 0 1.25rem 1.25rem;

	img {
		transform: translateY(-1.5rem);
		max-width: 58%;
		margin: auto;
	}

	h3 {
		margin: 1rem 0 0.5rem;
		color: ${(props) => props.theme['base-subtitle']};
	}

	p {
		color: ${(props) => props.theme['base-label']};
		font-size: var(--text-sm);
		margin-bottom: 2rem;
	}

	> div {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 0 0 0.25rem;

		@media (max-width: 991px) {
			flex-direction: column;
			padding: 0 0.25rem;
			gap: 1rem;
		}
	}
`

export const ProductTags = styled.ul`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	white-space: nowrap;
	gap: 0.25rem;
	list-style: none;
	margin-top: -0.75rem;

	li {
		padding: 0.25rem 0.5rem;
		font-size: 0.675rem;
		font-weight: bold;
		text-transform: uppercase;
		color: ${(props) => props.theme['yellow-dark']};
		background: ${(props) => props.theme['yellow-light']};
		border-radius: 1rem;
	}
`

export const ProductPrice = styled.span`
	display: block;
	min-width: 0;
	white-space: nowrap;
	flex-grow: 1;
	text-align: left;

	small {
		font-size: var(--text-small);
		font-weight: 400;
	}

	strong {
		font-family: 'Baloo 2', 'Roboto', system-ui, sans-serif;
		font-weight: 700;
		margin-left: 4px;
	}
`

export const ProductQuantityContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	gap: 0.5rem;
	flex: 0 0 7.375rem;
	user-select: none;

	@media (max-width: 991px) {
		flex: 0 0 2rem;
	}
`

export const ProductQuantity = styled.div`
	display: flex;
	align-items: center;
	position: relative;
	width: 4.5rem;
	padding: 0 0.5rem;
	border-radius: 0.375rem;
	color: ${(props) => props.theme['base-title']};
	background: ${(props) => props.theme['base-button']};

	> span {
		flex-grow: 1;
	}
`

export const ProductQuantityControl = styled.button`
	display: block;
	background: none;
	color: ${(props) => props.theme.purple};
	cursor: pointer;
	border-radius: 0.375rem;
	transition: color 200ms ease;

	&:disabled {
		cursor: not-allowed;
	}

	&:not(:disabled):hover {
		color: ${(props) => props.theme['purple-dark']};
	}

	&:focus-visible {
		box-shadow: 0 0 0 0.1rem ${(props) => props.theme.purple};
	}
`

interface ProductAddButton {
	variant: ButtonStateType
}

function ProductAddButtonBackground(state: ButtonStateType) {
	switch (state) {
		case 'initial':
			return 'purple'
			break
		case 'loading':
			return 'yellow'
			break
		case 'success':
			return 'green'
			break
		default:
			return 'purple'
			break
	}
}

export const ProductAddButton = styled.button<ProductAddButton>`
	display: block;
	padding: 0.5rem;
	border-radius: 0.375rem;
	background: ${(props) =>
		props.theme[ProductAddButtonBackground(props.variant)]};
	color: ${(props) => props.theme.white};
	cursor: default;
	transition: background 200ms ease;

	&:not(:disabled):hover {
		cursor: pointer;
		background: ${(props) => props.theme['purple-dark']};
	}

	&:focus-visible {
		box-shadow:
			0 0 0 1px ${(props) => props.theme.white},
			0 0 0 0.2rem ${(props) => props.theme.purple};
	}

	svg {
		animation: ${(props) =>
			props.variant === 'loading' ? 'spinner 1s linear 0s infinite' : 'none'};
	}

	@keyframes spinner {
		to {
			transform: rotate(360deg);
		}
	}
`
