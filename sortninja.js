function dragImg() {
    $("#sortList").sortable();
    $("#sortList").disableSelection();
}

$(document).ready(function(){
    dragImg();
});

