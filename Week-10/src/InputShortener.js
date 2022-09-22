import { useState } from "react"
const InputShortener = ({ setInputValue }) => {
  const [value, setValue] = useState("");
//once we click on the button , it will send output to output field and clear this placeholder.
  const handleClick = () => {
    setInputValue(value);
    setValue("");
  }
 
//creating a div for container class which was created for taking input and returning result.
  return (
    <>
     <div className="inputContainer">
      <h1>More than just shortner link </h1>
      <p>Build your brand's recognition and get detailed insights on how your links are performing</p>
      <div>
        {/* input tag is created for placeholder to take input {text}from user*/}
        <input
          type="text"
          placeholder="Shorten a link here..."
          value={value}
          onChange={e => setValue(e.target.value)}  
        />
        <button onClick={handleClick}>Shorten it</button>
      </div>
    </div>
    </>
  )
}

export default InputShortener;