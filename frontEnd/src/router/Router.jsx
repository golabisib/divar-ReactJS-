import { useQuery } from '@tanstack/react-query'
import { Route, Routes } from 'react-router-dom'

import PageNotFound from 'src/pages/404'
import AdminPage from 'src/pages/AdminPage'
import AuthPage from 'src/pages/AuthPage'
import Dashboard from 'src/pages/Dashboard'
import HomePage from 'src/pages/HomePage'
import { getProfile } from 'src/services/user'

function Router() {
    const {data, isLoading, error} = useQuery(["profile"], getProfile);
    console.log({ data, isLoading, error });
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
