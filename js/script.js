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
    donationBtnDesign.classList.add('border', 'border-gray-400');
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
    donationBtnDesign.classList.remove('border', 'border-gray-400');
    main.classList.remove("hidden")
    historyHidden.classList.add("hidden");
  
  
});

// blog button conect
document.getElementById("blog").addEventListener("click",function(){
    window.location.href = "blog.html";
})

// donate
const donateButton = document.getElementById("donate-button"); 

donateButton.addEventListener('click',function(){
    const donateField = getInputId("input-donate");
    const totalBDTAmount = getInnertext("BDT-amount");
    const totalBalance = getInnertext("total-balance");

    if(isNaN(donateField) || donateField<=0){
        alert("Please enter a valid amount");
        return;
    }
    const addDonate = donateField + totalBDTAmount;
    const losBalance = totalBalance - donateField;

    // add btn amount
    const totalAddDonate = document.getElementById("BDT-amount");
    totalAddDonate.innerText = addDonate;
    const totalLosBalance = document.getElementById("total-balance");
    totalLosBalance.innerText = losBalance;
    
});

// function
function getInputId(id){
    return parseFloat(document.getElementById(id).value).toFixed(2);
}
function getInnertext(id){
    return parseFloat(document.getElementById(id).innerText);
}
