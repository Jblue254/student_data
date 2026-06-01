const form = document.getElementById('userForm');
const quoteDisplay = document.getElementById('quoteDisplay');

const resultsDiv = document.createElement('div');
resultsDiv.style.marginTop = "20px";
form.after(resultsDiv);


function displayDashboard(name, age) {
    
    const ageInMonths = age * 12;

    
    const greeting = "Hello, " + name + "!";

    //Checking age status 
    let ageStatus = "";
    if (age >= 18) {
        ageStatus = "You are an adult.";
    } else {
        ageStatus = "You are a minor.";
    }

    // looping a message 3 times 
    let loopMessages = "";
    for (let i = 1; i <= 3; i++) {
        loopMessages += "<p>Reminder " + i + ": Keep going!</p>";
    }

    
    resultsDiv.innerHTML = `
        <h2>${greeting}</h2>
        <p>Your age in months: <strong>${ageInMonths}</strong></p>
        <p>Status: <strong>${ageStatus}</strong></p>
        <div style="color: gray; margin-top: 10px;">
            ${loopMessages}
        </div>
    `;
}


form.addEventListener('submit', function (event) {
    event.preventDefault(); // Stop page reload

    
    const nameInput = document.getElementById('userName').value;
    const ageInput = document.getElementById('userAge').value;

    
    localStorage.setItem('savedName', nameInput);
    localStorage.setItem('savedAge', ageInput);

    
    displayDashboard(nameInput, ageInput);
});


const storedName = localStorage.getItem('savedName');
const storedAge = localStorage.getItem('savedAge');

if (storedName && storedAge) {
    
    document.getElementById('userName').value = storedName;
    document.getElementById('userAge').value = storedAge;
    
    
    displayDashboard(storedName, storedAge);
}


quoteDisplay.textContent = "The best way to predict the future is to create it.";