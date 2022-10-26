import './cart-item.styles.scss'

const CartItem = ({cartItem}) => {
    const { name, quantity } = cartItem;
    return (
        <div>
            <h2>{name}</h2>
            <h1>{quantity}</h1>
        </div>
    )
}

export default CartItem;