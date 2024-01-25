import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
	:root {
		--text-lg: 1.25rem;
		--text-md: 1rem;
		--text-sm: 0.875rem;
		--text-xs: 0.75rem;
	}

	* {
		margin: 0;
		padding: 0;
		-webkit-font-antialiased: smooth;
		outline: none;
		box-sizing: border-box;
	}

	/* :focus-visible {
		box-shadow: 0 0 0 0.25rem rgb(0 0 0 / 20%);
	} */

	html,
	body {
		color: ${(props) => props.theme['base-text']};
	}

	body,
	button,
	input {
		font-family: 'Roboto', system-ui, sans-serif;
		line-height: 1.3;
	}

	a {
		text-decoration: none;
	}

	button {
		border: none;
	}

	a,
	button {
		&:focus-visible {
			box-shadow: 0 0 0 1px ${(props) => props.theme.white}, 0 0 0 0.2rem rgb(0 0 0 / 16%);
		}
	}

	svg {
		display: block;
	}

	img {
		display: block;
		max-width: 100%;
	}

	h1, h2, h3, h4, h5, h6 {
		font-family: 'Baloo 2', 'Roboto', system-ui, sans-serif;
		color: ${(props) => props.theme['base-title']};
		font-weight: 800;
		line-height: 1.3;
	}

	h1, .h1 {
		font-size: 3rem;
	}

	h2, .h2 {
		font-size: 2rem;
	}

	h3, .h3 {
		font-size: 1.5rem;
	}

	h4, .h4 {
		font-size: 1.25rem;
		font-weight: 700;
	}

	h5, .h5 {
		font-size: 1.125rem;
		font-weight: 700;
	}

	strong, b {
		font-weight: bold;
	}

	input {
		padding: 0.75rem;
		width: 100%;
		font-size: var(--text-sm);
		line-height: 1.3;
		color: ${(props) => props.theme['base-text']};
		background: ${(props) => props.theme['base-input']};
		border: 1px solid ${(props) => props.theme['base-button']};
		border-radius: 0.25rem;
		transition: border 200ms ease;

		&:focus {
			border-color: ${(props) => props.theme.yellow};
		}

		&::placeholder {
			color: ${(props) => props.theme['base-label']};
		}
	}

	.container {
		max-width: 74rem;
		padding-left: 2rem;
		padding-right: 2rem;
		margin-left: auto;
		margin-right: auto;
	}
`
