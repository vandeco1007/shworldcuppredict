let end = document.querySelectorAll('.end');
let choices = document.querySelectorAll('.choices')
let team = document.querySelectorAll('.team')
let score = document.querySelectorAll('.score')

team.forEach((item)=>{
    if(item.getAttribute('state')=='end'){
        item.style.filter = "grayscale(100%)"
    }
})

score.forEach((items)=>{
    if(items.getAttribute('state')=='end'){
        items.disabled=true
    }
})

choices.forEach((choice)=>{
    choice.disabled=true
})

//Nothing to change