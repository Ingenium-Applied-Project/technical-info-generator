/*
<p><strong>Wing Span</strong>29.9 m (98 ft 1 in)<strong>Length</strong>25.1 m (82 ft 5 in)<strong>Height</strong>8.1 m (26 ft 5 1/2 in)<strong>Weight, Empty</strong>16,783 kg (37,000 lb)<strong>Weight, Gross</strong>29,484 kg (65,000 lb)<strong>Cruising Speed</strong>676 km/h (420 mph)<strong>Max Speed</strong>805 km/h (500 mph)<strong>Rate of Climb</strong>677 m (2,220 ft) /min<strong>Service Ceiling</strong>12,283 m (40,300 ft)<strong>Range</strong>Unknown<strong>Crew</strong>three<strong>Power Plant</strong>four Rolls-Royce Derwent 5/17, 1,633 kg (3,600 lb) static thrust, centrifugal flow turbojet engines</p>
*/

const APP = {
  textbox: document.querySelector('div[contenteditable="true"]').innerHTML,
  tempDiv: document.querySelector("#content"),
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
    APP.textbox = document.querySelector(
      'div[contenteditable="true"]'
    ).innerHTML;
    // clear the previous content
    APP.tempDiv.innerHTML = "";
    // set the innerHTML of the div to the value of the textbox
    APP.tempDiv.innerHTML = APP.textbox;
    // call the getValues function
    APP.getValues();
  },

  getValues: () => {
    // clear the previous content
    APP.outputDiv.innerHTML = "";
    // Create the new <p> structure
    const newParagraph = document.createElement("p");

    // Iterate through each row in the table and create the corresponding <strong> and <hr> elements
    const rows = APP.tempDiv.querySelectorAll("tr");
    rows.forEach((row) => {
      const cells = row.querySelectorAll("td");
      const strongText = cells[0].innerText.trim();
      const spanText = cells[1].innerText.trim();

      // Create <strong> element
      const strongElement = document.createElement("strong");
      strongElement.innerText = `${strongText}: `;

      // Create <span> element
      const spanElement = document.createElement("span");
      spanElement.innerText = spanText;

      // Append <hr>, <strong>, <span> to the new <p> element
      newParagraph.appendChild(document.createElement("hr"));
      newParagraph.appendChild(strongElement);
      newParagraph.appendChild(spanElement);
    });
    newParagraph.appendChild(document.createElement("hr"));

    // Append the new <p> element to the body
    // document.body.appendChild(newParagraph);
    APP.outputDiv.appendChild(newParagraph);
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
