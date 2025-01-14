import React, { useEffect, useState } from "react";
import { useFirebase } from "../context/firebase";
import BookCard from "../components/Card";

const OrdersPage = () => {
  const firebase = useFirebase();
  console.log(firebase);
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state
  useEffect(() => {
    console.log("IsLoggedIn in OrdersPage:", firebase.isLoggedIn);
  }, [firebase.isLoggedIn]);

  useEffect(() => {
    if (firebase.isLoggedin) {
      firebase
        .fetchMyBooks(firebase.user.uid)
        .then((books) => setBooks(books.docs))
        .finally(() => setLoading(false)); // Ensure loading stops
    } else {
      setLoading(false); // Loading stops if user is not logged in
    }
  }, [firebase.isLoggedin]);

  if (loading) return <h1>Loading...</h1>;

  if (!firebase.isLoggedin) return <h1>Please log in to view your orders.</h1>;

  return (
    <div>
      {books.map((book) => (
        <BookCard
          link={`/books/orders/${book.id}`}
          key={book.id}
          id={book.id}
          {...book.data()}
        />
      ))}
    </div>
  );
};

export default OrdersPage;
