import React, { useState, useEffect } from 'react';
import { useQuery, useSubscription } from '@apollo/client';
import { ALL_BOOKS } from '../graphql/queries';
import { BOOK_ADDED as BOOK_ADDED_SUBSCRIPTION } from '../graphql/subscriptions';

const Books = () => {
  const [genre, setGenre] = useState(null);
  const result = useQuery(ALL_BOOKS);

  console.log("GraphQL Query Result:", result); // Debugging output

  useSubscription(BOOK_ADDED_SUBSCRIPTION, {
    onData: ({ data }) => {
      const addedBook = data?.data?.bookAdded;
      if (addedBook) {
        notify(`${addedBook.title} added`);
      }
    }
  });

  if (result.loading) {
    return <div>loading...</div>;
  }

  if (result.error) {
    return <div>Error: {result.error.message}</div>;
  }

  const books = result.data?.allBooks || [];
  const genres = [...new Set(books.flatMap(b => b.genres))];

  const filteredBooks = genre
    ? books.filter(b => b.genres.includes(genre))
    : books;

  return (
    <div>
      <h2>books</h2>
      {genre && (
        <div>
          in genre <strong>{genre}</strong>
          <button onClick={() => setGenre(null)}>all genres</button>
        </div>
      )}
      {!genre && (
        <div>
          {genres.map(g => (
            <button key={g} onClick={() => setGenre(g)}>
              {g}
            </button>
          ))}
        </div>
      )}
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>author</th>
            <th>published</th>
          </tr>
          {filteredBooks.map(a => (
            <tr key={a.title}>
              <td>{a.title}</td>
              <td>{a.author?.name || "Unknown"}</td>
              <td>{a.published}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const notify = (message) => {
  alert(message);
};

export default Books;