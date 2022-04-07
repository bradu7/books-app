// import React, {createContext, useReducer, useEffect} from 'react';
// import AppReducer from "./AppReducer";

// // initial State

// const initialState = {
//     favorites: localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : []

// }


// // create Context

// // export const GlobalContext = createContext(initialState);

// // provider components

// export const GlobalProvider = props => {
//     const [state, dispatch] = useReducer(AppReducer, initialState);

//     useEffect(() => {
//         localStorage.setItem('favorites', JSON.stringify(state.favorites))
//     }, [state]);

//     // actions

//     const addBookToFavorites = book => {
//         dispatch({type: "ADD_BOOK_TO_FAVORITES", payload: book })
//     };

//     return (
//         <GlobalContext.Provider value={{favorites: state.favorites, addBookToFavorites}}>
//             {props.children}
//         </GlobalContext.Provider>
//     )
// };

// // export default Global