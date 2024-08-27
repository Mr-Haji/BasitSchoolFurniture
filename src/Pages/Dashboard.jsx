import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import NamePic from '../Pics/Name.png'
import { Cat_Data } from '../Components/Data'
import CarouselComponent from '../Components/Carousel.jsx'
const Dashboard = () => {
  return (
    <Stack className='body'>
      <Stack sx={{
        pb: { xs: 12, md: 2, sm: 0 },
        bgcolor: 'rgba(255,255,255,0.7)',
        borderRadius: '30px',
        width: '95vw',
        minHeight: '95vh',
        gap: '25px',
        justifyContent: 'space-around',
        border: '1px solid #000',
      }} >

        {/* Upper Half */}
        <Stack sx={{ minHeight: { xs: '100%', md: '60%' }, gap: 5, justifyContent: 'space-around' }} >

          <Stack sx={{
            justifyContent: 'center',
            alignItems: 'center',
            mt: 10
          }}>
            <Box
              component="img"
              sx={{
                width: {
                  xs: '300px', // small screens
                  sm: '450px', // medium screens
                  md: '550px', // large screens
                },
                height: 'auto', // maintain aspect ratio
              }}
              src={NamePic}
            />
          </Stack>




          <Stack sx={{
            px: 5,
            justifyContent: 'center',
            alignItems: 'center'
          }} >
            <Typography sx={{
              fontSize: '20px'
            }}>
              At Basit Furniture, we craft exceptional, high-quality furniture designed to elevate every space.<span style={{ color: '#287759', fontWeight: 'bold', fontSize: '23px', fontStyle: 'italic' }}>
                With decades of expertise in furniture manufacturing</span>, we specialize in creating innovative, durable, and stylish pieces that reflect the latest
              <span style={{ color: '#287759', fontWeight: 'bold', fontSize: '23px', fontStyle: 'italic' }}>

                design trends and meet the needs of modern living.
              </span>
              Our range includes everything from office and commercial furniture to custom-built home furnishings, all meticulously crafted with attention to detail. We take pride in using premium materials and sustainable practices to ensure <span style={{ color: '#287759', fontWeight: 'bold', fontSize: '23px', fontStyle: 'italic' }}>
                that every product stands the test of time.
              </span>

              Whether you're furnishing a home, workplace, or commercial space, our team of skilled artisans and designers work tirelessly to bring your vision to life. We combine craftsmanship with cutting-edge technology to deliver furniture that is not
            </Typography>
          </Stack>












        </Stack>


        {/* Lower Half */}
        <Stack>
          <Stack sx={{
            flexDirection: 'row',
          }}>
            <CarouselComponent SlidesData={Cat_Data} />
          </Stack>

        </Stack>



















































      </Stack>
    </Stack >
  )
}

export default Dashboard