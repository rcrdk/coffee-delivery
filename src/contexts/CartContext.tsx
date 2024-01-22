import { ReactNode, createContext, useState } from 'react'

interface CartItem {
	id: string
	name: string
}

interface CartContextType {
	cartItems: CartItem[]
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
	children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
	const [cartItems, setCartItems] = useState<CartItem[]>([])

	return (
		<CartContext.Provider
			value={{
				cartItems,
			}}
		>
			{children}
		</CartContext.Provider>
	)
}
