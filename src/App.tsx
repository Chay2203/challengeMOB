import { Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "layouts/admin";
import AuthLayout from "layouts/auth";
import CoursePage from "views/course/CoursePage";  // Import the new component
import Admin from "layouts/admin/Admin";
const App = () => {
  return (
    <Routes>
      {/* <Route path="adminm/*" element={<Admin/>}/> */}
      <Route path="auth/*" element={<AuthLayout />} />
      <Route path="admin/*" element={<AdminLayout />} />
      <Route path="/" element={<Navigate to="/auth" replace />} />
      <Route path="/course" element={<CoursePage />} />  {/* Add the new route */}
    </Routes>
  );
};

export default App;
