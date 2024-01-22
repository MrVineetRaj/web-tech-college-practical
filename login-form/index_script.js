const labels = document.querySelectorAll('.form_info label');
labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, index) => `<span style="transition-delay: ${index * 50}ms;">${letter}</span>`)
        .join('')
})
let user_Id = ['100A1', '100A2'];
let Pass_word = ['ABCD', 'EFGH'];
let Student_Name = ['Vineet', 'Amit'];
let Phone_No = ['12345', '56843'];
let Email_ID = ['100A1@xyz.ac.in', '100A2@xyz,ac,in']
let Branch = ['CSE', 'MAC'];
let sem = ['3', '2'];
let Student_class = ['CSE 3', 'MAC 1']
let Login = document.getElementById('btn');
let userId = document.getElementById('userID');
let key = document.getElementById('password');
Login.addEventListener('click', () => {
    let userFound = false;
    for (let i = 0; i < user_Id.length; i++) {
        if (userId.value === user_Id[i] && key.value === Pass_word[i]) {
            userFound = true;
            localStorage.setItem('StudentName', Student_Name[i]);
            localStorage.setItem('PhoneNo', Phone_No[i]);
            localStorage.setItem('EmailID', Email_ID[i]);
            localStorage.setItem('Course', Branch[i]);
            localStorage.setItem('semester', sem[i]);
            localStorage.setItem('Studentclass', Student_class[i]);
            alert("Logged in successfully")
            window.location.href = 'StudentProfile.html';
            break;
        }}
    if (!userFound) {
        alert("Your password or user id is incorrect");}});
document.addEventListener('DOMContentLoaded', function () {
    let i = 1;
    while (true) {
        if (!(localStorage.getItem(`Roll_No${i}`))) {
            break;}
        Student_Name.push(localStorage.getItem(`Student_Name${i}`));
        Phone_No.push(localStorage.getItem(`Phone_No${i}`));
        user_Id.push(localStorage.getItem(`Roll_No${i}`));
        Branch.push(localStorage.getItem(`branch${i}`));
        sem.push(localStorage.getItem(`sem${i}`));
        Student_class.push(localStorage.getItem(`Student_Class${i}`));
        Pass_word.push(localStorage.getItem(`new_Password${i}`));
        Email_ID.push(localStorage.getItem(`Roll_No${i}`) + '@xyz.ac.in');
        i++;
    }
})