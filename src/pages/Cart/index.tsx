import { CurrencyDollar, MapPinLine } from 'phosphor-react'

import {
	CardCardHeader,
	CartCard,
	CartConfirmButton,
	CartContainer,
	CartEmpty,
	CartResumeCard,
} from './styles'

import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

import { CartProduct } from './components/Product'
import { CartAmounts } from './components/Amounts'
import { CartAddress } from './components/Address'
import { CartPayment } from './components/Payment'

export function Cart() {
	const { cartItems, cartQuantity } = useContext(CartContext)

	const disableSubmit = cartQuantity === 0
	const hasNotProducts = cartQuantity === 0

	return (
		<CartContainer onSubmit={() => console.log('DO SOMETHING!')}>
			<div>
				<h1 className="h5">Complete seu pedido</h1>

				<CartCard>
					<CardCardHeader variant="yellow">
						<MapPinLine size={22} />
						<strong>Endereço de Entrega</strong>
						<p>Informe o endereço onde deseja receber seu pedido</p>
					</CardCardHeader>

					<CartAddress />
				</CartCard>

				<CartCard>
					<CardCardHeader variant="purple">
						<CurrencyDollar size={22} />
						<strong>Pagamento</strong>
						<p>
							O pagamento é feito na entrega. Escolha a forma que deseja pagar
						</p>
					</CardCardHeader>

					<CartPayment />
				</CartCard>
			</div>

			<div>
				<h2 className="h5">Cafés selecionados</h2>

				<CartResumeCard>
					{cartItems.map((item) => (
						<CartProduct item={item} key={item.id} />
					))}

					{hasNotProducts && <CartEmpty>Nenhum café adicionado.</CartEmpty>}

					<CartAmounts />

					<CartConfirmButton type="submit" disabled={disableSubmit}>
						Confirmar pedido
					</CartConfirmButton>
				</CartResumeCard>
			</div>
		</CartContainer>
	)
}
