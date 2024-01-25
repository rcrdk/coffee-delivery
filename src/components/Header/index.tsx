import {
	HeaderBrand,
	HeaderButtonIcon,
	HeaderContainer,
	HeaderLocale,
} from './styles'

import brandImage from '../../assets/brand.svg'

import { NavLink, useNavigate } from 'react-router-dom'
import { House, MapPin, ShoppingCart } from 'phosphor-react'

import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Header() {
	const navigate = useNavigate()
	const { cartQuantity } = useContext(CartContext)

	const handleNavigateToCart = () => {
		navigate('/cart')
	}

	const handleNavigateToHome = () => {
		navigate('/')
	}

	const titleCartLink = cartQuantity === 0

	return (
		<HeaderContainer>
			<HeaderBrand>
				<NavLink to="/">
					<img src={brandImage} alt="" />
				</NavLink>
			</HeaderBrand>

			<div>
				<HeaderLocale type="button">
					<MapPin weight="fill" size={22} />
					<span>Porto Alegre, RS</span>
				</HeaderLocale>

				<HeaderButtonIcon type="button" onClick={handleNavigateToHome}>
					<House weight="fill" size={22} />
				</HeaderButtonIcon>

				<HeaderButtonIcon
					type="button"
					title={
						titleCartLink ? 'Nenhum café no carrinho' : 'Carrinho de compras'
					}
					onClick={handleNavigateToCart}
				>
					<ShoppingCart weight="fill" size={22} />
					{cartQuantity > 0 && <span>{cartQuantity}</span>}
				</HeaderButtonIcon>
			</div>
		</HeaderContainer>
	)
}
