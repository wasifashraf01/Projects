let randomBtn = document.querySelector("#randomBtn")
let input = document.querySelector("#input")
let applyBtn = document.querySelector("#apply")
let span = document.querySelector("#span")
let main = document.querySelector("main");


// Change Color Function of Body Start
function colorChange(color) {
     main.style.backgroundColor = color;
}
colorChange("skyblue");
// Change Color Function of Body End
// Random Color Start
let api = "https://x-colors.yurace.pro/api/random/";
async function randomColors() {
    try {
          const config = { headers: {Accept: "application/json"}};
          let response = await axios.get(api, config);
          let rgb = response.data.rgb;
               span.innerText = rgb;
               return rgb;
     } catch (error) {
               console.log("Error:", error);
     }     
}
randomColors();
// Random Color End
// Random Button Stat 
     const randomButton = async function(){
          let rgb = await randomColors();
          colorChange(rgb);
          
     }
     randomBtn.addEventListener("click", randomButton);
// Random Button End 




















// Apply Button Stat 
const ApplyBtn = function(){
     colorChange(input.value);
     let changes = span.innerText = input.value;   
}
applyBtn.addEventListener("click", ApplyBtn);
// Apply Button End 