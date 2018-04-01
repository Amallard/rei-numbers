document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
  console.log("device is ready...");
}

function goToPage(page) {
  window.location=page;
}

function goToRentalProperty2Page() {
  window.location='rental_2.html';
}

function goToRentalProperty3Page() {
  window.location='rental_3.html';
}

function goToRentalPropertyResultsPage() {
  window.location='rental_results.html';
}
