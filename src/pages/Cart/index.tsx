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
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'

import { CartProduct } from './components/Product'
import { CartAmounts } from './components/Amounts'
import { CartAddress } from './components/Address'
import { CartPayment } from './components/Payment'

import {
	NewOrderFormData,
	newOrderFormValidationSchema,
} from '../../schemas/cart'
import { useNavigate } from 'react-router-dom'

export function Cart() {
	const navigate = useNavigate()
	const { cartItems, cartQuantity, createNewOrder } = useContext(CartContext)

	const newOrderForm = useForm<NewOrderFormData>({
		resolver: zodResolver(newOrderFormValidationSchema),
		defaultValues: {
			cep: '',
			address: '',
			number: '',
			complement: '',
			neighborhood: '',
			city: '',
			state: '',
			payment: '',
		},
		mode: 'onChange',
	})

	const { handleSubmit, reset, formState } = newOrderForm

	function handleCreateNewOrder(data: NewOrderFormData) {
		createNewOrder(data)
		reset()
		navigate('/success')
	}

	const disableSubmit = cartQuantity === 0 || !formState.isValid
	const hasNotProducts = cartQuantity === 0

	return (
		<CartContainer onSubmit={handleSubmit(handleCreateNewOrder)} action="">
			<FormProvider {...newOrderForm}>
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
			</FormProvider>
		</CartContainer>
	)
}
