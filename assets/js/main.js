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
