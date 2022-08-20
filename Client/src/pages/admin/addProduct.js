import React, { useState } from 'react'
import { Button,Form } from 'react-bootstrap';

import NavbarAdmin from './navbarAdmin';


import '../../styles/addproduct.css'
import ikonupload from '../../assets/img/ikon-upload.png'
import Noimg from '../../assets/img/no-photo.jpg'


export default function AddProduct() {

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
      <NavbarAdmin/>
      <div className='page-add-product justify-content-center'>
        <div className='formPageProduct'>
          <div className='title-product '>
            <h2>Product</h2>
          </div>
              <div className='form-addProduct ps-4 py-4 '>
                  <Form onSubmit={handleOnSubmit}>
                      <Form.Group className="mb-3" >
                          <Form.Control className='inputProduct' name='name' type="text" onChange={handleOnChange} placeholder="Name Product" />
                      </Form.Group>
                      <Form.Group className=" mt-4" >
                          <Form.Control className='inputProduct' name='price' onChange={handleOnChange} type="text" placeholder="Price" />
                      </Form.Group>
                      <Form.Group className="mb-5" >
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
                            <Form.Control className="inputProduct" type="text" placeholder="Photo Product" />
                        </Form.Group>                     
                      <Button className='button-addProduct justify-content-center mt-3' variant="danger" type="submit">
                          Add Product
                      </Button>
                  </Form>
              </div>
        </div>
            <div className='imgProduct ms-5'>
                <img src={preview || Noimg }/>
            </div>
      </div>
    </>
  )
}
