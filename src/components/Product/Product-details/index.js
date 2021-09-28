import Loader_file from "../../Loader"
import { useEffect, useState } from 'react'
import Axios from 'axios'
import { Link } from "react-router-dom";
import { Carousel } from '@trendyol-js/react-carousel';
const Product_Details = (props) => {
    const [product_slider_loading, set_Product_slider_loading] = useState(true)
    const [Product_data, setProduct_data] = useState({});
    const [isLoading, set_isloading] = useState(true);
    const [similarProduct, set_similarProducts] = useState([])
    const { id, title, image, rating, price, description, category } = Product_data
    useEffect(() => {
        const data = Axios.get('products/2')
            .then(res => {
                setProduct_data(res.data);
                set_isloading(false)
                console.log(res.data)
            })
            .catch(err => {
                console.error(err);
            });
       setTimeout(() => {
        const similar_product = Axios.get('products/category/jewelery')
        .then(res => {
            set_similarProducts(res.data)
            set_Product_slider_loading(false)

        }).catch(err => { console.log(err) })
}, [])
       }, 5000);
    return (
        <>
            <section className="mt-60 pt-40">
                <div className="container-fluid">
                    {isLoading ?
                        <div className="height-100">
                            <div className="d-flex  height-100 justify-content-center align-items-center">
                                <Loader_file />
                            </div>
                        </div> :
                        <>
                            <section className="row">
                                <div className="col-md-2"></div>
                                <div className="col-md-4">
                                    <img src={image} alt={image} className="image-height-details" />
                                </div>
                                <div className="col-md-6">
                                    <div className="pl-20 pr-20">
                                        <h3 className="bold">{title}</h3>
                                        <h3>Rs {price}/-</h3>
                                        <h5 className="font-sm mt-10">{description}</h5>
                                        {/* <h4>Category:-{category}</h4> */}
                                        <h4 className="mt-14">
                                            <i className="fa fa-star star_icons" />
                                            {rating.rate}
                                            <span className="text-grey">({rating.count})</span>
                                        </h4>
                                        <Link to="/add-card"><button className="btn mt-20">Add to card</button></Link>
                                    </div>
                                </div>
                            </section>
                            <section>
                                <h3>Similar Products</h3>
                                {
                                    product_slider_loading ?
                                            <div className="d-flex  height-100 justify-content-center align-items-center">
                                                <Loader_file />
                                            </div>                                      
                                        :
                                        <Carousel show={4} slide={3} swiping={true}>
                                            {
                                                similarProduct.map((product_data) => {
                                                    console.log(product_data.image)
                                                    return (
                                                        <div className="card">
                                                            <img src={product_data.image} className="img-height-card" />
                                                            <div className="card-body parent">
                                                                <h5 className="title bold">{product_data.title}</h5>
                                                                <h5 className="sub-title bold">Rs {product_data.price} /-</h5>
                                                                <div className="d-flex justify-content-between align-items-center fixed-bottom">
                                                                    <h5>
                                                                        <i className="fa fa-star star_icons" aria-hidden="true" />{product_data.rating.rate}
                                                                    </h5>
                                                                    <Link to="product-details"><button className="btn">view</button></Link>
                                                                    
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </Carousel>
                                }
                            </section>
                        </>
                    }
                </div>
            </section>
        </>
    )
}
export default Product_Details

