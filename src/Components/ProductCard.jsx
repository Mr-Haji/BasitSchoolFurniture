import { IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import D1 from '../Pics/1.jpg'
import { Cat_Data } from './Data'
const ProductCard = ({ ProductImage, ProductName, ProductClick, ProductCTA }) => {
    const navigate = useNavigate()




    return (
        <Stack onClick={ProductClick}>


            <Typography sx={{
                width: { md: '140px' },
                minheight: { md: '180px' },
                border: '2px solid #287759',
                borderRadius: '30px',
                textAlign: 'center',
                p:1,
                ":hover": {
                    transform: "scale3d(1.05, 1.05, 1)",
                    boxShadow: '1px 1px 5px #287759'

                }

            }}>
                <IconButton>
                    <img src={ProductImage}
                        style={{ width: '100px' }}
                    />
                </IconButton>

                <Typography sx={{
                    textAlign: 'center',
                    borderTop: '2px Solid #287759',
                    cursor: 'pointer',
                    color: 'ActiveBorder',
                    fontWeight: 'bold',
                    textDecoration: 'none',
                    fontSize: '13px'
                }}  >
                    {ProductName}
                </Typography>
                {
                    ProductCTA ? <Typography sx={{
                        textAlign: 'center',
                        borderTop: '2px Solid #287759',

                    }} >
                        <IconButton sx={{
                            color: 'black',
                            fontSize: '15px',
                            cursor: 'pointer',
                            fontWeight: 'bold',
                            textDecoration: 'none',
                        }}
                            href="https://wa.me/923071881156"
                            target='_blank'
                        >
                            {ProductCTA || ''}
                        </IconButton>
                    </Typography> : ''
                }

            </Typography>
        </Stack>
    )
}

export default ProductCard