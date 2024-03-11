import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import { LandingPage } from './pages/LandingPage'
import { AboutPage } from './pages/about/AboutPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { LayoutRoot } from './pages/LayoutRoot'

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<LayoutRoot />}>
          {/* index signifies that this is the default route */}
          <Route index element={ <LandingPage /> } />
          <Route path='/about' element={ <AboutPage /> } />
          <Route path='*' element={ <NotFoundPage /> } />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
