import Docs from "./components/docs";
import "./App.css";
import { fireStoreDatabase, firebaseApp } from "./firebaseConfig";

const App = () => {
  return <Docs database={fireStoreDatabase} />;
};

export default App;
