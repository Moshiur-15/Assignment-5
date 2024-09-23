// blog button conect
document.getElementById("blog").addEventListener("click",function(){
    window.location.href = "blog.html";
});


// navbar pojitoin 
const Navbar = document.getElementById("Navbar");
const Nav = document.getElementById("Nav");

window.addEventListener('scroll', function(){
    if(window.scrollY > 0){
        Nav.classList.add('bg-opacity-40')
        Navbar.classList.add("backdrop-blur-md")
    }else{
        Nav.classList.remove('bg-opacity-40');
        Navbar.classList.remove("backdrop-blur-md")
    }
})


// history and donation button
const main = document.getElementById("main");
const historyBtnDesign = document.getElementById("history-btn")
const donationBtnDesign = document.getElementById("donation-btn");

historyBtnDesign.addEventListener('click',function(){
    historyBtnDesign.classList.add(
        'bg-btn_primary',
        'border-none'
    );
    donationBtnDesign.classList.remove(
        'bg-btn_primary',
        'border-none'
    )
    donationBtnDesign.classList.add('border', 'border-gray-200');
    main.classList.add("hidden");
    historyHidden.classList.remove("hidden");
  
});

 donationBtnDesign.addEventListener('click',function(){
    donationBtnDesign.classList.add(
        'bg-btn_primary',
        'border-none'
    );
    historyBtnDesign.classList.remove(
        'bg-btn_primary',
        'border-none'
    )
    donationBtnDesign.classList.remove('border', 'border-gray-200');
    main.classList.remove("hidden")
    historyHidden.classList.add("hidden");
  
  
});



// donation add
const donateButton = document.getElementById("donate-button");
donateButton.addEventListener('click',function(){
    donateFun("BDTAmount","inputDonate","Donate for Flood at Noakhali, Bangladesh")
});
const donateButton2 = document.getElementById("donate-button-2");
donateButton2.addEventListener('click',function(){
    donateFun("BDTAmount2","inputDonate2","Donate for Flood Relief in Feni,Bangladesh")
});
const donateButton3 = document.getElementById("donate-button-3");
donateButton3.addEventListener('click',function(){
    donateFun("BDTAmount3","inputDonate3","Aid for Injured in the Quota Movement")
});

// donation add function
function donateFun(BDTAmountPara, inputDonatePara, historyTitle){
    const inputDonate = getInputId(inputDonatePara);
    const BDTAmount = getInputId(BDTAmountPara);
    const totalBalance = getInputId("totalBalance");

    
    const totalInputDonate = parseFloat(inputDonate.value);
    const totalBDTAmount = parseFloat(BDTAmount.innerText);
    const totalBalanceValue = parseFloat(totalBalance.innerText);

    if(isNaN(totalInputDonate)){
        alert("Please give the number");
        return;
    }
    if(totalBalanceValue < totalInputDonate){
        alert("There is not enough money in the account");
        return;
    }
    if(totalInputDonate < 0){
        alert("Please give positive number");
        return
    }

    // Model add
    my_modal_1.showModal();

    const history = getInputId("historyHidden");
    history.innerHTML += `
    <div class= "my-5 border py-6 px-8 rounded-lg">
    <p class="font-bold pb-3">${totalInputDonate} taka is ${historyTitle}</p>
    <p class="text-gray-600">Date : ${new Date}</p>
    </div>
    `


    const addDonate = totalInputDonate + totalBDTAmount;
    BDTAmount.innerText = addDonate.toFixed(2);

    const losBalance = totalBalanceValue - totalInputDonate;
    totalBalance.innerText = losBalance.toFixed(2);
    
}

// all id add
function getInputId(id){
    let value = document.getElementById(id);
    return value;
}