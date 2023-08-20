let totalPrice = 0;
const discountCouponField = document.getElementById('discount-field');

function handleClick(element) {

    const itemName = element.childNodes[3].childNodes[3].innerText;

    const itemCart = document.getElementById('item-cart');
    const itemCount = itemCart.childElementCount;

    const p = document.createElement('p');
    p.classList.add('font-medium');
    p.innerHTML = `${itemCount + 1}. ${itemName}`;
    itemCart.appendChild(p);


    const itemPrice = element.childNodes[3].childNodes[5].childNodes[0].innerText;
    totalPrice = (parseFloat(totalPrice) + parseFloat(itemPrice)).toFixed(2);
    document.getElementById('total-price').innerText = totalPrice;
    document.getElementById('total-discount').innerText = '00.00';
    document.getElementById('total').innerText = totalPrice;

    const discountField = document.getElementById('discount-field');
    const applyBtn = document.getElementById('apply');
    const makePurchaseBtn = document.getElementById('make-purchase');

    if (totalPrice > 0) {
        makePurchaseBtn.removeAttribute('disabled');
    }
    if (totalPrice >= 200) {
        discountField.removeAttribute('disabled');
        applyBtn.removeAttribute('disabled');
    }
    console.log(discountCouponField.value);
    if (discountCouponField.value === 'SELL200') {
        const discountedPrice = parseFloat(totalPrice * 0.8).toFixed(2);
        const totalDiscount = parseFloat(totalPrice - discountedPrice).toFixed(2);
        document.getElementById('total').innerText = discountedPrice;
        document.getElementById('total-discount').innerText = totalDiscount;
        // document.getElementById('discount-field').value = '';
    }
}

function applyDiscount() {
    // const discountCouponField = document.getElementById('discount-field');

    if (discountCouponField.value === 'SELL200') {
        const discountedPrice = parseFloat(totalPrice * 0.8).toFixed(2);
        const totalDiscount = parseFloat(totalPrice - discountedPrice).toFixed(2);
        document.getElementById('total').innerText = discountedPrice;
        document.getElementById('total-discount').innerText = totalDiscount;
        // document.getElementById('discount-field').value = '';
    }
    else{
        alert('Please enter a valid coupon code...');
        document.getElementById('discount-field').value = '';
        return;
    }



}