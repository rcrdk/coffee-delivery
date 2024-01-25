import { useContext } from 'react'
import { CartContext } from '../../../../contexts/CartContext'

import { CartAmountItem, CartAmountsContainer } from './styles'

import { formatMoney } from '../../../../utils/formatMoney'

export function CartAmounts() {
	const {
		cartAmountOfProducts,
		cartShippingTax,
		cartAmountOfProductsWithShipping,
	} = useContext(CartContext)

	return (
		<CartAmountsContainer>
			<CartAmountItem>
				<small>Total de itens:</small>
				<span>{formatMoney(cartAmountOfProducts, 'prefixed')}</span>
			</CartAmountItem>

			<CartAmountItem>
				<small>Entrega:</small>
				<span>{formatMoney(cartShippingTax, 'prefixed')}</span>
			</CartAmountItem>

			<CartAmountItem>
				<small>Total:</small>
				<span>{formatMoney(cartAmountOfProductsWithShipping, 'prefixed')}</span>
			</CartAmountItem>
		</CartAmountsContainer>
	)
}
