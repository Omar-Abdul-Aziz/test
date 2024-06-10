document.addEventListener('DOMContentLoaded', function () {
  // Get the posts from local storage or an empty array
  const posts = JSON.parse(localStorage.getItem('posts')) || [];
  // Get the posts list element
  const postsList = document.getElementById('postsList');

  // loop through the posts and display them on the page
  posts.forEach((post) => {
    const postElement = document.createElement('div');
    // Add classes to the post element
    postElement.classList.add('card', 'mb-3');
    // Add the post content to the post element
    postElement.innerHTML = `
      <div class="card-body">
        <h5 class="card-title">${post.title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${post.username}</h6>
        <p class="card-text">${post.content}</p>
      </div>
    `;
    // Append the post element to the posts list
    postsList.appendChild(postElement);
  })

  // Add event listener to the toggle mode button
  document.getElementById('toggleMode').addEventListener('click', function () {
    // Toggle the dark-mode class on the body when the button is clicked
    document.body.classList.toggle('dark-mode');
  });
});