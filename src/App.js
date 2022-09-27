import { useState } from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import Container from "./components/Container";
import Input from "./components/Input";
import useFormulario from "./hooks/useFormulario";

const App = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [formulario, handleChange, reset] = useFormulario({
    name: "",
    lastname: "",
    email: "",
  });

  const submit = (e) => {
    e.preventDefault();
    setUsuarios([...usuarios, formulario]);
    reset();
  };

  console.log(formulario, usuarios);
  return (
    <div style={{ marginTop: "15%" }}>
      <Container>
        <Card>
          <div style={{ padding: 20 }}>
            <form onSubmit={submit}>
              <Input
                label="Nombre"
                name="name"
                value={formulario.name}
                onChange={handleChange}
                placeholder="Nombre"
              />
              <Input
                label="Apellido"
                name="lastname"
                value={formulario.lastname}
                onChange={handleChange}
                placeholder="Apellido"
              />
              <Input
                label="Correo"
                name="email"
                value={formulario.email}
                onChange={handleChange}
                placeholder="Correo"
              />
              <Button>Enviar</Button>
            </form>
          </div>
        </Card>
        <Card>
          <ul>
            {usuarios.map((usuario) => (
              <li
                key={usuario.email}
              >{`${usuario.name} ${usuario.lastname}: ${usuario.email}`}</li>
            ))}
          </ul>
        </Card>
      </Container>
    </div>
  );
};

export default App;
