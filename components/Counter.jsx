import { Button, ButtonGroup, Stack } from "@mui/material";
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Button
          onClick={() => {
            setCount(Math.max(count - 1, 0));
          }}
          variant="outlined"
          sx={{
            maxWidth: "30px",
            maxHeight: "30px",
          }}
        >
          -
        </Button>
        <Button
          sx={{
            maxWidth: "30px",
            maxHeight: "30px",
          }}
        >
          {count}
        </Button>
        <Button
          onClick={() => {
            setCount(count + 1);
          }}
          variant="outlined"
          sx={{
            width: "30px",
            height: "30px",
          }}
        >
          +
        </Button>
      </ButtonGroup>
    </>
  );
};

export default Counter;
