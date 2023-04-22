import React from "react";
import styles from "./App.module.css";
import Head from "./components/head/Head";
import Body from "./components/body/Body";
import ChakraContainer from "./components/chakra/ChakraContainer";
import Footer from "./components/footer/Footer";
import Review from "./components/review/Review";

function App() {
  return (
    <>
      <div className={styles.main_container}>
        <Head />
      </div>

      <Body />

      <ChakraContainer />

      <Review />

      <Footer />
    </>
  );
}

export default App;
