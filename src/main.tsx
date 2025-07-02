import ReactDOM from "react-dom/client";
import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'
import { BrowserRouter, Routes, Route } from "react-router";
import MainLayout from "./MainLayout.tsx";
import AllBooks from "./pageComponet/AllBooks.tsx";
import AddBook from "./pageComponet/AddBook.tsx";
import BorrowSummary from "./pageComponet/BorrowSummary.tsx";
const root = document.getElementById("root");
if (!root) {
  throw new Error('Root element not found');
}

ReactDOM.createRoot(root).render(
  <BrowserRouter>
   <Provider store={store}>
      <Routes>
         <Route element={<MainLayout />}>
          <Route index  element={<AllBooks/>} /> 
          <Route path="/addbook"  element={<AddBook />} /> 
          <Route path="/borrowbook"  element={<BorrowSummary/>} /> 
          
         </Route>
      </Routes>
   </Provider>
  </BrowserRouter>
)
