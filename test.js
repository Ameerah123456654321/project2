let lins_icons=document.getElementById("lins_icons");
let links_ul=document.getElementById("links_ul");
let up=document.getElementById("up");

lins_icons.onclick=function(){
    if(links_ul.style.display!="block"){
        links_ul.style.display="block"
    }
    else
    links_ul.style.display="none"
    
}

