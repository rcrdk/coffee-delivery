import { Product } from '../../../../dtos/product'

import {
	ProductContainer,
	ProductPrice,
	ProductTags,
	ProductAddButton,
	ProductQuantity,
	ProductQuantityControl,
	ProductQuantityContainer,
} from './styles'

import { CheckCircle, Minus, Plus, ShoppingCart, Spinner } from 'phosphor-react'
import { formatMoney } from '../../../../utils/formatMoney'

import { useContext, useState } from 'react'
import { CartContext } from '../../../../contexts/CartContext'

export type ButtonStateType = 'initial' | 'loading' | 'success'

interface HomeProductProps {
	product: Product
}

export function HomeProduct({ product }: HomeProductProps) {
	const { addNewProduct } = useContext(CartContext)

	const [buttonState, setButtonState] = useState<ButtonStateType>('initial')
	const [quantity, setQuantity] = useState(1)

	const handleAddQuantity = () => setQuantity((prev) => prev + 1)
	const handleRemoveQuantity = () => setQuantity((prev) => prev - 1)

	const handleAddToCart = () => {
		addNewProduct(product, quantity)
		setButtonState('loading')

		setTimeout(() => {
			setButtonState('success')
			setQuantity(1)
		}, 1500)

		setTimeout(() => {
			setButtonState('initial')
		}, 3500)
	}

	const disableAddToCart = buttonState !== 'initial'
	const disableRemove = quantity < 2 || disableAddToCart
	const disableAdd = quantity >= 10 || disableAddToCart

	return (
		<ProductContainer>
			<img src={product.image} alt="" />

			<ProductTags>
				{product.tags.map((tag) => (
					<li key={tag}>{tag}</li>
				))}
			</ProductTags>

			<h3 className="h4">{product.name}</h3>
			<p>{product.description}</p>

			<div>
				<ProductPrice>
					<small className="h4">R$</small>
					<strong className="h3">{formatMoney(product.price)}</strong>
				</ProductPrice>

				<ProductQuantityContainer>
					<ProductQuantity>
						<ProductQuantityControl
							type="button"
							onClick={handleRemoveQuantity}
							disabled={disableRemove}
						>
							<Minus size={14} weight="bold" />
						</ProductQuantityControl>

						<span>{quantity}</span>

						<ProductQuantityControl
							type="button"
							onClick={handleAddQuantity}
							disabled={disableAdd}
						>
							<Plus size={14} weight="bold" />
						</ProductQuantityControl>
					</ProductQuantity>

					<ProductAddButton
						type="button"
						variant={buttonState}
						disabled={disableAddToCart}
						onClick={handleAddToCart}
					>
						{buttonState === 'initial' && (
							<ShoppingCart size={22} weight="fill" />
						)}
						{buttonState === 'loading' && <Spinner size={22} weight="bold" />}
						{buttonState === 'success' && (
							<CheckCircle size={22} weight="bold" />
						)}
					</ProductAddButton>
				</ProductQuantityContainer>
			</div>
		</ProductContainer>
	)
}
