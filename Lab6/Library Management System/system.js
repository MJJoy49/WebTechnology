const bookTitleInput = document.getElementById('bookTitle');
const pubYearInput = document.getElementById('pubYear');
const addBtn = document.getElementById('addBtn');
const tbody = document.querySelector('#bookTable tbody');

// Load books from localStorage on start
loadBooks();

addBtn.addEventListener('click', addBook);
pubYearInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addBook();
});

function addBook() {
    const title = bookTitleInput.value.trim();
    const year = pubYearInput.value.trim();

    if (title === '' || year === '') {
        alert('Please fill in both fields');
        return;
    }

    const book = { title, year };

    // Save to localStorage
    let books = getBooksFromStorage();
    books.push(book);
    localStorage.setItem('libraryBooks', JSON.stringify(books));

    // Add to table
    appendBookToTable(book);

    // Clear inputs
    bookTitleInput.value = '';
    pubYearInput.value = '';
}

function appendBookToTable(book) {
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.year}</td>
        <td><button class="delete-btn" onclick="deleteBook(this, '${book.title}', ${book.year})">Delete</button></td>
    `;

    // Green highlight like in your image
    row.style.backgroundColor = '#d5f5e3';

    tbody.appendChild(row);
}

function deleteBook(button, title, year) {
    if (confirm(`Delete "${title}" (${year})?`)) {
        // Remove from localStorage
        let books = getBooksFromStorage();
        books = books.filter(b => !(b.title === title && b.year === year));
        localStorage.setItem('libraryBooks', JSON.stringify(books));

        // Remove from table
        button.parentElement.parentElement.remove();
    }
}

function getBooksFromStorage() {
    const data = localStorage.getItem('libraryBooks');
    return data ? JSON.parse(data) : [];
}

function loadBooks() {
    const books = getBooksFromStorage();
    if (books.length === 0) {
        tbody.innerHTML = '<tr><td colspan="3" class="no-books">No books added yet</td></tr>';
        return;
    }

    tbody.innerHTML = '';
    books.forEach(book => appendBookToTable(book));
}