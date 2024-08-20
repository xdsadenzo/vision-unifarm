
let ab = $(".rs1");
let cd = $(".r2");
let ef = $(".r3");
let he = $(".r4");
let c = "";
let d = "";
let e = "";
let h = "";
let mod=``;
let mod1=``;
$.ajax({
  url: "index.json",
  method: "get",
  success: function (data) {
    $.each(data.ourservice, function (abc, value) {
         console.log(value.name)


      c += `  <div class="col-md-3 mt-5">
    <div class="card">
        <img class="card-img-top" src="`+ value.image + `" alt="">
        <div class="card-body">
            <h4 class="card-title">`+ value.name + `</h4>
            <p class="card-text">`+'Rs. '+ value.price + `</p>
            <button class="btn btn-info" data-bs-toggle="modal" data-bs-target="#modelId`+ value.id + `">detail</button>

        </div>
    </div>
</div>
`
mod+=`            <div class="modal fade" id="modelId`+ value.id + `" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">`+ value.name + `</h5>
                                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                        </div>
                        <div class="modal-body">
                           <div class="row">
                            <div class="col-md-6">
                                <img class="card-img-top" src="`+ value.image + `">
                                </div>
                            <div class="col-md-6">
                                <p class="card-text para">`+ value.name + `</p>
                                <p>`+ value.des + `</p>

                                
                                </div>
                            </div>
                            <div class="row">
<div class="col-auto">
      <button type="button" class="btn btn-outline-secondary" onclick="decrease('${value.id}')"  id="sub"  >-</button>
      <input type="number" class="p_qty" >
    
      <button type="button" class="btn btn-outline-secondary"  id="add" onclick="increase('${value.id}')"  >+</button>
 
</div>
</div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                            <input type="hidden" class="p_id" value="`+ value.id+`">
                            <input type="hidden" class="p_name" value="`+ value.name+`">
                              <input type="hidden" class="p_price" value="`+ value.price+`">
                              <input type="hidden" class="p_image" value="`+ value.image+`">
                            <button type="button" class="btn btn-primary addtoindoor ">Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>`




    })
    ab.html(c);
$("#mod").html(mod)

// Function to sort items by price (ourservice categories) --start---
function sortByPrice(items) {
// console.log(items);
return items.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));

}
// Event handler for price the sort button start
$("#sort-by-price-ourser").click(function() {
let sortedData = sortByPrice(data.ourservice); //  'data' contains fetched JSON data
let sortedHtml = ""; // String to store sorted HTML
console.log(sortedData)
let mod=``;

// Generate HTML for sorted items
$.each(sortedData, function(abc, value) {

    sortedHtml += ( ` <div class="col-md-3 mt-5">
    <div class="card">
        <img class="card-img-top" src="`+ value.image + `" alt="">
        <div class="card-body">
            <h4 class="card-title">`+ value.name + `</h4>
            <p class="card-text">`+'Rs. '+ value.price + `</p>
            <button class="btn btn-info" data-toggle="modal" data-target="#modelId`+ value.id + `">detail</button>
        </div>
    </div>
</div>`



          )
          mod+=`            <div class="modal fade" id="modelId`+ value.id + `" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">`+ value.name + `</h5>
                                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                        </div>
                        <div class="modal-body">
                           <div class="row">
                            <div class="col-md-6">
                                <img class="card-img-top" src="`+ value.image + `">
                                </div>
                            <div class="col-md-6">
                                <p class="card-text para">`+ value.name + `</p>
                                <p>`+ value.des + `</p>

                                
                                </div>
                            </div>
                            <div class="row">
<div class="col-auto">
      <button type="button" class="btn btn-outline-secondary" onclick="decrease('${value.id}')"  id="sub"  >-</button>
      <input type="number" class="p_qty" >
    
      <button type="button" class="btn btn-outline-secondary"  id="add" onclick="increase('${value.id}')"  >+</button>
 
</div>
</div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                            <input type="hidden" class="p_id" value="`+ value.id+`">
                            <input type="hidden" class="p_name" value="`+ value.name+`">
                              <input type="hidden" class="p_price" value="`+ value.price+`">
                              <input type="hidden" class="p_image" value="`+ value.image+`">
                            <button type="button" class="btn btn-primary addtoindoor ">Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>`
 
});

// Display sorted HTML
ab.html(sortedHtml);
$("#mod").html(mod)

});
//  end //
// Function to sort items by name (ourser categories) --start---
function sortByName(items) {
// console.log(items);
// return items.sort((a) => (a.name) );
return items.sort(function(a, b) {
    return a.name.localeCompare(b.name);
});

}

// Event handler for price the sort button start
$("#sort-by-name-ourser").click(function() {
let sortedData = sortByName(data.ourservice); //  'data' contains fetched JSON data
let sortedHtml = ""; // String to store sorted HTML
console.log("hello")
// Generate HTML for sorted items
$.each(sortedData, function(abc, value) {
    sortedHtml += ( ` <div class="col-md-3 mt-5">
    <div class="card">
        <img class="card-img-top" src="`+ value.image + `" alt="">
        <div class="card-body">
            <h4 class="card-title">`+ value.name + `</h4>
            <p class="card-text">`+'Rs. '+ value.price + `</p>
            <button class="btn btn-info" data-toggle="modal" data-target="#modelId`+ value.id + `">detail</button>
            <div class="modal fade" id="modelId`+ value.id + `" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">`+ value.name + `</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                        </div>
                        <div class="modal-body">
                           <div class="row">
                            <div class="col-md-6">
                                <img class="card-img-top" src="`+ value.image + `">
                                </div>
                            <div class="col-md-6">
                                <p class="card-text para">`+ value.name + `</p>
                                <p>`+ value.des + `</p>

                                
                                </div>
                            </div>
                    
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <input type="hidden" class="p_id" value="`+ value.id+`">
                            <input type="hidden" class="p_name" value="`+ value.name+`">
                              <input type="hidden" class="p_price" value="`+ value.price+`">
                              <input type="hidden" class="p_image" value="`+ value.image+`">
                            <button type="button" class="btn btn-success addtoindoor ">Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`


          ) 
});

// Display sorted HTML
ab.html(sortedHtml);
});
//  end //
    // add data   localStorage FOR ourser
    let myJsonCartData = JSON.parse(localStorage.getItem('myFinalJsonCartDataLocal')) || [];
    $(".addtoourser").click(function () {
      let product_id = $(this).siblings('.p_id').val();
      let product_name = $(this).siblings('.p_name').val();
      let product_image = $(this).siblings('.p_image').val();
      let product_price = $(this).siblings('.p_price').val();
      let product_qty = $(this).siblings('.p_qty').val();
      console.log(product_qty)

      myJsonCartData.push({ 'product_id': product_id, 'product_name': product_name, 'product_image': product_image, 'product_price': product_price ,"product_qty":product_qty});
      let myFinalJsonCartData = localStorage.setItem('myFinalJsonCartDataLocal', JSON.stringify(myJsonCartData));
      alert('product  added successfully');


    })


    //   products start

    $.each(data.products, function (abc, value) {
       console.log(value.name)


      d += `<div class="col-md-3 mt-5">
    <div class="card">
        <img class="card-img-top" src="`+ value.image + `" alt="">
        <div class="card-body">
            <h4 class="card-title">`+ value.name + `</h4>
            <p class="card-text">`+'Rs. '+ value.price + `</p>
            <button class="btn btn-info" data-bs-toggle="modal" data-bs-target="#model1Id`+ value.id + `">detail</button>
            </div>
            </div>
        </div>`
mod1+=`         
   <div class="modal fade" id="model1Id`+ value.id + `" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">`+ value.name + `</h5>
                                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                        </div>
                        <div class="modal-body">
                           <div class="row">
                            <div class="col-md-6">
                                <img class="card-img-top" src="`+ value.image + `">
                                </div>
                            <div class="col-md-6">
                                <p class="card-text para">`+ value.name + `</p>
                                <p>`+ value.des + `</p>

                                
                                </div>
                            </div>

        
<div class="row">
<div class="col-auto">
      <button type="button" class="btn btn-outline-secondary" onclick="decrease('${value.id}')"  id="sub"  >-</button>
      <input type="number" class="p_qty" >
    
      <button type="button" class="btn btn-outline-secondary"  id="add" onclick="increase('${value.id}')"  >+</button>
 
</div>
</div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                            <input type="hidden" class="p_id" value="`+ value.id+`">
                            <input type="hidden" class="p_name" value="`+ value.name+`">
                              <input type="hidden" class="p_price" value="`+ value.price+`">
                              <input type="hidden" class="p_image" value="`+ value.image+`">
                            <button type="button" class="btn btn-success addtoindoor ">Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>`





    })
    cd.html(d);
    $("#mod1").html(mod1)
     // Function to sort items by price (products categories) --start---
function sortByPrice(items) {
// console.log(items);
return items.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));

}
// Event handler for the sort button start
$("#sort-by-price-products").click(function() {
let sortedData = sortByPrice(data.products); //'data' contains  fetched JSON data
let sortedHtml = ""; // String to store sorted HTML

// Generate HTML for sorted items
$.each(sortedData, function(abc, value) {
    sortedHtml += ( `<div class="col-md-3 mt-5">
    <div class="card">
        <img class="card-img-top" src="`+ value.image + `" alt="">
        <div class="card-body">
            <h4 class="card-title">`+ value.name + `</h4>
            <p class="card-text">`+'Rs. ' +value.price + `</p>
            <button class="btn btn-info" data-toggle="modal" data-target="#model1Id`+ value.id + `">detail</button>
            <div class="modal fade" id="model1Id`+ value.id + `" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">`+ value.name + `</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                        </div>
                        <div class="modal-body">
                           <div class="row">
                            <div class="col-md-6">
                                <img class="card-img-top" src="`+ value.image + `">
                                </div>
                            <div class="col-md-6">
                                <p>`+ value.name + `</p>
                                <p>`+ value.des + `</p>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <input type="hidden" class="p_id" value="`+ value.id+`"> <input type="hidden" class="p_name" value="`+ value.name+`"> <input type="hidden" class="p_price" value="`+ value.price+`"> <input type="hidden" class="p_image" value="`+ value.image+`">
                            <button type="button" class="btn btn-primary addtooutdoor">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`


          ) 
});

// Display sorted HTML
cd.html(sortedHtml);
});
//  end //
function sortByName(items) {
// console.log(items);
return items.sort(function(a, b) {
    return a.name.localeCompare(b.name);
});
}
// Event handler for the sort button start
$("#sort-by-name-products").click(function() {
let sortedData = sortByName(data.products); //'data' contains  fetched JSON data
let sortedHtml = ""; // String to store sorted HTML

// Generate HTML for sorted items
$.each(sortedData, function(abc, value) {
    sortedHtml += ( `<div class="col-md-3 mt-5">
    <div class="card">
        <img class="card-img-top" src="`+ value.image + `" alt="">
        <div class="card-body">
            <h4 class="card-title">`+ value.name + `</h4>
            <p class="card-text">`+'Rs. ' +value.price + `</p>
            <button class="btn btn-info" data-toggle="modal" data-target="#model1Id`+ value.id + `">detail</button>
            <div class="modal fade" id="model1Id`+ value.id + `" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">`+ value.name + `</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                        </div>
                        <div class="modal-body">
                           <div class="row">
                            <div class="col-md-6">
                                <img class="card-img-top" src="`+ value.image + `">
                                </div>
                            <div class="col-md-6">
                                <p>`+ value.name + `</p>
                                <p>`+ value.des + `</p>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <input type="hidden" class="p_id" value="`+ value.id+`"> <input type="hidden" class="p_name" value="`+ value.name+`"> <input type="hidden" class="p_price" value="`+ value.price+`"> <input type="hidden" class="p_image" value="`+ value.image+`">
                            <button type="button" class="btn btn-primary addtooutdoor">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`


          ) 
});

// Display sorted HTML
cd.html(sortedHtml);
});
//  end //

    //   products localStorage
    let myJsonCartDataLed = JSON.parse(localStorage.getItem('myFinalJsonCartDataLocal')) || [];
    $(".addtoproducts").click(function () {
      let product_id = $(this).siblings('.p_id').val();
      let product_name = $(this).siblings('.p_name').val();
      let product_image = $(this).siblings('.p_image').val();
      let product_age = $(this).siblings('.p_age').val();

      myJsonCartDataLed.push({ 'product_id': product_id, 'product_name': product_name, 'product_image': product_image, 'product_age': product_age });
      let myFinalJsonCartData = localStorage.setItem('myFinalJsonCartDataLocal', JSON.stringify(myJsonCartDataLed));
      alert('product  added successfully');


    })
