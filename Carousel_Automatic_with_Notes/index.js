/* 

--> Learning setTimeout and setInterval --> 

https://www.freecodecamp.org/news/javascript-timing-events-settimeout-and-setinterval/



--> setTimeout
    setTimeout() is used to delay the execution of the 
    function by a specified amount of time.

    setTimeout(function, time_in_milliseconds ) ex- 1000

    now that function will excute after 1 second only once...



--> setInterval

    setInterval() use to repeat the excutions of a 
    function on given time again and again.

    setInterval(function, time_in_milliseconds ) ex- 1000

    now that function will excute after 1 second again and again...


*/

let mockdata;
function fetchdata() {
  let res = fetch(
    "https://fathomless-everglades-39788.herokuapp.com/api/images"
  )
    .then((res) => res.json())
    .then((res) => {
      mockdata = res;

      console.log(mockdata[0].images);
    });
}

fetchdata();

let counter = 0;
let id;

let start = () => {
  let container = document.getElementsByClassName("container");
  let img = document.getElementById("imagebox");
  
  

  id=setInterval(() => {
    img.src = mockdata[counter].images;
    if(counter==mockdata.length-1){
        counter=0
    }
    counter++;
    container.append(img);
  }, 1500);
};


function stop(){
clearInterval(id)
}