import { CartAddressContainer } from './styles'

export function CartAddress() {
	return (
		<CartAddressContainer>
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
		</CartAddressContainer>
	)
}
