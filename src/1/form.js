import React, { useState } from 'react';

const FilterForm = ({ onFilterChange }) => {
    const [company, setCompany] = useState('AMZ');
    const [category, setCategory] = useState('Phone');
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(1000);
    const [n, setN] = useState(10);
  
    const handleCompanyChange = (e) => {
      setCompany(e.target.value);
    };
  
    const handleCategoryChange = (e) => {
      setCategory(e.target.value);
    };
  
    const handleMinPriceChange = (e) => {
      setMinPrice(parseInt(e.target.value, 10));
    };
  
    const handleMaxPriceChange = (e) => {
      setMaxPrice(parseInt(e.target.value, 10));
    };
  
    const handleNChange = (e) => {
      setN(parseInt(e.target.value, 10));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onFilterChange({ company, category, minPrice, maxPrice, n });
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="company">Company:</label>
          <select id="company" value={company} onChange={handleCompanyChange}>
            <option value="AMZ">AMZ</option>
            <option value="FLP">FLP</option>
            <option value="SNP">SNP</option>
            <option value="MYN">MYN</option>
            <option value="AZO">AZO</option>
          </select>
        </div>
  
        <div>
          <label htmlFor="category">Category:</label>
          <select id="category" value={category} onChange={handleCategoryChange}>
            <option value="Phone">Phone</option>
            <option value="Computer">Computer</option>
            <option value="TV">TV</option>
            <option value="Earphone">Earphone</option>
            <option value="Tablet">Tablet</option>
            <option value="Charger">Charger</option>
            <option value="Mouse">Mouse</option>
            <option value="Keypad">Keypad</option>
            <option value="Bluetooth">Bluetooth</option>
            <option value="Pendrive">Pendrive</option>
            <option value="Remote">Remote</option>
            <option value="Speaker">Speaker</option>
            <option value="Headset">Headset</option>
            <option value="Laptop">Laptop</option>
            <option value="PC">PC</option>
          </select>
        </div>
  
        <div>
          <label htmlFor="minPrice">Min Price:</label>
          <input
            type="number"
            id="minPrice"
            value={minPrice}
            onChange={handleMinPriceChange}
          />
        </div>
  
        <div>
          <label htmlFor="maxPrice">Max Price:</label>
          <input
            type="number"
            id="maxPrice"
            value={maxPrice}
            onChange={handleMaxPriceChange}
          />
        </div>
  
        <div>
          <label htmlFor="n">Number of Products:</label>
          <input type="number" id="n" value={n} onChange={handleNChange} />
        </div>
  
        <button type="submit">Apply Filters</button>
      </form>
    );
  };
  
  export default FilterForm;