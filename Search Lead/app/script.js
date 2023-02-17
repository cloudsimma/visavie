document.getElementById("show-more").onclick = function()
{

let showBtn = document.getElementById("show-more");

if (showBtn.value == "show")
{
document.getElementById("hidden-fields").style.display = "block";
document.getElementById("show-more").innerHTML="Hide fields"
showBtn.value="hide";
$(".js-select2").each(function () {
$(this).select2({
filter: true,
placeholder: $(this).attr('placeholder')
});
})
}
else{
document.getElementById("show-more").innerHTML="Show more fields"
showBtn.value="show";
document.getElementById("hidden-fields").style.display = "none";
}
}



$(".js-select2").select2({
closeOnSelect : false,
allowHtml: true,
allowClear: true,
tags: true 
});

$(".js-select2").each(function () {
$(this).select2({
filter: true,
placeholder: $(this).attr('placeholder')
});

$('.icons_select2').select2({
    width: "100%",
    templateSelection: iformat,
    templateResult: iformat,
    allowHtml: true,
   
    dropdownParent: $( '.select-icon' ),
    allowClear: true,
    multiple: false
});


    function iformat(icon, badge,) {
        var originalOption = icon.element;
        var originalOptionBadge = $(originalOption).data('badge');
     
        return $('<span><i class="fa ' + $(originalOption).data('icon') + '"></i> ' + icon.text + '<span class="badge">' + originalOptionBadge + '</span></span>');
    }

})

// function openCity (evt, cityName) {
//     var i, tabcontent, tablinks;
//     tabcontent = document.getElementsByClassName("tabcontent");
//     for (i = 0; i < tabcontent.length; i++) {
//       tabcontent[i].style.display = "none";
//     }
//     tablinks = document.getElementsByClassName("tablinks");
//     for (i = 0; i < tablinks.length; i++) {
//       tablinks[i].className = tablinks[i].className.replace(" active", "");
//     }
//     document.getElementById(cityName).style.display = "block";
//     evt.currentTarget.className += " active";
//   }
  


 
  

