import { useState,useEffect } from "react";


const CheckBox = ({categories,handleFilters}) =>{
    const [checked, setChecked] = useState([]);
    const checkedIds = [...checked];


    const handleToggle = id=> () =>{
        const foundId = checked.indexOf(id);
        if(foundId === -1){
            checkedIds.push(id);
        }else{
            checkedIds.splice(foundId,1);
        }
        setChecked(checkedIds);
        handleFilters(checkedIds)
    }

    return categories.map(category =>(
        <li className="list-unstyled" key={category._id}>
            <input 
                onChange={handleToggle(category._id)}
                type='checkbox'
                className='form-check-input'
                value={checked.indexOf(category._id === -1)}
            />
            <lable className='form-check-label'>{category.name}</lable>
        </li>
    ))
}

export default CheckBox;