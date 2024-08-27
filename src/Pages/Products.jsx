import { Grid, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ProductCard from '../Components/ProductCard';
import { Cat_Data, Product_Data } from '../Components/Data.js';
import { useLocation, useNavigate } from 'react-router-dom';
import Dropdown from '../Components/Dropdown.jsx';

const Products = () => {

  const [filteredProductData, setFilteredProductData] = useState([]); // Store filtered data
  const { state } = useLocation(); // Get state passed from the previous page
  const navigate = useNavigate();

  // Function to navigate to another page
  const navigateToNextPage = (path, state) => {
    if (path) {
      navigate(path, { state });
    } else {
      navigate('/');
    }
  };

  // Function to filter products based on state.id
  const filterProducts = () => {
    const StdId = state?.id || ''; // Ensure state.id is accessible
    // console.log('Current Id:', StdId);

    if (StdId) {
      const filteredData = Product_Data.filter((product) =>
        product.code.toLowerCase().includes(StdId.toLowerCase())
      );
      setFilteredProductData(filteredData); // Set filtered data
    } else {
      setFilteredProductData(Product_Data); // Reset to original data if no search
    }
  };

  // Fetch product data on initial render and update when state.id changes


  // Re-run filtering whenever state.id changes
  useEffect(() => {
    filterProducts(); // Call the filter function when state.id changes
  }, [state?.id]);

  return (
    <Stack
      className="body"
      sx={{
        height: '100vh',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        boxSizing: 'border-box',
      }}
    >
      <Stack
        sx={{
          bgcolor: 'rgba(255,255,255,0.7)',
          borderRadius: '30px',
          width: '95vw',
          border: '1px solid #000',
          height: '95vh',
          flexDirection: 'row',
          overflow: 'hidden',
        }}
      >
        {/* Sidebar or Filter */}
        <Stack
          sx={{
            minWidth: '25%',
            overflow: 'auto',
            p: 2,
            display: { xs: 'none', md: 'flex' },
          }}
        >
          <Typography sx={{ fontSize: '18px', textAlign: 'center', fontWeight: 'bold', mb: 2 }}>Categories</Typography>
          <Grid container spacing={1} >
            {Cat_Data.map((e, i) => (
              <Grid item md={6} key={i}>
                <ProductCard
                  ProductClick={() => {
                    navigateToNextPage('/products', { id: e.code });
                  }}
                  ProductImage={e.image}
                  ProductName={e.name}
                />
              </Grid>
            ))}
          </Grid>
        </Stack>
        {/* Main Content */}

        <Stack
          sx={{
            minWidth: '75%',
            p: 5,
            overflow: 'scroll',
          }}
        >
          <Dropdown />
          <Grid container spacing={5}>
            {filteredProductData.length > 0 ? (
              filteredProductData.map((e, i) => (
                <Grid item xs={12} sm={6} md={2} key={i} sx={{ display: 'flex' }}>
                  <ProductCard ProductImage={e.image} ProductName={e.name} ProductCTA={'Order Now'} />
                </Grid>
              ))
            ) : (
              <p>Loading</p>
            )}
          </Grid>
        </Stack>
      </Stack>
    </Stack >
  );
};

export default Products;
