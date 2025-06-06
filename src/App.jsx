import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Body from "./components/Body";
import Login from "./components/Login";
import Feed from "./components/Feed";
import Profile from "./components/Profile";
import { Provider } from "react-redux";
import appstore from "./utils/appstore";
import Connections from "./components/Connections";
import Requests from "./components/Requests";
// import EditProfile from "./components/EditProfile";

function App() {
  return (
    <>
    <Provider store={appstore}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body/>}>
        <Route path="/" element={<Feed/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/connections" element={<Connections/>}/>
        <Route path="/requests" element={<Requests/>}/>
        {/* <Route path="/editprofile" element={<EditProfile/>}/> */}
        </Route>
      </Routes>
      </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
