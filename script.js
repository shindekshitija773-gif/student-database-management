let students = JSON.parse(localStorage.getItem('students')) || [];
const tbody = document.querySelector('#studentTable tbody');

function show(){
tbody.innerHTML = '';
students.forEach((s,i)=>{
tbody.innerHTML += `<tr><td>${s.name}</td><td>${s.roll}</td><td>${s.course}</td><td><button onclick="del(${i})">Delete</button></td></tr>`;
});
}

document.getElementById('studentForm').addEventListener('submit', (e)=>{
e.preventDefault();
let name = document.getElementById('name').value;
let roll = document.getElementById('roll').value;
let course = document.getElementById('course').value;
students.push({name, roll, course});
localStorage.setItem('students', JSON.stringify(students));
e.target.reset();
show();
});

function del(i){
students.splice(i,1);
localStorage.setItem('students', JSON.stringify(students));
show();
}
show();
