import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./App";
import Modal from "react-modal";
import { SpeedInsights } from "@vercel/speed-insights/react"
import "./index.css";
import { NumberProvider } from './pages/Context';
Modal.setAppElement("#root");

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <SpeedInsights>
    <NumberProvider>
        <App />
    </NumberProvider>
    </SpeedInsights>
);