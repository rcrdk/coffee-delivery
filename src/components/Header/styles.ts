import styled from 'styled-components'

export const HeaderContainer = styled.header`
	position: relative;
	z-index: 2;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 2rem 0;

	> div {
		display: flex;
		gap: 0.75rem;
	}
`

export const HeaderBrand = styled.header`
	flex: 0 0 5.3rem;

	a {
		display: block;
	}

	img {
		width: 100%;
	}
`

const HeaderButton = styled.button`
	display: flex;
	align-items: center;
	gap: 0.25rem;
	padding: 0.5rem;
	border-radius: 0.5rem;
	font-size: var(--text-sm);
	cursor: pointer;

	&:disabled {
		cursor: not-allowed;
	}
`

export const HeaderLocale = styled(HeaderButton)`
	color: ${(props) => props.theme['purple-dark']};
	background: ${(props) => props.theme['purple-light']};

	svg {
		fill: ${(props) => props.theme.purple};
	}
`

export const HeaderCart = styled(HeaderButton)`
	position: relative;
	color: ${(props) => props.theme['yellow-dark']};
	background: ${(props) => props.theme['yellow-light']};

	span {
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		inset: auto auto 100% 100%;
		color: ${(props) => props.theme.white};
		background: ${(props) => props.theme['yellow-dark']};
		border-radius: 50%;
		width: 1.25rem;
		height: 1.25rem;
		line-height: 1;
		font-size: var(--text-xs);
		font-weight: bold;
		transform: translate(-58%, 58%);
	}
`
