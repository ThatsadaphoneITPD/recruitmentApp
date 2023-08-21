import React from "react";
import { Footer, Header } from "../../components";

export default function index({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
