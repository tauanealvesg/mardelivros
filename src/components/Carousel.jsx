
import axios from 'axios'
import { useState, useEffect } from "react";
import { useRef } from 'react';
import styles from './Carousel.css';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/AI";





const Carousel = () => {
  const [livros, setLivros] = useState([]);

  const getLivros = async() => {

    try {

      const response = await axios.get("https://api-livro.onrender.com/livros");

      

      const data = response.data;

      setLivros(data);

      console.log(data);
      
    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {

    getLivros();

  }, [])
  const carousel = useRef(null);
  

  
  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();

    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

 
  if(!livros || !livros.length) return <h1>Carregando...</h1>;

  return (
    <div className="all">
    <div className="elements">
      <h1>Os mais vendidos</h1>
      <div className="carousel" ref={carousel}>
        {livros.map((item) => {
          const { id, nome, capa, autor, preco } = item;
          return(
            <div className="item" key={id}>
              <div className="imagem">
                <img src={capa} alt={nome} />
              </div>
              <div className="info">
                <span className='nome'>{nome}</span>
                <span className='autor'>{autor}</span>
                <span className='preco'>R${preco}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="buttons">
        <button className='left' onClick={handleLeftClick}><AiOutlineArrowLeft /></button>
        <button className='right' onClick={handleRightClick}><AiOutlineArrowRight /></button>
      </div>
    </div>

    </div>
  )
}

export default Carousel