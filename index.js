// const calculator = {
//     plus : function(a,b){
//         return a + b;
//     }
// }

// const plus_result = calculator.plus(1,2)

// console.log(plus_result)

// console.log(`test ${plus_result}`)

const title = document.getElementById("title")
// title.innerHTML = "Hi! From JS" 
// title.style.color = "#ffffff"
// document.title = "js Beginner"


const title_2 = document.querySelector('#title')
// title_2.innerHTML = "Hi From JS_2"
// title.style.color = "black"
// document.title = "js Beginner_2"

const CLICKED_CLASS = "clicked";
const BASE_COLOR = "rgb(52,73,94)";
const OTHER_COLOR = "#7f8c8d";

function handleClick(){
    // title.className = "clicked";

    // const currentColor = title.style.color;
    // // title_2.style.color = "blue";

    // if (currentColor == BASE_COLOR){
    //     title_2.style.color = OTHER_COLOR
    // }else{
    //     title_2.style.color = BASE_COLOR
        
    // }

    // const currentClass = title.className;
    // const hasClass = title.classList.contains(CLICKED_CLASS)

    // if(hasClass){
    //     // title.className = CLICKED_CLASS;
    //     title.classList.remove(CLICKED_CLASS);
    // }else{
    //     title.classList.add(CLICKED_CLASS);
    // }


    title.classList.toggle(CLICKED_CLASS)

}

function init(){
    title_2.addEventListener("click", handleClick)
}


init()


// console.log(result)