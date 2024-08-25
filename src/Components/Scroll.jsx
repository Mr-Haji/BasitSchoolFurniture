import { Stack, Typography } from '@mui/material'
import React from 'react'
import CarouselComponent from './Carousel'
import NamePic from '../Pics/Name.png'
import { Cat_Data } from './Data'




const Scroll = () => {

    return (
        <Stack

            sx={{
                height: { sm: '100%', md: "100vh" },  // Full viewport height
                width: { sm: '100%', md: "100vw" },  // Full width
                justifyContent: 'center',  // Center vertically
                alignItems: 'center',  // Center horizontally
                boxSizing: 'border-box',  // Ensure padding and borders are considered
            }}
        >
            <Stack sx={{
                bgcolor: 'rgba(255,255,255,0.7)',
                borderRadius: '30px',
                width: '95vw',
                border: '1px solid #000',
                height: { sm: '100%', md: "100vh" },  // Full viewport height

            }}>
                <Stack sx={{
                    height: { sm: '100%', md: '60%' },
                    justifyContent: 'center',
                    alignItems: 'center',
                    m: '-25px'

                }}>
                    {/* Display Poster */}
                    <img src={NamePic} style={{ width: 550 }} />
                    <Stack>
                        <Typography sx={{
                            mt: '-120px',
                            mx: 10,
                            mb: 10,
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
                {/* Cards */}
                <Stack sx={{
                    height: '40%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexWrap: 'wrap',

                }}>
                    {/* Category Cards */}

                    <Stack sx={{
                        flexDirection: 'row',
                        gap: '10px'
                    }}>
                        <CarouselComponent SlidesData={Cat_Data} />


                    </Stack>


                </Stack>







            </Stack>







        </Stack >
    )
}

export default Scroll