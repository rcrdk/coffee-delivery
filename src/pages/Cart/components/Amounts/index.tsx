import { useContext } from 'react'
import { CartContext } from '../../../../contexts/CartContext'

import { CartAmountsContainer } from './styles'

import { formatMoney } from '../../../../utils/formatMoney'

export function CartAmounts() {
	const {
		cartAmountOfProducts,
		cartShippingTax,
		cartAmountOfProductsWithShipping,
	} = useContext(CartContext)

	return (
		<CartAmountsContainer>
			<p>
				<small>Total de itens:</small>
				<span>{formatMoney(cartAmountOfProducts, 'prefixed')}</span>
			</p>
			<p>
				<small>Entrega:</small>
				<span>{formatMoney(cartShippingTax, 'prefixed')}</span>
			</p>
			<p>
				<small>Total:</small>
				<span>{formatMoney(cartAmountOfProductsWithShipping, 'prefixed')}</span>
			</p>
		</CartAmountsContainer>
	)
}
