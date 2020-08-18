$(document).ready(function(){
 $('#userForm').submit(function () {
   event.preventDefault();
  let sentence = $('#userInput').val().split('');
  let printedSentence = sentence.slice();
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  for(let index = 0; index < sentence.length; index++){
    for(let i = 0; i < vowels.length; i++)
    {
      if(vowels[i] === sentence[index].toLowerCase()) {
        printedSentence[index] = '-';
        break;
      }
    }
  }
   
   $('#guess').text(printedSentence.join(''));
 
 });

});

