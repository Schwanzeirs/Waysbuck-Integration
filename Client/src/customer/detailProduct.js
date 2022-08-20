import React, { useState } from 'react'
import { Row,Col,Button } from 'react-bootstrap'
import NavbarUser from './navbarUser'
import '../styles/detailProduct.css'
import Rp from "rupiah-format"
import { useParams } from 'react-router'
import DummyDataToping from "../components/DataDummy/DataToping"
import DummyDataDrink from "../components/DataDummy/DataDrink"
import Toping from "../assets/img/toping/toping2.png"
import DataDrink from '../components/DataDummy/DataDrink'

export default function DetailProduct() {

  const [checkedState, setCheckedState] = useState(
    new Array(DummyDataToping.length).fill(false)
  )

  const [total, setTotal] = useState(0);

  const id = useParams()

    const [Detail] = useState(DataDrink)

    const index = id.id

    const response = Detail[index]

    const handleOnChange = (position) => {
        const updateCheckedState = checkedState.map((item, index) =>
        index === position? !item: item)

        setCheckedState(updateCheckedState)

        const totalPrice = updateCheckedState.reduce(
            (sum, currenstState, index) => {
                if (currenstState === true) {
                    return sum + DummyDataToping[index].price
                }
                return sum
            },
            0
        )
        console.log(totalPrice);
        setTotal(totalPrice)
          }

          
          //   const handleOnchage = (id) => {
//     const updateCheckedState = checkedState.map((item, index) =>
//         index === id ? !item : item
//     )

//     setCheckedState(updateCheckedState);

//     const totalPrice = updateCheckedState.reduce(
  //         (sum, currentState, index) => {
    //             if (currentState === true) {
      //                 return sum + DummyDataToping[index].price
      //             }
      //             return sum;
//         },
//     );
//     console.log(totalPrice);
//     setTotal(totalPrice)
// }

//   // const { id } = useParams(DummyDataToping)
//   const id = useParams()
//   console.log(id);
//   const [topping] = useState(DummyDataToping)
//   const [drinksDummy] = useState(DummyDataDrink)
//   console.log(drinksDummy);
//   const [CartCounter, setCartCounter] = useState(0)
//   const index = ( id.id - 1 )
//   console.log(index);
//   const response = drinksDummy[index]
// console.log(response);
const [cartCounter, setCartCounter] = useState(0)
console.log(cartCounter);
const handleOnIncrease = () => {
  return setCartCounter(cartCounter + 1)
}          

return (
    <>
      <NavbarUser plusOne={cartCounter}/>
      <div className='d-flex justify-content-center mt-5'>
        <div className='detailProdukImg'>
         <img src={response?.img}/>
        </div>
        <div className='title-detailProduct ms-3' style={{width:'40%'}} >
          <h2 className='ms-4' style={{color :'#BD0707'}}>{response?.name}</h2>
          <p className='mt-3 mb-5 ms-4'>{Rp.convert(response.price)}</p>
          <div className='list-toping mt-5'>
            <h5>Toping</h5>
                <div className='toping'>
                    <Row className='list-toping1'>
                      {DummyDataToping.map((item, index) =>(
                        <Col key={index} className='col-toping'>
                          <div className='d-flex justify-content-center'>
                            <input 
                              type="checkbox" 
                              className="poppingCheck" 
                              style={{display:"none"}}
                              id={`custom-checkbox-${index}`}
                              checked={checkedState[index]}
                              onChange={() => handleOnChange(index)}
                              hidden/>
                          <label htmlFor={`custom-checkbox-${index}`}>
                            <img src={item?.img} style={{cursor : 'pointer'}}/>
                          </label>
                          </div>
                              <p className='mt-1 ms-4  text-center fw-bolder fs-6'>{item?.name}</p>
                              {/* <div>
                                <p>{item?.price}</p>
                              </div> */}
                        </Col>
                      ))}
                      <Row className='justify-content-between mb-3 mt-5'>
                        <Col className='col-8 ms-4' style={{color: '#974A4A'}}><p>Total</p></Col>
                        <Col  className='col-2 me-3'>
                          <p className='font-weight-bold fs-6'>{Rp.convert(response.price+total)}</p> 
                        </Col>
                      </Row>
                      <Button variant="danger" className='ms-4 mb-5' style={{width: '92%'}} onClick={handleOnIncrease}>Add Cart</Button>
                    </Row>
                </div>
          </div>
        </div>
      </div>
    </>
  )
}
