import Input from '../Input/Input.jsx'
import Button from '../Button/Button.jsx'
import useFormulario from '../../hooks/useFormulario.jsx'
import './UserForm.css';


const UserForm= ({submit}) => {
  const[formulario,handleChange,reset]=useFormulario({
    name:'',
    lastName:'',
    email:''
  })
  const handleSubmit=(e)=>{
    e.preventDefault()
    submit(formulario)
    reset()
  }
  return(
    <form onSubmit={handleSubmit}>
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
    )
};

export default UserForm;
