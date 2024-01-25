import {
	SuccessCard,
	SuccessCardInner,
	SuccessContainer,
	SuccessItem,
	SuccessTitle,
} from './styles'

import successImage from '../../assets/sucess.png'

import { Clock, CurrencyDollar, MapPin } from 'phosphor-react'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { useNavigate } from 'react-router-dom'
import { formatMoney } from '../../utils/formatMoney'
import { SuccessProduct } from './components/Product'

export function Success() {
	const [amountOfProducts, setAmountOfProducts] = useState(0)

	const navigate = useNavigate()
	const { currentOrder, cartShippingTax } = useContext(CartContext)

	useEffect(() => {
		if (!currentOrder) {
			navigate('/')
		}
	}, [currentOrder, navigate])

	useEffect(() => {
		setAmountOfProducts(
			currentOrder?.products?.reduce(
				(previous, current) =>
					previous + current.quantity * current.product.price,
				cartShippingTax,
			),
		)
	}, [currentOrder, cartShippingTax])

	const address = currentOrder?.data

	return (
		<SuccessContainer>
			<SuccessTitle>
				<h1 className="h2">Uhu! Pedido confirmado!</h1>
				<p>Agora é só aguardar que logo o café chegará até você.</p>
			</SuccessTitle>

			<SuccessCard>
				<SuccessCardInner>
					<SuccessItem variant="purple">
						<div>
							<MapPin weight="fill" size={16} />
						</div>
						<p>
							Entrega em{' '}
							<b>
								{address?.address}, {address?.number}.{' '}
								{address?.complement && `${address?.complement}.`}
							</b>{' '}
							{address?.neighborhood} - {address?.city}, {address?.state}
						</p>
					</SuccessItem>

					<SuccessItem variant="yellow">
						<div>
							<Clock weight="fill" size={16} />
						</div>
						<p>
							Previsão de entrega:
							<br />
							<b>20 min - 30 min</b>
						</p>
					</SuccessItem>

					<SuccessItem variant="yellow-dark">
						<div>
							<CurrencyDollar weight="bold" size={16} />
						</div>
						<p>
							Pagamento na entrega:
							<br />
							<b>{formatMoney(amountOfProducts, 'prefixed')}</b> –{' '}
							{currentOrder?.data?.payment}
						</p>
					</SuccessItem>
				</SuccessCardInner>

				<SuccessCardInner>
					{currentOrder?.products?.map((item) => (
						<SuccessProduct data={item} key={item.id} />
					))}
				</SuccessCardInner>
			</SuccessCard>

			<img src={successImage} alt="" />
		</SuccessContainer>
	)
}
