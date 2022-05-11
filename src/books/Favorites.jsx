import React, { useState, useContext, useEffect } from "react";
import Bestsellers from "../components/Bestsellers";
import { GlobalProvider } from "../context/Global";
// import { BookAdd } from "./BooksAdd";
import { Favorite } from "./Favorite";

export function Favorites() {
  // const { favorites } = useContext(GlobalContext);
  // const favorites = JSON.parse(localStorage.getItem("favorites"));
  const [fav, setFav] = useState("");

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites"));
    setFav(favorites);
  }, []);
  return (
    <div>
      <h1 className="favoritesMenu">Favorites</h1>

      {fav?.length > 0 ? (
        <div>
          {fav?.map((book, index) => (
            <Favorite key={index} book={book} />
          ))}
        </div>
      ) : (
        <h2> No books</h2>
      )}
    </div>
  );
}

// export default Favorites;
