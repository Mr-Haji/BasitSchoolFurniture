import { Grid, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ProductCard from '../Components/ProductCard';
import { Cat_Data, Product_Data } from '../Components/Data.js';
import { useLocation, useNavigate } from 'react-router-dom';

const Products = () => {
  const [ProductData, setProductData] = useState(Product_Data); // Initialize with an empty array
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
    console.log('Current Id:', StdId);

    if (StdId) {
      const filteredData = ProductData.filter((product) =>
        product.code.toLowerCase().includes(StdId.toLowerCase())
      );
      setFilteredProductData(filteredData); // Set filtered data
    } else {
      setFilteredProductData(ProductData); // Reset to original data if no search
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
        height: '100vh', // Full viewport height
        width: '100%', // Full width
        justifyContent: 'center', // Center vertically
        alignItems: 'center', // Center horizontally
        boxSizing: 'border-box', // Ensure padding and borders are considered
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
          overflow: 'hidden', // Prevent overflow
        }}
      >
        {/* Sidebar or Filter */}
       <Stack
      sx={{
        width: '25%', // Adjust width to fit the remaining space
        py: 5,
        px: 2,
        overflow: 'auto', // Changed from 'scroll' to 'auto' for better UX
        display: { xs: 'none', md: 'flex' }, // Display 'none' on extra-small screens, 'flex' on medium and larger screens
      // flexDirection:{xs:'row',md:'column'}
      }}
    >
        <Grid container spacing={3} gap={2}>
          {Cat_Data.map((e, i) => (
            <Grid item md={5} key={i}>
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
          width: '75%', // Adjust width to fit the remaining space
          p: 5,
          overflow: 'scroll',
        }}
      >
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
