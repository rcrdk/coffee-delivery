import {
	HeroContainer,
	HeroIcon,
	HeroImage,
	HeroList,
	HeroText,
} from './styles'

import heroImage from '../../../../assets/hero-coffee.png'
import { Clock, Coffee, Package, ShoppingCart } from 'phosphor-react'

export function HomeHero() {
	return (
		<HeroContainer>
			<HeroImage>
				<img src={heroImage} alt="" />
			</HeroImage>

			<HeroText>
				<h1>Encontre o café perfeito para qualquer hora do dia!</h1>
				<p>
					Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
					hora.
				</p>
			</HeroText>

			<HeroList>
				<li>
					<HeroIcon variant="yellow-dark">
						<ShoppingCart size={16} weight="fill" />
					</HeroIcon>
					<span>Compra simples e segura</span>
				</li>

				<li>
					<HeroIcon variant="base-text">
						<Package size={16} weight="fill" />
					</HeroIcon>
					<span>Embalagem mantém o café intacto</span>
				</li>

				<li>
					<HeroIcon variant="yellow">
						<Clock size={16} weight="fill" />
					</HeroIcon>
					<span>Entrega rápida e rastreada</span>
				</li>

				<li>
					<HeroIcon variant="purple">
						<Coffee size={16} weight="fill" />
					</HeroIcon>
					<span>O café chega fresquinho até você</span>
				</li>
			</HeroList>
		</HeroContainer>
	)
}
