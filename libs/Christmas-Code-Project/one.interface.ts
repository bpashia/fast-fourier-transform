import { StoryStep } from './general';

const stepOneStoryOne: StoryStep = {
  correctAnswer: 1,
  prompt:
    "Welcome to Aldovia's 3rd largest airport! As usual, you are headed to Branson for Christmas, but you are running late.",
  options: [
    'Stop to get a magazine and a soft pretzel',
    'Ask a local Aldovian for help to your terminal',
  ],
  results: [
    'You stop to get some literature and some knotted bread, but you end up accidentally ordering that stupid kind of pretzel with the cinnamon on it',
    "There's a man 600 ft away in this massively oversized airport and you shout to him to get his attention. It turns out it's the prince of Aldovia! He not only helps you to your terminal, but ends up going to Branson with you because you're in love.",
  ],
};

const stepTwoStoryOne: StoryStep = {
  correctAnswer: 1,
  prompt:
    'You look down with a queasy expression at the imposter cinnamon roll in your hand, contemplating your next steps wisely',
  options: [
    'Give your pretzel to a child in the spirit of Christmas!',
    'Take the pretzel back to the vendor who has so badly wronged you',
  ],
  results: [
    'This airport is huuuuge and there are almost no children since Aldovia boasts a child growth rate 2x that of America, so you struggle to find a youth and give it to a pigeon with one leg',
    `"Hey, Karen." You didn't realize it the first time but this voice is unmistakable. It's the prince of Aldovia! together you begin to soar through the air like magic all the way to your lovely Branson`,
  ],
};

const stepThreeStoryOne: StoryStep = {
  correctAnswer: 1,
  prompt:
    'The pigeon squaks at you, as if you have had some sort of deep personal connection from the start.',
  options: [
    'Pigeons are kind of frightening in large flocks (3-4 pigeons) and this one could have friends nearby so you sprint in the opposite direction.',
    'Stay and converse with the pigeon.',
  ],
  results: [
    'You successfully evade the pigeon army and you were right! There were 2-3 more pigeons laying low nearby',
    'Several pigeons(approximately 2-3 of them now making a total of 3-4) emerge and offer their power of flight as thank you for the pretzel you have shared. They carry you to Branson, where you meet up with your family for the holidays',
  ],
};

const stepFourStoryOne: StoryStep = {
  correctAnswer: 2,
  prompt:
    'You arrive at security but there are two conveyor belts to put your luggage',
  options: [
    `The right conveyor belt with a sign that reads "Grandson"`,
    `The left conveyor belt with a sign that reads "Gelgum"`,
  ],
  results: [
    "You always had a hard time with your B's and G's under pressure but you realize after a while that the sign did in fact read Branson. You make it there in one piece and enjoy some Applebees for Christmas dinner",
    "You always had a hard time with your B's and G's under pressure and you realize that the sign actually said Belgium. In a panic, you dive down the conveyor Polar Express style and end up getting stashed on the plane with a bunch of luggage companions",
  ],
};

const stepFiveStoryOne: StoryStep = {
  correctAnswer: 2,
  prompt:
    'The suitcase next to you springs to life like backpack from Dora and offers you a way off the plane!',
  options: [
    'Attack the luggage',
    'Take it up on its offer despit your fears, as its the only way to save Christmas',
  ],
  results: [
    'You kick and scream at the cursed box until the once tan colored box is now purple and swollen. Once you land, the sweet sweet aroma of cows and Applebees greets you. You are in Branson!',
    'The suitcase tells you to climb in and you stubbornly comply. Three travel days later, you end up stranded in the ocean floating on the suitcase that once claimed to be your savior.',
  ],
};

const stepSixStoryOne: StoryStep = {
  correctAnswer: 1,
  prompt:
    'Congragulations! Deep inside, you never wanted to make it to Branson for the holidays. This present is for Dad!',
};

export const storyOne = [
  stepOneStoryOne,
  stepTwoStoryOne,
  stepThreeStoryOne,
  stepFourStoryOne,
  stepFiveStoryOne,
  stepSixStoryOne,
];
