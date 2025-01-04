import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PrivetRoute from "./components/PrivetRoute/PrivetRoute.jsx";
import SignIn from "./components/Auth/SignIn.jsx";
import SignUp from "./components/Auth/SignUp.jsx";
import ForgetPass from "./components/Auth/ForgetPass.jsx";
import LetsLearn from "./components/LetsLearn/LetsLearn.jsx";
import Lesson from "./components/LetsLearn/Lesson.jsx";
import LessonProfilePrivetRoute from "./components/PrivetRoute/LessonProfilePrivetRoute.jsx";
import Profile from "./components/Profile/Profile.jsx";
import UpdateProfile from "./components/Auth/UpdateProfile.jsx";
import Tutorial from "./components/Tutorials/Tutorial.jsx";
import Error from "./components/Error/Error.jsx";
import AboutUs from "./components/AboutUs.jsx/AboutUs.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/signin",
        element: (
          <PrivetRoute>
            <SignIn />
          </PrivetRoute>
        ),
      },
      {
        path: "/signup",
        element: (
          <PrivetRoute>
            <SignUp />
          </PrivetRoute>
        ),
      },
      {
        path: "/update-profile",
        element: (
          <LessonProfilePrivetRoute>
            <UpdateProfile />
          </LessonProfilePrivetRoute>
        ),
      },
      {
        path: "/forget-password",
        element: (
          <PrivetRoute>
            <ForgetPass />
          </PrivetRoute>
        ),
      },
      {
        path: "/lets-learn",
        element: <LetsLearn />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/lets-learn/:id",

        element: (
          <LessonProfilePrivetRoute>
            <Lesson />
          </LessonProfilePrivetRoute>
        ),
      },
      {
        path: "/my-profile",

        element: (
          <LessonProfilePrivetRoute>
            <Profile />
          </LessonProfilePrivetRoute>
        ),
      },
      {
        path: "/tutorials",

        element: (
          <LessonProfilePrivetRoute>
            <Tutorial />
          </LessonProfilePrivetRoute>
        ),
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
