import { NewOrderFormData } from '../schemas/cart'
import { Product } from './product'

export interface CartItem {
	id: string
	product: Product
	quantity: number
}

export interface Order {
	id: string
	data: NewOrderFormData
	products: CartItem[]
}
