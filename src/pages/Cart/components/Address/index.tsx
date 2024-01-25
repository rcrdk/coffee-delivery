import { useFormContext } from 'react-hook-form'
import { CartAddressContainer } from './styles'

export function CartAddress() {
	const { register } = useFormContext()

	return (
		<CartAddressContainer>
			<div>
				<input type="text" placeholder="CEP" required {...register('cep')} />
			</div>

			<div>
				<input
					type="text"
					placeholder="Endereço"
					{...register('address', { required: true })}
				/>
			</div>

			<div>
				<input
					type="text"
					placeholder="Número"
					{...register('number', { required: true })}
				/>
			</div>

			<div>
				<input
					type="text"
					placeholder="Complemento"
					{...register('complement')}
				/>
			</div>

			<div>
				<input
					type="text"
					placeholder="Bairro"
					{...register('neighborhood', { required: true })}
				/>
			</div>

			<div>
				<input
					type="text"
					placeholder="Cidade"
					{...register('city', { required: true })}
				/>
			</div>

			<div>
				<input
					type="text"
					placeholder="UF"
					{...register('state', { required: true })}
				/>
			</div>
		</CartAddressContainer>
	)
}
