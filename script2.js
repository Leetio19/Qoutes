//  async function loadFileAndPrintToConsole(url) {
//     try {
//       const response = await fetch(url);
//       const data = await response.text();
//       console.log(data);
//     } catch (err) {
//       console.error(err);
//     }
//   }
  
//   loadFileAndPrintToConsole('text.txt');

//   console.log(loadFileAndPrintToConsole)

//   fetch('text.txt')
//   .then(response => response.text())
//   .then((data) => {
//     console.log(data)
//   })


fetch("text.txt")
.then( response => response.text() )
.then( text => console.log(text) )
// let a = fetch(`text.txt`)
// console.log(a)
let arr = [fetch("text.txt")
.then( response => response.text() )
.then( text => console.log(text) )]

// jQuery.get('text.txt', function(data) {
//     console.log(data);
// });

// let arr = jQuery.get('text.txt', function(data) {
// });
