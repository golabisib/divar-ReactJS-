import { useQuery } from '@tanstack/react-query'
import { Navigate, Route, Routes } from 'react-router-dom'

import PageNotFound from 'src/pages/404'
import AdminPage from 'src/pages/AdminPage'
import AuthPage from 'src/pages/AuthPage'
import Dashboard from 'src/pages/Dashboard'
import HomePage from 'src/pages/HomePage'
import { getProfile } from 'src/services/user'

function Router() {
    const {data, isLoading, error} = useQuery(["profile"], getProfile);
    console.log({ data, isLoading, error });
    if(isLoading) return <div>loading...</div>
  return (
    <div>
      <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/dashboard" element={data ? <Dashboard /> : <Navigate to="/auth" />}/>
            <Route path="/auth" element={data ? <Navigate to="/dashboard" /> : <AuthPage />} />
            <Route path="/admin" element={data && data.data.role === "ADMIN" ? <AdminPage /> : <Navigate to="/dashboard"/>}/>
            <Route path="*" element={<PageNotFound />}/>
        </Routes>
    </div>
  )
}

export default Router
