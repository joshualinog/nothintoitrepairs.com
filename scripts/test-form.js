const fs = require('fs');
const { JSDOM } = require('jsdom');

const html = fs.readFileSync('./_site/fencing-and-decking-specialists/index.html', 'utf8');
const dom = new JSDOM(html, { runScripts: 'dangerously', resources: 'usable', url: 'http://localhost/' });
const { window } = dom;
const { document } = window;

function wait(ms){ return new Promise(r=>setTimeout(r,ms)); }

(async () => {
  // let inline scripts run
  await wait(100);

  const form = document.getElementById('fencing-form');
  console.log('Form found:', !!form);
  const container = document.getElementById('fencing-form-container');
  console.log('Container display before submit:', container && (container.style.display || 'block'));
  const thankYou = document.getElementById('thank-you');
  console.log('Thank-you hidden before submit:', thankYou && thankYou.classList.contains('hidden'));

  // dispatch submit
  const submitEvent = new window.Event('submit', { bubbles: true, cancelable: true });
  form.dispatchEvent(submitEvent);

  await wait(100);

  console.log('Container display after submit:', container && container.style.display);
  console.log('Thank-you hidden after submit:', thankYou && (thankYou.classList.contains('hidden') ? 'hidden' : 'visible'));

  // Print source input value
  const sourceInput = document.getElementById('fencing-form-source');
  console.log('Source input value:', sourceInput && sourceInput.value);

  process.exit(0);
})();