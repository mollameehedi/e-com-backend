import { useState } from "react";


const CheckBox = ({categories}) =>{
    return categories.map(category =>(
        <li className="list-unstyled" key={category._id}>
            <input 
                type='checkbox'
                className='form-check-input'
            />
            <lable className='form-check-label'>{category.name}</lable>
        </li>
    ))
}

export default CheckBox;