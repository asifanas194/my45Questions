let Changing_Guest_List :string[] = ['Imran Khan', 'Nawaz Sharif', 'Bilawal Bhutto'];

for(let i = 0; i<Changing_Guest_List.length; i++)
{
    console.log('Dear Mr. ' + Changing_Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party. \n\nThank You!\n\n')
}

let absent_Guest :string = 'Imran Khan';

let new_Guest :string = 'Zardari';

Changing_Guest_List[0] = new_Guest;

for(let i = 0; i<Changing_Guest_List.length; i++)
{
    console.log('Dear Mr. ' + Changing_Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party. \n\nThank You!\n\n')
}

console.log(`Mr. ${absent_Guest} is not coming to the party.`)