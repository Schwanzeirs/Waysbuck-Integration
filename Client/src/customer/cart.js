import { React, useState, useEffect } from 'react'
import NavbarUser from './navbarUser'
import "../styles/cart.css"
import { API } from '../config/api'
import Icecoffepalmsugar from "../assets/img/icecoffepalmsugar.png"
import Basket from "../assets/img/basket.svg"

export default function Cart() {

    const [ dataCart, setDataCart ] = useState([]);

    useEffect(() => {
        const dataCart = async () => {
            try {
                const response = await API.get("/carts")
                setDataCart(response.data.data);
            } catch (error) {
                console.log(error);
            }
        };
        dataCart();
    }, [setDataCart]);
    console.log(dataCart);

    let handleOnDelete = (id) => {}

  return (
    <>
    <NavbarUser/>
    <div className='cart mt-4' style={{ width : '90%'}}>
        <h2 className='mb-5 text-danger'>My Cart</h2>
        <h4 className='text-danger' > Review Your Order</h4>
        <div className='d-flex justify-content-center'>
            {dataCart.map((item, index) => (
            <div key={index} item={item}>
            <div className='lef  col'>
                <hr/>
                <div className='d-flex justify-content-between'>
                    <div className='d-flex justify-content-start'>
                        <img className='img-cart' src={item.product.image}/>
                        <div className='ms-2 d-flex '>
                            <div className='me-5'>
                                <p className='title-drink'>{item.product.title}</p>
                                <div className='d-flex'>
                                    <p className='toping'>Toping : </p>
                                    {item.topping.map((topping, idx) => (
                                    <div key={idx}>
                                    <p >{topping.title}</p> 
                                    </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='price me-3'>
                        <div className='d-flex ms-4'>
                            <p>Price : </p>
                            <p className='ms-2'>{item.sub_amount}</p>
                        </div>
                        <img className='ms-5' src={Basket} onClick={handleOnDelete} />
                    </div>
                </div>
                <hr/>
            </div>
            </div>
            ))}
            <div className='rigth-side col-4 .d-inline-flex'>
                <hr/>
                <div class="row mb-3">
                    <div class="col">
                        <span className='text-danger fs-6 fw-normal'>Sub Total</span>
                    </div>
                    <div class="col text-danger fw-normal">
                        <p className='float-end'>69.000</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <span className='text-danger fs-6 fw-normal'>Qty</span>
                    </div>
                    <div class="col text-danger fw-normal">
                    <p className='float-end'>2</p>
                    </div>
                </div>
                <hr/>
                <div class="row">
                    <div class="col">
                        <span className='text-danger fs-6 fw-normal'>Qty</span>
                    </div>
                    <div class="col text-danger fw-normal">
                    <p className='float-end'>69.000</p>
                    </div>
                </div>
                
                <div className='col mt-5' >
                    <button type="button" class="btn btn-danger" style={{width:'100%'}}>Pay</button>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}
