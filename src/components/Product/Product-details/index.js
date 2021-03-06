import Loader_file from "../../Loader"
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Axios from 'axios'
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { ModalBody } from "react-bootstrap";

const Product_Details = (props) => {
    const { identity } = useParams()
    const [product_slider_loading, set_Product_slider_loading] = useState(true)
    const [Product_data, setProduct_data] = useState({});
    const [isLoading, set_isloading] = useState(true);
    const [similarProduct, set_similarProducts] = useState([])
    const { id, title, image, rating, price, description, category } = Product_data
    useEffect((props) => {
        const data = Axios.get(`products/${identity}`)
            .then(res => {
                setProduct_data(res.data);
                get_category(res.data.category)
                set_isloading(false)
            })
            .catch(err => {
                console.error(err);
            });
    }, [identity]);
    const get_category = (category) => {
        const similar_product = Axios.get(`products/category/${category}`)
            .then(res => {
                const filtered_Array = filteredarray(res.data);
                set_similarProducts(res.data)
                set_Product_slider_loading(false)

            }).catch(err => { console.log(err) })
    }
    const filteredarray = (data) => {
        console.log(data, "this is data")
        const received_data = data
        for (var i = 0; i < received_data.length; i++) {
            console.log(identity)
            if (received_data[i].id == identity) {
                const newarray = received_data.splice(i, 1);
                return received_data
            }
        }
    }
    const back_To_top = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
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
                            <section className="container">
                                <div className="row">
                                    <div className="col-md-6">
                                        <img src={image} alt={image} className="image-height-details" />
                                    </div>
                                    <div className="col-md-6">
                                        <div className="pl-20 pr-20">
                                            <h3 className="bold">{title}</h3>
                                            <h3>Rs {price}/-</h3>
                                            <h5 className="font-sm mt-10">{description}</h5>
                                            <h4 className="mt-14">
                                                <i className="fa fa-star star_icons" />
                                                {rating.rate}
                                                <span className="text-grey">({rating.count})</span>
                                            </h4>
                                            <div className="mt-30">
                                                <Link to="/add-card" className="animated_link "><span className="animated_span ">Add to card</span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="mt-30">
                                <h3 className="text-center bold border-bottom-decorative">Similar Products</h3>
                                {
                                    product_slider_loading ?
                                        <div className="d-flex   justify-content-center align-items-center">
                                            <Loader_file />
                                        </div>
                                        :
                                        <div className="container-fluid mb-40">
                                            <div className="row">
                                                {
                                                    similarProduct.map((product_data) => {
                                                        console.log(product_data.image)
                                                        return (
                                                            <div className="col-md-4 col-lg-3  col-sm-6  pt-30" key={product_data.id}>
                                                                <div className="card card_shadow">
                                                                    <img src={product_data.image} className="img-height-card" />
                                                                    <div className="card-body parent">
                                                                        <h5 className="title bold wrap-text-1">{product_data.title}</h5>
                                                                        <h5 className="sub-title bold">Rs {product_data.price} /-</h5>
                                                                        <div className="d-flex justify-content-between align-items-center">
                                                                            <h5>
                                                                                <i className="fa fa-star star_icons" aria-hidden="true" />{product_data.rating.rate}
                                                                            </h5>
                                                                            <Link to={`/product-details/${product_data.id}`} onClick={() => { set_isloading(true);set_Product_slider_loading(true) }} className="animated_link"><span className="animated_span">view</span></Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                                <div className="col-md-3 pt-30">
                                                    <div className="card card_shadow d-flex justify-content-center align-items-center" style={{ height: "100%" }}>
                                                        <div className="text-centered">
                                                            <p className="mt-12" >Total products showing={similarProduct.length}</p>
                                                            <p className="mt-20"> back to top<i class="fa fa-arrow-up uparrow_icon mx-12" onClick={back_To_top} aria-hidden="true"></i></p>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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