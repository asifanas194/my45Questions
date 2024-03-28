let Shrinking_Guest_List :string[] = ['Imran Khan', 'Nawaz Sharif', 'Bilawal Bhutto'];

// for(let i = 0; i<Shrinking_Guest_List.length; i++)
// {
//     console.log('Dear Mr. ' + Shrinking_Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party. \n\nThank You!\n\n')
// }

let absent_Guest :string = 'Imran Khan';

let new_Guest :string = 'Zardari';

Shrinking_Guest_List[0] = new_Guest;

// for(let i = 0; i<Shrinking_Guest_List.length; i++)
// {
//     console.log('Dear Mr. ' + Shrinking_Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party. \n\nThank You!\n\n')
// }

console.log(`Mr. ${absent_Guest} is not coming to the party.\n\n`);

console.log('Good News ! We find big table so we are invite 3 more guests.\n\n')

Shrinking_Guest_List.unshift('Sir Zia Khan');
Shrinking_Guest_List.splice(2 , 0 , 'Maryan Nawaz');
Shrinking_Guest_List.push('Zardari');

for(let i = 0; i<Shrinking_Guest_List.length; i++)
{
    console.log('Dear Mr. ' + Shrinking_Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party. \n\nThank You!\n\n')
}

console.log('\nsorry we can not arrange big table , Only two peoples will be invited.');

while(Shrinking_Guest_List.length > 2)
{
    let remove_Guests = Shrinking_Guest_List.pop();
    console.log(`Sorry Mr. ${remove_Guests},, You are not invited for Dinner.`);
}

for(let i = 0; i<Shrinking_Guest_List.length; i++)
{
    console.log('Dear Mr. ' + Shrinking_Guest_List[i] + ',\n\nYpu are still invited.\n\nThank You!\n\n')
}

Shrinking_Guest_List.splice(0 , 2);

console.log(Shrinking_Guest_List);
