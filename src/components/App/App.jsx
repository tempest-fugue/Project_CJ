import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
//import { APIProvider, Map } from "@vis.gl/react-google-maps";

function App() {
  return (
    <div className="app">
      <div className="app__content">
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </div>
      {/* <APIProvider apiKey={AIzaSyBKsxB7SuZvOCJUCfWSsW9jkBRKtYBa0MY}>
        <Map
          style={{ width: "100vw", height: "100vh" }}
          defaultCenter={{ lat: 22.54992, lng: 0 }}
          defaultZoom={3}
          gestureHandling={"greedy"}
          disableDefaultUI={true}
        />
      </APIProvider> */}
    </div>
  );
}

export default App;
