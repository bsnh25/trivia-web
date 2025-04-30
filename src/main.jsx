import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import TriviaApp from "./TriviaApp.jsx";

const UnusedPage = lazy(() => import("./page/UnusedPage.jsx"));
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      {/* <Suspense fallback={<div>loading...</div>}> */}
      <Routes>
        <Route path="/" element={<TriviaApp />} />
        {/* <Route path="/unused" element={<UnusedPage />} /> */}
      </Routes>
      {/* </Suspense> */}
    </BrowserRouter>
  </StrictMode>
);
