import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Home from "./components/Home";
import Categories from "./components/Categories";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="/category/:id" element={<Categories/>} loader={({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
