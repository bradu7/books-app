import { useState, useEffect, useContext } from "react";
import "./style.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";
import DetailedBook from "./DetailedBook";
import { GlobalContext } from "../context/Global";
import AppReducer from "../context/AppReducer";
import Favorites from "../books/Favorites";

// export const FavoriteBooks = ({ book }) => {
//   const { addBookToFavorites, favorites } = useContext(GlobalContext);
// };

// const storedBook = favorites.find(
//   (o) => o.primary_isbn10 === book.primary_isbn10
// );

// const favoritesDisabled = storedBook ? true : false;

function Bestsellers() {
  useEffect(() => {
    getBestsellers();
  }, []);

  const [books, setBooks] = useState(null);

  // useEffect(() => {
  //   async function getBooks() {
  //     const data = await fetch(`http://localhost:3005/books`).then((res) =>
  //       res.json()
  //     );
  //     setBooks(data);
  //   }
  //   getBooks();
  // }, []);

  // if (!books) {
  //   return <p>"Loading..."</p>;
  // }
  // const render = books.map((elem) => (
  //   <Link to={`bookdetails/${elem.id}`}>
  //     <img key={elem.id} src={elem.book_image} alt="book"></img>
  //   </Link>
  // ));

  // return (
  //   <>
  //     <div>{render}</div>

  //   </>
  // );

  const getBestsellers = async () => {
    const api = await fetch(
      `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=LHG23bHHYfmAHmUDXvELvAW42S3TJtlz`
    );
    const data = await api.json();
    console.log(data.results.books);
    setBooks(data.results.books);
  };



  function addToBooks(e) {
    e.preventDefault();
    const favorites = JSON.parse(localStorage.getItem("favorites"));
    console.log(favorites);
    let findBooks = books.find(elem => elem.isbn === e.target.value);
    favorites.push(findBooks);
   
    // localStorage []
    favorites.push(e.target.value);
    console.log(favorites);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }

  

  return (
    <>
      <article className="articles">
        <div className="title">Bestsellers</div>

        <Splide
          options={{
            perPage: 4,
            pagination: false,
            gap: "10px",
            arrows: false,
          }}
        >
          {books &&
            books.map((book) => {
              const {
                author,
                book_image,
                description,
                price,
                publisher,
                primary_isbn10,
                rank,
                title,
              } = book;

              return (
                <SplideSlide key={rank}>
                  <div className="imageWrapper">
                    <Link
                      to={{
                        pathname: `/details/${primary_isbn10}`,
                      }}
                    >
                      <img src={book_image} alt={title} />
                      <h2>{title}</h2>
                      <h4>{author}</h4>
                      <p>Rank: {rank}</p>
                    </Link>
                    <div className="favorites">
                      <button
                        value={book.primary_isbn10}
                        className="addFavorites"
                        // onClick={() => addBookToFavorites({title: "asd"})}
                        // disabled={favoritesDisabled}
                        onClick={addToBooks}
                      >
                        Add to Favorites
                      </button>
                    </div>
                  </div>
                </SplideSlide>
              );
            })}
        </Splide>
      </article>
    </>
  );
}

export default Bestsellers;
