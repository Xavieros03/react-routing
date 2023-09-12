import './App.css'
import Home from './components/Home.jsx'
import Navbar from './components/Navbar.jsx'
import MoviesList from "./components/MoviesList"
import About from "./components/About"
import { Route, Routes } from "react-router-dom"

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Home />
			<Routes>
				<Route path='/movies' element={<MoviesList />} />
				<Route path='/about' element={<About />} />
			</Routes>
		</div>
	)
}

export default App
