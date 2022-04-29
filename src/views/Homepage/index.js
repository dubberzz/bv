import React,{useState} from 'react';
import {Button} from "@mui/material";


export function Homepage() {
    const [open , setOpen] =useState(false);
    const [obj ,setObj] = useState({});
    const [array , setArray] = useState([]);

    const booleanFunction = () => {
        setOpen(!open)
    }

    const objectFunction = () => {
        const newObject = { size: 10}
        setObj(newObject)
        //setObj({ size: 10})
    }

    const arrayFunction = () => {
         setArray([1, 2, { size: 10}])
    }
    console.log("Boolean",open )
    console.log("Object",obj )
    console.log("Array",array )
    return (
        <div>
            <Button onClick={booleanFunction}>
               Boolean
            </Button>
            <Button onClick={objectFunction}>
                 Object
            </Button>
            <Button onClick={arrayFunction}>
                Array
            </Button>
            <div>
                {open.toString()}
                {obj?.size}
                {array.map((item,index)=>{
                    return (
                        item?.size ? item.size : item
                    );
                })}
            </div>
        </div>
    )

}

export default Homepage;
