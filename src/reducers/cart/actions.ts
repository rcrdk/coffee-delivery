import { CartItem } from '../../dtos/cart'

export enum ActionTypes {
	ADD_PRODUCT = 'ADD_PRODUCT',
	REMOVE_PRODUCT = 'REMOVE_PRODUCT',
	INCREASE_PRODUCT_QUANTITY = 'INCREASE_PRODUCT_QUANTITY',
	DECREASE_PRODUCT_QUANTITY = 'DECREASE_PRODUCT_QUANTITY',
}

export function addProductAction(newProduct: CartItem) {
	return {
		type: ActionTypes.ADD_PRODUCT,
		payload: {
			newProduct,
		},
	}
}

export function removeProductAction(product: CartItem) {
	return {
		type: ActionTypes.REMOVE_PRODUCT,
		payload: {
			product,
		},
	}
}

export function increaseProductQuantityAction(product: CartItem) {
	return {
		type: ActionTypes.INCREASE_PRODUCT_QUANTITY,
		payload: {
			product,
		},
	}
}

export function decreaseProductQuantityAction(product: CartItem) {
	return {
		type: ActionTypes.DECREASE_PRODUCT_QUANTITY,
		payload: {
			product,
		},
	}
}
