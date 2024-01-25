import styled from 'styled-components'
import { defaultTheme } from '../../styles/theme/default'

export const SuccessContainer = styled.main`
	display: grid;
	grid-template-columns: 1fr 44%;
	gap: 2.5rem 6.25rem;
	padding: 5rem 0 6rem;

	@media (max-width: 1199px) {
		gap: 2.5rem;
	}

	@media (max-width: 991px) {
		grid-template-columns: 1fr;
		padding-top: 2rem;
	}

	@media (max-width: 575px) {
		padding-top: 1rem;
	}
`

export const SuccessTitle = styled.div`
	@media (min-width: 992px) {
		grid-column: 1 / span 2;
	}

	h1 {
		color: ${(props) => props.theme['yellow-dark']};
	}

	p {
		color: ${(props) => props.theme['base-subtitle']};
		margin-top: 0.5rem;
		text-wrap: balance;

		@media (min-width: 768px) {
			font-size: var(--text-lg);
		}
	}
`

export const SuccessCard = styled.div`
	position: relative;
	z-index: 1;

	&:before {
		content: '';
		position: absolute;
		inset: -1px;
		z-index: -1;
		display: block;
		border-radius: 0.375rem 3.5rem 0.375rem 3.5rem;
		background: linear-gradient(
			-45deg,
			${(props) => props.theme.purple},
			${(props) => props.theme.yellow}
		);

		@media (max-width: 575px) {
			border-radius: 0.375rem 2.5rem 0.375rem 2.5rem;
		}
	}
`

export const SuccessCardInner = styled.div`
	position: relative;
	z-index: 1;
	padding: 2.5rem;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	justify-content: center;

	@media (max-width: 575px) {
		padding: 1.75rem;
		gap: 1.5rem;
	}

	&:after {
		content: '';
		position: absolute;
		inset: 0px;
		z-index: -1;
		display: block;
		border-radius: 0.375rem 3.5rem 0.375rem 3.5rem;
		background: ${(props) => props.theme.white};

		@media (max-width: 575px) {
			border-radius: 0.375rem 2.5rem 0.375rem 2.5rem;
		}
	}

	&:nth-child(1) {
		&:after {
			bottom: 1px;
			border-bottom-right-radius: 0;
			border-bottom-left-radius: 0;
		}
	}

	&:nth-child(2) {
		&:after {
			border-top-right-radius: 0;
			border-top-left-radius: 0;
		}
	}
`

interface SuccessItemProps {
	variant: keyof typeof defaultTheme
}

export const SuccessItem = styled.div<SuccessItemProps>`
	display: flex;
	align-items: center;
	gap: 0.75rem;
	text-wrap: balance;

	div {
		flex: 0 0 2rem;
		height: 2rem;
		width: 2rem;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		color: ${(props) => props.theme.white};
		background: ${(props) => props.theme[props.variant]};
	}
`
