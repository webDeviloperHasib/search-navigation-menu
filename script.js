let input = document.getElementById('search');
let ul = document.getElementById('ullist');
let li = ul.getElementsByTagName('li');

input.addEventListener('keyup', function(e){
    let  filter = e.target.value.toUpperCase();
    for(let i = 0; i < li.length; i++){
        const a = li[i].getElementsByTagName('a')[0]
        if(a.innerHTML.toUpperCase().indexOf(filter) >= 0){
            li[i].style.display = ""
        }
        else{
            li[i].style.display = "none"
        }
    }
})