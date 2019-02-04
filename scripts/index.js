/**
 * index.js
 * - All our useful JS goes here, awesome!
 */

console.log("JavaScript is amazing!");
var grocery=[];
fetch('/scripts/list.json')
.then(function (res){
  return res.json();
  
})
.then(function (data) {



  document.getElementById('grocery_list').innerHTML =
  `
   ${data.map(getItem).join('')}

  `

   })

function getItem(product){
  return `
       
              <div class="card">  
                    <div class="card_content">      
                              <div  class="item_qty">
                                <h3 >QTY: ${product.qty}</h3>  
                              </div>
                              <div class="center_content">      
                                <h1 class="item_name">${product.item}</h1>
                                <hr noshade>
                                <h5 class="item_descp">${product.brand}  ${product.type}</h5> 
                              </div>
                              <footer  class="item_cat">
                                <h3  >${product.category}</h3>
                              </footer>
                     </div>
              </div> 
  
  
  `

}






