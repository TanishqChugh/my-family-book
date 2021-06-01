var familymembers = [
    "My father Rohit Chugh",
    "My mother Ridhima Chugh",
    "Me Tanishq Chugh",
    "My sister Amaira Chugh"
];

var images = [
    "papa.jpeg",
    "mumma.jpeg",
    "my photo.jpeg",
    "amaira.jpeg"
];
var i = 0;

function nextslide() {
    i++;
    var number_of_family_members_array = 5;
    if (i > number_of_family_members_array) {
        i = 0;

    }
    var updatedImage = images[i];
    var updatedName = familymembers[i];
    document.getElementById("album").src = updatedImage;
    document.getElementById("membertext").innerHTML = updatedName;

}