



import "./Home.css";

import Carousel from '../components/Carousel';


const Home = () => {
 
  return (
    <div>
      <Carousel />
    </div>
    
  )
}

export default Home








































































































// import axios from 'axios'

// import { useState, useEffect } from "react";

// import { Await, Link } from "react-router-dom";

// import "./Home.css";


// const Home = () => {
//   const [livros, setLivros] = useState([]);

//   const getLivros = async() => {

//     try {

//       const response = await axios.get("https://api-livro.onrender.com/livros" );

      

//       const data = response.data;

//       setLivros(data);

//       console.log(data)
      
//     } catch (error) {
//       console.log(error);
//     }

//   }

//   useEffect(() => {

//     getLivros();

//   }, [])



//   return (
//     <div>
//       <h1>Mais vistos</h1>
//       {livros.length === 0 ? (<p>Carregando...</p>) : <p></p>}
//     </div>
//   )
// }

// export default Home