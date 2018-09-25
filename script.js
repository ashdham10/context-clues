document.addEventListener('DOMContentLoaded', function(){

var friends = ['London', 'Jordin', 'Amanda', 'Felesha', 'Taylor'];
var locations = ['office', 'kitchen', 'dining room', 'garage', 
                'bathroom', 'bedroom', 'living room', 'hallway',
                 'attic', 'basement'];
var weapons = ['baseball bat', 'pool noodle', 'knife', 'toothpick', 
                'gun', 'jello', 'stapler', 'pillow', 'rubber chicken', 
                'scissors', 'pie', 'umbrella', 'pickle jar', 'rubber duck',
                'bubbles', 'microwave', 'hammer', 'feather duster', 'vase', 'banana'];

for(var i = 1; i <= 100; i++){
  var h3 = document.createElement('h3');
  document.body.appendChild(h3);
  h3.innerText = 'Accusation ' + [i];

  function accusationsFunc(){ 
    var randomFriend = Math.floor(Math.random() * friends.length%5);
    var randomLocation = Math.floor(Math.random() * locations.length%10);
    var randomWeapon = Math.floor(Math.random() * weapons.length%20); 
    var friend = friends[randomFriend];
    var location = locations[randomLocation];
    var weapon = weapons[randomWeapon];

  return function clickAlert(){
    alert(`I accuse ${friend} with the ${weapon} in the ${location}!`);
  }
}
  h3.addEventListener('click',  accusationsFunc());
}
});
