let api_key = "AIzaSyB-18XOd6kY9vwQkSjf03PwInd_mkdbrl4";
let video_http = "https://www.googleapis.com/youtube/v3/videos?";
let channel_http = "https://www.googleapis.com/youtube/v3/channels?";


const searchInput = document.querySelector('.search-box');
const searchBtn = document.querySelector('.my-button');
let searchLink = "https://www.youtube.com/results?search_query=";

searchBtn.addEventListener('click', () => {
    if(searchInput.value.length){
        location.href = searchLink + searchInput.value;
    }
})