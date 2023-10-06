import {useState} from 'react'

import { FaAngleDown } from "react-icons/fa6";


const SelectBox = () => {
    
    const [selectOption, setSelectOption] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState('');

    const options=["Men", "Women", "Bags", "Belt", "Shoes", "Outerwear"]

    const handleSelectHeader=()=>{
        setIsDropdownOpen(!isDropdownOpen)
    }

    const handleSelectOption=(option)=>{
        setSelectOption(option);
        setIsDropdownOpen(false);
    }

  return (
    <>
        <div className="selectContainer">
            <div className={`selectHeader ${isDropdownOpen ? 'open' : ''}`} onClick={handleSelectHeader}>
                {selectOption || "Select Catagorie"}
                <div><FaAngleDown /></div>
            </div>
            {isDropdownOpen && (
                <ul className='selectOption'>
                    {options.map((option)=>{
                    return <li key={option} className="liStyle" onClick={()=>handleSelectOption(option)}>{option}</li>
                    })}
                </ul>
            )}
        </div>
      
    </>
  )
}

export default SelectBox

