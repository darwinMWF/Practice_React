// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
//  import { Heading } from "./heading"
import Heading from "./heading";
import Cards from "./card";
import Form from "./card2";

function App() {
  // const [count, setCount] = useState(0)
  const handlerClick =(e)=>{
    alert("it's submitted")
    e.preventDefault();
    console.log(e)
    
  }

  return (
    <>
      {/* <Heading name ="das" age = '25'/> */}
      <Heading name="saurav" age="20" />

      <Cards>
        <Heading name="jay" age="26" />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Voluptatibus, et numquam. Quaerat!
        </p>
      </Cards>

      <Cards>
        <Heading name="jay" age="26" />
        <img
          src="https://img.freepik.com/free-vector/cute-boy-standing-position-showing-thumb_96037-450.jpg?w=2000"
          alt="cartun-image"
          width={200}
        />
      </Cards>
      <Form>
        <label>Name:</label>
        <br />
        <input type="text" placeholder="Enter here...." />
        <br />
        <label>Address:</label>
        <br />
        <textarea rows={5} cols={15}></textarea>
      </Form>
      <Form>
        <label>Phone number:</label>
        <br />
        <input type="number" onChange={(e)=>{
          console.log(e.target.value)
        }} />
        <br />
        <label >Pincode:</label>
        <br />
        <input type="number" />
        <br />
        <label>City:</label>
        <br />
        <input type="text" />
        <button type="submit" onClick={handlerClick}>submit</button>
      </Form>
    </>
  );
}

export default App;
