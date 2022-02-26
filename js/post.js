function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayData(data))
};
loadPost();

function displayData(xyz){
    const getPostId = document.getElementById('for-post');
    for(const post of xyz){
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = `
        <h3>Post title: ${post.title}</h3>
        <p>Post Details: ${post.body}</p>
        `;
        getPostId.appendChild(div);
        console.log(post);
    }
}
