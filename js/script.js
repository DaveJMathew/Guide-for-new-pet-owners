
/*Naming convention: Items relating to Cat breeds have been giving an id of [breedname] + [item]
If i is the index of breeds array below,
breeds[i] + "-image" = Cat breed image id ( eg "Siamese-image")
breeds[i] + "-info"= Cat breed information id( eg "Siamese-info")
*/

/*Array of cat breeds */
var breeds = ["Tabby","Siberian", "British-Shorthair", "Persian", "Siamese", "Ragdoll"];
/*Array of Correct answers for food quiz */
var food = ["rice","corn","wheat"];
/*Current Breed (breeds index) */
current = 0;
/*User game guess */
guess = "";
/*Correct answer */
correct_breed = "";

/*Function to display the dropdown navigation menu */
function display_dropdown(){
    document.getElementById("dropdown-content").style.display = "flex";
}

/*Function to hide the dropdown navigation menu */
function hide_dropdown(){
    document.getElementById("dropdown-content").style.display = "none";
}

/*Function to start the cat breed guessing game */
function startGame(){
    /*Reveal game*/
    document.getElementById("show-game").style.display = "block";
    /*Change button to restart*/
    document.getElementById("game-button").innerHTML="Press to start again";
    document.getElementById("game-button").style.background="#187bcd";
    document.getElementById("game-button").style.color="white";
    document.getElementById("game-button").onclick= restartGame;
    getCorrect();
}

/*Function to choose random breed as the game answer*/
function getCorrect() {
    /*Choosing breed through random index of breeds array */
    correct_breed = breeds[Math.floor(Math.random() * breeds.length)];
    document.getElementById("game-question").innerHTML=correct_breed;
}

/*Function to restart the game*/
function restartGame(){
    getCorrect();
    /*Reverting boxshadow colour to normal*/
    for(var i = 0; i < breeds.length; i++){
        document.getElementById(breeds[i]).style.boxShadow = "0 0 10px black";
    }
}

/*Function to check if chosen portrait is the correct answer */
function checkPortrait(id){
    /*Guess is correct */
    if (id == correct_breed) {
        window.alert("Correct!");
        document.getElementById(id).style.boxShadow = "0 0 10px green";
    } 
    /*Guess is wrong */
    else {
        window.alert("Wrong");
        document.getElementById(id).style.boxShadow = "0 0 10px red";
    }
}

/*Function to display previous breed image and information on slide when pressing the previous button */
function prevBreed(){
    /*Obtain id of current breed shown on page*/
    old_image = breeds[current] + "-image";
    old_info = breeds[current] + "-info";
    /*Hide current breed */
    document.getElementById(old_image).style.display = "none";
    document.getElementById(old_info).style.display = "none";
    /*Obtain index of previous breed */
    if( current - 1 >= 0) {
        current = current - 1;
    } else{
        current = 5;
    }
    /*Id of previous breed to be shown */
    new_image= breeds[current] + "-image";
    new_info= breeds[current] + "-info";
    /*Display previous breed */
    document.getElementById(new_image).style.display = "inline-block";
    document.getElementById(new_info).style.display = "inline-block";
}

/*Function to display the next breed image and information on slide when pressing the next button */
function nextBreed(){
    /*Obtain id of current breed shown on page*/
    old_image = breeds[current] + "-image";
    old_info = breeds[current] + "-info";
    /*Hide current breed */
    document.getElementById(old_image).style.display = "none";
    document.getElementById(old_info).style.display = "none";
    /*Obtain index of next breed */
    if( current + 1 <= 5) {
        current = current + 1;
    } else{
        current = 0;
    }
    /*Id of next breed to be shown */
    new_image= breeds[current] + "-image";
    new_info= breeds[current] + "-info";
    /*Display next breed */
    document.getElementById(new_image).style.display = "inline-block";
    document.getElementById(new_info).style.display = "inline-block";
}

/*Function to check if quiz guess is correct */
function quiz(){
    /*Obtain input from form */
    food_guess = document.forms["food-quiz"]["food"].value;
    /*Convert input to lower case*/
    let guess_lower = food_guess.toLowerCase();
    flag = false;
    for(i = 0; i<=food.length; i++){
        item = food[i];
        if (guess_lower == item){
            flag = true;
        } 
    }
    if(flag == true){
        window.alert("Correct!");
    } else {
        window.alert("Incorrect");
    }
}