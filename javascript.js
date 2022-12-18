console.log("working...");


const images = document.getElementsByClassName("image");
const whiteSpace = document.getElementById("draganddropContainer");
const ingrediants = document.getElementById("ingrediants");
const selectedIngrediants = document.getElementsByTagName("p");
console.log(images);

var item = null;
for(image of images){
image.addEventListener('dragstart' , (e)=>{
    console.log("drag Start triggred");
    item = e.target ;
})

image.addEventListener('dragend' ,(e)=>{
    console.log("drag end triggred");
    
})
}

var ingre = null ;
for(select of selectedIngrediants){
    select.addEventListener('dragstart' , (e)=>{
        ingre = e.target;
    })

    select.addEventListener('dragend' , ()=>{
        console.log('dragEnd');
    })
}

whiteSpace.addEventListener('dragover' , (e)=>{
    e.preventDefault();
})
whiteSpace.addEventListener('dragenter' , ()=>{

})
whiteSpace.addEventListener('dragleave' , ()=>{

})
whiteSpace.addEventListener('drop' , (e)=>{
    e.target.append(item);
    item.className = "WhiteSpaceImage"
    ingrediants.style.display = "inline-block";
    if(ingre != null){
        if(ingre.innerText == "Vegetables")
        {
        let createelement = document.createElement("img");
        createelement.className="pizzaimage";
        createelement.setAttribute("src","Vegetables.jpg");
        console.log(createelement);
        document.querySelector("div.draganddropContainer").appendChild(createelement);
        // images.style.display = "none";
        item.style.display = "none";
        }
        else if(ingre.innerText == "Herbs and Spices")
        {
        let createelement = document.createElement("img");
        createelement.className="pizzaimage";
        createelement.setAttribute("src","HerbsandSpices.jpg");
        console.log(createelement);
        document.querySelector("div.draganddropContainer").appendChild(createelement);
        // images.style.display = "none";
        item.style.display = "none";
        }
        else if(ingre.innerText == "Nuts")
        {
        let createelement = document.createElement("img");
        createelement.className="pizzaimage";
        createelement.setAttribute("src","Nuts.jpg");
        console.log(createelement);
        document.querySelector("div.draganddropContainer").appendChild(createelement);
        // images.style.display = "none";
        item.style.display = "none";
        }
        else if(ingre.innerText == "Meats")
        {
        let createelement = document.createElement("img");
        createelement.className="pizzaimage";
        createelement.setAttribute("src","Meats.jpg");
        console.log(createelement);
        document.querySelector("div.draganddropContainer").appendChild(createelement);
        // images.style.display = "none";
        item.style.display = "none";
        }
        else if(ingre.innerText == "Exotic toppings")
        {
        let createelement = document.createElement("img");
        createelement.className="pizzaimage";
        createelement.setAttribute("src","Exotictoppings.jpg");
        console.log(createelement);
        document.querySelector("div.draganddropContainer").appendChild(createelement);
        // images.style.display = "none";
        item.style.display = "none";
        }
        else if(ingre.innerText == "Sea Food")
        {
        let createelement = document.createElement("img");
        createelement.className="pizzaimage";
        createelement.setAttribute("src","SeaFood.jpg");
        console.log(createelement);
        document.querySelector("div.draganddropContainer").appendChild(createelement);
        // images.style.display = "none";
        item.style.display = "none";
        }
    }
})


