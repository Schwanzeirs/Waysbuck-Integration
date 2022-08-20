import React, { useState, useContext, Component } from 'react'
import Landing from '../components/background'
import "../styles/style.css"
import { Card } from 'react-bootstrap'
import { useNavigate } from "react-router-dom"
import { useQuery } from 'react-query';
import { API } from '../config/api'
import Rectangle from '../assets/img/Rectangle.png'
import NavbarAdmin from './admin/navbarAdmin'
import NavbarUser from '../customer/navbarUser'
import DummyDataDrink from "../components/DataDummy/DataDrink"
import { Usercontext } from '../context/user-context'
import '../styles/style.css'

export default function Main() {

  let { data: products } = useQuery('productsCache', async () => {
    const response = await API.get('/products');
    return response.data.data;
  });

  const [drinks] =useState(DummyDataDrink)
  const moving = useNavigate()
  const handleTitle = (id) => {
    moving('/detail-drink/' + id)
  }
  
  return (
    <>
      <div className='navbar ms-5 me-5 '>
        <div className='auth '>
        <NavbarUser/>
        </div>
      </div>
        <div className=''>
                  <Card id='card-main'>
                  <div className='card-name'>
                      <p id="title-card-home">Waysbuck</p>
                  </div>
                  <div className='card-name'>
                      <p id='title-card-home2'>Things are changing, but we're still here for you</p>
                  </div>
                  <div className='card-name'>
                      <p id='title-card-home2'>We have temporarily closed our in-store cafes, but select grocery and drive-thru locations remaining open. <b className='fw-bold'>Waysbucks</b> Drivers is also availabe <br></br><br></br> Let's Order...</p>
                  </div>
                  <Landing />
                  <img id='img-main' src={Rectangle} />
              </Card>
              <div className='f1'>
                    <p>Let's order</p>
              </div>
              <div className='f2 me-5 mb-5'>
                {products?.map((item, index) => (
                  <Card className="DrinkList me-5 mb-3" style={{ width: '18rem' }} item={item} key={index}>
                  <Card.Img variant="top" src={item?.img} onClick={() => handleTitle(item?.id)}/>
                  <Card.Body>
                    <Card.Title className='cardTitle mb-3'>{item?.title}</Card.Title>
                    <Card.Text className='cardPrice mb-2'>Rp.{item?.price}</Card.Text>
                  </Card.Body>
                </Card>
                ))}
              </div>
        </div>
  </>
  )
}
