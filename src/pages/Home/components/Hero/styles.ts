import styled from 'styled-components'
import heroBg from '../../../../assets/hero-bg.jpg'

export const HeroContainer = styled.section`
	position: relative;
	z-index: 1;
	padding: 4.25rem 0 6.25rem;
	display: grid;
	grid-template-columns: 1fr 3.5rem 41%;
	grid-template-rows: 1fr auto auto 1fr;
	grid-template-areas: '. . image' 'text . image' 'list . image' '. . image';

	@media (max-width: 1199px) {
		grid-template-columns: 1fr 3.5rem 1fr;
		grid-template-rows: auto auto;
		grid-template-areas: 'text . image' 'list list list';
		align-items: center;
	}

	@media (max-width: 767px) {
		padding-top: 2rem;
		grid-template-columns: 1fr;
		grid-template-areas: 'text' 'image' 'list';
	}

	&:before {
		content: '';
		display: block;
		position: absolute;
		inset: 50% auto auto 50%;
		z-index: -1;
		transform: translate3d(-50%, -50%, 0);
		width: 100vw;
		height: 160%;
		background: url(${heroBg}) center no-repeat;
		background-size: auto 100%;
	}
`

export const HeroImage = styled.div`
	grid-area: image;
	align-self: center;

	@media (max-width: 767px) {
		margin-top: 3.1rem;
	}
`

export const HeroText = styled.div`
	grid-area: text;
	text-wrap: pretty;

	p {
		margin-top: 1rem;
		font-size: var(--text-lg);
		color: ${(props) => props.theme['base-subtitle']};
	}
`

export const HeroList = styled.ul`
	grid-area: list;
	list-style: none;
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 1.25rem;
	margin-top: 3.1rem;
	text-wrap: pretty;

	@media (max-width: 1199px) and (min-width: 768px) {
		grid-template-columns: repeat(4, 1fr);
		margin-top: 6.25rem;
	}

	li {
		display: flex;
		gap: 1rem;
		align-items: center;
	}
`

interface HeroIconProps {
	variant: string
}

export const HeroIcon = styled.span<HeroIconProps>`
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 0 0 2rem;
	width: 2rem;
	height: 2rem;
	border-radius: 50%;
	color: ${(props) => props.theme.white};
	background: ${(props) => props.theme[props.variant]};
`
