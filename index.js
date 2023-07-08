let h1 = document.getElementById('h1');
let btn = document.getElementsByClassName('dare-btn')[0];
let h2 = document.querySelector('.h2');
let secBtn = document.getElementsByClassName('dare-btn-2')[0]
let quotes = document.getElementsByClassName('fortuneQuotes')[0]
let ishrat = document.getElementById('ishrat')
let yamin = document.getElementById('yamin')
let shiba = document.getElementById('shiba')
let shabnoor = document.getElementById('shabnoor')
let farid = document.getElementById('farid')
let abdul = document.getElementById('abdul')
let farheen = document.getElementById('farheen')
let shehzad = document.getElementById('shehzad')
let farhat = document.getElementById('farhat')
let sufiya = document.getElementById('sufiya')
let zoya = document.getElementById('zoya')
let anam = document.getElementById('anam')
let names = document.getElementsByClassName('names')[0]
let abc = document.getElementById('name')


btn.addEventListener("click", function () {
    h2.innerHTML = "Don't tell anyone what you're gonna see"
});
btn.addEventListener('click', function () {
    secBtn.style.display = 'block'
});
btn.addEventListener('click', function () {
    btn.hidden = true
});

secBtn.addEventListener('click', function () {
    h2.hidden = true
    btn.hidden = true
    secBtn.style.display = 'none'
    names.style.display = 'block'
})
const future = () => {
    const arr = ["I am, sorry You have no future",
        "Pet a cat, she might be lucky for you ",
        " You have the brightest future ",
        "Stay strong, you are going to lose people from your life",
        "Just enjoy your life, you will never face any problem in you life", "Always rememeber, we cannot solve problems with the kind of thinking we employed when we came up with them.",
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
    let randNum = Math.floor(Math.random() * 20)
    return arr[randNum]
}

ishrat.addEventListener('click', function () {
    quotes.innerHTML = future()
    abc.innerHTML = 'Ishrat  ,  '
    names.style.display = 'none'
})
yamin.addEventListener('click', function () {
    quotes.innerHTML = future()
    abc.innerHTML = 'Yamin  ,  '
    names.style.display = 'none'
})
shiba.addEventListener('click', function () {
    quotes.innerHTML = future()
    abc.innerHTML = 'Shiba  ,  '
    names.style.display = 'none'
})
shabnoor.addEventListener('click', function () {
    quotes.innerHTML = future()
    abc.innerHTML = 'Shabnoor  ,  '
    names.style.display = 'none'
})
farid.addEventListener('click', function () {
    quotes.innerHTML = future()
    abc.innerHTML = 'Farid  ,  '
    names.style.display = 'none'
})
abdul.addEventListener('click', function () {
    quotes.innerHTML = future()
    abc.innerHTML = 'Abdul  ,  '
    names.style.display = 'none'
})
farheen.addEventListener('click', function () {
    quotes.innerHTML = future()
    abc.innerHTML = 'Farheen  ,  '
    names.style.display = 'none'
})
shehzad.addEventListener('click', function () {
    quotes.innerHTML = future()
    abc.innerHTML = 'Shehzad  ,  '
    names.style.display = 'none'
})
farhat.addEventListener('click', function () {
    quotes.innerHTML = future()
    abc.innerHTML = 'farhat  ,  '
    names.style.display = 'none'
})
sufiya.addEventListener('click', function () {
    quotes.innerHTML = future()
    abc.innerHTML = 'Sufiya  ,  '
    names.style.display = 'none'
})
zoya.addEventListener('click', function () {
    quotes.innerHTML = future()
    abc.innerHTML = 'Zoya  ,  '
    names.style.display = 'none'
})
anam.addEventListener('click', function () {
    quotes.innerHTML = future()
    abc.innerHTML = 'Anam  ,  '
    names.style.display = 'none'
})