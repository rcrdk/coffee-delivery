import { CartItem, Order } from '../../dtos/cart'

export enum ActionTypes {
	ADD_PRODUCT = 'ADD_PRODUCT',
	REMOVE_PRODUCT = 'REMOVE_PRODUCT',
	INCREASE_PRODUCT_QUANTITY = 'INCREASE_PRODUCT_QUANTITY',
	DECREASE_PRODUCT_QUANTITY = 'DECREASE_PRODUCT_QUANTITY',
	CREATE_NEW_ORDER = 'CREATE_NEW_ORDER',
	CLEAR_CART = 'CLEAR_CART',
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

export function createNewOrderAction(order: Order) {
	return {
		type: ActionTypes.CREATE_NEW_ORDER,
		payload: {
			order,
		},
	}
}

export function clearCartAction() {
	return {
		type: ActionTypes.CLEAR_CART,
	}
}
