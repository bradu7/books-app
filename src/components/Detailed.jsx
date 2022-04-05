import React from "react";
import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { BookDetails } from "../books/BookDelete";
// import { BookEdit } from "../books/BookEdit";
import { BookAdd } from "../books/BooksAdd";
import BuyNow from "./BuyNow";
import { Nav } from "./Nav";

function Detailed() {
  const params = useParams();
  const location = useLocation();
  const [detailed, setDetailed] = useState({});

  const fetchDetailed = async () => {
    const data = await fetch(
      `https://api.nytimes.com/svc/books/v3/lists/${params.primary_isbn10}/hardcover-fiction.json?api-key=LHG23bHHYfmAHmUDXvELvAW42S3TJtlz`
    );

    const detailedData = await data.json();
    const filteredBook = detailedData.results.books.filter(
      (book) => book.primary_isbn10 === params.id
    );
    console.log(filteredBook);
    setDetailed(filteredBook[0]);

    function handleRemove(primary_isbn10) {
      const spliceBook = detailedData.results.books.filter(
        (book) => book.primary_isbn10 !== primary_isbn10
      );
      setDetailed(spliceBook);
    }
  };

  useEffect(() => {
    fetchDetailed();
    console.log(location);
  }, []);

  return (
    <>
      <Nav />
      <div className="bookDetails">
        <img src={detailed.book_image}></img>
        <div className="description">
          <p className="description-line">{detailed.author}</p>

          <p className="description-line">
            <b>{detailed.title}</b>
          </p>

          <p className="description-line">
            Description: {detailed.description}
          </p>

          <p className="description-line">{`Publisher: ${detailed.publisher}`}</p>

          <a href={detailed.amazon_product_url} target="_blank">
            <button className="buyNow">Buy Now</button>
          </a>
          {/* <button type="button" onClick={() => handleRemove(book.primary_isbn10)}>
          Delete
        </button> */}
          {/* <BookDetails></BookDetails> */}
          {/* <BookEdit></BookEdit> */}
          {/* <BookAdd></BookAdd> */}
        </div>
      </div>
    </>
  );
}

export default Detailed;
