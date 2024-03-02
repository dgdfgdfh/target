let elem1 = document.querySelector('#elem1');

//evet.target - получить элемент на котором произошло событие
elem1.addEventListener('click', (e)=> {
let currentTarget = e.target;
console.log(currentTarget)
})