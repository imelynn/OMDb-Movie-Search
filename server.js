const apikey= document.getElementById("apikey").value;
const title= document.getElementById("title").value;
const type= document.getElementById("type").value;
const year= document.getElementById("year").value;
const plot= document.getElementById("plot").value;
const poster=document.getElementByID("img");

function getparams(apikey, title, type, year, plot) {
  const url = `http://www.omdbapi.com/?apikey=${apikey}&t=${title}&type=${type}&y=${year}&plot=${plot}`;
  const imgurl = `http://img.omdbapi.com/?apikey=${apikey}&t=${title}`
}
  
document.querySelector('form').addEventListener("click", function(e) {
  console.log(e.target);
  console.log("clicked");
})