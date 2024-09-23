const historyEl = getDataById('history');
const donationEl = getDataById('donation');
const donationBtnEl = getDataById('donation-btn');
const historyBtnEl = getDataById('history-btn');
const noakhaliAmount = getDataById('noakhali-amount');
const feniAmount = getDataById('feni-amount');
const quotaAmount = getDataById('quota-amount');
const noakhaliTotal = getDataById('noakhali-total');
const feniTotal = getDataById('feni-total');
const quotaTotal = getDataById('quota-total');
const noakhaliButton = getDataById('noakhali-button');
const feniButton = getDataById('feni-button');
const quotaButton = getDataById('quota-button');
const navAmount = getDataById('nav-amount');
const historySection = getDataById('history');
const noakhaliTitle = getDataById('noakhali-title');
const date = new Date().toString();


document.getElementById('history-btn').addEventListener('click', historyBtnFunction);

document.getElementById('donation-btn').addEventListener('click', donationBtnFunction);

noakhaliButton.addEventListener('click', calcNoakhali);

function donationBtnFunction(){
    removeProperty(donationEl, 'hidden');
    // donationEl.classList.remove('hidden');
    addProperty(historyEl, 'hidden');
    // historyEl.classList.add('hidden');
    addProperty(donationBtnEl, 'bg-primary');
    // donationBtnEl.classList.add('bg-primary');
    removeProperty(historyBtnEl, 'bg-primary');
    // historyBtnEl.classList.remove('bg-primary');
}
function historyBtnFunction(){
    addProperty(donationEl, 'hidden');
    // donationEl.classList.add('hidden');
    removeProperty(historyEl, 'hidden');
    // historyEl.classList.remove('hidden');
    removeProperty(donationBtnEl, 'bg-primary');
    // donationBtnEl.classList.remove('bg-primary');
    addProperty(historyBtnEl, 'bg-primary');
    // historyBtnEl.classList.add('bg-primary');
}

const noakhaliTotalNum = getDataById('noakhali-total').innerText;
const feniTotalNum = getDataById('feni-total').innerText;
const quotaTotalNum = getDataById('quota-total').innerText;
const navAmountNum = getDataById('nav-amount').innerText;
function calc(btnAmount, btnTotalNum, navTotalNum) {
    const amount = Number(btnAmount.value);
    const initAmount = Number(btnTotalNum);
    const myAmount = Number(navTotalNum);
    const myNewAmount = myAmount - amount;
    btnAmount.innerText = myNewAmount;
    const newAmount = initAmount + amount;
    return newAmount;
}

function calcNoakhali() {
    const am = calc(noakhaliAmount, noakhaliTotalNum, navAmountNum);
    noakhaliTotal.innerText = am; 
    showHistory();
}
// const calcFeni = calc(feniAmount, feniTotal, navAmount);
// const calcQuota = calc(quotaAmount, quotaTotal, navAmount);
// function calcNoakhali(event) {
//     const amount = Number(noakhaliAmount.value);
//     const initAmount = Number(noakhaliTotal.innerText);
//     const myAmount = Number(navAmount.innerText);
//     const myNewAmount = myAmount - amount;
//     navAmount.innerText = myNewAmount;
//     const newAmount = initAmount + amount;
//     noakhaliTotal.innerText = newAmount;  
// }

// famine-2024 at Feni, Bangladesh
function showHistory() {
    const history1 = `<div class="border-2 rounded-2xl p-8 space-y-4">
                <h2 class="text-xl font-semibold text-black">
                ${noakhaliAmount.value} Taka is Donated for ${noakhaliTitle.innerText}
                </h2>
                <p class="text-base font-normal text-gray-500">
                Date : ${date}
                </p>
                </div>`
    historySection.innerHTML += history1;
}

// Re-usable Function
function getDataById(id) {
    return document.getElementById(id);
}

function addProperty(element, property) {
    return element.classList.add(property);
}
function removeProperty(element, property) {
    return element.classList.remove(property);
}
