//  loader
setTimeout(() => {
  let loader = document.querySelector('.loader').style.display = 'none';
  let wrapper = document.querySelector('.wrapper').style.opacity = 1;
}, 1500);


fetch('https://jsonplaceholder.typicode.com/photos')
.then((res) => res.json())
.then((data) => {  

 let div = document.querySelector('.load__images');
 let totalLength = document.querySelector('.total__length');

  for(let i = 0; i < data.length; i++) {

      if(data[i].id > 20) {
          return;
      }  
      else {
        totalLength.innerHTML = i + 1;

        let view = `
          <div class='images'>
            <img src= ${data[i].url} />
            <p>${data[i].title}</p>  
            <p>albumID: ${data[i].albumId}</p>  
          </div>  `;
        div.innerHTML += view;
      }
  }
})