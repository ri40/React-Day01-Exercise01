import "./App.css";
import Cats from "./Cat";

function App() {
  return (
    <div className="App">
    <div className="row">
      <Cats
        catImage={
          "https://images.pexels.com/photos/1521306/pexels-photo-1521306.jpeg?auto=compress&cs=tinysrgb&w=600"
        }
        Name={"Smokey"}
        Age={"2 year"}
      />
      <Cats
        catImage={
          "https://images.pexels.com/photos/1084425/pexels-photo-1084425.jpeg?auto=compress&cs=tinysrgb&w=600"
        }
        Name={"Luna"}
        Age={"2 year"}
      />
      <Cats
        catImage={
          "https://images.pexels.com/photos/4587959/pexels-photo-4587959.jpeg?auto=compress&cs=tinysrgb&w=600"
        }
        Name={"Kitty"}
        Age={"3 year"}
      />
      <Cats
        catImage={
          "https://images.pexels.com/photos/1909008/pexels-photo-1909008.jpeg?auto=compress&cs=tinysrgb&w=600"
        }
        Name={"Tom"}
        Age={"6 year"}
      />
    </div>
  </div>
  );
}

export default App;
