import {Link} from "react-router-dom";
import './Card.scss'
import {useDispatch} from "react-redux";
import {addToCart} from "../../redux/cartReducer";
import {useState} from "react";

export const Card = ({item}) => {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1)

    return (
        <div className="card">

            <Link className="link"
                  to={`/products/${item._id}`}
                  style={{color: "inherit", textDecoration: "none"}}
            >
                <div className="imgCard">
                    <img className="imgCardIm" src={item.img} alt=""/>
                </div>
                <div className="textCard">
                    <h2>{item.title}</h2>
                    <p className="productPrice">{item.price} zł</p>

                </div>
            </Link>

            <button className="productBtn"
                    onClick={() => {
                        dispatch(addToCart({
                            id: item._id,
                            title: item.title,
                            price: item.price,
                            img: item.img,
                            quantity,
                        }))
                    }}>Dodaj do koszka
            </button>

        </div>

    )
}


