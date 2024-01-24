export function formatMoney(
	value: number,
	prefix: 'prefixed' | undefined = undefined,
) {
	return value
		.toLocaleString('pt-BR', {
			style: 'currency',
			currency: 'BRL',
		})
		.slice(prefix ? 0 : 3)
}
