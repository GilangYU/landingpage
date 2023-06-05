// let artikel = document.getElementById("list-artikel");

// fetch("https://6451c103a2860c9ed4fa3d95.mockapi.io/api/v1/artikel")
//   .then((data) => data.json())
//   .then((result) => {
//     result.forEach((article) => {
//       artikel.innerHTML += `
      
//     <div class="row row-cols-1 row-cols-md-3 g-4">  
//         <div class="card-group">
//             <div class="card">
//                 <img src="${article.image}" class="card-img-top" alt="...">
//                 <div class="category"> ${article.category} </div>
//                 <div class="card-body">
//                     <h5 class="card-title">${article.titleartikel}</h5>
//                     <p class="card-text">${article.descartikel}</p>
//                     <a href="artikel-details.html" class="btn btn-primary">Selengkapnya</a>
//                 </div>
//                 <div class="card-footer">
//                     <small class="text-body-secondary">${article.publish}</small>
//                 </div>
//             </div>
//         </div>
//     </div>
//       `;
//     });
//   });

let artikel = document.getElementById("list-artikel");

fetch("https://6451c103a2860c9ed4fa3d95.mockapi.io/api/v1/artikel")
  .then((data) => data.json())
  .then((result) => {
    result.forEach((article) => {
      const trimmedStringTitle = article.titleartikel.length > 50 ? article.titleartikel.substring(0, 50 - 3) + "..." : article.titleartikel;
      const trimmedString = article.descartikel.length > 100 ? article.descartikel.substring(0, 100 - 3) + "..." : article.descartikel;

      artikel.innerHTML += `
      
      <div class="col-sm-9 col-md-4 col-lg-4">
        <div class="col">
            <div class="card">
                <img src="${article.image}" class="card-img-top" alt="...">
                <div class="category"> ${article.category} </div>
                <div class="card-body">
                    <h5 class="card-title">${trimmedStringTitle}</h5>
                    <p class="card-text">${trimmedString}</p>
                    <a href="artikel-details.html" class="btn btn-primary">Selengkapnya</a>
                </div>
                <div class="card-footer">
                    <small class="text-body-secondary">${article.publish}</small>
                </div>
            </div>
        </div>
      </div>
      `;
    });
  });