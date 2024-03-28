let More_Guests :string[] = ['Imran Khan', 'Nawaz Sharif', 'Bilawal Bhutto'];

// for(let i = 0; i<More_Guests.length; i++)
// {
//     console.log('Dear Mr. ' + More_Guests[i] + ',\n\nIt is our pleasure to invite you in our party. \n\nThank You!\n\n')
// }

let absent_Guest :string = 'Imran Khan';

let new_Guest :string = 'Zardari';

More_Guests[0] = new_Guest;

for(let i = 0; i<More_Guests.length; i++)
{
    console.log('Dear Mr. ' + More_Guests[i] + ',\n\nIt is our pleasure to invite you in our party. \n\nThank You!\n\n')
}

console.log(`Mr. ${absent_Guest} is not coming to the party.\n\n`);

console.log('Good News ! We find big table so we are invite 3 more guests.\n\n')

More_Guests.unshift('Sir Zia Khan');
More_Guests.splice(2 , 0 , 'Maryan Nawaz');
More_Guests.push('Zardari');

for(let i = 0; i<More_Guests.length; i++)
{
    console.log('Dear Mr. ' + More_Guests[i] + ',\n\nIt is our pleasure to invite you in our party. \n\nThank You!\n\n')
}