
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';  
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import Profile from './pages/Profile';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
    }
  />
      <Route path="/profile" element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
  }
/>

    </Routes>
    </BrowserRouter>
  )
}

export default App
