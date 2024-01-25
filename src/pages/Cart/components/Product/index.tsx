import { CartItem } from '../../../../dtos/cart'

import { Minus, Plus, Trash } from 'phosphor-react'

import {
	CartProductContainer,
	CartProductQuantity,
	CartProductQuantityControl,
	CartProductRemove,
} from './styles'

import { formatMoney } from '../../../../utils/formatMoney'

import { useContext } from 'react'
import { CartContext } from '../../../../contexts/CartContext'

interface CartProductProps {
	item: CartItem
}

export function CartProduct({ item }: CartProductProps) {
	const { removeProduct, increaseProductQuantity, decreaseProductQuantity } =
		useContext(CartContext)

	const subtotalPrice = Number(item.product.price * item.quantity)

	const handleRemoveProduct = () => {
		removeProduct(item)
	}

	const handleIncreaseProductQuantity = () => {
		increaseProductQuantity(item)
	}

	const handleDecreaseProductQuantity = () => {
		decreaseProductQuantity(item)
	}

	const disableDecrease = item.quantity < 2
	const disableIncrease = item.quantity >= 10

	return (
		<CartProductContainer>
			<img src={item.product.image} alt="" />
			<strong>{item.product.name}</strong>
			<b>{formatMoney(subtotalPrice, 'prefixed')}</b>

			<div>
				<CartProductQuantity>
					<CartProductQuantityControl
						type="button"
						onClick={handleDecreaseProductQuantity}
						disabled={disableDecrease}
					>
						<Minus size={14} weight="bold" />
					</CartProductQuantityControl>

					<span>{item.quantity}</span>

					<CartProductQuantityControl
						type="button"
						onClick={handleIncreaseProductQuantity}
						disabled={disableIncrease}
					>
						<Plus size={14} weight="bold" />
					</CartProductQuantityControl>
				</CartProductQuantity>

				<CartProductRemove type="button" onClick={handleRemoveProduct}>
					<Trash size={16} />
					Remover
				</CartProductRemove>
			</div>
		</CartProductContainer>
	)
}
