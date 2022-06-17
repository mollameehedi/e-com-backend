import React,{useState,useEffect} from 'react'
import Layout from '../Layout'
import { getProducts, getProductDetails, getCategories } from '../../api/apiProduct';
import Card from './Card';
import { showError, showSuccess } from '../../utils/messages';
import CheckBox from './CheckBox';

const Home = () => {
  const [products, setProduct] = useState([]);
  const [limit, setLimit] = useState(30);
  const [order, setOrder] = useState('desc');
  const [sortBy, setSortBy] = useState('createdAt')
  const [error, setError ] = useState(false);
  const [success, setSuccess] = useState(false);
  const [categories, setCategories] = useState([]);

 useEffect(() =>{
  getProducts(sortBy, order, limit)
  .then(response => setProduct(response.data))
  .catch(err => {
    console.log(err) 
    setError('Failed to load products!')
  });

  getCategories()
  .then(response => setCategories(response.data))
  .catch(err => setError('Failed to load Categories!'));


 },[]);

 const showFilters = () =>{
  return(<>
          <div className='row'>
                <div className='col-sm-3'>
                      <h5>Filter By Category</h5>
                      <ul>
                        <CheckBox categories={categories} />
                      </ul>
                </div>
          </div>
      </>)
 }

  return (
    <Layout title='Home Page' className='container-fluid'>
      {showFilters()}
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