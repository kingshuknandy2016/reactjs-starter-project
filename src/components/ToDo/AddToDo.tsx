import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import React, { MouseEvent, useRef } from "react";
import TextArea from "../CustomComponents/TextArea";
import { addTodo } from "../../store/actions";
import { useDispatch } from "react-redux";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface AddToDoProps {
  modalOpen: boolean;
  handleClose: (event: {}, reason: "backdropClick" | "escapeKeyDown") => void;
  handleOpen: (event: MouseEvent<HTMLButtonElement>) => void;
}
const AddToDo = (props: AddToDoProps) => {
  const dispatch = useDispatch();
  const ref = useRef<HTMLTextAreaElement>(null);

  const addTaskHandler = () => {
    const task = ref.current?.value.trim();
    if (task !== "" && task != null) {
      console.log("Add a new Task");
      dispatch(addTodo(task));
    }
    props.handleClose({}, "backdropClick");
  };
  return (
    <div>
      <Modal
        open={props.modalOpen}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add ToDo
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {/* <input
              type="text"
              placeholder="Add task here..."
              // ref={inputRef}
              className="taskInput"
            /> */}
            <TextArea innerRef={ref} placeholder="Add task here..."></TextArea>
            <Button onClick={addTaskHandler} variant="contained">
              Add task
            </Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default AddToDo;
