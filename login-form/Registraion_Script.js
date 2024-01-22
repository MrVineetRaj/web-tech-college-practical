const labels = document.querySelectorAll('.registrationInfo label');

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, index) => `<span style="transition-delay: ${index * 50}ms;">${letter}</span>`)
        .join('')
})
const cancel = document.getElementById('cancel');
const submit = document.getElementById('submit');
submit.addEventListener('click', () => {
    console.log("SUBMIT");
    loadInfo();
    alert('Your email ID is '+ document.getElementById('RollNo').value + '@xyz.ac,in');
    alert(" Form is Submitted , login with user id and password");
    window.location.href = 'index.html';
})
cancel.addEventListener('click', () => {
    console.log("cancel")
    window.location.href = 'index.html';
})
function loadInfo(){
    let index = getNextAvailableIndex();  
    localStorage.setItem(`Student_Name${index}`,document.getElementById('Student_Name').value)
    localStorage.setItem(`Phone_No${index}`,document.getElementById('PhoneNo').value)
    localStorage.setItem(`Roll_No${index}`,document.getElementById('RollNo').value)
    localStorage.setItem(`branch${index}`,document.getElementById('course').value)
    localStorage.setItem(`sem${index}`,document.getElementById('semester').value)
    localStorage.setItem(`Student_Class${index}`,document.getElementById('StudentClass').value)
    localStorage.setItem(`new_Password${index}`,document.getElementById('newPassword').value)
}
function getNextAvailableIndex() {
    let i = 1;
    while (localStorage.getItem(`Student_Name${i}`)) {
        i++;
    }
    return i;
}