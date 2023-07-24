let h1 = document.getElementById('h1');
let btn = document.getElementsByClassName('dare-btn')[0];
let h2 = document.querySelector('.h2');
let btn2 = document.getElementsByClassName('dare-btn-2')[0]
let quotes = document.getElementsByClassName('fortuneQuotes')[0]
let finalH2 = document.getElementsByClassName('third-h2')[0]
let names = document.getElementsByClassName('names')[0]
let subVal = document.getElementById('input')
let btn3 = document.getElementById('button')
let reload = document.getElementsByClassName('reload-btn')[0]


btn.addEventListener("click", function () {
    h2.innerHTML = "Don't tell anyone what you're gonna see"
});
btn.addEventListener('click', function () {
    btn2.style.display = 'block'
});
btn.addEventListener('click', function () {
    btn.hidden = true
});

btn2.addEventListener('click', function () {
    h2.hidden = true
    btn.hidden = true
    btn2.style.display = 'none'
    names.style.display = 'block'
})



const future = () => {
    const arr = ["I am, sorry You have no future",
        "Pet a cat, she might be lucky for you ",
        " You have the brightest future ",
        "Stay strong, you are going to lose people from your life",
        "Just enjoy your life, you will never face any problem in you life",
        "Always rememeber, we cannot solve problems with the kind of thinking we employed when we came up with them.",
        "Always remember, When you give joy to other people, you get more joy in return",
        'You are going to be successful as much as you wish',
        "Do hard word and earn success",
        "You gonna have 5 children in your future",
        'You will get married twice',
        "You have no future",
        "Pet a cat, she might be lucky for you ",
        " You have the brightest future ",
        "Stay strong, you are going to lose people from your life",
        "I am soory , but you have short life, so enjoy every moment of life",
        "Be strong and be ready because Hard time is coming ",
        "Stay strong, you are going to lose people from your life",
        "Be ready to get really sad in upcoming days"]
    let randNum = Math.floor(Math.random() * 19)
    return subVal.value + ' , ' + arr[randNum]
}

btn3.addEventListener('click', () => {
    btn3.style.display = 'none'
    finalH2.style.display = 'none'
    subVal.style.display = 'none'
    quotes.innerHTML = future()
    reload.style.display = 'block'
})