import Backdrop from "./componen/Backdrop";
import Modal from "./componen/Modal";
import Todo from "./componen/Todo";

function App() {
  return (
    <div>
      <h1>My todo</h1>
      <Todo text="learen react" />
      <Todo text="Master react" />
      <Todo text="Explore the full react course" />
      <Modal />
      <Backdrop/>
    </div>
  );
}

export default App;
