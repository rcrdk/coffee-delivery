import { Product } from '../dtos/product'

import product1 from '../assets/coffee-expresso.png'
import product2 from '../assets/coffee-americano.png'
import product3 from '../assets/coffee-expresso-cremoso.png'
import product4 from '../assets/coffee-gelado.png'
import product5 from '../assets/coffee-com-leite.png'
import product6 from '../assets/coffee-latte.png'
import product7 from '../assets/coffee-capuccino.png'
import product8 from '../assets/coffee-macchiato.png'
import product9 from '../assets/coffee-mochaccino.png'
import product10 from '../assets/coffee-chocolate-quente.png'
import product11 from '../assets/coffee-cubano.png'
import product12 from '../assets/coffee-havaiano.png'
import product13 from '../assets/coffee-arabe.png'
import product14 from '../assets/coffee-irlandes.png'

export const products: Product[] = [
	{
		id: '1',
		name: 'Expresso Tradicional',
		description: 'O tradicional café feito com água quente e grãos moídos',
		tags: ['Tradicional'],
		price: 9.9,
		image: <img src={product1} alt="" />,
	},
	{
		id: '2',
		name: 'Expresso Americano',
		description: 'Expresso diluído, menos intenso que o tradicional',
		tags: ['Tradicional'],
		price: 9.9,
		image: <img src={product2} alt="" />,
	},
	{
		id: '3',
		name: 'Expresso Cremoso',
		description: 'Café expresso tradicional com espuma cremosa',
		tags: ['Tradicional'],
		price: 9.9,
		image: <img src={product3} alt="" />,
	},
	{
		id: '4',
		name: 'Expresso Gelado',
		description: 'Bebida preparada com café expresso e cubos de gelo',
		tags: ['Tradicional', 'Galado'],
		price: 9.9,
		image: <img src={product4} alt="" />,
	},
	{
		id: '5',
		name: 'Cafee com Leite',
		description: 'Meio a meio de expresso tradicional com leite vaporizado',
		tags: ['Tradicional', 'Com leite'],
		price: 9.9,
		image: <img src={product5} alt="" />,
	},
	{
		id: '6',
		name: 'Latte',
		description:
			'Uma dose de café expresso com o dobro de leite e espuma cremosa',
		tags: ['Tradicional', 'Com leite'],
		price: 9.9,
		image: <img src={product6} alt="" />,
	},
	{
		id: '7',
		name: 'Capuccino',
		description:
			'Bebida com canela feita de doses iguais de café, leite e espuma',
		tags: ['Tradicional', 'Com leite'],
		price: 9.9,
		image: <img src={product7} alt="" />,
	},
	{
		id: '8',
		name: 'Macchiato',
		description:
			'Café expresso misturado com um pouco de leite quente e espuma',
		tags: ['Tradicional', 'Com leite'],
		price: 9.9,
		image: <img src={product8} alt="" />,
	},
	{
		id: '9',
		name: 'Mocaccino',
		description: 'Café expresso com calda de chocolate, pouco leite e espuma',
		tags: ['Tradicional', 'Com leite'],
		price: 9.9,
		image: <img src={product9} alt="" />,
	},
	{
		id: '10',
		name: 'Chocolate Quente',
		description: 'Bebida feita com chocolate dissolvido no leite quente e café',
		tags: ['Especial', 'Com leite'],
		price: 9.9,
		image: <img src={product10} alt="" />,
	},
	{
		id: '11',
		name: 'Cubano',
		description:
			'Drink gelado de café expresso com rum, creme de leite e hortelã',
		tags: ['Especial', 'Alcoólico', 'Gelado'],
		price: 9.9,
		image: <img src={product11} alt="" />,
	},
	{
		id: '12',
		name: 'Havaiano',
		description: 'Bebida adocicada preparada com café e leite de coco',
		tags: ['Especial'],
		price: 9.9,
		image: <img src={product12} alt="" />,
	},
	{
		id: '13',
		name: 'Árabe',
		description: 'Bebida preparada com grãos de café árabe e especiarias',
		tags: ['Especial'],
		price: 9.9,
		image: <img src={product13} alt="" />,
	},
	{
		id: '14',
		name: 'Irlandês',
		description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
		tags: ['Especial', 'Gelado'],
		price: 9.9,
		image: <img src={product14} alt="" />,
	},
]
