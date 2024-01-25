import { CartItem, Order } from '../dtos/cart'

import {
	ReactNode,
	createContext,
	useEffect,
	useReducer,
	useState,
} from 'react'

import { cartReducer } from '../reducers/cart/reducer'
import { Product } from '../dtos/product'
import { NewOrderFormData } from '../schemas/cart'

import {
	addProductAction,
	decreaseProductQuantityAction,
	increaseProductQuantityAction,
	removeProductAction,
	createNewOrderAction,
	clearCartAction,
} from '../reducers/cart/actions'

interface CartContextType {
	cartItems: CartItem[]
	cartQuantity: number
	cartAmountOfProducts: number
	cartAmountOfProductsWithShipping: number
	cartShippingTax: number
	addNewProduct: (product: Product, quantity: number) => void
	removeProduct: (product: CartItem) => void
	increaseProductQuantity: (product: CartItem) => void
	decreaseProductQuantity: (product: CartItem) => void
	createNewOrder: (data: NewOrderFormData) => void
	currentOrder: Order
}

interface CartContextProviderProps {
	children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
	const [cartQuantity, setCartQuantity] = useState(0)
	const [cartAmountOfProducts, setCartAmountOfProducts] = useState(0)

	const [
		cartAmountOfProductsWithShipping,
		setCartAmountOfProductsWithShipping,
	] = useState(0)

	const [cartState, dispatch] = useReducer(
		cartReducer,
		{
			products: [],
			data: {},
		},
		(initialState) => {
			const storedStateAsJSON = localStorage.getItem(
				'@coffee-delivery-1.0.0:products-state',
			)

			if (storedStateAsJSON) {
				return JSON.parse(storedStateAsJSON)
			}

			return initialState
		},
	)

	const { products, order } = cartState

	useEffect(() => {
		const stateJSON = JSON.stringify(cartState)

		localStorage.setItem('@coffee-delivery-1.0.0:products-state', stateJSON)
	}, [cartState])

	function addNewProduct(product: Product, quantity: number) {
		const newProduct: CartItem = {
			id: new Date().getTime().toString(),
			product,
			quantity,
		}

		dispatch(addProductAction(newProduct))
	}

	function removeProduct(product: CartItem) {
		dispatch(removeProductAction(product))
	}

	function increaseProductQuantity(product: CartItem) {
		dispatch(increaseProductQuantityAction(product))
	}

	function decreaseProductQuantity(product: CartItem) {
		dispatch(decreaseProductQuantityAction(product))
	}

	const currentOrder = order

	const cartShippingTax =
		cartQuantity > 0 || currentOrder?.products?.length > 0 ? 3.5 : 0

	useEffect(() => {
		setCartQuantity(
			products.reduce((previous, current) => previous + current.quantity, 0),
		)

		setCartAmountOfProducts(
			products.reduce(
				(previous, current) =>
					previous + current.quantity * current.product.price,
				0,
			),
		)

		setCartAmountOfProductsWithShipping(cartAmountOfProducts + cartShippingTax)
	}, [products, cartAmountOfProducts, cartShippingTax])

	function createNewOrder(data: NewOrderFormData) {
		const newOrder: Order = {
			id: new Date().getTime().toString(),
			data,
			products,
		}

		dispatch(createNewOrderAction(newOrder))
		dispatch(clearCartAction())
	}

	return (
		<CartContext.Provider
			value={{
				cartItems: products,
				cartQuantity,
				cartAmountOfProducts,
				cartAmountOfProductsWithShipping,
				cartShippingTax,
				addNewProduct,
				removeProduct,
				increaseProductQuantity,
				decreaseProductQuantity,
				createNewOrder,
				currentOrder,
			}}
		>
			{children}
		</CartContext.Provider>
	)
}
