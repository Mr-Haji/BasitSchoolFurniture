import React from 'react';
import { Stack, Typography } from '@mui/material';

const DetailStack = ({ label, value }) => (
  <Stack
    sx={{
      flexDirection: { sm: 'column', md: 'row' },
      gap: 2,
      alignItems: { sm: 'center', md: 'start' },
      justifyContent: { sm: 'center', md: 'start' },
      px: 2,
      borderTop: { sm: '1px solid black', md: 'none' },
    }}
  >
    <Typography sx={{ fontWeight: 'bold', fontSize: '20px' }}>
      {label}:
    </Typography>
    <Typography sx={{ fontWeight: 'bold', fontSize: '20px' }}>
      {value}
    </Typography>
  </Stack>
);

const About = () => {
  return (
    <Stack
      className='body'
      
    >
      <Stack
        sx={{
          bgcolor: 'rgba(255,255,255,0.7)',
          borderRadius: '30px',
          width: '95vw',
          border: '1px solid #000',
          minHeight: '95vh',
          flexDirection: { sm: 'column', md: 'row' },
          justifyContent: 'space-around',
          alignItems: 'center',
          gap: 5,
          px: 5,
          pb: { xs: 12, md: 0, sm: 0 }
        }}
      >
        <Stack
          sx={{
            mt: '50px',
            width: { sm: '400px', md: '600px' },
            height: { sm: '400px', md: '450px' },
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7240.552830530547!2d67.08139306557415!3d24.854407228998106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33d778a1b4213%3A0x6ccd69e9097a8bdd!2sManzoor%20Colony%20Furniture%20Market!5e0!3m2!1sen!2s!4v1724452622553!5m2!1sen!2s"
            style={{
              width: '100%',
              height: '100%',
              border: '1px solid #000',
              borderRadius: '30px',
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Stack>

        <Stack
          sx={{
            gap: 5,
            textAlign: { sm: 'center', md: 'start' },
          }}
        >
          <DetailStack
            label="Address"
            value="Shop No 125 Plot No 45-F, Madni Plaza, Rukhsar Road, Manzor Colony, Karachi"
          />
          <DetailStack
            label="Contact"
            value="+92 345 256 2385"
          />
          <DetailStack
            label="Email"
            value="basitfurniture@gmail.com"
          />
          <DetailStack
            label="Logistic Support"
            value="We Can Deliver Across Pakistan"
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default About;
