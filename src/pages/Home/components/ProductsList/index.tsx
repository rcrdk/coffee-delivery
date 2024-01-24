import { productsList } from '../../../../mocks/products'
import { HomeProduct } from '../Product'
import { ListContainer } from './styles'

export function HomeProductsList() {
	return (
		<ListContainer>
			<h2>Nossos cafés</h2>

			<div>
				{productsList.map((item) => (
					<HomeProduct product={item} key={item.id} />
				))}
			</div>
		</ListContainer>
	)
}
