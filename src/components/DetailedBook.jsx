// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { useAuthContext } from "../features/Auth.context";

// function DetailedBook({ data }) {
//   const { id } = useParams();
//   const [book, setBook] = useState(null);
//   const { token } = useAuthContext();
//   const navigate = useNavigate();
//   useEffect(() => {
//     async function getBooks() {
//       const data = await fetch(`http://localhost:3005/books/${id}`).then(
//         (res) => res.json()
//       );
//       console.log(data);
//       setBook(data);
//     }
//     getBooks();
//   }, []);
//   if (!book) {
//     return <p>"Loading..."</p>;
//   }

//   async function deleteBook() {
//     const response = window.confirm(
//       `Are you sure you want to delete the book "${book.title}"?`
//     );
//     if (response) {
//       await fetch(`http://localhost:3005/books/${book.id}`, {
//         method: "DELETE",
//         body: JSON.stringify({ ...book }),
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       navigate("/");
//     }
//   }

//   return (
//     <div>
//       <img src={book.book_image}></img>
//       <button onClick={deleteBook}>Delete</button>
//     </div>
//   );
// }

// export default DetailedBook;
