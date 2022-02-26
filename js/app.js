function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
};
function tenUser(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(xyz => displayUser(xyz))
};
function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => console.log(data))
};
// loadData();
function displayUser(xyz){
    const ul = document.getElementById('users');
    for(const user of xyz){
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }
};
