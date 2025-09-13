import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'

import {
    Dashboard,
    Components
} from '../pages'
import MainTemplate from '../components/templates/MainTemplate'
import ProtectedRoute from './ProtectedRoute';
// import { GlobalToast } from 'components';
import NotFound from '../pages/ErrorPage'

function AppRouter() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<MainTemplate />}>
                <Route index element={<Navigate to="/dashboard" replace />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/components" element={<Components />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
    </Router>
  )
}

export default AppRouter
