function reactTicker() {
  const time = new Date().toLocaleTimeString();
  const component = (
    <div>
      <span>{time}</span>
    </div>
  );
  ReactDOM.render(component, document.getElementById("reactClock"));
}

function jsTicker() {
  const time = new Date().toLocaleTimeString();
  const component = `<div><span>${time}</span></div>`;
  document.getElementById("jsClock").innerHTML = component;
}

setInterval(jsTicker, 1000);
setInterval(reactTicker, 1000);
