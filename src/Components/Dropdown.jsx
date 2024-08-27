import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useNavigate } from 'react-router-dom';
import { Cat_Data } from './Data';
import { Stack } from '@mui/material';
import { styled } from '@mui/system';

// Customize the Select component
const CustomSelect = styled(Select)({
    '&:before': {
        borderColor: 'green', // Border color before focus
    },
    '&:after': {
        borderColor: 'green', // Border color on focus
    },
    '& .MuiSelect-icon': {
        color: 'green', // Arrow color
    }
});

// Customize the InputLabel component
const CustomInputLabel = styled(InputLabel)({
    color: 'green', // Label color
    '&.Mui-focused': {
        color: 'green', // Label color on focus
    }
});

export default function Dropdown() {
    const [Category, setCategory] = useState('');
    const navigate = useNavigate();

    const handleChange = (event) => {
        const selectedCategory = event.target.value;
        setCategory(selectedCategory);
        navigate('/products', {
            state: { id: selectedCategory },
        });
    };

    return (
        <Stack sx={{ display: { md: 'none' }, mb: 2 }}>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <CustomInputLabel id="demo-simple-select-standard-label">Category</CustomInputLabel>
                <CustomSelect
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={Category}
                    onChange={handleChange}
                    label="Category"
                >
                    {Cat_Data.map((e, i) => (
                        <MenuItem key={i} value={e.code}>
                            {e.name}
                        </MenuItem>
                    ))}
                </CustomSelect>
            </FormControl>
        </Stack>
    );
}
