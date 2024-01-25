import styled from 'styled-components'

export const CartPaymentContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 0.75rem;

	@media (max-width: 575px) {
		grid-template-columns: 1fr;
	}
`

export const CartPaymentItem = styled.label`
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
		border: 1px solid ${(props) => props.theme.purple} !important;
	}

	&:has(:focus-visible) {
		box-shadow:
			0 0 0 1px ${(props) => props.theme.white},
			0 0 0 0.2rem ${(props) => props.theme.purple};
	}

	&:hover {
		background: ${(props) => props.theme['base-hover']};
		border-color: ${(props) => props.theme['base-hover']};
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
`
