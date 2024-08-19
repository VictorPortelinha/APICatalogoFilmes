import React from 'react'
import { useState, useEffect} from 'react'
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import "./Home.css";

const Home = () => {

  const [filmes, setFilmes]  = useState ([])

  const getFilmes = async () => {
    try{
        const response = await axios.get("http://localhost:5105/api/filmes")
        const data = response.data;
        setFilmes(data);
    } catch{

    }
  }

  useEffect(()=>{
        getFilmes();
  })
  return (
    <div className="cardFilme">
  {filmes.map((filme) => (
    <div key={filme.id} className="cardContainer">
      <Card className="mt-2" border="light" text="light" bg="dark" data-bs-theme="dark" style={{ width: '18rem' }}>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>{filme.titulo}</Card.Title>
          <Card.Text>{filme.date}</Card.Text>
          <Card.Text>{filme.genero}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  ))}
</div>
 
  )
}

export default Home