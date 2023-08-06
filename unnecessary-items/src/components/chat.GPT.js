// zrobisz komponent reactowy, który wykorzysyuje te dane, posiada 3 przyciki, po naciśnięciu jednego z nich wyświetlamy inną litę wraz paginają


// Oczywiście! Poniżej znajduje się prosty komponent React, który korzysta z podanych danych charityData. Komponent posiada trzy przyciski, a po naciśnięciu jednego z nich, wyświetla kolejne elementy danej kategorii wraz z paginacją.

// Zakładam, że używamy hooka useState do przechowywania stanu i aktualizacji paginacji.

// Ten komponent reaguje na kliknięcie przycisków, zmieniając kategorię oraz aktualną stronę, dzięki czemu wyświetlane są różne elementy dla każdej kategorii wraz z prostą paginacją. Dzięki temu użytkownik może przeglądać zawartość w wygodny sposób.


// import React, { useState } from 'react';

// const CharityComponent = ({ charityData }) => {
//   const [category, setCategory] = useState('fundacje');
//   const [currentPage, setCurrentPage] = useState(0);
//   const itemsPerPage = 3;

//   const handleClick = (categoryName) => {
//     setCategory(categoryName);
//     setCurrentPage(0);
//   };

//   const handlePrevPage = () => {
//     setCurrentPage((prevPage) => prevPage - 1);
//   };

//   const handleNextPage = () => {
//     setCurrentPage((prevPage) => prevPage + 1);
//   };

//   const getCategoryItems = () => {
//     return charityData[category].slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);
//   };

//   return (
//     <div>
//       <h2>Wybierz kategorię:</h2>
//       <button onClick={() => handleClick('fundacje')}>Fundacje</button>
//       <button onClick={() => handleClick('organizacje')}>Organizacje</button>
//       <button onClick={() => handleClick('lokalne')}>Organizacje Lokalne</button>

//       <h2>Lista wybranej kategorii:</h2>
//       {getCategoryItems().map((item) => (
//         <div key={item.title}>
//           <h3>{item.title}</h3>
//           <p>{item.subtitle}</p>
//           <p>{item.mission}</p>
//         </div>
//       ))}

//       <div>
//         <button onClick={handlePrevPage} disabled={currentPage === 0}>
//           Poprzednia strona
//         </button>
//         <button
//           onClick={handleNextPage}
//           disabled={(currentPage + 1) * itemsPerPage >= charityData[category].length}
//         >
//           Następna strona
//         </button>
//       </div>
//     </div>
//   );
// };

// // Przykład użycia:
// const App = () => {
//   return (
//     <div>
//       <CharityComponent charityData={charityData} />
//     </div>
//   );
// };

// export default App;
