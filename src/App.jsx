import "./App.css";
import { Component } from "react";
import BookList from "./component/BookList";
import MyNav from "./component/MyNav";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  state = {
    boh: {},
  };
  render() {
    return (
      <>
        <MyNav />
        <BookList />
      </>
    );
  }
}

export default App;
