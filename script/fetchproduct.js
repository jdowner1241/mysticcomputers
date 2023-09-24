
    
  // search function

//   $('#searchbtn').click(() => {
//     const searchTerm = $('#searchbox').val();
    
//     fetch(products)
//       .then(response => response.json())
//       .then(data => {
//         const results = data.filter(item => item.tags.includes(searchTerm));
        
//         $('#results').empty();
//         results.forEach(result => {
//           $('#results').append(`
//             <h2>${result.title}</h2>
//             <p>${result.description}</p>
//           `);
//         });
//       })
//       .catch(error => console.error(error));
//   });


  const products = 'script/product.json';

  function search(query) {
    fetch(products)
      .then(response => response.json())
      .then(data => {
        const results = data.filter(item => {
          return item.title.toLowerCase().includes(query.toLowerCase()) || 
                 item.description.toLowerCase().includes(query.toLowerCase()) || 
                 item.tags.includes(query.toLowerCase());
        });
        $('#search-results').empty();
        results.forEach(item => {
          $('#search-results').append(`<div>${item.title}</div>`);
        });
      });
  }

  // event listener for form submission
  $('#search-form').submit(function(event) {
    event.preventDefault();
    const query = $('#search-input').val();
    const url = window.location.pathname + '?query=' + encodeURIComponent(query);
    window.location.href = url;
  });

  // check for query parameter on search results page and call search function
  const urlParams = new URLSearchParams(window.location.search);
  const query = urlParams.get('query');
  if (query) {
    search(query);
  }

//   function search() {
//     let query = document.getElementById("search-box").value;
//     let results = [];
//     for (let i = 0; i < products.length; i++) {
//       if (products[i].tags.includes(query) || products[i].description.includes(query)) {
//         results.push(products[i]);
//       }
//     }
//     localStorage.setItem("searchResults", JSON.stringify(results));
//     window.location.href = "product.html";
//   }
  