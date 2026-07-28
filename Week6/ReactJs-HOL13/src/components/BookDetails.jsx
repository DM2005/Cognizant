function BookDetails({ books }) {
  const bookList = books.map((book) => (
    <div key={book.id} className="item-row">
      <h3>{book.bname}</h3>
      <h4>{book.price}</h4>
    </div>
  ));

  return (
    <div className="card book-card">
      <h1>Book Details</h1>
      {bookList}
    </div>
  );
}

export default BookDetails;
