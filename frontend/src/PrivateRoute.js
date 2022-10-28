import { Navigate } from "react-router-dom";
import { indexId } from "./components/auth";

export default function PrivateRoute({ children }) {
  return indexId ? children : <Navigate to="/" />;
}
