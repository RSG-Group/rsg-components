export default function (css) {
  document.querySelector('head').innerHTML += `\n<style>${css}</style>`
}
