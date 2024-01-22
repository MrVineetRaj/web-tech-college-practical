document.addEventListener('DOMContentLoaded',() =>{
    document.getElementById('StudentName').innerText = localStorage.getItem('StudentName');
    document.getElementById('PhoneNo').innerText = 
    localStorage.getItem('PhoneNo');
    document.getElementById('EmailID').innerText = 
    localStorage.getItem('EmailID');
    document.getElementById('Course').innerText = 
    localStorage.getItem('Course');
    document.getElementById('semester').innerText = 
    localStorage.getItem('semester');
    document.getElementById('Studentclass').innerText = 
    localStorage.getItem('Studentclass');
})
const logoutBtn = document.getElementById('LogoutBtn');

logoutBtn.addEventListener('click',() => {
    window.location.href = 'index.html';
})