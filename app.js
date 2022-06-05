/* For increasing:

Create the counter variable and init as 0
Listen for interaction (clicks) on the increase button
Increase the counter variable by 1 each time it's clicked
Reflect that change on the page by changing the number in the HTML document via ID

*/

/* For saving:

Create a variable called "blob" that will contain the counter number and will be plain text
Use the FileSaver libraries "saveAs" function and pass in the blob variable, and the name of the plain text file as the arguments
Put it inside a function called "saveCount()"

*/

let counter = 0

function increaseButton() {
  counter = counter + 1
  document.getElementById("counter").innerText = counter
}

function saveCount() {
  var blob = new Blob([`Number: ${counter}`],
                { type: "text/plain;charset=utf-8" });
  saveAs(blob, "count.txt")
}
