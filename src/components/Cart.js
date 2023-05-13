import { useDispatch, useSelector } from 'react-redux';
import FoodItem from './FoodItem';
import { clearCart } from '../utils/cartSlice';

const Cart = () => {
	const cartItems = useSelector((store) => store.cart.items);
	console.log(cartItems);
	const dispatch = useDispatch();
	const handleClearCart = () => {
		dispatch(clearCart());
	};
	return (
		<div>
			<h1 className='font-bold text-3xl'>Cart Items-{cartItems.length}</h1>
			<button
				className='px-3 m-5 py-1 bg-red-500 rounded-md'
				onClick={() => handleClearCart()}
			>
				Clear Cart
			</button>
			{cartItems.map((item) => (
				<FoodItem key={item.id} {...item} />
			))}
		</div>
	);
};

export default Cart;
