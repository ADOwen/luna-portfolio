import Homepage from "./screens/Homepage/Homepage"
import Header from "./components/Header"
import './app.css'

function App() {

  return (
    <>
      <Header/>
      <main className="grid">
        <Homepage/>
      </main>
    </>
  )
}

export default App
