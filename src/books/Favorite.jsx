import React from "react";
// import { Favorites } from "./Favorites";

export function Favorite({ book }) {
  console.log(book);
  function removeBook(e) {
    e.preventDefault();
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    let newFavorites = favorites.filter(
      (favorite) => favorite.primary_isbn10 !== e.target.value
    );
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
    window.location.reload();
  }

  return (
    <div className="favcard">
      <img src={book.book_image} alt={book.title} />
      <h2>{book.title}</h2>
      <h4>{book.author}</h4>
      <p>Rank: {book.rank}</p>

      <div className="favorites">
        <button
          value={book.primary_isbn10}
          className="addFavorites"
          onClick={removeBook}
        >
          Remove from Favorites
        </button>
      </div>
    </div>
  );
}
