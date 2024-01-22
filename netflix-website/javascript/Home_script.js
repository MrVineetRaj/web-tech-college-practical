const moviesT = document.querySelectorAll('.movieT');


moviesT.forEach((movieT,index)=>{
    movieT.addEventListener('click',()=>{
        let moiveIndex = `${index}T`
        window.localStorage.setItem('MovieT',moiveIndex);
        window.location.href = './Movies.html' 
    })
})

moviesA.forEach((movieA,index)=>{
    movieA.addEventListener('click',()=>{
        let moiveIndex = `${index}A`
        window.localStorage.setItem('MovieA',moiveIndex);
        window.location.href = './Movies.html' 
    })
})

const  play = document.getElementById('play');
play.addEventListener('click',()=>{
    let populerMovie = '0';
    window.localStorage.setItem("MovieT",populerMovie)
})