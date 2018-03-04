function showPic(whichpic){
    // 修改 placeholder 图片
    if (!document.getElementById("placeholder")) return false;
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");

    placeholder.setAttribute("src", source);
    // placeholder.src = source;

    // 修改 description 段落文本
    if (document.getElementById("description")){
        var text = whichpic.getAttribute("title")?whichpic.getAttribute("title"):"";
        var description = document.getElementById("description");

        description.firstChild.nodeValue = text;
    }
    return true;
}

addLoadFunction(prepareGallery);
function prepareGallery(){
    if (!document.getElementById){
        return false;
    }

    if (!document.getElementsByTagName){
        return false;
    }

    if (!document.getElementById("imagegallery")){
        return false;
    }

    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++){
        links[i].onclick = function(){
            return !showPic(this);
        }
    }
}

function addLoadFunction(func){
    oldonload = window.onload;
    if (typeof oldonload != "function"){
        window.onload = func;
    }else{
        window.onload = function(){
            oldonload();
            func();
        }
    }
}