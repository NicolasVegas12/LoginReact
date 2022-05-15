import {useState} from 'react'
import useFormulario from './hooks/useFormulario.jsx'
import Input from './components/Input/Input.jsx'
import Card from './components/Card/Card.jsx'
import Container from './components/Container/Container.jsx'
import Button from './components/Button/Button.jsx'

function App() {
  const [usuarios,setUsuarios]=useState([])
  
  const[formulario,handleChange,reset]=useFormulario({name:'',lastName:'',email:''})

  const submit =(e)=>{
    e.preventDefault()
    setUsuarios([
      ...usuarios,
      formulario
      ])
    reset()
  }
  console.log(usuarios)
  
  return (
    <Container>
      <Card>
        <div style={{padding:20}}>
          <form onSubmit={submit}>
            <Input 
              label="Nombre"
              name="name"
              placeholder="Nombre" 
              value={formulario.name}
              onChange={handleChange}
            />
            <Input 
              label="Apellido"
              name="lastName"
              placeholder="Apellido" 
              value={formulario.lastName}
              onChange={handleChange}
            />
            <Input 
              label="Correo"
              name="email"
              placeholder="Correo" 
              value={formulario.email}
              onChange={handleChange}
            />
            <Button >Enviar</Button>
          </form>        
        </div>
        
      </Card>
    </Container>
  );
}

export default App;
