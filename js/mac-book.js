// memory
const fixedMemory = document.getElementById('fixed-memory');
const updateMemory = document.getElementById('update-memory');

// storage
const fixedStorage = document.getElementById('fixed-storage');
const storageIncrease = document.getElementById('storage-increase');
const doubleIncrease = document.getElementById('double-increase');

// delivery
const freeDelivery = document.getElementById('free-delivery');
const deliveryCharge = document.getElementById('delivery-charge');

const basePrice = document.getElementById('pc-price');
const memoryCost = document.getElementById('memory-cost');
const storageCost = document.getElementById('storage-cost');
const deliveryCost = document.getElementById('delivery-cost');
const totalPrice = document.getElementById('total-price');

// update total
function updateTotal() {
    const pcPrice = parseInt(basePrice.innerText);
    const memoryPrice = parseInt(memoryCost.innerText);
    const storagePrice = parseInt(storageCost.innerText);
    const deliveryPrice = parseInt(deliveryCost.innerText);
    const grandTotal = pcPrice + memoryPrice + storagePrice + deliveryPrice;
    totalPrice.innerText = grandTotal;
}
// memory
fixedMemory.addEventListener('click', function () {
    memoryCost.innerText = '0';
    updateTotal();
});
updateMemory.addEventListener('click', function () {
    memoryCost.innerText = '180';
    updateTotal();
});
// storage
fixedStorage.addEventListener('click', function () {
    storageCost.innerText = '0';
    updateTotal();
});
storageIncrease.addEventListener('click', function () {
    storageCost.innerText = '100';
    updateTotal();
});
doubleIncrease.addEventListener('click', function () {
    storageCost.innerText = '180';
    updateTotal();
});
// delivery
freeDelivery.addEventListener('click', function () {
    deliveryCost.innerText = '0';
    updateTotal();
});
deliveryCharge.addEventListener('click', function () {
    deliveryCost.innerText = '20';
    updateTotal();
});