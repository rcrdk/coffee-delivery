import {
	HeaderBrand,
	HeaderCart,
	HeaderContainer,
	HeaderLocale,
} from './styles'

import { NavLink, useNavigate } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'

import brandImage from '../../assets/brand.svg'
import { CartContext } from '../../contexts/CartContext'

export function Header() {
	const navigate = useNavigate()
	const { cartQuantity } = useContext(CartContext)

	const handleNavigateToCart = () => {
		navigate('/cart')
	}

	const disableCartLink = cartQuantity === 0

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
					Porto Alegre, RS
				</HeaderLocale>

				<HeaderCart
					type="button"
					disabled={disableCartLink}
					title={
						disableCartLink ? 'Nenhum café no carrinho' : 'Carrinho de compras'
					}
					onClick={handleNavigateToCart}
				>
					<ShoppingCart weight="fill" size={22} />
					{cartQuantity > 0 && <span>{cartQuantity}</span>}
				</HeaderCart>
			</div>
		</HeaderContainer>
	)
}
