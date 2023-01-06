import { Card, Button } from "react-bootstrap";
import './index.css'

const CardTask = ({
  task,
  deleteTask,
  setDescription,
  setVersion,
  setName,
  setImageUrl,
  setEditing,
}) => {
  const handleUpdate = () => {
    console.log(task);
    setDescription(task.description);
    setVersion(task.version);
    setName(task.name);
    setImageUrl(task.imageUrl);
    setEditing({ id: task.id, edit: true });
  };
  return (
    <Card className="mb-2">
      <Card.Header as="h5">{task.name}</Card.Header>
      <Card.Body>
        <Card.Text>
          <img className="image-config" src={task.imageUrl} alt="imagem"></img>
        </Card.Text>
        <Card.Text>Nível: {task.version}</Card.Text>
        <Card.Text>Descrição: {task.description}</Card.Text>
        <Button onClick={() => deleteTask(task.id)}>Excluir</Button>
        <Button className="ms-3" onClick={handleUpdate}>
          Editar
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CardTask;
