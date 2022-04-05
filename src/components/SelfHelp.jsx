import React from "react";
import { useState, useEffect } from "react";
import "./style.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import Buttons from "./Buttons";

function SelfHelp() {
  useEffect(() => {
    getReviews();
  }, []);

  const [reviews, setReview] = useState([]);

  const getReviews = async () => {
    const api = await fetch(
      `https://api.nytimes.com/svc/books/v3/reviews.json?author=Frank+Herbert&api-key=LHG23bHHYfmAHmUDXvELvAW42S3TJtlz`
    );
    const data = await api.json();
    setReview(data.results);
    console.log(data.results);
  };

  return (
    <>
      <article className="articles">
        <div className="title">Trending Reviews</div>

        <Splide
          options={{
            perPage: 4,
            pagination: false,
            gap: "10px",
            arrows: false,
          }}
        >
          {reviews &&
            reviews.map((review) => {
              const { book_author, book_title, isbn13, summary, url } = review;

              return (
                // <Book imgSrc={book_image} title={title} author={author} rank={rank}/>
                <SplideSlide key={isbn13}>
                  <h2 className="buttonIcon">
                    <Buttons href={url} />
                  </h2>
                  <div className="imageWrapper">
                    {/* <img src={book_image} alt={title} /> */}
                    <h2>{book_title}</h2>
                    <h4>{book_author}</h4>
                  </div>
                </SplideSlide>
              );
            })}
        </Splide>
      </article>
    </>
  );
}

export default SelfHelp;
