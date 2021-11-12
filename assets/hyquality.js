function HyDOMready(callback) {
    if (document.readyState != 'loading') callback();
    else document.addEventListener('DOMContentLoaded', callback);
}
HyDOMready(function(){

    let noteBtnOrderInstriction = document.querySelector('.add-order-instruction');
    if (noteBtnOrderInstriction) {
        noteBtnOrderInstriction.addEventListener('click', function() {

            noteBtnOrderInstriction.classList.toggle('is-active');
            document.getElementById('CartHeaderOrderInstructions').classList.toggle('hide');
        });
    }

    let noteBtnAddDeliveryDate = document.querySelector('.add-delivery-date');
    if (noteBtnAddDeliveryDate) {
        noteBtnAddDeliveryDate.addEventListener('click', function() {
            noteBtnAddDeliveryDate.classList.toggle('is-active');
            //document.querySelector('.delivery-date-pro').classList.toggle('hide');
            document.querySelectorAll(".delivery-date-pro").forEach(function(element) {
                element.classList.toggle('hide')
            });
        });
    }
});