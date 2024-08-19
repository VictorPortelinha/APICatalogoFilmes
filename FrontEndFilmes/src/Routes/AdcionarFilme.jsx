import React from 'react'
import {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./AdcionarFilme.css";
import axios from 'axios';

const AdcionarFilme = () => {
    const [titulo,setTitulo] = useState('');
    const [date,setLancamento] = useState('')
    const [genero,setGenero] = useState('');

    const createPost = async (e) =>{
        e.preventDefault()
        const post = {id:0,titulo,date,genero}
        await axios.post("http://localhost:5105/api/filmes",{
            id: post.id,
            titulo: post.titulo,
            date: post.date,
            genero: post.genero
        })
    }
    
  return (
<div className="container-form-app">
       
        <Form onSubmit={(e) => createPost(e)}>
      <Form.Group className="mb-3" controlId="titulo">
        <Form.Label>Titulo</Form.Label>
        <Form.Control onChange={(e) => setTitulo(e.target.value)} type="text" placeholder="Titulo" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="Lancamento">
        <Form.Label>Ano Lançamento</Form.Label>
        <Form.Control onChange={(e) => setLancamento(e.target.value)} type="text" placeholder="Lancamento" />
      </Form.Group>
    
      <Form.Group className="mb-3" controlId="Genero">
        <Form.Label>Genero</Form.Label>
        <Form.Control onChange={(e) => setGenero(e.target.value)} type="text" placeholder="Genero" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
</div>
  )
}

export default AdcionarFilme