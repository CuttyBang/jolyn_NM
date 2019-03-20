(function() {
  var checkout = document.getElementsByName('checkout')[0];
  var idme = `<div class="idme-shopify">
    <span class='idme-btn-affinity'>Military members receive 10% off with ID.me</span>
    <span class="idme-btn-unify">
      <a href="https://shopify.id.me/oauth/checkpoint?client_id=879d7fee98eb79ea44d0e86ca48ce2d7&amp;scope=military" >
        <img src="https://s3.amazonaws.com/idme/buttons/v4/verify-with-idme.png" alt="ID.me" style="height:34px"/>
      </a>
    </span>

    <span class='idme-btn-verification'>
      <img alt='Lock' src='https://s3.amazonaws.com/idme/assets/lock.png' class='idme-btn-lock' width='8'>
      Verification by ID.me &bull;
      <a href='https://www.id.me/about' class='idme-about-link' target='_new'>
        What is ID.me?
      </a>
    </span>`;

  checkout.insertAdjacentHTML("afterend", idme);
})();

