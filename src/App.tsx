import { Routes, Route, BrowserRouter } from "react-router-dom";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";
import Layout from "./Pages/Layout/Layout";
import Menu from "./Pages/Menu/Menu";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Reservation from "./Pages/Reservation/Reservation";
import ConfirmReservation from "./Pages/ConfirmReservation/ConfirmReservation";
import SecondConfirm from "./Pages/SecondConfirm/SecondConfirm";
import CancelConfirm from "./Pages/CancelConfirm/CancelConfirm";
import ContactUs from "./Pages/ContactUs/ContactUs";
import { CardProvider } from "./context/CardContext";
import Cart from "./Pages/Cart/Cart";
import ProtectedRoute from "./Pages/ProtectedRoute/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <CardProvider>
        <BrowserRouter basename="/Delizioso/">
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
            <Route
              path="home"
              element={
                <ProtectedRoute>
                  <Layout />
                </ProtectedRoute>
              }
            />
            <Route path="menu" element={<Menu />} />
            <Route path="AboutUs" element={<AboutUs />} />
            <Route path="ContactUs" element={<ContactUs />} />
            <Route path="Reservation" element={<Reservation />} />
            <Route path="Reservation/Confirm" element={<ConfirmReservation />} />
            <Route path="Reservation/Confirm/SecondConfirm" element={<SecondConfirm />} />
            <Route path="Reservation/CancelConfirm" element={<CancelConfirm />} />
            <Route path="Cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CardProvider>
    </AuthProvider>
  );
};

export default App;
