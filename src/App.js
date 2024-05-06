import "./App.css";
import UserClassComp from "./components/UserClass/UserClassComp";
import ClassComponent from "./components/classComponents/ClassComponent";
import FuncComponent from "./components/funcComponent/FuncComponent";
import UserProfile from "./components/userProfile/UserProfile";

function App() {
  const user = {
    firstname: "John",
    lastname: "Doe",
  };
  return (
    <div className="App">
      <UserClassComp />
      <FuncComponent />
      <br></br>
      <UserProfile firstname={user.firstname} lastname={user.lastname} />
    </div>
  );
}

export default App;
