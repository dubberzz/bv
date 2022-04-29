import React from 'react'
import {Link} from 'react-router-dom'
import { Button } from '@mui/material';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Market = ({ prod }) => {
  return (
    <div className='container'>
        <Link to='/products'>
            <Button
                to={`/products`}
                variant="outlined"
            ><ArrowBackIcon fontSize="small" />Back</Button>
        </Link>

        {prod===0 &&
            <div>
                <h1>Nu ai pus produse</h1>

            </div>
        }
        {prod>0 &&
            <h1>ceva</h1>
        }
        {prod>0 &&   
        <button className='btn2'>
            Plateste
        </button>
        }
    </div>

  )
}

export default Market;