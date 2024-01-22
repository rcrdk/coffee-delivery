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
	const { cartItems } = useContext(CartContext)

	const navigate = useNavigate()

	const handleNavigateToCart = () => {
		navigate('/cart')
	}

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

				<HeaderCart type="button" onClick={handleNavigateToCart}>
					<ShoppingCart weight="fill" size={22} />
					{cartItems.length > 0 && <span>{cartItems.length}</span>}
				</HeaderCart>
			</div>
		</HeaderContainer>
	)
}
