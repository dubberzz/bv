import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import {alpha, styled} from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import {IconButton, OutlinedInput, TextField} from "@mui/material";



const SearchTextfield = (props) =>{
    const {onSearchChange} = props ;
     return (
         <div>
         <OutlinedInput
             onChange={onSearchChange}
             placeholder="Search ..."
             endAdornment={<SearchIcon/>}
         />
         </div>
     );
}

export default SearchTextfield;