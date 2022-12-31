import { useState } from "react";
import "../styles/globals.css";
import { AuthProvider } from "../contexts/authContext";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import SideBar from "../components/SideBar/SideBar";

export default function App({ Component, pageProps }) {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <AuthProvider>
      <Header setOpen={setIsDrawerOpen} />
      <SideBar isOpen={isDrawerOpen} setOpen={setIsDrawerOpen} />
      <Component {...pageProps} />
      <Footer />
    </AuthProvider>
  );
}
