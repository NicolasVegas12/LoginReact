import useFormulario from './hooks/useFormulario.jsx'
import Input from './components/Input/Input.jsx'
import Card from './components/Card/Card.jsx'
import Container from './components/Container/Container.jsx'

function App() {
  const[formulario,handleChange]=useFormulario({name:'',lastName:'',email:''})
  
  return (
    <Container>
      <Card>
        <div style={{padding:20}}>
          <form>
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
          </form>        
        </div>
        
      </Card>
    </Container>
  );
}

export default App;
