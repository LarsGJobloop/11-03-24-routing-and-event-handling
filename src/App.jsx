import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import { LandingPage } from './pages/LandingPage'
import { AboutPage } from './pages/about/AboutPage'
import { NotFoundPage } from './pages/NotFoundPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={ <LandingPage /> } />
        <Route path='/about' element={ <AboutPage /> } />
        <Route path='*' element={ <NotFoundPage /> } />

      </Routes>
    </BrowserRouter>
  )
}

export default App
