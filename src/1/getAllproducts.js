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
        filters.maxPrice
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