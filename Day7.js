// Activity 1

// #Task 1
const book = {
  title: "New Book",
  author: "Niraj S",
  year: 2024,
  getInfo: function () {
    return "Title is " + book.title + " and Author is " + book.author;
  },
  updateYear: function (year) {
    this.year = year; // or book.year = year
  },
  getInfowithThisKeyword: function () {
    return "Title is " + this.title + " and year is " + this.year;
  },
};

console.log(book);

// #Task 2
console.log("Title=" + book.title + ", Author=" + book.author);

// Activity 2

// #Task 3
console.log(book.getInfo());

// #Task 4
book.updateYear(2010);
console.log(book.year);

// Activity 3

// #Task 5
const library = {
  name: "Code Library",
  books: [
    {
      title: "Book 1",
      author: "Person 1",
      year: 2030,
    },
    {
      title: "Book 2",
      author: "Person 2",
      year: 2032,
    },
    {
      title: "Book 3",
      author: "Person 3",
      year: 2035,
    },
  ],
};

console.log(library);

// #Task 6
console.log(library.name);
library.books.forEach(({title, author, year}) => console.log(title))
// OR -> library.books.forEach(({title}) => console.log(title))
// OR ->  library.books.forEach((book) => console.log(book.title))


// Activity 4

// #Task 7
console.log(book.getInfowithThisKeyword());



// Activity 5

// #Task 8
for(key in book)
{
    console.log(key + " -> " + book[key]);
}

// #Task 9
console.log(Object.keys(book)+ " : "  + Object.values(book));
