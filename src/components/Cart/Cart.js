import './Cart.scss'
import trash from '../../assets/trash-can.png'
import {useDispatch, useSelector} from "react-redux";
import {addToCart, decreaseCart, removeItem, resetCart} from "../../redux/cartReducer";
import {Link} from "react-router-dom";
import {useState} from "react";


export const Cart = () => {
    const products = useSelector(state => state.cart.products);
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const totalPrice = () => {
        let total = 0;
        products.forEach(item => (total += item.quantity * item.price));
        return total.toFixed(2)
    }

    return (
        <div className="cart">
            <h1>Produkty w twoim koszyku </h1>
            <div className="cartWrapper">
                {products?.map(item => (
                    <div key={item.id} className="item">
                        <img src={item.img} alt=""/>
                        <div className="details">
                            <h2>{item.title}</h2>
                            <div className="btnQ">
                                <button onClick={() => dispatch(decreaseCart(item))}> -</button>
                                <p>{item.quantity}</p>
                                <button onClick={() => dispatch(addToCart(item))}> +</button>
                            </div>
                            <p>{item.quantity} x {item.price} zł</p>
                        </div>
                        <img className="delete" onClick={() => dispatch(removeItem(item.id))} src={trash} alt=""/>
                    </div>
                ))}
            </div>
            <div className="totalPrice">
                <span>Do zapłaty: </span>
                <span> <b>{totalPrice()} </b>zł</span>
            </div>
            <div className="btn">
                <Link onClick={() => setOpen(!open)} to="/cart">Przejdź do koszyka </Link>
                <button className="deleteCart" onClick={() => dispatch(resetCart())}>Usuń koszyk</button>
            </div>
        </div>

    )

}