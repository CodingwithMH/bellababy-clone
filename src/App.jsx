import Header from "./components/Header"
import Footer from "./components/Footer"
import { Outlet } from "react-router-dom"

function App() {

  return (
    <>
    <Header />
      <main className="min-h-screen mb-10">
        <Outlet /> 
      </main>
      <Footer />
    </>
  )
}

export default App
