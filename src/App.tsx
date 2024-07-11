import { Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "layouts/admin";
import AuthLayout from "layouts/auth";
import CoursePage from "views/course/CoursePage";  // Import the new component
import { useAuthContext } from "context/AuthContext";
const App = () => {
  const { loggedIn } = useAuthContext();
  return (
    <Routes>
      <Route path="auth/*" element={<AuthLayout />} />
      <Route path="/" element={loggedIn ? <AdminLayout /> : <AuthLayout />} />
      <Route path="/course" element={<CoursePage />} />{" "}
      {/* Add the new route */}
    </Routes>
  );
};

export default App;
