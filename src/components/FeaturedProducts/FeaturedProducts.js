import './FeaturedProducts.scss'
import {Card} from "../Card/Card";

import useFetch from "../hooks/useFetch";
import {Slider} from "../Slider/Slider";
import {useState} from "react";
import {Pagination} from "../Pagination/Pagination";
import {LoadingIcon} from "../../common/LoadingIcon/LoadingIcon";


export const FeaturedProducts = () => {

    const {data, loading, error} = useFetch(`/products`)
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPages, setPostPerPages] = useState(9)
    const lastPostIndex = currentPage * postPerPages;
    const firstPostIndex = lastPostIndex - postPerPages;
    const currentPosts = data.slice(firstPostIndex, lastPostIndex)


    return (
        <div className="featuredProduct">
            <div className="top">
                <Slider/>
            </div>
            <div className="bottom">
                <div className="bottomWrapper">
                    {error ?
                        "Something went wrong" :
                        (loading ? <LoadingIcon/>
                            : currentPosts.map(item => (
                                <Card item={item} key={item._id}/>
                            )))
                    }
                </div>
                <div className="paginationWrapper">
                    <Pagination totalPost={data.length}
                                postsPerPage={postPerPages}
                                setCurrentPage={setCurrentPage}
                                currentPage={currentPage}
                    />
                </div>
            </div>
        </div>
    )
}