import { useState } from 'react'
import { Product } from '../../../../dtos/product'
import {
	ProductControls,
	ProductContainer,
	ProductPrice,
	ProductTags,
	ProductControlsCounter,
	ProductControlsAdd,
} from './styles'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'

interface HomeProductProps {
	product: Product
}

export function HomeProduct({ product }: HomeProductProps) {
	const [quantity, setQuantity] = useState(1)

	const handleAddQuantity = () => setQuantity((prev) => prev + 1)
	const handleRemoveQuantity = () => setQuantity((prev) => prev - 1)

	const disableRemove = quantity < 2
	const disableAdd = quantity >= 10

	return (
		<ProductContainer>
			{product.image}

			{product.tags.length > 0 && (
				<ProductTags>
					{product.tags.map((tag) => (
						<li key={tag}>{tag}</li>
					))}
				</ProductTags>
			)}

			<h3 className="h4">{product.name}</h3>
			<p>{product.description}</p>

			<div>
				<ProductPrice>
					<small className="h4">R$</small>
					<strong className="h3">
						{product.price.toLocaleString('pt-BR', {
							minimumFractionDigits: 2,
							maximumFractionDigits: 2,
						})}
					</strong>
				</ProductPrice>

				<ProductControls>
					<ProductControlsCounter>
						<button
							type="button"
							onClick={handleRemoveQuantity}
							disabled={disableRemove}
						>
							<Minus size={14} weight="bold" />
						</button>

						<span>{quantity}</span>

						<button
							type="button"
							onClick={handleAddQuantity}
							disabled={disableAdd}
						>
							<Plus size={14} weight="bold" />
						</button>
					</ProductControlsCounter>

					<ProductControlsAdd type="button">
						<ShoppingCart size={22} weight="fill" />
					</ProductControlsAdd>
				</ProductControls>
			</div>
		</ProductContainer>
	)
}
