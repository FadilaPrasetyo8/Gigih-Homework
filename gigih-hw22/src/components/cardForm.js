// import React from "react";
// import Card from "./Card/card";

// const CardForm = ({ onSubmit, onChange, logout }) => {
//   return (
//     // <Card className="card">
//     //   <div className="card-form">
//     //     <form onSubmit={onSubmit}>
//     //       <input
//     //         className="form-input"
//     //         type="text"
//     //         onChange={onChange}
//     //         placeholder="Search..."
//     //       />
//     //       <button>Search</button>
//     //       <button className="btn-primary btn-logout" onClick={logout}>
//     //         Logout
//     //       </button>
//     //     </form>
//     //   </div>
//     // </Card>

//     <div className="App">
//       <header className="App-header">
//         {/* <h1>Spotify React</h1> */}
//         <div className="form">
//           <div className="container">
//             <div className="card">
//               <div className="title">
//                 <h1>Search Music</h1>
//               </div>

//               {token ? (
//                 // <form onSubmit={searchArtists}>
//                 //   <input type="text" onChange={(e) => setsearchKey(e.target.value)} />
//                 //   <button type={"submit"}>Search</button>
//                 // </form>

//                 <form onSubmit={searchArtists}>
//                   <input
//                     type="text"
//                     onChange={(e) => setsearchKey(e.target.value)}
//                   />
//                   <button type={"submit"}>Search</button>
//                 </form>
//               ) : (
//                 <p>Please login</p>
//               )}

//               {!token ? (
//                 <a
//                   href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONE_TYPE}&scope=${SCOPE}`}
//                 >
//                   Login to Spotify
//                 </a>
//               ) : (
//                 <button onClick={logout}>Logout</button>
//               )}
//             </div>
//           </div>
//         </div>
//         {/* <div>{selectedItem()}</div> */}
//         <div className="top">
//           <div className="container-lagu">{renderArtists()}</div>
//         </div>
//       </header>
//     </div>
//   );
// };

// export default CardForm;
