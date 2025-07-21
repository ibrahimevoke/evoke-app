const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

// Enable CORS for Angular app
app.use(cors({
  origin: 'http://localhost:4200',
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}));

// Body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Static files (if serving Angular build)
// app.use(express.static(path.join(__dirname, 'dist/your-angular-project')));

// Test route
app.get('/api/books', (req, res) => {
//   res.json({ message: 'Hello from Express!' });
    res.send(books);
});
app.get('/api/foods', (req, res) => {
    res.send(foods);});
   
app.get('/', (req, res) => {
    res.json("Welcome to the REST API!");
});  

app.use(express.static(__dirname));

let corsOptions={
    origin: `http://localhost: ${port}`,
    // methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    // preflightContinue: false,
    optionsSuccessStatus: 200
}

//mock food data
var foods = [
    { id: 1, name: 'Pizza', price: 10.99 },
    { id: 2, name: 'Burger', price: 8.99 },
    { id: 3, name: 'Pasta', price: 12.99 }
];

//mock books data
var books = [
    { id: 1, title: '1984', author: 'George Orwell', price: 9.99 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', price: 7.99 },
    { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', price: 10.99 }
];
// mock books data
var movies = [  
    { id: 1, title: 'Inception', director: 'Christopher Nolan', price: 14.99 },
    { id: 2, title: 'The Matrix', director: 'Lana Wachowski, Lilly Wachowski', price: 12.99 },
    { id: 3, title: 'Interstellar', director: 'Christopher Nolan', price: 15.99 }
];

app.listen(port, () => {
  console.log(`Express server running on port ${port} with `);
});


//calcute the next id for food
function getNextFoodId() {
    return foods.length > 0 ? Math.max(...foods.map(f => f.id)) + 1 : 1;
}

let new_food = {
    id: getNextFoodId(),
    name: 'wWOw',
    price: 15.99
}
foods.push(new_food);
console.log(foods);
// add item in food data
app.post('/api/foods', (req, res) => {
    const { name, price = 0 } = req.body;
    const newFood = {
        id: getNextFoodId(),
        name,
        price
    };
    foods.push(newFood);
    res.status(201).json(newFood);
});

// app.post('/api/foods:',()=>{

// })
//CRUD operations for books
app.post('/api/books', (req, res) => {
    const newBook = req.body;
    books.push(newBook);
    res.status(201).json(newBook);
});
app.put('/api/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const updatedBook = req.body;
    const index = books.findIndex(b => b.id === bookId);
    if (index !== -1) {
        books[index] = { ...books[index], ...updatedBook };
        res.json(books[index]);
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
});
app.delete('/api/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const index = books.findIndex(b => b.id === bookId);
    if (index !== -1) {
        books.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
});



