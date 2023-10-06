import {useState} from 'react'

const SearchSelect = () => {

  const [selectedOption, setSelectedOption] = useState('')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const options = ["Men", "Women", "Bags", "Belt", "Shoes", "Outerwear"]
  
  const handleOptionClick=(option)=>{
    setSelectedOption(option);
    setIsDropdownOpen(false);
  }; 

  const handleDivClick=()=>{
    setIsDropdownOpen(!isDropdownOpen)
  }; 


  return (
    <>
      <div className="custom-select">
        <div className={`select-header ${isDropdownOpen ? 'open' : ''}`} onClick={handleDivClick}>
          {selectedOption || "Select An Option"}
        </div>
        
        {isDropdownOpen && (
                <ul className="options">
                  {options.map((option)=>{
                    return   <li key= {option} onClick={()=>handleOptionClick(option)}>{option}</li>
                  })}
                </ul>
        )}
        
      </div>
    </>
  )
}

export default SearchSelect;
