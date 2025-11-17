const studentNameInput = document.getElementById('studentName');
const addBtn = document.getElementById('addBtn');
const studentList = document.getElementById('studentList');
const highlightBtn = document.getElementById('highlightBtn');

let isHighlighted = false;

// Load students on start
loadStudents();

addBtn.addEventListener('click', addStudent);
studentNameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addStudent();
});

highlightBtn.addEventListener('click', () => {
    isHighlighted = !isHighlighted;
    document.querySelectorAll('#studentList li').forEach(li => {
        if (isHighlighted) {
            li.classList.add('highlighted');
        } else {
            li.classList.remove('highlighted');
        }
    });

    highlightBtn.textContent = isHighlighted ? 'Remove Highlight' : 'Highlight Students';
});

function addStudent() {
    const name = studentNameInput.value.trim();
    if (name === '') {
        alert('Please enter a student name');
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `
        <span>${name}</span>
        <div class="btn-group">
            <button class="edit-btn" onclick="editStudent(this)">Edit</button>
            <button class="delete-btn" onclick="deleteStudent(this)">Delete</button>
        </div>
    `;

    studentList.appendChild(li);
    saveStudents();
    studentNameInput.value = '';
    studentNameInput.focus();
}

function editStudent(button) {
    const li = button.parentElement.parentElement;
    const span = li.querySelector('span');
    const currentName = span.textContent;

    const newName = prompt('Edit student name:', currentName);
    if (newName && newName.trim() !== '') {
        span.textContent = newName.trim();
        saveStudents();
    }
}

function deleteStudent(button) {
    if (confirm('Are you sure you want to delete this student?')) {
        button.parentElement.parentElement.remove();
        saveStudents();
    }
}

function saveStudents() {
    const students = [];
    document.querySelectorAll('#studentList li span').forEach(span => {
        students.push(span.textContent);
    });
    localStorage.setItem('students', JSON.stringify(students));
}

function loadStudents() {
    const saved = localStorage.getItem('students');
    if (!saved || saved === '[]') {
        studentList.innerHTML = '<li class="no-students">No students added yet</li>';
        return;
    }

    const students = JSON.parse(saved);
    studentList.innerHTML = '';
    students.forEach(name => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${name}</span>
            <div class="btn-group">
                <button class="edit-btn" onclick="editStudent(this)">Edit</button>
                <button class="delete-btn" onclick="deleteStudent(this)">Delete</button>
            </div>
        `;
        studentList.appendChild(li);
    });
}