var Changing_Guest_List = ['Imran Khan', 'Nawaz Sharif', 'Bilawal Bhutto'];
for (var i = 0; i < Changing_Guest_List.length; i++) {
    console.log('Dear Mr. ' + Changing_Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party. \n\nThank You!\n\n');
}
var absent_Guest = 'Imran Khan';
var new_Guest = 'Zardari';
Changing_Guest_List[0] = new_Guest;
for (var i = 0; i < Changing_Guest_List.length; i++) {
    console.log('Dear Mr. ' + Changing_Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party. \n\nThank You!\n\n');
}
console.log("Mr. ".concat(absent_Guest, " is not coming to the party."));
