//importing all required components here.
import { useState } from 'react';
import './App.css';
import InputShortener from './InputShortener';
import LinkResult from './LinkResult';

function App() {
  //useState("") returns a tuple where the first parameter inputValue is the current state of the 
  //setInputValue and setValue is the method that will allow us to update the inputValue's state. 
  //We can use the setInputValue method to update the state of inputValue anywhere
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <div className="header">
        <h2>Shortly</h2>
        <span>Sign Up</span>
        <span >Login</span>
        <span >Resources</span>
        <span>Pricing</span>
        <span >Features</span>
       </div>
       <div className="container">
      <div className="footer">
      <h2>Shortly</h2>
      <span>Sign Up</span>
        <span >Login</span>
      <span >Company
      <p>About</p>
          <p>Our Team</p>
          <p>Careers</p>
          <p>Contacts</p>
      </span>
        <span>Features
        <p>Blog</p>
          <p>Developers</p>
          <p>Support</p>
        </span>
        <span >Resources
          <p>Link Shortning</p>
          <p>Branded Links</p>
          <p>Analytics</p>
        </span>
      </div>
      <InputShortener setInputValue={setInputValue} />
      <LinkResult inputValue={inputValue} />
    </div>
    </>
  );
}





export default App;