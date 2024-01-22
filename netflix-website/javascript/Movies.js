const MovieIndexT = window.localStorage.getItem('MovieT');
const MovieIndexA = window.localStorage.getItem('MovieA');

let goBack = document.getElementById('goBack');
goBack.addEventListener('click',()=>{
    window.location.href = './Home_index.html'
})
// console.log(MovieIndex);
// MovieIndex = '0T'
switch (MovieIndexT) {
    case '0T' || '0':
        document.body.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/JujTYiDlu7g?si=qROXxNJL8WexTRJO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
        break;

    case '2T':
        document.body.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/HeDdkMIyhoQ?si=Va9zFCwd1LJu44h7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
        break;

    case '1T':
        document.body.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/LLLPH6DgMB4?si=hTW5GzmFgS9V7mB3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
        break;

    case '3T':
        document.body.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/znvwkF17xiA?si=YjH2EgYe5AuyLHpd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
        break;

    case '4T':
        document.body.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/G9Zbu4z2aMo?si=EM0Y2AYbLaxi9uAh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
        break;
}

switch(MovieIndexA){
    case '0A' :
        document.body.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/OYn4ISTfxCE?si=caykAFWSiQ5U9-cd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
        break;
    case '1A' :
        document.body.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/lAD81wjRnL8?si=ki6AyxLcLdZSmG5S" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
        break;
    case '2A' :
        document.body.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/ZY2z3kasg0g?si=FZHP2Ri_38eO8CM2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
        break;
    case '3A' :
        document.body.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/r73OW4TUMP8?si=8TifVVwB-UgJXX8y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
        break;
    case '4A' :
        document.body.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/IcA02w6rm44?si=wnGoMNKXArWHzTij" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
        break;

    
    
}
