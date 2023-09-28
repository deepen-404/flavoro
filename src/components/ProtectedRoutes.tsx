import { useSelector } from "react-redux";
import { RootState } from "../store/Store";
import { Navigate } from "react-router-dom";
import { ReactNode } from "react";

type ProtectedRouteProps = {
  element: ReactNode;
};

const ProtectedRoute = ({ element }: ProtectedRouteProps) => {
  const cartItems = useSelector((store: RootState) => store.cart.cart);
  return cartItems.length > 0 ? element : <Navigate to="/" />;
};

export default ProtectedRoute;
