import Docs from "./components/docs";
import "./App.css";
import { fireStoreDatabase, firebaseApp } from "./firebaseConfig";
import { Route, Routes } from "react-router-dom";
import EditDocs from "./components/editDocs";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Docs database={fireStoreDatabase} />} />
      <Route
        path="/editdocs/:id"
        element={<EditDocs database={fireStoreDatabase} />}
      />
    </Routes>
  );
};

export default App;
