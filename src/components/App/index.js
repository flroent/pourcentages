import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "src/components/Navbar";
import Calculs from "src/components/Calculs";
import Footer from "src/components/Footer";
import "./app.scss";

const App = () => (
  <Container fluid style={{ margin: "0", padding: "0" }} id="app">
    <Nav />
    <h1>Calculez des pourcentages</h1>
    <Calculs />
    <Footer />
  </Container>
);

export default App;
