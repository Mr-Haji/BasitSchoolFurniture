import { Button, Stack } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { App_Bar } from './Data'

const Header = () => {


    const navigate = useNavigate()

    return (
        <Stack sx={{
            width: '100%',
            position: 'fixed',
            top: 15,
            flexDirection: 'row',
            justifyContent: { xs: 'space-around', sm: 'center', md: 'end' },
            px: 2,

        }}>
            <Stack sx={{ flexDirection: 'row', justifyContent: 'end', mr: { xs: 0, sm: 0, md: 5 } }}>
                {App_Bar.map((e, i) => {
                    return (
                        <Button key={i} sx={{ color: '#287759', fontWeight: 'bold', fontSize: '18px' }} onClick={() => navigate(e.link)}>
                            {e.Name}
                        </Button>
                    )
                })}
            </Stack>
        </Stack>
    )
}

export default Header