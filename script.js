const table=document.getElementById("grocery-list")
const gbtn=document.getElementById("generate-bill")
// const abtn=document.getElementById("add-items")
const tbody=document.getElementById("tbody")
const grandTotal=document.createElement("tr")
grandTotal.innerHTML=""
const prices=document.querySelectorAll(".price")

 
let sum=0

// function addItems(){
     
//     const newItems=document.createElement("tr");
//     const inputItem=document.createElement("input")
//     const item=`${inputItem.value}`;
//     const inputPrice=document.createElement("input")
//     const price=`${inputPrice.value}`;
// newItems.innerHTML=`<td>${item}</td>

// <td class="price" data-ns-test="prices">${price}</td>`
 

// tbody.appendChild(newItems)
// table.appendChild(tbody);
// }

function generateBill(){
    for(let i=0;i<prices.length;i++){
        
        sum+=Number(prices[i].innerText)
         }
        
         
         grandTotal.innerHTML=`<td contenteditable="false">Total Price</td>
        <td contenteditable="false"  data-ns-test=grandTotal>${sum}</td>`
         
         sum=0;
        
         tbody.appendChild(grandTotal)

         

}


 gbtn.addEventListener("click",generateBill)