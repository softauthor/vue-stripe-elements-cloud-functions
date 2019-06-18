<template>
    <section class="row payment-form">

        <h5 class="#e0e0e0 grey lighten-4">
            Payment Method
            <span class="right">$25</span>
        </h5>

        <div class="error red center-align white-text"></div>

        <div class="col s12 card-element">
            <label>Card Number</label>
            <div id="card-number-element" class="input-value"></div>
        </div>

        <div class="col s6 card-element">
            <label>Expiry Date</label>
            <div id="card-expiry-element"></div>
        </div>

        <div class="col s6 card-element">
            <label>CVC</label>
            <div id="card-cvc-element"></div>
        </div>

        <div class="col s12 place-order-button-block">
            <button class="btn col s12 #e91e63 pink">Place Order</button>
        </div>
    </section>
</template>

<script>
export default {};
</script>

<style>
.payment-form {
    max-width: 400px;
    margin: 20px auto;
    border: 1px solid #ececec;
}

.payment-form h5 {
    margin: 0;
    padding: 10px;
    font-size: 1.2rem;
}

.card-element {
    margin-top: 5px;
}

#card-number-element,
#card-expiry-element,
#card-cvc-element {
    background: white;
    padding: 5px;
    border: 1px solid #ececec;
}

.place-order-button-block {
    margin: 10px 0;
}
</style>