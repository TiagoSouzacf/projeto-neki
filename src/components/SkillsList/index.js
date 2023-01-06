import { useState, useEffect } from "react";
import "./index.css";
import { FaLinkedin, FaReact } from "react-icons/fa";
import {
  Button,
  Container,
  Row,
  Col,
  Form,
  Stack,
  Spinner,
} from "react-bootstrap";
import CardTask from "../../components/Card/index";
import apiSkills from "../../services/apiskills";

function SkillsList() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [version, setVersion] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isEditing, setEditing] = useState({ id: "", edit: false });
  const [imageUrl, setImageUrl] = useState("");

  //POST
  const handleTask = async () => {
    if (name == "" || version == "" || description == "" || imageUrl == "") {
      alert("Preencha todos os campos");
      return;
    }

    const newTask = {
      name: name,
      description: description,
      version: version,
      imageUrl: imageUrl,
    };

    const { data } = await apiSkills.post("/api/skills", newTask);
    setTaskList([...taskList, data]);
    console.log(data);

    //Devemos sempre atualizar o state com seu setState
    //para evitar problemas de renderização
    // tasks.push(newTask)

    setName("");
    setDescription("");
    setVersion("");
    setImageUrl("");
  };

  //DELETE
  const deleteTask = async (id) => {
    try {
      const { data, status } = await apiSkills.delete(`/api/skills/${id}`);
      console.log(data, status);
      if (status === 200) {
        const updatedTaskList = taskList.filter((item) => item.id != data.id);
        setTaskList(updatedTaskList);
      }
    } catch (e) {
      console.log("errado");
      console.log(e);
    }
  };

  //GET
  const getTasks = async () => {
    setLoading(true);
    const { data } = await apiSkills.get("/api/skills");
    setTaskList(data);
    setLoading(false);
  };

  //UPDATE
  const updateTaskList = async () => {
    const newTask = {
      name: name,
      description: description,
      version: version,
      imageUrl: imageUrl,
    };

    const { data, status } = await apiSkills.put(
      `/api/skills/${isEditing.id}`,
      newTask
    );
    console.log(data, status);
    if (status === 200) {
      const updatedTaskList = taskList.map((task) => {
        if (task.id === data.id) {
          return data;
        }
        return task;
      });
      setTaskList(updatedTaskList);
    }

    setName("");
    setDescription("");
    setVersion("");
    setImageUrl("");
    setEditing({ id: "", edit: false });
  };
  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div className="config-body">
      <Container className="bg-secondary">
        <h1 className="text-center">Lista de Skills</h1>

        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Nome:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Insira o nome"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Imagem:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Insira a imagem"
              onChange={(e) => setImageUrl(e.target.value)}
              value={imageUrl}
            />
 
          </Form.Group>
          <Form.Select
            aria-label="Default select example"
            onChange={(e) => setVersion(e.target.value)}
            value={version}
          >
            <option>Escolha seu Nível</option>
            <option value="Iniciante">Iniciante</option>
            <option value="Médio">Médio</option>
            <option value="Avançado">Avançado</option>
            <option value="Expert">Expert</option>
          </Form.Select>
          <Form.Group className="mb-3">
            <Form.Label>Descrição: </Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </Form.Group>
          <Stack className="mb-3">
            {isEditing.edit ? (
              <>
                <Button className="" onClick={updateTaskList}>
                  Salvar Skill
                </Button>
                <Button
                  className="mt-2"
                  onClick={() => setEditing({ id: "", edit: false })}
                >
                  Cancelar
                </Button>
              </>
            ) : (
              <Button className="" onClick={handleTask}>
                Cadastrar Nova Skill
              </Button>
            )}
          </Stack>
        </Form>

        <Stack>
          {loading && <Spinner animation="grow" variant="danger" />}
          {taskList.length > 0 &&
            taskList.map((item) => {
              return (
                <CardTask
                  key={item.id}
                  task={item}
                  deleteTask={deleteTask}
                  setName={setName}
                  setDescription={setDescription}
                  setVersion={setVersion}
                  setImageUrl={setImageUrl}
                  setEditing={setEditing}
                />
              );
            })}
        </Stack>
      </Container>
    </div>
  );
}

export default SkillsList;
