function addblog(){
    console.log("in function");
    var blogdate = document.getElementById("exampledate").value;
    var title = document.getElementById("exampletitle").value;
    var text = document.getElementById("exampleTextarea").value;
    var img = document.getElementById("exampleimg").value;

    document.getElementById("exampledate").value = "";
    document.getElementById("exampletitle").value = "";
    document.getElementById("exampleTextarea").value = "";
    document.getElementById("exampleimg").value = "";

    var html= '<div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">'+
                 '<div class="col p-4 d-flex flex-column position-static">'+
                   ' <h3 class="mb-0">'+ title +'</h3>'+
                    '<div class="mb-1 text-muted">'+ blogdate +'</div>'+
                      '<p class="mb-auto blog-content">'+ text +'</p>' +
                       '<a href="#" class="stretched-link">Continue reading</a>'+
                  '</div>'+
                  '<div class="col-auto d-none d-lg-block">'+
                  '<img src="'+ img +'"/>'+
                  '</div>'+
                 '</div>';

var newItem = document.createElement("div"); 
newItem.setAttribute('class', 'col-md-6');  
newItem.innerHTML=html;
var parentdiv = document.getElementById("parent");
parentdiv.insertBefore(newItem, parentdiv.childNodes[0]);

}