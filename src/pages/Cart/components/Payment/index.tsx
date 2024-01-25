import { Bank, CreditCard, Money } from 'phosphor-react'

import { CartPaymentContainer, CartPaymentItem } from './styles'
import { useFormContext } from 'react-hook-form'

export function CartPayment() {
	const { register } = useFormContext()

	return (
		<CartPaymentContainer>
			<CartPaymentItem>
				<input
					type="radio"
					value="Cartão de crédito"
					{...register('payment', {
						value: 'Cartão de crédito',
						required: true,
					})}
				/>
				<CreditCard size={16} />
				<span>Cartão de crédito</span>
			</CartPaymentItem>

			<CartPaymentItem>
				<input
					type="radio"
					value="Cartão de débito"
					{...register('payment', {
						value: 'Cartão de débito',
						required: true,
					})}
				/>
				<Bank size={16} />
				<span>Cartão de débito</span>
			</CartPaymentItem>

			<CartPaymentItem>
				<input
					type="radio"
					value="Dinheiro"
					{...register('payment', { value: 'Dinheiro', required: true })}
				/>
				<Money size={16} />
				<span>Dinheiro</span>
			</CartPaymentItem>
		</CartPaymentContainer>
	)
}
