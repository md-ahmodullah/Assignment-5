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

noakhaliInputAmount.addEventListener('keyup', setOnClickNoa);

document.getElementById('noakhali-button').addEventListener('click', calcNoakhali);

feniInputAmount.addEventListener('keyup', setOnClickFeni);

document.getElementById('feni-button').addEventListener('click', calcFeni);

quotaInputAmount.addEventListener('keyup', setOnClickQuota);

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
    if (amount < 0 || amount > myAmount || amount == '' || isNaN(amount)) {
            alert('Invalid Amount. Try again!');
            const modalId = document.getElementById('noakhali-button');
            modalId.removeAttribute('onclick');
            return
    }else{
        const myNewAmount = myAmount - amount;
        navAmountSpan.innerText = myNewAmount;
        const newAmount = initAmount + amount;
        noakhaliTotalSpan.innerText = newAmount;
        noakhaliInputAmount.value = '';
        showHistory(amount, 'noakhali-title');
    }
}
function calcFeni() {
    const amount = Number(feniInputAmount.value);
    const initAmount = makeNumber(feniTotalSpan);
    const myAmount = makeNumber(navAmountSpan);
    if (amount < 0 || amount > myAmount || amount == '' || isNaN(amount)) {
        alert('Invalid Amount. Try again!');
        const modalId = document.getElementById('feni-button');
        modalId.removeAttribute('onclick');
        return
    }else{
        const myNewAmount = myAmount - amount;
        navAmountSpan.innerText = myNewAmount;
        const newAmount = initAmount + amount;
        feniTotalSpan.innerText = newAmount;
        feniInputAmount.value = '';
        showHistory(amount, 'feni-title');
    }
}
function calcQuota() {
    const amount = Number(quotaInputAmount.value);
    const initAmount = makeNumber(quotaTotalSpan);
    const myAmount = makeNumber(navAmountSpan);
    if (amount < 0 || amount > myAmount || amount == '' || isNaN(amount)) {
        alert('Invalid Amount. Try again!');
        const modalId = document.getElementById('quota-button');
        modalId.removeAttribute('onclick');
        return
    }else{
        const myNewAmount = myAmount - amount;
        navAmountSpan.innerText = myNewAmount;
        const newAmount = initAmount + amount;
        quotaTotalSpan.innerText = newAmount;
        quotaInputAmount.value = '';
        showHistory(amount, 'quota-title');
    }
}

function blogWindow() {
    window.location.href = "/blog.html";
}
function backHome() {
    window.location.href = "/index.html";
}
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
function setOnClickNoa() {
    const input = Number(noakhaliInputAmount.value);
    if (typeof input == 'number' || input > 0){
        const modalId = document.getElementById('noakhali-button');
        modalId.setAttribute('onclick', "my_modal_1.showModal()");
    }
}
function setOnClickFeni() {
    const input = Number(noakhaliInputAmount.value);
    if (typeof input == 'number' || input > 0){
        const modalId = getDataById('feni-button');
        modalId.setAttribute('onclick', "my_modal_1.showModal()");
    }
}
function setOnClickQuota() {
    const input = Number(noakhaliInputAmount.value);
    if (typeof input == 'number' || input > 0){
        const modalId = getDataById('quota-button');
        modalId.setAttribute('onclick', "my_modal_1.showModal()");
    }
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