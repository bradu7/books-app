import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { useAuthContext } from "../features/Auth.context";

export function BookDetails() {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);
  const { token } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3005/books?userId=1`)
      .then((res) => res.json())
      .then((data) => setBook(data));
  }, [bookId]);

  async function handleDelete() {
    const response = window.confirm(
      `Are you sure you want to delete the book "${book.title}"?`
    );
    if (response) {
      await fetch(`http://localhost:3005/books/1`, {
        method: "DELETE",
        body: JSON.stringify({
          id: 1,
          book_image:
            "https://storage.googleapis.com/du-prd/books/images/9780759554344.jpg",
        }),
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      navigate("/");
    }
  }

  if (!book) {
    return <p>Loading ...</p>;
  }

  return (
    <>
      <h1>{book.title}</h1>
      {/* <img src={book.book_image} alt={`Poster for ${book.title}`} /> */}
      {token && <button onClick={handleDelete}>Delete</button>}
      {/* {token && (
        <Link to={`/details/${book.primary_isbn10}/edit`}>Edit this book</Link>
      )} */}
    </>
  );
}
