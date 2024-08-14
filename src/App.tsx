import { CustomizeProfile } from './pages/CustomizeProfile'
import { UserProfile } from './pages/UserProfile'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/main.css'

export const App = () => {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<UserProfile />} />
        <Route path='/customize-profile' element={<CustomizeProfile />} />
      </Routes>
    </Router>
  )
}
