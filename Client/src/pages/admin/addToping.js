import React, { useState } from 'react'
import { Button,Form } from 'react-bootstrap';

import NavbarAdmin from "./navbarAdmin";

import '../../styles/addproduct.css'
// import toping1 from '../../assets/img/toping/toping1.png'
import ikonupload from '../../assets/img/ikon-upload.png'
import Noimg from '../../assets/img/no-photo.jpg'

export default function AddToping() {

  const [preview, setPreview] = useState(null)
    const [addProduct, setAddProduct] = useState({
        name : "",
        price : "",
        image : ""
    })

    const handleOnChange = (e) => {
        setAddProduct(({
            ...addProduct,
            [e.target.name]:e.target.type === 'file' ? e.target.files : e.target.value
          }))

          if (e.target.type === 'file') {
            let url = URL.createObjectURL(e.target.files[0]);
            setPreview(url);
          }
        };

    const handleOnSubmit = (e) => {
        e.preventDefault()
        
        alert('Data added sucesfully!')
    }
    console.log(addProduct);
  return (
    <>
    {/* <div className='navbar ms-5 me-5 mt-3 mb-3'>
        <div className='ms-5 mt-2'>
          <img src={logowaysbuck} />
        </div>
        <div className=''>
          <img className='profile-photo float-right-end rounded-circle py-2' src={Profile} />
        </div>
    </div> */}
    <NavbarAdmin/>
      <div className='page-add-product justify-content-center'>
        <div className='formPageProduct'>
          <div className='title-product '>
            <h2>Toping</h2>
          </div>
              <div className='form-addProduct ps-4 py-4 '>
                  <Form onSubmit={handleOnSubmit}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Control className='inputProduct' name='name' type="text" onChange={handleOnChange} placeholder="Name Toping" />
                      </Form.Group>
                      <Form.Group className=" mt-4" controlId="formBasicEmail">
                          <Form.Control className='inputProduct' name='price' type="text" onChange={handleOnChange} placeholder="Price" />
                      </Form.Group>
                      <Form.Group className="mb-5" controlId="inputProduct">
                            <input
                            type="file"
                            id="upload"
                            name="image"
                            onChange={handleOnChange}
                            hidden
                            />
                            <label for="upload" className="label-file-add-product">
                                <img className="position-absolute" src={ikonupload}/>
                            </label>
                            <Form.Control className="inputProduct" type="text" value={preview} placeholder="Photo Product" />
                        </Form.Group>                     
                      <Button className='button-addProduct justify-content-center mt-3' variant="danger" type="submit">
                          Add Toping
                      </Button>
                  </Form>
              </div>
        </div>
            <div className='imgProduct ms-5'>
                <img src={preview || Noimg}/>
            </div>
      </div>
    </>
  )
}
