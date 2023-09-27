import { Box, Container, Grid } from "@mui/material";
import { ButtonAppBar } from "../navbar/navbar";

import { ToDoList } from "./ToDoList";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import AddToDo from "./AddToDo";
import { useSelector } from "react-redux";
import { StateInterface } from "../../store/reducers/TaskReducer";
import { ToDoProp } from "./ToDoItem";

// Static List For Testing
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const items: ToDoProp[] = [
  { id: 1, text: "Please Perform" },
  { id: 2, text: "Want to Play" },
];

export const ToDo = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const toDoList: ToDoProp[] = useSelector<StateInterface, ToDoProp[]>(
    (state) => state.tasks
  );

  const addToDoHandler = () => {
    handleOpen();
  };
  return (
    <div>
      <ButtonAppBar></ButtonAppBar>
      <Container maxWidth="lg">
        <Box margin={12}>
          <Stack direction="row" spacing={10}>
            <Grid container spacing={2}>
              <Grid
                display="flex"
                alignItems="center"
                justifyContent={"center"}
                item
                xs={6}
              >
                <Button
                  onClick={addToDoHandler}
                  size="large"
                  variant="contained"
                  color={"success"}
                >
                  Add To Do
                </Button>
              </Grid>
              <Grid
                display="flex"
                alignItems="center"
                justifyContent={"center"}
                item
                xs={6}
              >
                <Button size="large" variant="contained" color={"error"}>
                  Remove To Do
                </Button>
              </Grid>
            </Grid>
          </Stack>
        </Box>
        <AddToDo
          modalOpen={open}
          handleOpen={handleOpen}
          handleClose={handleClose}
        ></AddToDo>
        <Container>
          <ToDoList items={toDoList}></ToDoList>
        </Container>
      </Container>
    </div>
  );
};
