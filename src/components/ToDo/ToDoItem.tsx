import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { deleteTodo, updateToDo } from "../../store/actions";
import { useRef, useState } from "react";

export interface ToDoProp {
  id: number;
  text: string;
}

export const ToDoItem = (props: ToDoProp) => {
  const dispatch = useDispatch();
  const ref = useRef<HTMLInputElement>(null);

  const [showEditContent, setShowEditContent] = useState<boolean>(false);

  const onDeleteHandler = () => {
    dispatch(deleteTodo(props.id));
  };

  // Need to Implement the Action UI and Reducer
  const onClickUpdateButtonHandler = () => {
    console.log("Clicked on Update ");
    setShowEditContent(true);
  };

  const onUpdatingHandler = () => {
    console.log("Updated ");
    const task = ref.current?.value.trim();
    if (task !== "" && task != null) {
      dispatch(updateToDo(task));
    }

    setShowEditContent(false);
  };

  const updateContent = () => {
    return (
      <>
        <input ref={ref}></input>
        <Button onClick={onUpdatingHandler} size="small">
          Update The Content
        </Button>
      </>
    );
  };

  return (
    <Card
      // style={{ backgroundColor: "lightskyblue" }}
      variant="outlined"
      sx={{ minWidth: 275 }}
    >
      <CardContent>
        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
          {props.id}
        </Typography>
        <Typography variant="h6">{props.text}</Typography>
      </CardContent>
      <CardActions>
        {!showEditContent && (
          <>
            <Button onClick={onClickUpdateButtonHandler} size="small">
              Update
            </Button>
            <Button onClick={onDeleteHandler} size="small">
              Delete
            </Button>
          </>
        )}
        {showEditContent && updateContent()}
      </CardActions>
    </Card>
  );
};
