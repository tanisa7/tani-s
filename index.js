window.onload = function MAQSAD(){
    const age = prompt("Enter your age:");
    const name = prompt("Enter your name:");
    const city = prompt("Enter your city:");

    const student = {
        age: age,
        name: name,
        city: city
    };

    const textElement = document.getElementById('text');
    textElement.textContent = `Age: ${student.age}, Name: ${student.name}, City: ${student.city}`;
}

