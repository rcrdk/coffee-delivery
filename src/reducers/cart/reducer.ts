import { produce } from 'immer'
import { ActionTypes } from './actions'
import { CartItem, Order } from '../../dtos/cart'

interface CartStates {
	products: CartItem[]
	order: Order
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function cartReducer(state: CartStates, action: any) {
	switch (action.type) {
		case ActionTypes.ADD_PRODUCT: {
			const checkDuplicate = (product: CartItem) =>
				product.product.id === action.payload.newProduct.product.id

			return produce(state, (draft) => {
				const existingProductInCart = draft.products.find(checkDuplicate)

				if (existingProductInCart) {
					const duplicatedEntry =
						draft.products[state.products.findIndex(checkDuplicate)]

					if (
						duplicatedEntry.quantity + action.payload.newProduct.quantity >
						10
					) {
						duplicatedEntry.quantity = 10
					} else {
						duplicatedEntry.quantity += action.payload.newProduct.quantity
					}
				}

				if (!existingProductInCart) {
					draft.products.push(action.payload.newProduct)
				}
			})
		}
		case ActionTypes.REMOVE_PRODUCT: {
			return produce(state, (draft) => {
				const index = state.products.findIndex(
					(product) => product.id === action.payload.product.id,
				)

				draft.products.splice(index, 1)
			})
		}
		case ActionTypes.INCREASE_PRODUCT_QUANTITY: {
			return produce(state, (draft) => {
				const index = state.products.findIndex(
					(product) => product.id === action.payload.product.id,
				)

				draft.products[index].quantity += 1
			})
		}
		case ActionTypes.DECREASE_PRODUCT_QUANTITY: {
			return produce(state, (draft) => {
				const index = state.products.findIndex(
					(product) => product.id === action.payload.product.id,
				)

				draft.products[index].quantity -= 1
			})
		}
		case ActionTypes.CREATE_NEW_ORDER: {
			return produce(state, (draft) => {
				draft.order = action.payload.order
			})
		}
		case ActionTypes.CLEAR_CART: {
			return produce(state, (draft) => {
				draft.products = []
			})
		}
		default:
			return state
	}
}
