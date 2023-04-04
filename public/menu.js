function gatherNewTripInfo() {
  eventName = document.querySelector("#event_name");
  localStorage.setItem("eventName", eventName.value);

  eventDate = document.querySelector("#event_date");
  localStorage.setItem("eventDate", eventDate.value);

  organizerName = document.querySelector("#organizer_name");
  localStorage.setItem("organizerName", organizerName.value);

  window.location.href = "menu.html";

  const test = document.querySelector('.test');
  test.textContent = localStorage.getItem('organizerName')
}