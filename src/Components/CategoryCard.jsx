import { Stack } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const CategoryCard = ({ CategoryName, CategoryImage, CategoryId }) => {
  const navigate = useNavigate();

  const navigateToNextPage = () => {
    navigate('/products', {
      state: { id: CategoryId },
    });
  };

  return (
    <Stack sx={{
      justifyContent: 'center',
      alignItems: 'center',
      mb: 2
    }}>

      <Stack
        sx={{
          border: '1px solid #000',
          width: '200px', 
          height: '200px', 
          borderRadius: '30px',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 2,
          cursor: 'pointer', // Indicate that the card is clickable
          transition: 'box-shadow 0.3s ease-in-out',
          ":hover": {
            boxShadow: '5px 5px 15px #287759',
          },
        }}
        onClick={navigateToNextPage}
        role="button"
        aria-label={`Navigate to ${CategoryName || 'Category'} products`} // Accessibility improvement
      >
        <img
          src={CategoryImage || '/fallback_image.jpg'} // Ensure correct path for fallback image
          style={{ width: '80%', height: '80%', objectFit: 'cover' }} // Make sure image scales nicely
          alt={CategoryName || 'Category Image'}
        />
        <Stack
          sx={{
            textAlign: 'center', // Center text below the image
          }}
        >
          {CategoryName || 'Category Name'}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default CategoryCard;
