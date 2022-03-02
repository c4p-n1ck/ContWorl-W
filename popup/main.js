'use strict';

function close_current_tab() {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.tabs.remove(tabs[0].id);
  })
}

function main() {
  let msg = document.querySelector('#msg');
  document.addEventListener('keydown', (event) => {
    if ( event.key.toLowerCase() === 'y' ) {
      close_current_tab();
    } else if ( event.key.toLowerCase() === 'n' ) {
      window.close();
    } else {
      // TODO: Animate YES/NO Buttons.
    }
  });
  // TODO: Animate YES/NO Buttons.
  msg.innerText += 'Are you sure? You want to close this tab.\n\n';
  msg.innerHTML += '<span style="font-weight: bold;" id="y">[Y]35</span>\t<span style="color: red;" id="n">[N]0</span>';
  document.getElementById('y').addEventListener('click', function() {
      close_current_tab()
    }); document.getElementById('n').addEventListener('click', function() {
      window.close();
  })
}

document.addEventListener('DOMContentLoaded', main);
