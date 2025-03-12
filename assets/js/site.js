// write cool JS here!!
const myInfo = 'en variabel';
const myBooks = ["The Catcher in the Rye",
    "To Kill a Mockingbird",
    "1984",
    "Pride and Prejudice",
    "The Great Gatsby",
    "The Hobbit",
    "Harry Potter and the Sorcerer's Stone",
    "The Lord of the Rings",
    "The Da Vinci Code",
    "The Hunger Games"]

console.clear();
console.group('console project');
console.log('This is a normal console log')
console.info(`This is a console info: ${myInfo}`);
console.warn('This is a warning');
console.error('This is an error');
console.table(myBooks);
console.time('default');
console.timeEnd('default');
console.groupEnd();
