import { BrowserRouter,Route, Routes } from "react-router-dom";
import PersonComponent from "./components/PersonComponent";
import HomePage from "./components/HomePage";
import CreateClass from "./components/CreateClass";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path='/create' element={<CreateClass/>} />
        </Routes>
      </BrowserRouter>
      {/* <PersonComponent/> */}
    </div>
  );
}

export default App;
