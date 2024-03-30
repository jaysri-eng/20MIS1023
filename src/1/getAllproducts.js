import React, { useState, useEffect } from 'react';
// import { fetchProducts } from '../utils/api';
// import ProductList from '../components/ProductList';
import FilterForm from './form';
const API_BASE_URL = 'http://20.244.56.144/test/companies';

const fetchProducts = async (company, category, n, minPrice, maxPrice) => {
  const url = `${API_BASE_URL}/${company}/categories/${category}/products?top=${n}&minPrice=${minPrice}&maxPrice=${maxPrice}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const AllProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    company: 'AMZ',
    category: 'Phone',
    minPrice: 0,
    maxPrice: 1000,
    n: 10,
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProducts(
        filters.company,
        filters.category,
        filters.n,
        filters.minPrice,
        filters.maxPrice,
        {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzExNzkzNDM1LCJpYXQiOjE3MTE3OTMxMzUsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjNhMzdjNjlkLTU5N2UtNDg2ZC05NmIyLWY2OWRhNzIyZjZiYSIsInN1YiI6ImpheWFudGhzcmluaXZhc2FuLnIyMDIwQHZpdHN0dWRlbnQuYWMuaW4ifSwiY29tcGFueU5hbWUiOiJwYXJhZG94IiwiY2xpZW50SUQiOiIzYTM3YzY5ZC01OTdlLTQ4NmQtOTZiMi1mNjlkYTcyMmY2YmEiLCJjbGllbnRTZWNyZXQiOiJvdGVsUVdPWm5QTlZRcFdiIiwib3duZXJOYW1lIjoiamF5YW50aCIsIm93bmVyRW1haWwiOiJqYXlhbnRoc3Jpbml2YXNhbi5yMjAyMEB2aXRzdHVkZW50LmFjLmluIiwicm9sbE5vIjoiMjBNSVMxMDIzIn0.YdEv-FQlAN4i8WbVgFKGff1quUCVsnXxImOrUm9Ir_s',
        }
      );
      setProducts(data);
    };
    fetchData();
  }, [filters]);

  const handleFilterChange = (newFilters) => {
    setFilters((prevFilters) => ({
      ...prevFilters, 
      ...newFilters,
    }));
  };
  

  return (
    <div>
      <FilterForm onFilterChange={handleFilterChange} />
    </div>
  );
};

export default AllProductsPage;