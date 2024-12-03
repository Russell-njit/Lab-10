function greetUser(username){
    document.getElementById('output').innerText = "Hello, " + username;
}
greetUser("Harry")
 
function User(){
    let fName = document.getElementById('message').innerText = "Hello, World!"
}

function Math(){
    let Number1 = parseFloat(document.getElementById("Number1").value);
    let Number2 = parseFloat(document.getElementById("Number2").value);
    let sum = Number1 + Number2
    document.getElementById("Result").innerText = sum
}

function heading(){
    let Q4 = document.getElementById("Q4").value;
    document.getElementById("title").innerText = Q4
}

function concatenate(){
    let Q5a = document.getElementById("Q5a").value;
    let Q5b = document.getElementById("Q5b").value;
    let Text = Q5a +" "+ Q5b
    document.getElementById("combinedText").innerText = Text
}

function changeBackground(){
    let button = document.getElementById("changeBackground");
    let colorbox = document.getElementById("colorBox");
    button.addEventListener('click', function() {
        colorBox.style.backgroundColor = 'blue';
    });
}