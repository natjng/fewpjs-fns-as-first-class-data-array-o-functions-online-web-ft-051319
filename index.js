function wakeDog(dogName, dogBreed) {
    let string = `Wake ${dogName} the ${dogBreed}`;
    console.log(string);
    return string;
};

// var wakeDog = function(dogName="Byron", dogBreed="poodle") {
//     console.log(`Wake ${dogName} the ${dogBreed}`);
//     return `Wake ${dogName} the ${dogBreed}`
// }

function leashDog(dogName, dogBreed) {
    let string = `Leash ${dogName} the ${dogBreed}`;
    console.log(string);
    return string;
};
function walkToPark(dogName, dogBreed) {
    let string = `Walk to the park with ${dogName} the ${dogBreed}`;
    console.log(string);
    return string;
};
function throwFrisbee(dogName, dogBreed) {
    let string = `Throw the frisbee for ${dogName} the ${dogBreed}`;
    console.log(string);
    return string;
};
function walkHome(dogName, dogBreed) {
    let string = `Walk home with ${dogName} the ${dogBreed}`;
    console.log(string);
    return string;
};
function unleashDog(dogName, dogBreed) {
    let string = `Unleash ${dogName} the ${dogBreed}`;
    console.log(string);
    return string;
};

let routine = [wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog];

function exerciseDog(dogName, dogBreed) {
    let messages = [];
    routine.forEach(function(activity) {
        messages.push(activity(dogName, dogBreed));
    });
    return messages;
};

// function exerciseDog(dog, breed) {
//     return routine.map(fn => fn(dog, breed))
// }  