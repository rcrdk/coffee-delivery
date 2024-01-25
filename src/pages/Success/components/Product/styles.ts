import styled from 'styled-components'

export const SuccessProductContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 1.25rem;

	img {
		flex: 0 0 3rem;
		width: 3rem;
	}

	strong {
		display: block;
		margin-bottom: 0.07rem;
		font-weight: 700;
		color: ${(props) => props.theme['base-subtitle']};
	}

	span {
		font-size: var(--text-sm);
		color: ${(props) => props.theme['base-label']};
	}
`
