import ReactDOM from "react-dom/client";
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pageComponet/home.tsx";
import MainLayout from "./MainLayout.tsx";
const root = document.getElementById("root");
if (!root) {
  throw new Error('Root element not found');
}

ReactDOM.createRoot(root).render(
  <BrowserRouter>
   <Provider store={store}>
      <Routes>
         <Route element={<MainLayout />}>
          <Route index element={<App/>} />
          <Route path="home" element={<Home/>} />
         </Route>
      </Routes>
   </Provider>
  </BrowserRouter>
)
