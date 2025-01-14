import React, { useEffect, useState } from "react";
import BookCard from "../components/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { useFirebase } from "../context/firebase";

const HomePage = () => {
  const firebase = useFirebase();

  const [books, setBooks] = useState([]);

  useEffect(() => {
    firebase.listAllBooks().then((books) => setBooks(books.docs));
  }, []);
  console.log(firebase.isLoggedIn);
  return (
    <div className="container mt-5">
      <CardGroup>
        {books.map((book) => (
          <BookCard
            link={`/book/view/${book.id}`}
            key={book.id}
            id={book.id}
            {...book.data()}
          />
        ))}
      </CardGroup>
    </div>
  );
};

export default HomePage;
