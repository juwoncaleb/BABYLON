import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import "./styles.css";
import TaskList from "./features/TaskList";

const App = () => {
  const [state1, setState1] = useState([
    { id: 1, name: "shrek" },
    { id: 2, name: "fiona" },
    { id: 3, name: "adi" },
    { id: 4, name: "ami" }
  ]);

  const [state2, setState2] = useState([
    { id: 5, name: "doggy" },
    { id: 6, name: "cat" },
    { id: 7, name: "canary" },
    { id: 8, name: "bunny" }
  ]);

  const [state3, setState3] = useState([
    { id: 9, name: "making pizza" },
    { id: 10, name: "eating carrot" },
    { id: 11, name: "learning react" },
    { id: 12, name: "taking photos" },
    { id: 13, name: "adding tv" }
  ]);

  return (
    <>
      <Typography
        variant="h4"
        style={{ margin: "auto", textAlign: "center", padding: "10px" }}
      >
        <span>&#10003;</span> Task List
      </Typography>
      <TaskList
        state1={state1}
        setState1={setState1}
        state2={state2}
        setState2={setState2}
        state3={state3}
        setState3={setState3}
      />
    </>
  );
};

export default App;
