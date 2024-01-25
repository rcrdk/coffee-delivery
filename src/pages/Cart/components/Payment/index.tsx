import { Bank, CreditCard, Money } from 'phosphor-react'

import { CartPaymentContainer, CartPaymentItem } from './styles'

export function CartPayment() {
	return (
		<CartPaymentContainer>
			<CartPaymentItem>
				<input type="radio" name="payment" value="1" />
				<CreditCard size={16} />
				<span>Cartão de crédito</span>
			</CartPaymentItem>

			<CartPaymentItem>
				<input type="radio" name="payment" value="2" />
				<Bank size={16} />
				<span>Cartão de débito</span>
			</CartPaymentItem>

			<CartPaymentItem>
				<input type="radio" name="payment" value="3" />
				<Money size={16} />
				<span>Dinheiro</span>
			</CartPaymentItem>
		</CartPaymentContainer>
	)
}
