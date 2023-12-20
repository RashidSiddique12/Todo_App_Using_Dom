// const section = document.getElementsByTagName('section');
// Array.from(section).forEach((s)=>{
//     s.style.backgroundColor = "lightgrey"
// })
// console.log(Array.from(section))

//In tagName, className name we can't directly apply style or other thing
// because it return html collection , if want to apply first we need to convert in
// array and then itrate it and inside itearation we put style or other things
// or use index but by id we can directly manipulate it

const section = document.getElementById("section");
section.style.backgroundColor = "green";
section.style.color = "white";

const header = document.getElementById("header");
header.textContent = "Todo App";
// console.log(header.textContent)
header.className = "todo-app";

// create element li
// const newli = document.createElement('li');
// newli.className= "list-group";
// //add text
// newli.appendChild(document.createTextNode(`Item 5`));
// // create button
// const button = document.createElement('button');
// button.className ="delete";
// button.append(document.createTextNode('X'))

// // append button in li
// newli.appendChild(button);
// const lists = document.getElementById('lists');
// //append li in the ul
// lists.appendChild(newli);
// // console.log(lists)

///Event listner

// const input = document.getElementById('addtext');
// // console.log(input)
// const eventtrigger = (e)=>{
//     e.preventDefault();
//     console.log(e.target.value);
// }

// input.addEventListener('keyup',eventtrigger );

////////Do todo stuff///////

// // add item in the list

const addElement = (e) => {
  e.preventDefault();
  const input = document.getElementById("addtext").value;

  // create li
  const newli = document.createElement("li");
  newli.className = "list-group";
  newli.appendChild(document.createTextNode(input));
  // create button
  const button = document.createElement("button");
  button.className = "delete";
  button.appendChild(document.createTextNode("X"));

  newli.appendChild(button);
  const ul = document.getElementById("lists");

  ul.appendChild(newli);
};

const formofAdd = document.getElementById("formofAdd");
formofAdd.addEventListener("submit", addElement);

// delete item from the list

const deletelist = (e) => {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure to delete this")) {
      const deleteLi = e.target.parentElement;
      lists.removeChild(deleteLi);
    }
  }
};

const lists = document.getElementById("lists");
lists.addEventListener("click", deletelist);


// search or filter from the list

const searchitem = (e)=>{
    const search = e.target.value.toLowerCase();
    const items = document.getElementsByTagName('li');
    Array.from(items).forEach((item)=>{
        const itemContent = item.firstChild.textContent.toLowerCase();
        if(itemContent.indexOf(search) != -1){
            item.style.display = 'block';
        }
        else{
            item.style.display='none'
        }
    })

}

const search = document.getElementById('search');
search.addEventListener('keyup', searchitem)



/////modify styling
