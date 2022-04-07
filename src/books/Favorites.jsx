import React, { useContext } from "react";
import Bestsellers from "../components/Bestsellers";
import { GlobalProvider } from "../context/Global";
import { BookAdd } from "./BooksAdd";

function Favorites() {
  // const { favorites } = useContext(GlobalContext);
  const favorites = JSON.parse(localStorage.getItem("favorites"))
  return (
    <div>
      <h1>Favorites</h1>

      {favorites.length > 0 ? (
        <div>
          {favorites.map((book) => (
            <Bestsellers book={book} type="favorites" />
          ))}
        </div>
      ) : (
        <h2> No books</h2>
      )}
    </div>
  );
}

export default Favorites;
