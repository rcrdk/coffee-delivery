import {
	SuccessCard,
	SuccessContainer,
	SuccessItem,
	SuccessTitle,
} from './styles'

import successImage from '../../assets/sucess.png'
import { Clock, CurrencyDollar, MapPin } from 'phosphor-react'

export function Success() {
	return (
		<SuccessContainer>
			<SuccessTitle>
				<h1 className="h2">Uhu! Pedido confirmado!</h1>
				<p>Agora é só aguardar que logo o café chegará até você.</p>
			</SuccessTitle>

			<SuccessCard>
				<SuccessItem variant="purple">
					<div>
						<MapPin weight="fill" size={16} />
					</div>
					<p>
						Entrega em <b>Rua João Daniel Martinelli, 102.</b> Farrapos - Porto
						Alegre, RS
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
						<b>Cartão de Crédito</b>
					</p>
				</SuccessItem>
			</SuccessCard>

			<img src={successImage} alt="" />
		</SuccessContainer>
	)
}