// products end
    $.each(data.succulent, function (abc, value) {
      //    console.log(value.name)


      e += `  <div class="col-md-3 mt-5">
    <div class="card">
        <img class="card-img-top" src="`+ value.image + `" alt="">
        <div class="card-body">
            <h4 class="card-title">`+ value.name + `</h4>
            <p class="card-text">`+ value.price + `</p>
            <button class="btn btn-info" data-toggle="modal" data-target="#modelId`+ value.id + `">detail</button>
            <div class="modal fade" id="modelId`+ value.id + `" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">`+ value.name + `</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                        </div>
                        <div class="modal-body">
                           <div class="row">
                            <div class="col-md-6">
                                <img class="card-img-top" src="`+ value.image + `">
                                </div>
                            <div class="col-md-6">
                             
                                <p>`+ value.name + `</p>
                                <p>`+ value.des + `</p>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <input type="hidden" class="p_id" value="`+ value.id+`">
                            <input type="hidden" class="p_name" value="`+ value.name+`">
                              <input type="hidden" class="p_price" value="`+ value.price+`">
                              <input type="hidden" class="p_image" value="`+ value.image+`">
                            <button type="button" class="btn btn-primary addtoosucculent">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`




    })
    ef.html(e);
    $.each(data.hair_equipment, function (abc, value) {
      //    console.log(value.name)


      h += `  <div class="col-md-4 mt-5">
    <div class="card">
        <img class="card-img-top" src="`+ value.image + `" alt="">
        <div class="card-body">
            <h4 class="card-title">`+ value.name + `</h4>
            <p class="card-text">`+ value.price + `</p>
            <button class="btn btn-info" data-toggle="modal" data-target="#modelId`+ value.id + `">detail</button>
            <div class="modal fade" id="modelId`+ value.id + `" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">`+ value.name + `</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                        </div>
                        <div class="modal-body">
                           <div class="row">
                            <div class="col-md-6">
                                <img class="card-img-top" src="`+ value.image + `">
                                </div>
                            <div class="col-md-6">
                             
                                <p>`+ value.name + `</p>
                                <p>`+ value.des + `</p>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <input type="hidden" class="p_id" value="`+ value.id+`">
                            <input type="hidden" class="p_name" value="`+ value.name+`">
                              <input type="hidden" class="p_price" value="`+ value.price+`">
                              <input type="hidden" class="p_image" value="`+ value.image+`">
                            <button type="button" class="btn btn-primary addtoosucculent">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`




    })
    he.html(h);
     // Function to sort items by price (indoor categories) --start---
