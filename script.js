let myLibrary = [];

const container = document.querySelector('.container')

const btn = document.querySelector('#submit')

class Book {
    constructor(title,author,pages,read){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
    }
};

function addBookToLibrary(book) {
    myLibrary.push(book)
};

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
 }
};

btn.addEventListener('click', () => {

  var title = document.getElementById('book').value;
  var author = document.getElementById('author').value;
  var pages = document.getElementById('pages').value;
  var read = document.getElementById('status').value;
  

 let name = new Book(title,author, pages, read)

  addBookToLibrary(name);
  removeAllChildNodes(container);

  myLibrary.forEach(function(item, i) {
     
    let div = document.createElement('div')

    let title = document.createElement('p');
    title.textContent = myLibrary[i].title;

    let author = document.createElement('p');
    author.textContent = myLibrary[i].author;

    let pages = document.createElement('p');
    pages.textContent = myLibrary[i].pages;

    let label = document.createElement('label');
    let circle = document.createElement('div');
    let checkbox = document.createElement('input');

    label.appendChild(checkbox);
    label.appendChild(circle);
    label.classList.add('label');
    checkbox.classList.add('label_input')
    checkbox.type = "checkbox";
    circle.classList.add('label_circle')

   

    checkbox.addEventListener('click', () => {
        if (checkbox.checked == true) {
        myLibrary[i].read = "Completed";
        
        }

        else {
            myLibrary[i].read = "Uncompleted";
        }

    });

    
    let deleteButton = document.createElement('button');
    div.setAttribute("data-value", i)
    div.id = i;
    
    if (myLibrary[i].read == "Completed"){ 
        checkbox.checked = true;
    };

    deleteButton.addEventListener('click',
    (event) => { 

         let num = event.target.getAttribute("data-number");

         myLibrary.splice(num, 1);
        var divs = document.getElementById(i);

        divs.textContent = "";
        divs.classList.remove("text-div");

    });

    div.classList.add("text-div");
    div.appendChild(title);
    div.appendChild(author);
    div.appendChild(pages);
    div.appendChild(label);
    div.appendChild(deleteButton);
    container.appendChild(div)
    
  
});
});

  

