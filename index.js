



var total = document.getElementsByClassName('total')
var add = document.getElementById('button')


add.addEventListener('click',addExpense)
let total1 = []
function addExpense(e){
e.preventDefault()

let li = document.createElement('li') 
let list = document.getElementById('list')
let addedName = document.getElementById('addedName').value
let addedAmount = document.getElementById('addedAmount').value
let can = '<img src="./assets/trash_can.svg" alt="can">'
let addList = `${addedName}          $${addedAmount}  ${can}`
li.addEventListener('click',removeItem)
li.innerHTML = addList
list.appendChild(li)
console.dir(li)
total1.push(addedAmount)
console.log(addedAmount)
function removeItem(e){
    console.log(e)
   e.target.parentNode.remove()

    }
    addTheThings()

}

function addTheThings(){
    let displayTotal =document.getElementById('total')

    let newTotal = total1.reduce(function(acc,val){
        return +acc + +val
    })
    displayTotal.innerText = newTotal

console.log(newTotal)
}