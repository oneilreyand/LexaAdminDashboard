import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'

import {
    Dashboard,
    Components,
    Calendar,
    Kanban,
    Settings,
    CourseDetail,
    ListVideoPage,
    BuddyListPage
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
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/course-detail/:id" element={<CourseDetail />} />
                <Route path="/list-video" element={<ListVideoPage />} />
                <Route path="/buddy" element={<BuddyListPage />} />
          <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
    </Router>
  )
}

export default AppRouter
