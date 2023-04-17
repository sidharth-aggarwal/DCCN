import "./global.css"

// import React from "react"
import * as ReactDOMClient from 'react-dom/client';

import App from "./App"

const container=document.getElementById("root")

const root1 = ReactDOMClient.createRoot(container);

root1.render(<App/>)
