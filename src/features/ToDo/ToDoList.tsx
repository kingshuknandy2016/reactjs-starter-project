import { Box, Stack } from '@mui/material';
import { ToDoItem, ToDoProp } from './ToDoItem';

interface ToDoListProps {
  items: ToDoProp[];
}
export const ToDoList = (props: ToDoListProps) => {
  return (
    <Box sx={{}}>
      <Stack marginTop={5} spacing={2}>
        {props.items.map((everyToDo) => (
          <ToDoItem
            key={everyToDo.id}
            id={everyToDo.id}
            text={everyToDo.text}
          ></ToDoItem>
        ))}
      </Stack>
    </Box>
  );
};
