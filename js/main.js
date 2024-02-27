/*
<p><strong>Wing Span</strong>29.9 m (98 ft 1 in)<strong>Length</strong>25.1 m (82 ft 5 in)<strong>Height</strong>8.1 m (26 ft 5 1/2 in)<strong>Weight, Empty</strong>16,783 kg (37,000 lb)<strong>Weight, Gross</strong>29,484 kg (65,000 lb)<strong>Cruising Speed</strong>676 km/h (420 mph)<strong>Max Speed</strong>805 km/h (500 mph)<strong>Rate of Climb</strong>677 m (2,220 ft) /min<strong>Service Ceiling</strong>12,283 m (40,300 ft)<strong>Range</strong>Unknown<strong>Crew</strong>three<strong>Power Plant</strong>four Rolls-Royce Derwent 5/17, 1,633 kg (3,600 lb) static thrust, centrifugal flow turbojet engines</p>
*/

const APP = {
  textbox: document.querySelector("#textbox"),
  button: document.querySelector("#button"),
  outputDiv: document.querySelector("#copyContent"),
  copyButton: document.querySelector("#copyButton"),

  init: () => {
    console.log("APP initialized");
    // call the addEventListener function
    APP.addEventListener();
  },

  addEventListener: () => {
    // add event listener to the submit button
    APP.button.addEventListener("click", APP.createHtml);
    // add event listener to the copy button
    APP.copyButton.addEventListener("click", APP.copyContent);
  },

  createHtml: () => {
    // get the div with the id content
    const div = document.querySelector("#content");
    // clear the previous content
    div.innerHTML = "";
    // set the innerHTML of the div to the value of the textbox
    div.innerHTML = APP.textbox.value;
    // call the getValues function
    APP.getValues();
  },

  getValues: () => {
    // clear the previous content
    APP.outputDiv.innerHTML = "";
    // get all the strong tags
    let strongTags = document.querySelectorAll("strong");
    // loop through the strong tags
    strongTags.forEach((strong, index) => {
      if (!strong.innerText.includes(":")) {
        // check if it's the first element
        if (index === 0) {
          // if it's the first element, add a line before the strong tag
          let line = document.createElement("hr");
          APP.outputDiv.appendChild(line);
        }

        // create a new strong tag
        let strongTag = document.createElement("strong");
        // set the innerHTML of the new strong tag to the innerHTML of the current strong tag with : at the end
        strongTag.innerHTML = `${strong.innerHTML}: `;
        // append the new strong tag to the outputDiv
        APP.outputDiv.appendChild(strongTag);

        // get the text content of the next sibling of the current strong tag
        let text = strong.nextSibling.textContent;
        // create a new span tag
        let span = document.createElement("span");
        // set the innerHTML of the new span tag to the text content
        span.innerHTML = text;
        // append the new span tag to the outputDiv
        APP.outputDiv.appendChild(span);

        // create a new line element
        let line = document.createElement("hr");
        // append the new line element to the outputDiv
        APP.outputDiv.appendChild(line);
      }
    });
  },

  copyContent: () => {
    // create a new range
    const range = document.createRange();
    // select the outputDiv
    range.selectNode(APP.outputDiv);
    // remove all ranges
    window.getSelection().removeAllRanges();
    // add the new range
    window.getSelection().addRange(range);
    // execute the copy command
    document.execCommand("copy");
    // remove all ranges
    window.getSelection().removeAllRanges();
    // alert the user
    alert("Content copied to clipboard");
  },
};

document.addEventListener("DOMContentLoaded", APP.init);
