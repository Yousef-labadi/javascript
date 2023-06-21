import React, { useState, useEffect } from 'react';
import Form from '../components/Form';
import axios from 'axios';
import Display from '../components/Display';


const Main = () => {

  const [allProducts, setAllProducts] = useState([])
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    axios.get('http://localhost:8000/api/products')
      .then(res => { setAllProducts(res.data.products); setLoaded(true); })
      .catch(err => console.log(err))
  }, [])

  const handelSubmit = (product) => {
    
    axios.post('http://localhost:8000/api/products',product 
      
    )
      .then(res => {
        console.log(res);
        setAllProducts([...allProducts,res.data.product])
      })
      .catch(err => console.log(err))
  }

  return (
    <div>
      <Form initialTitle="" initialPrice="" initialDesc="" myFun={handelSubmit} />
      <hr />
      {loaded && <Display allProducts={allProducts} />}
    </div>
  )
}

export default Main