function sortByPrice(items) {
// console.log(items);
return items.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));

}
// Event handler for the sort button start
$("#sort-by-price-succulent").click(function() {
let sortedData = sortByPrice(data.succulent); //'data' contains  fetched JSON data
let sortedHtml = ""; // String to store sorted HTML

// Generate HTML for sorted items
$.each(sortedData, function(abc, value) {
    sortedHtml += ( `<div class="col-md-3 mt-5">
    <div class="card">
        <img class="card-img-top" src="`+ value.image + `" alt="">
        <div class="card-body">
            <h4 class="card-title">`+ value.name + `</h4>
            <p class="card-text">`+'Rs. ' +value.price + `</p>
            <button class="btn btn-info" data-toggle="modal" data-target="#modelId`+ value.id + `">detail</button>
            <div class="modal fade" id="modelId`+ value.id + `" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">`+ value.name + `</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                        </div>
                        <div class="modal-body">
                           <div class="row">
                            <div class="col-md-6">
                                <img class="card-img-top" src="`+ value.image + `">
                                </div>
                            <div class="col-md-6">
                                <p>`+ value.name + `</p>
                                <p>`+ value.des + `</p>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <input type="hidden" class="p_id" value="`+ value.id+`"> <input type="hidden" class="p_name" value="`+ value.name+`"> <input type="hidden" class="p_price" value="`+ value.price+`"> <input type="hidden" class="p_image" value="`+ value.image+`">
                            <button type="button" class="btn btn-primary addtooutdoor">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`


          ) 
});

// Display sorted HTML
ef.html(sortedHtml);
});
//  end //
// Function to sort items by price (indoor categories) --start---
function sortByName(items) {
// console.log(items);
return items.sort(function(a, b) {
    return a.name.localeCompare(b.name);
});

}
// Event handler for the sort button start
$("#sort-by-name-succulent").click(function() {
let sortedData = sortByName(data.succulent); //'data' contains  fetched JSON data
let sortedHtml = ""; // String to store sorted HTML

// Generate HTML for sorted items
$.each(sortedData, function(abc, value) {
    sortedHtml += ( `<div class="col-md-3 mt-5">
    <div class="card">
        <img class="card-img-top" src="`+ value.image + `" alt="">
        <div class="card-body">
            <h4 class="card-title">`+ value.name + `</h4>
            <p class="card-text">`+'Rs. ' +value.price + `</p>
            <button class="btn btn-info" data-toggle="modal" data-target="#modelId`+ value.id + `">detail</button>
            <div class="modal fade" id="modelId`+ value.id + `" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">`+ value.name + `</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                        </div>
                        <div class="modal-body">
                           <div class="row">
                            <div class="col-md-6">
                                <img class="card-img-top" src="`+ value.image + `">
                                </div>
                            <div class="col-md-6">
                                <p>`+ value.name + `</p>
                                <p>`+ value.des + `</p>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <input type="hidden" class="p_id" value="`+ value.id+`"> <input type="hidden" class="p_name" value="`+ value.name+`"> <input type="hidden" class="p_price" value="`+ value.price+`"> <input type="hidden" class="p_image" value="`+ value.image+`">
                            <button type="button" class="btn btn-primary addtooutdoor">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`


          ) 
});

// Display sorted HTML
ef.html(sortedHtml);
});
//  end //

     // add data   localStorage FOR indoor
     let myJsonCartDatasucculent = JSON.parse(localStorage.getItem('myFinalJsonCartDataLocal')) || [];
    $(".addtoosuccule").click(function () {
      let product_id = $(this).siblings('.p_id').val();
      let product_name = $(this).siblings('.p_name').val();
      let product_image = $(this).siblings('.p_image').val();
      let product_price = $(this).siblings('.p_price').val();

      myJsonCartDatasucculent.push({ 'product_id': product_id, 'product_name': product_name, 'product_image': product_image, 'product_price': product_price });
      let myFinalJsonCartData = localStorage.setItem('myFinalJsonCartDataLocal', JSON.stringify(myJsonCartDatasucculent));
      alert('product  added successfully');


    })

  }
  

  // FUNCTION END

})
// ajax end


