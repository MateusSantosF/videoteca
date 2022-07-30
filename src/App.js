import React from "react";
import Layout from "./Components/Layout";
import GlobalStyles from "./styles/GlobalStyles";
import { VideoContextProvider } from "./Contexts/VideoContext";
import Form from "./Components/Form";

function App() {
  return (
    <div >
      <VideoContextProvider>
        <Layout/>
      </VideoContextProvider>   
      <GlobalStyles/>
    </div>
  );
}

export default App;
