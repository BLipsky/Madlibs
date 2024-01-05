let place = prompt('Enter a place:')
let vehicle = prompt('Enter a vehicle, and add an "s" after:')
let noun = prompt('Enter a proper noun:')
let animals = prompt('Enter a animal, and add an "s" after:')
let verb = prompt('Enter a verb:')
let adverb = prompt('Enter an adverb:')
let gas = prompt('Enter a type of gas:')
let worker = prompt('Enter a type of worker, and add an "s" after:')
let town = prompt('Enter a town name:')
let athlete = prompt('Enter a type of athlete, and add an "s" after:')
let reaction = prompt('Enter an adverb ending in "ly":')





let story = `When the day began, the Jungle, which happened to have a ${place} in it, became full of life. 2 ${vehicle} crashed off of the highway 
into the side of a ${noun} cave. 5 ${animals} escaped from a truck that ${verb} away from the crash, and 
they began to jump from tree to tree very ${adverb}. 3 wood cabins then simultaneously caught fire due to 
a ${gas} leak caused by 8 ${worker} on strike in a plant nearby, while 9 planes all crashed over the town of ${town}
causing debris to rain on the jungle from above. Only 4 ${athlete} were injured, ${reaction}.`






let madLibOutputDiv = document.getElementById('madLibOutput')

madLibOutputDiv.innerHTML = `<p>${story}</p>`


//${adjective} , a ${verb} ${noun} ${adverb} ${verb} 8-9-4