window.anim = (txt1, txt2, progressCount, speed, selector) => {
  if (!progressCount || !speed) {
    // eslint-disable-next-line no-alert
    alert("You MUST set text/string, progressCount and speed in the anim() function");
  }
  let p = 1;
  const el = document.querySelector(`${selector}SPAN`);
  const i = setInterval(() => {
    el.style.width = `${p}%`;
    el.style.transition = `width ${speed / 500}s linear;`;
    el.innerHTML = `${txt1} ${p}% ${txt2}`;
    p += 1;
    if (p > progressCount) {
      clearInterval(i);
    }
  }, speed);
};
