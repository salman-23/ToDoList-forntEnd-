import tasks from "./tasks";

import { Route, Switch } from "react-router";
// Styling
import { GlobalStyle, UnfinishedWrapper, FinishedTasksWrapper } from "./styles";
import Home from "./Components/Home";
import { Link } from "react-router-dom";
import AddButton from "./Components/buttons/AddButton";
import TaskForm from "./Components/TaskForm";
import UnfinishedTasks from "./Components/UnfinishedTasks";
import FinishedTasks from "./Components/FinishedTasks";

function App() {
  //console.log(Date.getDate());
  return (
    <div>
      <GlobalStyle />
      <Switch>
        <Route path={"/tasks/create"}>
          <TaskForm />
        </Route>
        <Route path="/">
          <>
            <Link to="/tasks/create">
              <AddButton>Add Task</AddButton>
            </Link>
            <UnfinishedWrapper>
              {tasks.length > 0 ? (
                <UnfinishedTasks />
              ) : (
                <h1>No Tasks To Show</h1>
              )}
            </UnfinishedWrapper>
            <FinishedTasksWrapper>
              <FinishedTasks />
            </FinishedTasksWrapper>
          </>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
