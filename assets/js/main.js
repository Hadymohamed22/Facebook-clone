let viewMore = document.querySelector(".home .left-sidebar .viewMore");
let viewMoreP = document.querySelector(".home .left-sidebar .viewMore p")
let viewMoreI = document.querySelector(".home .left-sidebar .viewMore i")
let ads = document.querySelector(".home .left-sidebar .ads");
let events = document.querySelector(".home .left-sidebar .events");
let feed = document.querySelector(".home .left-sidebar .feed");
let climate = document.querySelector(".home .left-sidebar .climate");
let content = document.querySelector(".home .content")
let rightSidebar = document.querySelector(".home .right-sidebar")
let leftSidebar = document.querySelector(".home .left-sidebar")
let openComments = document.querySelectorAll(".home > .content .container .posts > .box .action .comments")
let comments = document.querySelector(".home > .content .container .posts > .box .action .comments .write-comment")
let closeComments = document.querySelector(".home > .content .container .posts > .box .action .comments .write-comment .filter-comments i.fa-xmark")

viewMore.onclick = ()=> {
    if (viewMoreP.innerHTML === 'View more'){
        viewMoreP.innerHTML = "View less"
        viewMoreI.className = "fa-solid fa-chevron-up"
        ads.style.cssText = "display: flex";
        feed.style.cssText = "display: flex";
        events.style.cssText = "display: flex";
        climate.style.cssText = "display: flex";
    }else if (viewMoreP.innerHTML === 'View less'){
        viewMoreP.innerHTML = "View more"
        viewMoreI.className = "fa-solid fa-chevron-down"
        ads.style.cssText = "display: none";
        feed.style.cssText = "display: none";
        events.style.cssText = "display: none";
        climate.style.cssText = "display: none";
    }
}

for(i = 0; i < openComments.length; i++){
    openComments[i].onclick = function () {
        if(comments.style.visibility === "hidden"){
            comments.style.cssText = "visibility: visible; transform: translate(-50%, -50%) rotateY(0deg)"
        }else{
            comments.style.cssText = "visibility: hidden; transform: translate(-50%, -50%) rotateY(90deg)"
        }
    }
}