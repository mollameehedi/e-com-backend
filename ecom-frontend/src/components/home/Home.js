import React,{useState,useEffect} from 'react'
import Layout from '../Layout'
import { getProducts, getProductDetails, getCategories } from '../../api/apiProduct';
import Card from './Card';
import { showError, showSuccess } from '../../utils/messages';

const Home = () => {
  const [products, setProduct] = useState([]);
  const [limit, setLimit] = useState(30);
  const [order, setOrder] = useState('desc');
  const [sortBy, setSortBy] = useState('createdAt')
  const [error, setError ] = useState(false);
  const [success, setSuccess] = useState(false);

 useEffect(() =>{
  getProducts(sortBy, order, limit)
  .then(response => setProduct(response.data))
  .catch(err => {
    console.log(err) 
    setError('Failed to load products!')
  })
 },[]);

  return (
    <Layout title='Home Page' className='container-fluid'>
      <div style={{  width:"100%"  }}>
        { showError(error, error)}
        {showSuccess(success, "Added to cart successfully!")}
      </div>
      <div className='row'> 
          {products && products.map(product => <Card 
          product={product} key={products._id}
          />)}
      </div>
    </Layout>
  )
}

export default Home