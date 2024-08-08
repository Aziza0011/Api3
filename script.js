let btn = document.querySelector('button')

btn.addEventListener('click', ()=>{
    fetch('https://randomuser.me/api/')
.then((res)=> res.json())
.then((data)=> {
    console.log(data);

    let user =data.results[0]
    let card =document.querySelector('div')
    
    card.innerHTML = `
    <div>
    <img src="${user.picture.large}" alt="">
    <h1>${user.location.state}</h1>
    <p>${user.email}</p>
    <h2>${user.location.country}</h2>
    <h3>${user.dob.age}</h3>
    <h1>${user.location.city}</h1>
    </div>
    `;
    
})
})