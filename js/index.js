document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const searchKeyword = document.querySelector('#searchInput').value;
  
    fetch(`https://api.github.com/search/users?q=${searchKeyword}`, {
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the data and display user information
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  });
  