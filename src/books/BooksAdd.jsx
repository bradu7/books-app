// import { useEffect, useState } from "react";
// import { useParams } from "react-router";
// import { useAuthContext } from "../features/Auth.context";
// import { Link } from "react-router-dom";

// export function BookAdd() {
//   const [book, setBook] = useState({
//     title: "",
//   });
//   const { token } = useAuthContext();
//   const [message, setMessage] = useState("");

//   function handleInputChange(e) {
//     setBook({ ...book, [e.target.name]: e.target.value });
//   }

//   async function handleSubmit(e) {
//     e.preventDefault();

//     await fetch(`http://localhost:3005/details`, {
//       method: "POST",
//       body: JSON.stringify(book),
//       headers: {
//         "Content-type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     setBook("Your book was saved");
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
