import React, { useState } from 'react'
import NavbarUser from "./navbarUser";
import DummyProfile from "../components/DataDummy/dataprofile"
import Dummytransactions from "../components/DataDummy/transactiocard"

import "../styles/profile.css";

import Rp from "rupiah-format"
import Profilephoto from '../assets/img/profilephoto.png'
import Icecoffegreentea from '../assets/img/icecoffegreentea.png'
import Logowaysbuck from '../assets/img/logowaysbuck.png'
import Qrcode from '../assets/img/qrcode.png'

export default function Profile() {

    const profilephoto = <img src={Profilephoto}/>

    const [profileDummy] = useState(DummyProfile)
    const dataCustomer = profileDummy[0]
    
    const [ DummyProduct ] = useState(Dummytransactions)
    console.log(DummyProduct)

    let total = 0

    DummyProduct.forEach((item) => {
        total += item?.price
    })

    const [cartCounter, setCartCounter] = useState(0)
  return (
    <>
    <NavbarUser plusOne={cartCounter}/>
    <div className='profile d-flex mt-4 py-3 justify-content-center'>
        <div className='myProfile ms-5'>
            <h2 className=''>MY PROFILE</h2>
            <div className='d-flex mt-4'>
                <div className='img-profile'>
                    <img src={dataCustomer?.image}/>
                </div>
                <div className='detail-profile'>
                    <h5 style={{color:'#613D2B;'}} className='ms-4'>Full name</h5>
                    <p className='ms-4'>{dataCustomer?.fullname}</p>
                    <h5 style={{color:'#613D2B;'}} className='ms-4 mt-3'>Email</h5>
                    <p className='ms-4'>{dataCustomer?.email}</p>
                </div>
            </div>
        </div>
        <div className='myTransaction'>
         <h2 className=''>My Transaction</h2>
            <div className='d-flex rounded'>
                <div className='detailTransaction py-2 px-2'>
                    {DummyProduct.map((item,index) => (
                            <div className='d-flex' key={index}>
                                <div>
                                    <img className='img-drink' src={item?.image} />
                                </div>
                                <div className='ms-3'>
                                    <h4 style={{color :"#BD0707"}}>{item?.name}</h4>
                                    <p className='text-danger'> <strong>{item?.day}</strong>, {item?.date}</p>
                                    <p className='text-danger'> Toping &nbsp; : {item?.toping}</p>
                                    <p className='text-danger'>Price : {Rp.convert(item?.price)}</p>
                                </div>
                            </div>
                    ))}
                </div>
                    <div className='ms-4 py-2 px-2'>
                        <div className='mb-2'>
                            <img src={Logowaysbuck} />
                        </div>
                            <img src={Qrcode} />
                        <div className='mt-2 ms-2'>
                            <span>on the wayt</span>
                        </div>
                        <div className='mt-2 ms-2'>
                            <span>{Rp.convert(total)}</span>
                        </div>
                    </div>
            </div>
        </div>
    </div>
    </>
  )
}
