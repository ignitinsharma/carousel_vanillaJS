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


/* 

--> Here on fetch function we simple fetching tha data into our mock api then we are
    passing into that start function for making carousel 

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


/* 
--> Counter for counting or reaching into all data dynamiclly 
    if ex- i write images[0] so im only gonna stuck on images of 0th
    postion and thats why we take counter for increasing after
    every setInterval function we increase this counter for
    showing next image...

*/
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
  }, 2000);
};


/* 
--> for stopping that setInterval function we use that
    function and here we simple clearing and reseting..
*/
function stop(){
clearInterval(id)
}