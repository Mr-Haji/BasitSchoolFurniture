import * as React from 'react';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Facebook, Instagram, WhatsApp } from '@mui/icons-material';

export default function Footer() {
    return (
        <Stack
            sx={{
                width: '100%',
                position: 'fixed',
                bottom: 15,
                flexDirection: { xs: "column", sm: 'column', md: 'row' },
                justifyContent: { xs: 'center', sm: 'center', md: 'space-between' },
                alignItems: 'center',
                px: { xs: 4, md: 8 },
                py: { xs: 2, md: 0 }

            }}
        >
            <Stack
                direction="row"
                spacing={2} // Space between icons
                sx={{

                    color: '#287759'

                }}
            >
                <IconButton
                    color="inherit"
                    href="https://www.linkedin.com/company/tech-masters-official/"
                    aria-label="LinkedIn"
                    target='_blank'
                >
                    <LinkedInIcon />
                </IconButton>

                <IconButton
                    color="inherit"
                    href="https://www.instagram.com/thetechmastersofficial/"
                    aria-label="Instagram"
                    target='_blank'
                >
                    <Instagram />
                </IconButton>

                <IconButton
                    color="inherit"
                    href="https://www.facebook.com/profile.php?id=61559357555605"
                    aria-label="Facebook"
                    target='_blank'
                >
                    <Facebook />
                </IconButton>

                <IconButton
                    color="inherit"
                    href="https://wa.me/923071881156"
                    aria-label="Whatsapp"
                    target='_blank'
                >
                    <WhatsApp />
                </IconButton>
            </Stack>
            <Stack sx={{
                color: "#287759"
            }}>

                <p>
                    © 2017 Zunn Designs. All Rights Reserved.
                </p>

            </Stack>


        </Stack>
    );
}
