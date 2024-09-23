const historyEl = getDataById('history');
const donationEl = getDataById('donation');
const donationBtnEl = getDataById('donation-btn');
const historyBtnEl = getDataById('history-btn');
const noakhaliInputAmount = getDataById('noakhali-amount');
const feniInputAmount = getDataById('feni-amount');
const quotaInputAmount = getDataById('quota-amount');
const noakhaliTotalSpan = getDataById('noakhali-total');
const feniTotalSpan = getDataById('feni-total');
const quotaTotalSpan = getDataById('quota-total');
const navAmountSpan = getDataById('nav-amount');
const historySection = getDataById('history');
const date = new Date().toString();


document.getElementById('history-btn').addEventListener('click', historyBtnFunction);

document.getElementById('donation-btn').addEventListener('click', donationBtnFunction);

document.getElementById('noakhali-button').addEventListener('click', calcNoakhali);

document.getElementById('feni-button').addEventListener('click', calcFeni);

document.getElementById('quota-button').addEventListener('click', calcQuota);

function donationBtnFunction(){
    removeProperty(donationEl, 'hidden');
    addProperty(historyEl, 'hidden');
    addProperty(donationBtnEl, 'bg-primary');
    removeProperty(historyBtnEl, 'bg-primary');
}
function historyBtnFunction(){
    addProperty(donationEl, 'hidden');
    removeProperty(historyEl, 'hidden');
    removeProperty(donationBtnEl, 'bg-primary');
    addProperty(historyBtnEl, 'bg-primary');
}

function calcNoakhali() {
    const amount = Number(noakhaliInputAmount.value);
    const initAmount = makeNumber(noakhaliTotalSpan);
    const myAmount = makeNumber(navAmountSpan);
    if (amount > myAmount) {
        alert('Invalid Amount. Try again!');
        return
    }
    // if (amount1 > amount2 || amount1 === '' || isNaN(amount1)) {
    //     alert('Invalid Amount. Try again!');
    //     return;
    // }
    const myNewAmount = myAmount - amount;
    navAmountSpan.innerText = myNewAmount;
    const newAmount = initAmount + amount;
    noakhaliTotalSpan.innerText = newAmount;
    noakhaliInputAmount.value = '';
    showHistory(amount, 'noakhali-title');
}
function calcFeni() {
    const amount = Number(feniInputAmount.value);
    const initAmount = makeNumber(feniTotalSpan);
    const myAmount = makeNumber(navAmountSpan);
    const myNewAmount = myAmount - amount;
    navAmountSpan.innerText = myNewAmount;
    const newAmount = initAmount + amount;
    feniTotalSpan.innerText = newAmount; 
    feniInputAmount.value = '';
    showHistory(amount, 'feni-title');
}
function calcQuota() {
    const amount = Number(quotaInputAmount.value);
    const initAmount = makeNumber(quotaTotalSpan);
    const myAmount = makeNumber(navAmountSpan);
    const myNewAmount = myAmount - amount;
    navAmountSpan.innerText = myNewAmount;
    const newAmount = initAmount + amount;
    quotaTotalSpan.innerText = newAmount;
    quotaInputAmount.value = '';
    showHistory(amount, 'quota-title');
}

function blogWindow() {
    window.location.href = "/blog.html";
}
function backHome() {
    window.location.href = "/index.html";
}


// famine-2024 at Feni, Bangladesh
function showHistory(inputAmount, id) {
    const title = titleGenerator(id)
    const history1 = `<div class="border-2 rounded-2xl p-8 space-y-4">
                <h2 class="text-xl font-semibold text-black">
                ${inputAmount} Taka is Donated for ${title}.
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
function makeNumber(el) {
    return Number(el.innerText);
}
function titleGenerator(id) {
    return getDataById(id).innerText;
}
    


