import { Button, Stack } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate()

    return (
        <Stack sx={{
            width: '100%',        // Ensure it takes up the full width
            position: 'fixed',     // Fixes the footer to the bottom
            top: 15,             // Aligns it to the bottom
            flexDirection: 'row',  // Aligns the icons in a row
            justifyContent: {sm:'start',md:'end'}, // Center the icons horizontally
            alignItems: 'center',  // Vertically center the icons
            px: 2,

        }}>
            <Stack sx={{ flexDirection: 'row', justifyContent: 'end', mr: 5 }}>
                <Button sx={{ color: '#287759', fontWeight: 'bold', fontSize: '18px' }} onClick={() => navigate('/')}>
                    About
                </Button>
                <Button sx={{ color: '#287759', fontWeight: 'bold', fontSize: '18px' }} onClick={() => navigate('/products')}>
                    Products
                </Button>
                <Button sx={{ color: '#287759', fontWeight: 'bold', fontSize: '18px' }} onClick={() => navigate('/contact')}>
                    Contact
                </Button>



            </Stack>
        </Stack>
    )
}

export default Header