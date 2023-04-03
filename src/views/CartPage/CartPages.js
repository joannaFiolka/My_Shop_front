import './CartPag.scss'
import {useDispatch, useSelector} from "react-redux";
import {addToCart, decreaseCart, removeItem, resetCart} from "../../redux/cartReducer";
import trash from "../../assets/trash-can.png";
import {useState} from "react";
import {LoadingIcon} from "../../common/LoadingIcon/LoadingIcon";


export const CartPages = () => {
    const products = useSelector(state => state.cart.products);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const totalPrice = () => {
        let total = 0;
        products.forEach(item => (total += item.quantity * item.price));
        return total.toFixed(2)
    }


    return (
        <div className="cartPage">
            <div className="containerCart">
                <h1>Twój koszyk</h1>
                <hr/>
                <div className="wrapperCart">

                    <div className="leftCart">
                         {loading ? <LoadingIcon/>:(products?.map(item => (
                        <div key={item.id} className="item">
                            <div className="itemText">
                                <img src={item.img} alt=""/>
                                <div className="details">
                                    <h2>{item.title}</h2>
                                    <p>Kolor {item.categories}</p>
                                    <p>Rozmiar {item.categories}</p>

                                </div>
                                <img className="delete" onClick={() => dispatch(removeItem(item.id))} src={trash}
                                     alt=""/>
                            </div>

                            <div className="price">
                                <p>{item.price} zł/szt</p>
                            </div>
                            <div className="btnQuantity">
                                <button onClick={() => dispatch(decreaseCart(item))}> -</button>
                                <p>{item.quantity}</p>
                                <button onClick={() => dispatch(addToCart(item))}> +</button>
                            </div>
                            <div className="totalprice">
                                <span> {item.quantity * item.price} zł</span>
                            </div>

                        </div>
                    )
                         ))}


                    </div>
                    <div className="rightCart">
                        <h2> Podsumowanie:</h2>
                        <hr/>
                        <div className="totalPriceRight">
                            <div className="infoP">
                                <span className="text">Wartość zakupów: </span>
                                <span> {totalPrice()}zł</span>
                            </div>
                            <div className="infoP">
                                <span className="text">Dostawa: </span>
                                <span> 0,00 zł</span>
                            </div>
                            <hr/>
                            <div className="info priceInfo">
                                <span>Do zapłaty: </span>
                                <span>{totalPrice()} zł</span>
                            </div>
                        </div>
                        <div className="btn">
                            <button>Przejdź dalej</button>

                            <button className="deleteCart" onClick={() => dispatch(resetCart())}>Usuń koszyk</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}