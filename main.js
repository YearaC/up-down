//랜덤번호 지정
//유저가 번호를 입력한다. 그리고 Go 라는 버튼을 누름
//만약에 유저가 랜덤번호를 맞추면, 맞췄습니다!
// 랜덤번호가 < 유저번호 Down!!
// Reset 버튼을 누르면 게임이 리셋된다 
//10번의 기회를 다 쓰면 게임이 끝난다 (더 이상 추측 불가능. 버튼이 disable)
// 유저가 1~100 범위 밖에 숫자를 입력하면 알려준다. 기회를 깎지 않는다
// 유저가 이미 입력한 숫자를 또 입력하면 , 알려준다, 기회를 깎지 않는다.

let computerNumber = 0;
let userGoButton = document.getElementsByClassName("user-go")[0];
let userInput = document.getElementsByClassName("user-input")[0];
let resultArea = document.getElementsByClassName("result-area")[0];
let resetButton = document.getElementsByClassName("reset-button")[0];
let chances = 10;
let gameOver =false;
let chancePoint = document.getElementsByClassName("chance-point")[0];
let history = []

userGoButton.addEventListener ("click", game);
resetButton.addEventListener ("click",reset);
userInput.addEventListener("focus",function(){
    userInput.value= "";
})

function randomNumber(){
    computerNumber= Math.floor(Math.random() * 100 + 1);
    console.log("Correct", computerNumber);
}



function game() {
    let userValue = userInput.value;

    if(userValue>100 || userValue < 1){
        resultArea.textContent = "Enter a number between 1 and 100!!";
        return;
    }

    if(history.includes(userValue)){
        resultArea.textContent = "Number already entered";
        return;

    }



    

    chances --
    chancePoint.textContent = `remain chance=${chances} `




    if(userValue < computerNumber){
       
       resultArea.textContent = "Up"

    } else if (userValue > computerNumber ){
        
         resultArea.textContent = "Down"

    } else {
        
        resultArea.textContent = "Correct"
        userGoButton.disabled =true
    }

    history.push(userValue)

    if (chances < 1){
        gameOver=true

    }

    if (gameOver ==true){
        userGoButton.disabled = true
    }

}


function reset(){
    userInput.value= "";
    randomNumber();
    resultArea.textContent = "Enter a number. (1-100)";
}

randomNumber();




//value 속성은 사용자가 입력한 텍스트 값을 문자열로 반환합니다.

/*
< 를 사용하였을 때 [0] 이 붙는 이유>
같은 클래스를 가진 모든 요소를 포함합니다. 그러나 이는 진정한 배열이 아니며, 
특정 인덱스로 개별 요소에 접근해야 합니다. 
[0]은 HTMLCollection에서 첫 번째 요소를 선택하기 위해 사용됩니다.

Ex)
let userGoButton = document.getElementsByClassName("user-go")[0]; // 첫 번째 버튼에 접근
let userInput = document.getElementsByClassName("user-input")[0]; // 첫 번째 입력 필드에 접근
let resultArea = document.getElementsByClassName("result-area")[0]; // 첫 번째 결과 영역에 접근
let resetButton = document.getElementsByClassName("reset-button")[0]; // 첫 번째 리셋 버튼에 접근
let chanceArea = document.getElementById("chance-area"); // 남은 기회 표시 영역에 접근

 이 예제에서는 첫 번째 버튼만 필요하므로 [0]을 사용합니다.

 getElementById: 고유한 id 속성으로 요소를 찾으며, 
 문서 내에서 고유한 요소만 반환합니다. 인덱스를 사용할 필요 없이 직접 요소에 접근할 수 있습니다.

 */


 /*
 if (gameOver == true)을 if (gameOver)로 바꿔
 도 작동이 잘 되는 이유는 두 가지 조건 모두 동일하게 평가되기 때문입니다. 
 자바스크립트에서 조건문은 해당 조건이 참(truthy)인지 거짓(falsy)인지를 평가합니다.

gameOver 변수는 불리언(boolean) 타입으로 true 또는 false 값을 가집니다.
if (gameOver == true)는 gameOver가 true와 같은지 비교합니다. 이 비교는 true 또는 false로 평가됩니다.
if (gameOver)는 gameOver 자체가 참인지 거짓인지를 평가합니다. 
불리언 타입의 변수인 경우, 그 변수 자체를 조건문에 넣으면 그 값이 true인지 false인지 판단합니다.
따라서 if (gameOver == true)와 if (gameOver)는 논리적으로 동일한 평가를 하게 되며, 
두 경우 모두 gameOver가 true일 때 블록 안의 코드가 실행됩니다.

*/
