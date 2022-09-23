import { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MyCarousel from "./components/Carousel/MyCarousel";
import MyContent from "./components/Layout/MyContent";
import MyLayout from "./components/Layout/MyLayout";
import { AuthContext } from "./contexts/auth.provider";
import AddressDigitization from "./pages/AddressDigitization";
import Admin from "./pages/Admin";
import CatalogDoc from "./pages/CatalogDoc";
import CheckIn from "./pages/CheckIn";
import Home from "./pages/Home";
import Introduce from "./pages/Introduce";
import IventAndNews from "./pages/IventAndNews";
import LogIn from "./pages/LogIn";
import NotFound from "./pages/NotFound";
import PositionMap from "./pages/PositionMap";
import MyPdf from "./components/Layout/MyPdf";

function PrivateRoute({ children }) {
  const { token } = useContext(AuthContext);
  return token ? children : <Navigate to="/dang-nhap" />;
}

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MyLayout />}>
            <Route index element={<Home />} />
            <Route path="/gioi-thieu" element={<Introduce />} />

            <Route path="/tin-tuc" element={<IventAndNews />} />
            <Route path="/tin-tuc/:id" element={<MyContent />} />

            <Route path="/so-hoa-dia-chi" element={<AddressDigitization />} />
            <Route path="/so-hoa-dia-chi/:id" element={<MyContent />} />

            <Route path="/van-kien-dai-hoi" element={<CatalogDoc />} />
            <Route path="/van-kien-dai-hoi/:id" element={<MyPdf />} />

            <Route path="/so-do-cho-ngoi" element={<PositionMap />} />
          </Route>
          <Route path="/dang-nhap" element={<LogIn />} />
          <Route path="/diem-danh" element={<CheckIn />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/admin"
            element={
              <PrivateRoute>
                <Admin />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
