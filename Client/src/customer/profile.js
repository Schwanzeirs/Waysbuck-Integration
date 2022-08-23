import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import { API } from '../../src/config/api'

import { Button } from 'react-bootstrap';
import NavbarUser from "./navbarUser";
import DummyProfile from "../components/DataDummy/dataprofile"
import Dummytransactions from "../components/DataDummy/transactiocard"
import "../styles/profile.css";
import Rp from "rupiah-format"
import Profilephoto from '../assets/img/profilephoto.png'
import Logowaysbuck from '../assets/img/logowaysbuck.png'
import Qrcode from '../assets/img/qrcode.png'

export default function Profile() {

  const [ dataTrans, setDataTrans ] = useState([]);

  useEffect(() => {
    const dataTrans = async () => {
      try {
        const response = await API.get("/carts");
        setDataTrans(response.data.data)
      } catch (error) {
        console.log(error);
      }
    };
    dataTrans();
  }, [setDataTrans]);

  const moving = useNavigate()
  const moveTodAddprofile = () => {
    moving(`/addprofile`)
  }
  const moveTodEditprofile = () => {
    moving(`/editprofile`)
  }

    const profilephoto = <img src={Profilephoto}/>

    const [profileDummy] = useState(DummyProfile)
    const dataCustomer = profileDummy[0]
    
    const [ DummyProduct ] = useState(Dummytransactions)

    let total = 0

    dataTrans.forEach((item) => {
        total += item?.sub_amount
    })

  const [dataprofile, setDataprofile] = useState([]);

  useEffect(() => {
    const dataprofile = async () => {
      try {
        const response = await API.get("/profiles");
        setDataprofile(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    dataprofile();
  }, [setDataprofile]);
  

    const [cartCounter, setCartCounter] = useState(0)
  return (
    <>
    <NavbarUser plusOne={cartCounter}/>
    <div className='profile d-flex mt-4 py-3 justify-content-center'>
        <div className='myProfile ms-5'>
            <h2 className=''>MY PROFILE</h2>
            <div className='d-flex mt-4 mb-2'>
                {dataprofile.map((item, index) => (
                <div key={index} item={item}>
                <div className='img-profile'>
                    <img src={item?.image}/>
                </div>
                <div className='detail-profile'>
                    <h5 style={{color:'#613D2B;'}} className='ms-4'>Full name</h5>
                    <p className='ms-4'>{item.user.name}</p>
                    <h5 style={{color:'#613D2B;'}} className='ms-4 mt-3'>Email</h5>
                    <p className='ms-4'>{item.user.email}</p>
                    <h5 style={{color:'#613D2B;'}} className='ms-4 mt-3'>Phone</h5>
                    <p className='ms-4'>{item.phone}</p>
                    <h5 style={{color:'#613D2B;'}} className='ms-4 mt-3'>Address</h5>
                    <p className='ms-4'>{item.address}</p>
                    <h5 style={{color:'#613D2B;'}} className='ms-4 mt-3'>Gender</h5>
                    <p className='ms-4'>{item.gender}</p>
                </div>
                </div>
                ))}
            </div>
            <Button className='me-1' variant="danger" onClick={() => moveTodAddprofile()}>Add Profile</Button>
            <Button variant="danger" onClick={() => moveTodEditprofile()}>Edit Profile</Button>
        </div>
        <div className='myTransaction'>
         <h2 className=''>My Transaction</h2>
            <div className='d-flex rounded'>
                <div className='detailTransaction py-2 px-2'>
                    {dataTrans.map((item,index) => (
                            <div className='d-flex' key={index}>
                                <div>
                                    <img className='img-drink' src={item.product?.image} />
                                </div>
                                <div className='ms-3'>
                                    <h4 style={{color :"#BD0707"}}>{item.product?.title}</h4>
                                    {/* <p className='text-danger'> <strong>{item?.day}</strong>, {item?.date}</p> */}
                                    {item.topping.map((topping, idx) => (
                                    <p key={idx} className='text-danger'> Toping &nbsp; : {topping?.title}</p>
                                    ))}
                                    <p className='text-danger'>Price : {Rp.convert(item?.sub_amount)}</p>
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
                            <span>on the way</span>
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
