import ReactDOM from "react-dom/client";
import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'
import { BrowserRouter, Routes, Route } from "react-router";
import MainLayout from "./MainLayout.tsx";
import BorrowSummary from "./pageComponet/BorrowSummary.tsx";
import AllBooks from "./pageComponet/allBooks/AllBooks.tsx";
import { Toaster } from 'react-hot-toast';
import AddBook from "./pageComponet/AddBook.tsx";
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
          <Route path="/addbook"  element={<AddBook onClose={() => {}} />} /> 
          <Route path="/borrow-summary"  element={<BorrowSummary/>} /> 
          
         </Route>
      </Routes>
      <Toaster />
   </Provider>
  </BrowserRouter>
)
