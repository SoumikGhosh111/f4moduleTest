// // HistoryPage.js
// import React from 'react';
// import { useSelector } from 'react-redux';

// const HistoryPage = () => {
//   const searchHistory = useSelector((state) => state.history);

//   return (
//     <div>
//       <h2>Search History</h2>
//       <ul>
//         {searchHistory.map((term, index) => (
//           <li key={index}>{term}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default HistoryPage;



// src/components/History.js
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const HistoryPage = ({ searchHistory }) => {
 
  return (
    <div>
      <h2>Search History</h2>
      <ul>
        {searchHistory.map((word, index) => (
          <li key={index}>
            <Link to={`/word/${word}`}>{word}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  searchHistory: state.history,
});

// const mapStateToProps = (state) => ({
//   searchHistory: state.history.history,
// });

export default connect(mapStateToProps)(HistoryPage);
