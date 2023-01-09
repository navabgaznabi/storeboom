import './cart-item.scss'

const CartItem = ({cartItem}) => {
    return (
        <div>
        <h2>{name}</h2>
            <span>{quantity}</span>
        </div>
    );
}

export default CartItem;
