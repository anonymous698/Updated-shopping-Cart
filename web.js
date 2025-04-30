const genderSelect=document.querySelector('select[name="gender"]');
const productSelect=document.querySelector('select[name="products"]');
const items=document.querySelectorAll(".item");

filterItems=()=>{
   const selectedGender=genderSelect.value;
    const selectedProduct=productSelect.value;

    items.forEach(item=>{
        const itemGender=item.getAttribute("data-gender");
        const itemProduct=item.getAttribute("data-product");

        if((selectedGender===itemGender||selectedGender==="")&&(selectedProduct===itemProduct||selectedProduct==="")){
            item.style.display="block";
        }
        else{
            item.style.display="none";
        }
        

    });

};

genderSelect.addEventListener("change",filterItems);
productSelect.addEventListener("change",filterItems);





