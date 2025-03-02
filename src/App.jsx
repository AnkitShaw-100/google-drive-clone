import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import Inbox from "./components/Inbox";
import Mail from "./components/Mail";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Inbox />,
      },
      {
        path: "/mail/:id",
        element: <Mail />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="bg-[#F6f8FC] h-screen overflow-hidden">
      <Navbar />
      <RouterProvider router={router} />
      {/* <Sidebar /> */}
      {/* <h1 class="text-6xl font-bold underline">Hello world!</h1> */}
    </div>
  );
}

export default App;
