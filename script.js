
window.onload = () => {
    var p1 = document.getElementById("p1");


   // read contents of file into array
fetch('output.txt')
.then(response => response.text())
.then(fileContents => {
  const array = fileContents.split('\n');
  
  // remove duplicate elements
  const uniqueArray = [...new Set(array)];
console.log(uniqueArray)
  // write unique elements back to file
  const uniqueFileContents = uniqueArray.join('\n');
  // you can now do something with the uniqueFileContents, such as displaying it in the browser or sending it to a server
  
  const maxVal = Math.max(...uniqueArray.map(str => Number(str.replace('\r', ''))));
  console.log(maxVal); // output: 9
  
  p1.textContent = maxVal.toString()
})
.catch(error => console.error(error));


}





