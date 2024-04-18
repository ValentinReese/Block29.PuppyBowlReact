import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AllPlayers from "./components/AllPlayers";
import SinglePlayer from "./components/SinglePlayer";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<AllPlayers />} />
          <Route path='/single-player/:playerId' element={<SinglePlayer />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
