import React from "react";
import Home from "./Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Detailed from "../components/Detailed";
import { Auth } from "../features/Auth";
import { AuthContextProvider, useAuthContext } from "../features/Auth.context";
import { BookEdit } from "../books/BookEdit";
import { BookDetails } from "../books/BookDelete";
import { AuthGuard } from "../components/AuthGuard";
import { BookAdd } from "../books/BooksAdd";
import { Favorites } from "../books/Favorites";
import { GlobalProvider } from "../context/Global";

function Pages() {
  return (
    // <GlobalProvider>
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/details/:id" element={<Detailed />} />
          <Route path="login" element={<Auth />} />
          <Route path="register" element={<Auth />} />
          <Route path="details/:bookId" element={<BookDetails />} />
          {/* <Route path="bookdetails/:id" element={<DetailedBook />} /> */}
          <Route
            path="details/:bookId/edit"
            element={<AuthGuard>{/* <BookEdit /> */}</AuthGuard>}
          />
          
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
    // </GlobalProvider>
  );
}

export default Pages;
