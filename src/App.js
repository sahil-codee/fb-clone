import "./App.css";
import Feed from "./Components/Feed/Feed";
import Header from "../src/Components/Header/Header";
import Sidebar from "../src/Components/Sidebar/Sidebar";
import Widgets from "./Components/Widgets/Widgets";
import Login from "./Components/Login/Login";

function App() {
  const user = null;
  return (
    //BEM Naming convention //

    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />

          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
