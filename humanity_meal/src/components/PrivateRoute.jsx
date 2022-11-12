// import { useContext } from "react";
// import { AppContext } from "../Context/AppContextProvider";
// import { Navigate } from "react-router-dom";
// export default function PrivateRoute({ children }) {
//   const { isAuth } = useContext(AppContext);
//   if (!isAuth) return <Navigate to="/login" />;
//   return children;
// }
import { useContext } from "react";
import { AppContext } from "../context/AppContextProvider";
import { Navigate } from "react-router-dom";
export default function PrivateRoute({ children }) {
  const { isLogin} = useContext(AppContext);
  if (!isLogin){
    console.log("hii")
    return <Navigate to="/login" />;
  }
  return children;
}