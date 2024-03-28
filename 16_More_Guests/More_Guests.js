var More_Guests = ['Imran Khan', 'Nawaz Sharif', 'Bilawal Bhutto'];
// for(let i = 0; i<More_Guests.length; i++)
// {
//     console.log('Dear Mr. ' + More_Guests[i] + ',\n\nIt is our pleasure to invite you in our party. \n\nThank You!\n\n')
// }
var absent_Guest = 'Imran Khan';
var new_Guest = 'Zardari';
More_Guests[0] = new_Guest;
for (var i = 0; i < More_Guests.length; i++) {
    console.log('Dear Mr. ' + More_Guests[i] + ',\n\nIt is our pleasure to invite you in our party. \n\nThank You!\n\n');
}
console.log("Mr. ".concat(absent_Guest, " is not coming to the party.\n\n"));
console.log('Good News ! We find big table so we are invite 3 more guests.\n\n');
More_Guests.unshift('Sir Zia Khan');
More_Guests.splice(2, 0, 'Maryan Nawaz');
More_Guests.push('Zardari');
for (var i = 0; i < More_Guests.length; i++) {
    console.log('Dear Mr. ' + More_Guests[i] + ',\n\nIt is our pleasure to invite you in our party. \n\nThank You!\n\n');
}
