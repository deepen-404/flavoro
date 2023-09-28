import { BrowserRouter, Route, Routes } from "react-router-dom";

// pages
import Home from "./Pages/Home";
import Success from "./Pages/Success";
import ErrorPage from "./Pages/ErrorPage";

// protected route
import ProtectedRoute from "./components/ProtectedRoutes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/success"
          element={<ProtectedRoute element={<Success />} />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
