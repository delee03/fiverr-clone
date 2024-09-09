import React from "react";
import { useContext } from "react";
import useRouteCustom from "./hooks/useRouteCustom";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//khởi tạo 1 context
export const NotificationContext = React.createContext();

function App() {
  const routes = useRouteCustom();
  // useEffect(() => {
  //     toast("Wow so easy!");
  // });

  //khi gọi tới thuộc tính trong object truyền trong cặp []

  //net set default parameter để tránh xung đột lỗi với các component đã dùng trước đó
  const showNotification = (content, type, duration = 4000) => {
    toast[type](content, {
      position: "top-right",
      autoClose: duration,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <>
      <NotificationContext.Provider
        value={{ showNotification: showNotification }}
      >
        <ToastContainer />
        {routes}
      </NotificationContext.Provider>
    </>
  );
}

export default App;
