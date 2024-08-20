
let cd = $(".r2");
let d = "";
let mod = ``;
$.ajax({
    url: "p.json",
    method: "get",
    success: function (data) {
          //   products start

    $.each(data.products, function (abc, value) {
          console.log(value.name)
  
  
        d += `  <div class="col-md-3 mt-5">
      <div class="card">
          <img class="card-img-top" src="`+ value.image + `" alt="">
          <div class="card-body">
              <h4 class="card-title">`+ value.name + `</h4>
              <p class="card-text">`+'Rs. '+ value.price + `</p>
              <button class="btn btn-info" data-bs-toggle="modal" data-bs-target="#modelId`+ value.id + `">detail</button>
             
          </div>
      </div>
  </div>`

  
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
      cd.html(d);
      $("#mod").html(mod)

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
    }
})
  // products end