//    searching work


$("#inp").keyup(function () {
  let us = $("#inp").val();
  let d = "";

  let k = $("#r");
  $.ajax({
    url: "js.json",
    method: "get",
    success: function (data) {
      $.each(data, function (keyy, valu) {
        // console.log("hello"+valu.name)
        if (valu.name == us) {
          console.log("done");
          d += (`<div ' class='col-md-2 mt-5'><div class='card mt-3'>
          <img class='card-img-top' src=` + valu.image + `   alt=''>
          <div class='card-body'><h4 class='card-title'>`+ valu.price + `</h4><p class='card-text'>
          `+ valu.name + `</p></div></div></div>`)
        }


      })
      k.html(d);

    }
  })
  // ajax braxket
})
  // cart work

      let getData = JSON.parse(localStorage.getItem("myFinalJsonCartDataLocal"));
    // console.log(getData)
    let x="";
    let pro="";
    for(let items of getData){
        // console.log(items.product_id)
x+=`
<tr class="">
                        <td>${items.product_id}</td>
                        <td>${items.product_name}</td>
                        <td><img src="${items.product_image}" width="100px" ></td>
                       
                        <td>${items.product_price}</td>
                     
                         <td>
                            <button type="button" class="btn btn-info" data-toggle="modal" data-target="#staticBackdrop${items.product_id}">
                        Edit
                </button>
                </td>
                          <td>
                            <button type="button" class="btn btn-danger"  onclick="removeData(${items.product_id})"   >
                        delete
                </button>
                            </td>
                   
                    </tr>
`


pro+=`
        <div class="modal fade" id="staticBackdrop${items.product_id}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Update</h5>

        <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="container">
    <div class="row">
        <div class="col-lg-3">
            <div class="card">
                <img class="card-img-top imgg" id="img${items.product_id}" src="${items.product_image}" alt="Title">
            </div>
        </div>
        <div class="col-lg-9">
<h1 class="text-center img-name" id="n${items.product_id}">${items.product_name}</h1>
<p class="text-lower img-stuff">hdgsdkaj</p>
<p class="text-lower img-price" id="price${items.product_id}">${items.product_price}</p>
<div class="row">
    <div class="col-auto">
          <button type="button" class="btn btn-outline-secondary" onclick="decrease('${items.product_id}')"  id="sub"  >-</button>
          <input type="number" value="${items.product_qty}"  id="num${items.product_id}">
        
          <button type="button" class="btn btn-outline-secondary"  id="add" onclick="increase('${items.product_id}')"  >+</button>
     
          <span id="spn${items.product_id}">${items.prodcut_total}<span>
    </div>
</div>
        </div>
    </div>
 </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-info"  onclick="modify(${items.product_id})">update</button>
      </div>
    </div>
  </div>
</div>


        `
    }
    document.getElementById("data").innerHTML=x;
    document.getElementById("mod").innerHTML=pro;

  
