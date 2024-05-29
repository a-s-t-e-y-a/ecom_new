
import { IconButton } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Input } from '@material-tailwind/react';
const SearchBar = () => {
  return (
    <div className='flex bg-white px-2 items-center w-70 '>
      <IconButton aria-label="delete" size="small">
        <SearchIcon fontSize="medium" />
      </IconButton>
      <Input className='rounded-md px-2 outline-none ring-0 focus:outline-none focus:ring-0' placeholder='Search...'/>
    </div>
  )
}

export default SearchBar