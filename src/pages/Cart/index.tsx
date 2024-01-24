import {
	Bank,
	CreditCard,
	CurrencyDollar,
	MapPinLine,
	Money,
} from 'phosphor-react'

import {
	CardCardHeader,
	CartAddress,
	CartCard,
	CartConfirmButton,
	CartContainer,
	CartPayment,
} from './styles'

import { useContext, useEffect } from 'react'
import { CartContext } from '../../contexts/CartContext'

import { CartProduct } from './components/Product'
import { CartAmounts } from './components/Amounts'
import { useNavigate } from 'react-router-dom'

export function Cart() {
	const navigate = useNavigate()
	const { cartItems, cartQuantity } = useContext(CartContext)

	const disableSubmit = cartQuantity === 0

	useEffect(() => {
		if (cartQuantity === 0) {
			navigate('/')
		}
	}, [cartQuantity, navigate])

	return (
		<CartContainer>
			<div>
				<h1 className="h5">Complete seu pedido</h1>

				<CartCard radius="normal">
					<CardCardHeader variant="yellow">
						<MapPinLine size={22} />
						<strong>Endereço de Entrega</strong>
						<p>Informe o endereço onde deseja receber seu pedido</p>
					</CardCardHeader>

					<CartAddress>
						<div>
							<input type="text" placeholder="CEP" required />
						</div>

						<div>
							<input type="text" placeholder="Endereço" required />
						</div>

						<div>
							<input type="text" placeholder="Número" required />
						</div>

						<div>
							<input type="text" placeholder="Complemento" />
						</div>

						<div>
							<input type="text" placeholder="Bairro" required />
						</div>

						<div>
							<input type="text" placeholder="Cidade" required />
						</div>

						<div>
							<input type="text" placeholder="UF" required />
						</div>
					</CartAddress>
				</CartCard>

				<CartCard radius="normal">
					<CardCardHeader variant="purple">
						<CurrencyDollar size={22} />
						<strong>Pagamento</strong>
						<p>
							O pagamento é feito na entrega. Escolha a forma que deseja pagar
						</p>
					</CardCardHeader>

					<CartPayment>
						<label>
							<input type="radio" name="payment" value="1" />
							<CreditCard size={16} />
							<span>Cartão de crédito</span>
						</label>
						<label>
							<input type="radio" name="payment" value="2" />
							<Bank size={16} />
							<span>Cartão de débito</span>
						</label>
						<label>
							<input type="radio" name="payment" value="3" />
							<Money size={16} />
							<span>Dinheiro</span>
						</label>
					</CartPayment>
				</CartCard>
			</div>

			<div>
				<h2 className="h5">Cafés selecionados</h2>

				<CartCard radius="fancy">
					{cartItems.map((item) => (
						<CartProduct item={item} key={item.id} />
					))}

					<CartAmounts />

					<CartConfirmButton type="submit" disabled={disableSubmit}>
						Confirmar pedido
					</CartConfirmButton>
				</CartCard>
			</div>
		</CartContainer>
	)
}
