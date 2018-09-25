document.addEventListener('DOMContentLoaded', function(){

var friends = ['London', 'Jordin', 'Amanda', 'Felesha', 'Taylor'];
var locations = ['office', 'kitchen', 'dining room', 'garage', 
                'bathroom', 'bedroom', 'living room', 'hallway',
                 'attic', 'basement'];
var weapons = ['baseball bat', 'pool noodle', 'knife', 'toothpick', 
                'gun', 'jello', 'stapler', 'pillow', 'rubber chicken', 
                'scissors', 'pie', 'umbrella', 'pickle jar', 'rubber duck',
                'bubbles', 'microwave', 'hammer', 'feather duster', 'vase', 'banana'];

// var randomFriend = Math.floor(Math.random() * friends.length);
// var randomLocation = Math.floor(Math.random() * locations.length);
// var randomWeapon = Math.floor(Math.random() * weapons.length); 
// var friend = friends[randomFriend];
// var location = locations[randomLocation];
// var weapon = weapons[randomWeapon];

function accusationsFunc(){
for(var i = 1; i <= 100; i++){
  var accusations = document.createElement('h3');
  document.body.appendChild(accusations);
  var headers = document.createTextNode('Accusation ' + [i]);
  var friend = friends[i %5];
  var location = locations[i %10];
  var weapon = weapons[i %20];
  accusations.appendChild(headers);
  accusations.addEventListener('click', function clickAlert(){
    alert(`I accuse ${friend} with the ${weapon} in the ${location}!`);
    
  });
}
}

accusationsFunc();

});


