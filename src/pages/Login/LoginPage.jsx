import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import LoginPage from "./Login.jsx"


createRoot(document.getElementById('root')).render(
    <StrictMode>
      <LoginPage />
    </StrictMode>,
  )