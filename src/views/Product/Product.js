import './Product.scss'
import {useState} from "react";
import useFetch from "../../components/hooks/useFetch";
import {useParams} from "react-router-dom";
import {LoadingIcon} from "../../common/LoadingIcon/LoadingIcon";
import {useDispatch} from "react-redux";
import {addToCart} from "../../redux/cartReducer";

export const Product =() => {
    const [quantity, setQuantity] = useState(1)
    const id = useParams().id;
    const dispatch = useDispatch();
    const {data, loading, error} = useFetch(`/products/find/${id}`);


    return(
        <div className="product">
            {loading ? <LoadingIcon/>:
           (<><div className="images">
                <img src={data.img} alt=""/>
            </div>
            <div className="info">
                <h1>{data.title}</h1>
                <span className="price">{data.price} zł</span>
                <p>{data.desc}</p>
            <div className="quantity">
                <button onClick={()=>setQuantity(prev=>(prev === 1 ? 1 : prev-1))}> - </button>
                {quantity}
                <button onClick={()=>setQuantity(prev=>prev+1)}> + </button>
            </div>
                <button className="addCart" onClick={()=>dispatch(addToCart({
                    id:data._id,
                    title:data.title,
                    price: data.price,
                    img: data.img,
                    quantity,
                }))}>Dodaj do koszyka</button>


            <div className="details">
                <h2>Szczegóły</h2>
                <span><b>Size:</b> 44</span>
                <span><b>Color:</b> White</span>
                <span><b>Category: </b> Woman</span>
            </div>
            </div>
           </> )
                }
        </div>
    )
}