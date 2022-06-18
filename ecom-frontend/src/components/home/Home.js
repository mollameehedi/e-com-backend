import React,{useState,useEffect} from 'react'
import Layout from '../Layout'
import { getProducts, getFilteredProducts, getCategories } from '../../api/apiProduct';
import Card from './Card';
import { showError, showSuccess } from '../../utils/messages';
import CheckBox from './CheckBox';
import RadioBox from './RadioBox';
import { prices } from '../../utils/prices';
import {isAuthenticated, userInfo} from '../../utils/auth';
import {addToCart} from '../../api/apiOrder';

const Home = () => {
  const [products, setProduct] = useState([]);
  const [limit, setLimit] = useState(30);
  const [skip, setSkip] = useState(0);
  const [order, setOrder] = useState('desc');
  const [sortBy, setSortBy] = useState('createdAt')
  const [error, setError ] = useState(false);
  const [success, setSuccess] = useState(false);
  const [categories, setCategories] = useState([]);
  const [filters, setFilters] = useState({
    category:[],
    price:[]
  })

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

 const handleAddToCart = product => () => {
    if(isAuthenticated()){
      setError(false);
      setSuccess(false);
      const user = userInfo();
      const cartItem = {
        user:user._id,
        product:product._id,
        price:product.price
      }
      addToCart(user.token, cartItem)
      .then(response => {
        setSuccess(true)
      })
      .catch(err =>{
        if(err.response) setError(err.response.data);
        else setError('Adding to cart Failed!!');
      })
    }else{
      setSuccess(false);
      setError('Please Login First!!');
    }
 }

 const handleFilters = (myfilters, filterBy) =>{
const newFilters = {...filters};
    if(filterBy === 'category') {
        newFilters[filterBy] = myfilters;
    }
    if (filterBy === 'price') {
        const data = prices;

        let arr = [];
        for(let i in data){
          if(data[i].id === parseInt(myfilters)){
            arr = data[i].arr;
          }
        }
        newFilters[filterBy] = arr;
    }
    setFilters(newFilters);
    getFilteredProducts(skip, limit,newFilters,order,sortBy)
    .then(response => setProduct(response.data))
    .catch(err => setError('Failed to load products'))
 }

 const showFilters = () =>{
  return(<>
          <div className='row'>
                <div className='col-sm-3'>
                      <h5>Filter By Category</h5>
                      <ul>
                        <CheckBox categories={categories}
                        handleFilters={myfilters => handleFilters(myfilters, 'category')}
                        />
                      </ul>
                </div>
                <div className='col-sm-5'>
              <h5>Filter By Price: </h5>
              <div className='row'>
                <RadioBox
                  prices={prices}
                  handleFilters={myfilters => handleFilters(myfilters, 'price')}
                />
              </div>
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
          handleAddToCart={handleAddToCart(product)}
          />)}
      </div>
    </Layout>
  )
}

export default Home