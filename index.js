var button = document.getElementById("click-button")
count  = 1
var Time = new Date()
var greeting = ''
console.log(Time.getHours()+' '+typeof(Time.getHours()))
var Amp = ''
if(Time.getHours()<12){
    Amp += 'AM',
    greeting = 'Good Morning 🤗'
}
if(Time.getHours()>12){
    Amp += 'PM',
    greeting = 'good Evening 😇'
}
console.log(Amp)
console.log(greeting)
console.log(Time)
button.addEventListener('click',()=>{
    const welcome = new Notification('Movie blog',{
        body : `${this.Time.getHours()} :${this.Time.getMinutes()} : ${this.Amp} Please Click here for visit my site!!`+" "+`${this.greeting}`,
        icon : 'https://cdn.pixabay.com/photo/2023/08/19/23/47/ai-generated-8201392_1280.png',
})
setTimeout(welcome.close(),1000)
welcome.addEventListener('click',()=>{
    window.open('http://my-movie-blog-website-production.up.railway.app')
})

})
