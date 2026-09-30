import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';



export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>

          <Route element={<RootLayout />}>
            {/* Home Page (Frame 1) */}
            <Route path="/" element={<Home />} />


          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
