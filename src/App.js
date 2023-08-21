import { BrowserRouter, Routes } from "react-router-dom";
import React from "react";
import { listRoute, routesAdmin } from "./router";
import { Layout } from "./container";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>{listRoute(routesAdmin)}</Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
