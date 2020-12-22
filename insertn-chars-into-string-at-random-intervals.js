var string = `
Twas brillig, and the slithy toves
      Did gyre and gimble in the wabe:
All mimsy were the borogoves,
      And the mome raths outgrabe.

“Beware the Jabberwock, my son!
      The jaws that bite, the claws that catch!
Beware the Jubjub bird, and shun
      The frumious Bandersnatch!”

He took his vorpal sword in hand;
      Long time the manxome foe he sought—
So rested he by the Tumtum tree
      And stood awhile in thought.

And, as in uffish thought he stood,
      The Jabberwock, with eyes of flame,
Came whiffling through the tulgey wood,
      And burbled as it came!

One, two! One, two! And through and through
      The vorpal blade went snicker-snack!
He left it dead, and with its head
      He went galumphing back.

“And hast thou slain the Jabberwock?
      Come to my arms, my beamish boy!
O frabjous day! Callooh! Callay!”
      He chortled in his joy.

’Twas brillig, and the slithy toves
      Did gyre and gimble in the wabe:
All mimsy were the borogoves,
      And the mome raths outgrabe.
`
var insertCharArray = ',;.:-_kKLlöÖÄä'.split('');
var insertRangeMin = 15;
var insertRangeMax = 35;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
for (var i = 0; i < insertCharArray.length; i++) {
  var lastSlicePosition = 0;
  while(lastSlicePosition+insertRangeMax<string.length){
    var randInt = getRandomInt(insertRangeMin, insertRangeMax);
    var newSlicePosition = lastSlicePosition+randInt;
    string = string.slice(0, newSlicePosition) + insertCharArray[i] + string.slice(newSlicePosition);
    lastSlicePosition = newSlicePosition;
  }
}

console.log(string);
