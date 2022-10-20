import React from "react";
import "./App.css";
import { HomeComponent, ViewMore, HeaderComponent } from "./components";
import { DataProvider } from "./context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
      <Container>
      <HeaderComponent/>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/character/:id" element={<ViewMore />} />
        </Routes>
        </Container>
      </BrowserRouter>
    </DataProvider>
  );
}

const Container = styled.div`
display: flex;
`;

export default App;
