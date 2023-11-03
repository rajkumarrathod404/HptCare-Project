import { Box, Button } from "@mantine/core";
import { decrementCount, incerementCount } from "./Features/Todos/todoSlice";
import { useSelector, useDispatch } from "react-redux";
const Count = () => {
    const selector =useSelector((state)=> state.counterSlice.counter)
    const dispatch=useDispatch()
  return (
    <>
      <Box>
        <h1>{selector}</h1>
        <Button onClick={() => dispatch(incerementCount())}>Add</Button>
        <Button onClick={() => dispatch(decrementCount())}>Delete</Button>
      </Box>
    </>
  );
};

export default Count;
