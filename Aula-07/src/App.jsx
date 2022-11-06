import { useState } from 'react';
import { Button, Container, Form, Stack } from 'react-bootstrap';
import { FaGithub, FaJava, FaJs, FaLinkedin, FaReact } from 'react-icons/fa';
import './App.css';
import CardTask from './components/CardTask/CardTask';


const tasks = [

  {
    id: 1,
    titulo: "Primeira Task",
    descricao: "Descrição da Primeira Task",
    prioridade: "URGENTE"
  },
  {
    id: 2,
    titulo: "Segunda Task",
    descricao: "Descrição da Segunda Task",
    prioridade: "URGENTE"
  },
  {
    id: 3,
    titulo: "Terceira Task",
    descricao: "Descrição da Terceira Task",
    prioridade: "URGENTE"
  },
]
function App() {
  const [titulo, setTitulo] = useState("")
  const [descricao, setDescricao] = useState("")
  const [prioriodade, setPrioridade] = useState("")
  const [id, setId] = useState(3)
  const [taskList, setTaskList] = useState(tasks)

  const handleTask = () => {
    if (titulo == "" || prioriodade == "" || descricao == "") {
      alert("Preencha todos os campos")
      return
    }
    const newTask = {
      id: id + 1,
      titulo: titulo,
      descricao: descricao,
      prioriodade: prioriodade,
    }

    // api.post("/tasks", newTask)

    //Devemos sempre atualizar o state com seu setState
    //para evitar problemas de renderização
    // tasks.push(newTask)

    setTaskList([...taskList, newTask])

    setId(id + 1);
    setTitulo("")
    setDescricao("")
    setPrioridade("")
  }



  return (
    <>

      <h1><FaReact /> React Icons <FaReact /></h1>
      <h1>
        <FaJava />
        <FaJs />
        <FaLinkedin />
        <FaGithub />
        <div>
          <Button>Like</Button>
        </div>
        <Button variant="primary">Primary</Button>{' '}
        <Button variant="secondary">Secondary</Button>{' '}
        <Button variant="success">Success</Button>{' '}
        <Button variant="warning">Warning</Button>{' '}
        <Button variant="danger">Danger</Button>{' '}
        <Button variant="info">Info</Button>{' '}
        <Button variant="light">Light</Button>{' '}
        <Button variant="dark">Dark</Button> <Button variant="link">Link</Button>
      </h1>

      <Container className="bg-secondary">
        <h1 className='text-center'>Lista de Tarefas</h1>

        <Form>
          <Form.Group className="mb-3" >
            <Form.Label>Título:</Form.Label>
            <Form.Control type="text" placeholder="Insira o título" onChange={e => setTitulo(e.target.value)} value={titulo} />
          </Form.Group>
          <Form.Select aria-label="Default select example" onChange={e => setPrioridade(e.target.value)} value={prioriodade}>
            <option>Escolha a prioridade</option>
            <option value="baixa">Baixa</option>
            <option value="normal">Normal</option>
            <option value="urgente">Urgente</option>
          </Form.Select>
          <Form.Group className="mb-3">
            <Form.Label>Descrição: </Form.Label>
            <Form.Control as="textarea" rows={3} onChange={e => setDescricao(e.target.value)} value={descricao} />
          </Form.Group>
          <Stack className="mb-3">
            <Button className="" onClick={handleTask}>Cadastrar Nova Tarefa</Button>
          </Stack>
        </Form>

        <Stack>
          {taskList.map(item => {
            return <CardTask key={item.id} task={item} />
          })}
        </Stack>

      </Container>


    </>
  )
}

export default App
