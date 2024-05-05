function firstChar(text) {
  // your code here
	var char ="";
  for(let i = 0; i<text.length; i++)
  {
      if(text[i] !=" ")
      {
          char += text[i];
          break;
      }
  }
  return char;
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
