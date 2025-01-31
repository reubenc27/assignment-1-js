// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const noun1Button = document.getElementById("noun1");
const verbButton = document.getElementById("verb");
const adjectiveButton = document.getElementById("adjective");
const noun2Button = document.getElementById("noun2");
const settingButton = document.getElementById("setting");

// Constants for p tag to display query selectors
const noun1Display = document.getElementById("chosenNoun1");
const verbDisplay = document.getElementById("chosenVerb");
const adjectiveDisplay = document.getElementById("chosenAdjective");
const noun2Display = document.getElementById("chosenNoun2");
const settingDisplay = document.getElementById("chosenSetting");

// Constants for final buttons and p tags
const playbackButton = document.getElementById("playback");
const randomButton = document.getElementById("random");
const storyDisplay = document.getElementById("story");
const resetButton = document.getElementById("reset");

// Variables for pre-defined arrays
var noun1 = ['The cowboy', 'The moose', 'The red-neck', 'Crazy Uncle Walter', 'The horse', 'The neighbor'];
var verb = ['ate', 'rode', 'saw', 'ran away from', 'danced with', 'kissed'];
var adjective = ['a crazy', 'an ugly', 'a sociopathic', 'an alarmingly large', 'a loud', 'a murdereous'];
var noun2 = ['chicken', 'lemon', 'orange cat', 'ostrich', 'car', 'monkey'];
var setting = ['in the boonies', 'in space', 'on a laptop', 'in a tree', 'on a roof', 'at a wedding'];

// Variables for count to grab array elements
var noun1Count, verbCount, adjectiveCount, noun2Count, settingCount = 0;

var selectedNoun1, selectedVerb, selectedAdjective, selectedNoun2, selectedSetting = '';

/* ------------------------ Functions ------------------------ */
function noun1_on_click() {
    if (noun1Count < noun1.length) {
        selectedNoun1 = noun1[noun1Count];
    } 
    else {
        noun1Count = 0;
        selectedNoun1 = noun1[noun1Count]; 
    }
    // display selected noun1
    noun1Display.textContent = selectedNoun1;
    // increment 
    noun1Count++;
}
function verb_on_click() {
    if (verbCount < verb.length) {
        selectedVerb = verb[verbCount];
    }
    else {
        verbCount = 0;
        selectedVerb = verb[verbCount];
    }
    // display selected verb
    verbDisplay.textContent = selectedVerb;
    // increment
    verbCount++;
}
function adjective_on_click() {
    if (adjectiveCount < adjective.length) {
        selectedAdjective = adjective[adjectiveCount];
    }
    else {
        adjectiveCount = 0;
        selectedAdjective = adjective[adjectiveCount];
    }
    // display selected verb
    adjectiveDisplay.textContent = selectedAdjective;
    // increment
    adjectiveCount++;
}
function noun2_on_click() {
    if (noun2Count < noun2.length) {
        selectedNoun2 = noun2[noun2Count];
    }
    else {
        noun2Count = 0;
        selectedNoun2 = noun2[noun2Count];
    }
    // display selected verb
    noun2Display.textContent = selectedNoun2;
    // increment
    noun2Count++;
}

function setting_on_click() {
    if (settingCount < setting.length) {
        selectedSetting = setting[settingCount]
    }
    else {
        settingCount = 0;
        selectedSetting = setting[settingCount]
    }
    // display setting
    settingDisplay.textContent = selectedSetting;
    // increment
    settingCount++;
}
// concatenate the user story and display
function playback_on_click() {
    let story = `${selectedNoun1} ${selectedVerb} ${selectedAdjective} ${selectedNoun2} ${selectedSetting}.`;
    storyDisplay.textContent = story;
}
// grabbing random element from arrays, concatenate and display
function random_on_click() {
    var randomNoun1 = noun1[Math.floor(Math.random() * noun1.length)];
    var randomVerb = verb[Math.floor(Math.random() * verb.length)];
    var randomAdjective = adjective[Math.floor(Math.random() * adjective.length)];
    var randomNoun2 = noun2[Math.floor(Math.random() * noun2.length)];
    var randomSetting = setting[Math.floor(Math.random() * setting.length)];
    
    // Concatenate them into a random story
    var randomStory = `${randomNoun1} ${randomVerb} ${randomAdjective} ${randomNoun2} ${randomSetting}.`;
    
    // Display the random story
    storyDisplay.textContent = randomStory;
}
// reset everything back to start
function reset() {
     // Reset selected variables
     selectedNoun1 = '';
     selectedVerb = '';
     selectedAdjective = '';
     selectedNoun2 = '';
     selectedSetting = '';
 
     // Reset count variables
     noun1Count = 0;
     verbCount = 0;
     adjectiveCount = 0;
     noun2Count = 0;
     settingCount = 0;
 
     // Reset display text
     noun1Display.textContent = '';
     verbDisplay.textContent = '';
     adjectiveDisplay.textContent = '';
     noun2Display.textContent = '';
     settingDisplay.textContent = '';
     storyDisplay.textContent = '';
}

/* ---------------------------- Event Listeners ---------------------------- */
noun1Button.addEventListener("click", noun1_on_click);
verbButton.addEventListener("click", verb_on_click);
adjectiveButton.addEventListener("click", adjective_on_click);
noun2Button.addEventListener("click", noun2_on_click);
settingButton.addEventListener("click", setting_on_click);
playbackButton.addEventListener("click", playback_on_click);
randomButton.addEventListener("click", random_on_click);
resetButton.addEventListener("click", reset);

