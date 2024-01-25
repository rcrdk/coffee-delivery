import { CartItem } from '../../../../dtos/cart'
import { SuccessProductContainer } from './styles'

interface SuccessProductProps {
	data: CartItem
}

export function SuccessProduct({ data }: SuccessProductProps) {
	return (
		<SuccessProductContainer>
			<img src={data.product.image} alt="" />
			<div>
				<strong>{data.product.name}</strong>
				{data.quantity === 1 ? (
					<span>{data.quantity} unidade</span>
				) : (
					<span>{data.quantity} unidades</span>
				)}
			</div>
		</SuccessProductContainer>
	)
}
