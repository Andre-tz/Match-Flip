//App tendra la aplicacoin completa, header, footer y el home
import Header from "./Components/Header";
import Footer from "./Components/Footer"
import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";

function App() {
  return (
    <>
        <Header />
        <main className="bg-white-0 p-4 flex flex-col items-center justify-center min-h-screen">
            <Outlet /> 
        </main>
        <Footer />
        <Toaster position="top-center" />
    </>
  )
}

export default App;
