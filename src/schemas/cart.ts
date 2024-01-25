import * as zod from 'zod'

export const newOrderFormValidationSchema = zod.object({
	cep: zod.string().min(9, 'Informe o CEP'),
	address: zod.string().min(1, 'Informe o Endereço'),
	number: zod.string().min(1, 'Informe o Número'),
	complement: zod.string().optional(),
	neighborhood: zod.string().min(1, 'Informe o Bairro'),
	city: zod.string().min(1, 'Informe a Cidade'),
	state: zod.string().min(1, 'Informe o Estado'),
	payment: zod.string().min(1, 'Informe um método de pagamento'),
})

export type NewOrderFormData = zod.infer<typeof newOrderFormValidationSchema>
