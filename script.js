let navbar= document.querySelector('.header .navbar');
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

let previewContainer=document.querySelector(".products-preview");
let previewBox=previewContainer.querySelectorAll('.preview');

document.querySelectorAll('.products-container .product1').forEach(product1 =>{
    product1.onclick=()=>{
        previewContainer.style.display="flex";
        let name=product1.getAttribute('data-name');
        previewBox.forEach(preview=>{
            let target=preview.getAttribute('data-target');
            if(name==target){
               preview.classList.add('active');
            }
        })

    }
})