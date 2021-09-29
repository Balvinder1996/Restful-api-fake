import Axios from 'axios';
import { Link } from 'react-router-dom'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import '../Product-List/product-list.scss'
import { useState } from 'react'
import Accordion_Page from './accordian'
import { useEffect } from 'react'
import Loader_file from '../../Loader';
const Product_list = () => {
    const [Product_data, setProduct_data] = useState([]);
    const [isLoading, set_isloading] = useState(false)
    useEffect(() => {

        const data = Axios.get('/products')
            .then(res => {
                setProduct_data(res.data);
                set_isloading(true)
            })
            .catch(err => {
                console.error(err);
            });
    }, [])
    const [volume, setVolume] = useState(0)
    const handleOnChange = (value) => {
        setVolume(value)
    }

    return (
        <>
            <section className="mt-65">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-2 border full-vh">
                            <div className="mt-15">
                                <h3 className="letter-space-1">Filters</h3>
                                <hr />
                                <div className="mt-15">
                                    <h4 className="">Price</h4>
                                    <div>
                                        <Slider
                                            value={volume}
                                            orientation="horizontal"
                                            onChange={handleOnChange}
                                        />
                                    </div>
                                    <div>
                                        <Accordion_Page />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-10 bg-light-grey mb-40">
                            {isLoading ?
                                <>
                                    <div className="container-fluid">
                                        <p className="mt-12">Total results showing:- {Product_data.length}</p>
                                        <div className="row">
                                            {Product_data.map((data) => {
                                                return (
                                                    <>
                                                        <div className="col-md-4 col-lg-3  col-sm-6  pt-15" key={data.id}>
                                                            <div className="card card_shadow"  >
                                                                <img src={data.image} className="img-height-card" />
                                                                <div className="card-body parent">
                                                                    <h5 className="title bold wrap-text-1">{data.title}</h5>
                                                                    <h5 className="sub-title bold">Rs {data.price} /-</h5>
                                                                    <div className="d-flex justify-content-between align-items-center">
                                                                        <h5>
                                                                            <i className="fa fa-star star_icons" aria-hidden="true" />{data.rating.rate}
                                                                        </h5>
                                                                        <Link to={`/product-details/${data.id}`} className="animated_link"><span className="animated_span">view</span></Link> 
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </>
                                                )
                                            })
                                            }
                                        </div>
                                    </div>
                                </> :
                                <>
                                    <div className="height-100">
                                        <div className="d-flex  height-100 justify-content-center align-items-center">
                                            <Loader_file />
                                        </div>
                                    </div>
                                </>
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Product_list