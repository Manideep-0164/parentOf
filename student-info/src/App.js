import logo from "./logo.svg";
import "./App.css";
import StudentForm from "./components/studentForm";
import StudentListing from "./components/studentListing";

function App() {
  return (
    <div className="App">
      <StudentForm />
      <StudentListing />
    </div>
  );
}

export default App;
