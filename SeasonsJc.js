function changeimg(snw){
//document.getElementById(snw).src="icons/snow4.png"
    flake=document.getElementById(snw)
    alert (getComputedStyle(flake,null).src)
    if (getComputedStyle(flake,null).src.includes("snow4"))
        flake.src="icons/snow_weather_snowflake_icon_176811.png"
    else
    flake.src="icons/snow4.png"
}
function lick(){
    document.images[0].src="https://econet.ru/media/1005/covers/8713/original.jpg?1433353067"
}
function back(){
    document.images[0].src="https://get.wallhere.com/photo/sunlight-trees-forest-snow-winter-Norway-evening-morning-frost-dusk-Freezing-tree-mountain-weather-dawn-season-mountain-range-575696.jpg"
}
function klack(){
    document.getElementById("roll").style.backgroundColor="blue"
}
function dbklack(){
    document.getElementById("roll").style.backgroundColor="white"
}