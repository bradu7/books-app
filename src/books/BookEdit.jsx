// import { useEffect, useState } from "react";
// import { useParams } from "react-router";
// import { useAuthContext } from "../features/Auth.context";
// import { Link } from "react-router-dom";

// export function BookEdit() {
//   const { bookId } = useParams();
//   const [book, setBook] = useState(null);
//   const { token } = useAuthContext();
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     console.log(bookId, "dsadsa");
//     fetch(`http://localhost:3005/details/${bookId}`)
//       .then((res) => res.json())
//       .then((data) => setBook(data));
//   }, []);

//   let params = (new URL(document.location)).searchParams;
//   let name = params.get("name");

//   function handleInputChange(e) {
//     setBook({ ...book, [e.target.name]: e.target.value });
//   }

//   async function handleSubmit(e) {
//     e.preventDefault();

//     await fetch(`http://localhost:3005/details/${bookId}`, {
//       method: "PUT",
//       body: JSON.stringify(book),
//       headers: {
//         "Content-type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     setMessage("Your book was saved");
//   }

//   if (!book) {
//     return <p>Loading ...</p>;
//   }

//   return (
//     <>
//       {message && <strong>{message}</strong>}
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="title">Title</label>
//         <input
//           type="text"
//           id="title"
//           name="title"
//           value={book.title}
//           onChange={handleInputChange}
//         />
//         <button type="submit">Save</button>
//       </form>
//     </>
//   );
// }
