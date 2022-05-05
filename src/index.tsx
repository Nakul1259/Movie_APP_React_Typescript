require('file-loader?name=[name].[ext]!./index.html')
import React from 'react'
import App from './App'
import { createRoot } from "react-dom/client";




const appElement = document.getElementById('app')!;
const root = createRoot(appElement);



root.render(<App />);
  