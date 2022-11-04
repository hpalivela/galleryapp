// import React,{useState} from 'react';
// function App(){
//   const [data,setData]=useState({username:'',password:''})
//       const {username,password}=data;
//       const onchange=e=>{
//         setData({...data,[e.target.name]:e.target.value})
//       }
//       const submitHandler=e=>{
//         e.preventDefault()
//         console.log(data);
//       }
// return (                                                                                  
//   <div>
//     <center>
//       <form onSubmit={submitHandler}>
//         <input type="text" name="username" value={username}
//         onChange={onchange} placeholder="username"/><br/>
//         <input type="password" name="password" value={password}
//         onChange={onchange} placeholder="password"/>
//         <br/>
//         <input type="submit" name="submit"/>

//       </form>
//     </center>
//   </div>
// );
// }
// export default App


// import React,{useState} from 'react';
// const App=()=>{
//   const [input,setInput]=useState("");
//   const [result,setResult]=useState(0);
//   const handler=e=>{
//     setInput(e.target.value);
//   }
//   return(
//     <div>
//       <center>
//         <input type="text" value={input} name="input" onChange={handler}/>
//         <br/>

//         <button onClick={()=>setResult(eval(input))}>Result</button>
//           <h4> Result is :{result}</h4>
//           <button onClick={()=>setInput(input+'1')}>1</button>
//           <button onClick={()=>setInput(input+'2')}>2</button>
//           <button onClick={()=>setInput(input+'3')}>3</button>
//           <button onClick={()=>setInput(input+'4')}>4</button>               //calculator
//           <button onClick={()=>setInput(input+'5')}>5</button><br/>
//           <button onClick={()=>setInput(input+'6')}>6</button>
//           <button onClick={()=>setInput(input+'7')}>7</button>
//           <button onClick={()=>setInput(input+'8')}>8</button>
//           <button onClick={()=>setInput(input+'9')}>9</button>
//           <button onClick={()=>setInput(input+'0')}>0</button><br/>
//           <button onClick={()=>setInput(input+'+')}>+</button>
//           <button onClick={()=>setInput(input+'-')}>-</button>
//           <button onClick={()=>setInput(input+'*')}>*</button>
//           <button onClick={()=>setInput(input+'/')}>/</button>
//           <button onClick={()=>setInput("")}>clr</button><br/>

//       </center>
//     </div>
//   )
// }
// export default App;


// import React,{useState} from 'react';
// const App=()=>{
//     const [input,setInput]=useState("hey all");
//         return(
//             <div>
//             <center>
//             <h1>{input}</h1>                                 use state
//             <button onClick={()=>setInput("how are you")}>
//                 greet
//             </button>
//             </center>
//             </div>
// )
//     }
//     export default App


// import React,{useState} from'react';
// const App=()=>{
//     const [user,setUser]=useState("");
//     const handler=e=>{
//         setUser(e.target.value)
//     }
//     return(
//         <div>
//             <center>
//                 <input type="text" value={user} name="user" onChange={handler}/><br/>
//                 {user}
//             </center>
//         </div>
//     )
// }
// export default App;



// import React from 'react'
// import './App.css';
// const App = () => {
//   return (
//     <center>
//     <div className='container'>
//       <div className='row'>
//     <div className='container col-3' >
//      <img src={'/images/cup.JPG'} className='size'/> 
//      <h3 className='color'>
//       cup
//      </h3>
//     </div>
//     <div className='container col-3' >
//      <img src={'/images/cup.JPG'} className='size'/> 
//      <h3 className='color'>
//       spoon
//      </h3>
//     </div>
//     <div className='container col-3' >
//      <img src={'/images/cup.JPG'} className='size'/> 
//      <h3 className='color'>
//       glass
//      </h3>
//     </div>
//     <div className='container col-3' >
//      <img src={'/images/cup.JPG'} className='size'/> 
//      <h3 className='color'>
//       hat
//      </h3>
//     </div>
//     <div className='container col-3' >
//      <img src={'/images/cup.JPG'} className='size'/> 
//      <h3 className='color'>
//       rubber
//      </h3>
//     </div>
//     <div className='container col-3' >
//      <img src={'/images/cup.JPG'} className='size'/> 
//      <h3 className='color'>
//       shinnu
//      </h3>
//     </div>
//     <div className='container col-3' >
//      <img src={'/images/cup.JPG'} className='size'/> 
//      <h3 className='color'>
//       bubu
//      </h3>
//     </div>
//     <div className='container col-3' >
//      <img src={'/images/cup.JPG'} className='size'/> 
//      <h3 className='color'>
//       sinchan
//      </h3>
//     </div>

//     </div>
//     </div>
//     </center>
//   )
// }

// export default App

import React, { useState, useEffect } from 'react'
import './App.css';
const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=f9736f4d370f9c7115a952951b506569&gallery_id=66911286-72157647277042064&format=json&nojsoncallback=1').then((res) =>
      res.json()
    )
      .then((res) => {
        setData(res.photos.photo)
        console.log(res.photos.photo);
      })
  }, [])

  return (
    <center>
      <div className='container'>
        <div className='row'>
          {
            data.map((item) => (
              <div className='container col-sm-6 col-m-6 col-l-12' >
                <img src={`https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`} className='size' />
                <h3 className='color heading'>
                  {item.title}
                </h3>
              </div>
            ))
          }
        </div>
      </div>
    </center>
  )
}
export default App






































































































