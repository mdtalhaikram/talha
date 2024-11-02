console.log("welcom to Spotify")

// Initialize the Variables
let songindex = 0;  
let AudioudioElement = new Audio ('1.mp3');
let masterPlay = document.getElementById ('masterPlay');
let myProgressBar = document.getElementById ('myProgressBar');
let song = [
    {songName:"O Maho", filePath:"song/1.mp3", coverPath:"cover/1jpg"},
    {songName:"Dil Mujhey de agar", filePath:"song/1.mp3", coverPath:"cover/1jpg"},
    {songName:"kahne Ko Pass Apny", filePath:"song/1.mp3", coverPath:"cover/1jpg"},
    {songName:"Dil Ka Darya Bahhi Gaya", filePath:"song/1.mp3", coverPath:"cover/1jpg"},
    {songName:"Sunraha He Na Keun Rorahi Hon Main", filePath:"song/1.mp3", coverPath:"cover/1jpg"},
    {songName:"O Maho", filePath:"song/1.mp3", coverPath:"cover/1jpg"},
    {songName:"O Maho", filePath:"song/1.mp3", coverPath:"cover/1jpg"},
    {songName:"O Maho", filePath:"song/1.mp3", coverPath:"cover/1jpg"},
    {songName:"O Maho", filePath:"song/1.mp3", coverPath:"cover/1jpg"},
    {songName:"O Maho", filePath:"song/1.mp3", coverPath:"cover/1jpg"},
    {songName:"O Maho", filePath:"song/1.mp3", coverPath:"cover/1jpg"},
    {songName:"O Maho", filePath:"song/1.mp3", coverPath:"cover/1jpg"},
    {songName:"O Maho", filePath:"song/1.mp3", coverPath:"cover/1jpg"},
    {songName:"O Maho", filePath:"song/1.mp3", coverPath:"cover/1jpg"},
]
let audioElement = new Audio('1.mp3');
// AudioElement.play(); 
// Handle Play/pause click
    masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
})
// Listen to Events
myProgressBar.addEventListener('timeupdate', ()=>{
   console.log ('timeupdate')
   // Update Seekbar 
   console.log(songindex.Audio);
   define([
    'require',
    'dependency' 
   ], function(require, factory) { 
    'use strict';
    SVGAnimatedPreserveAspectRatio
    console.log(onemptied);
   }); 


})