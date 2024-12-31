import { Route, Routes } from 'react-router-dom'
import PageNotFound from 'src/pages/404'
import AdminPage from 'src/pages/AdminPage'
import AuthPage from 'src/pages/AuthPage'
import Dashboard from 'src/pages/Dashboard'
import HomePage from 'src/pages/HomePage'

function Router() {
  return (
    <div>
      <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/dashboard" element={<Dashboard />}/>
            <Route path="/auth" element={<AuthPage />}/>
            <Route path="/admin" element={<AdminPage />}/>
            <Route path="*" element={<PageNotFound />}/>
        </Routes>
    </div>
  )
}

export default Router
