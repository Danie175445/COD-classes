import { BrowserRouter,Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import CreateClass from "./components/CreateClass";
import CreateClassModal from "./components/CreateClassModal";
import EditClass from "./components/EditClass";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path='/create' element={<CreateClassModal/>} />
          <Route path='/edit/:id'element={<EditClass/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
