import { StoryStep } from './general';

const stepOneStoryTwo: StoryStep = {
  correctAnswer: 1,
  prompt:
    'You are blinded by intense spotlight as you stand clutching an acoustic guitar. A feeling of intense stress dream fills you and a man that looks vaguely familiar but you are unable to place his face begins a count off.',
  options: ['Comp a B flat chord', 'Heavy strum an E chord'],
  results: [
    'Yes it sounds great! The drummer gives you a nod.',
    'You have a capo on 1st so you an F/E chord you absolute SHOE.',
  ],
};

const stepTwoStoryTwo: StoryStep = {
  correctAnswer: 2,
  prompt: 'You are starting to find the pocket but there is a build up coming.',
  options: [
    'Go into a 7/8 groove in C half sharp',
    'Continue playing a B flat chord',
  ],
  results: [
    'Ok, Jacob Collier',
    'Phew looks like this verse is only a B flat chord',
  ],
};

const stepThreeStoryTwo: StoryStep = {
  correctAnswer: 1,
  prompt:
    'You have made it to the chorus and the lead singer looks at you as if he expects an acoustic lead?',
  options: ['Play an ascending lead', 'Play a descending lead'],
  results: [
    'Luckily, you lead right up to one of the three notes in the lead singers range',
    'Your guitar unleashes a squawk of feedback that paralyzes 32% of the audience',
  ],
};

const stepFourStoryTwo: StoryStep = {
  correctAnswer: 2,
  prompt:
    'The lead singers voice cracks making you think that maybe this song contains a key change.',
  options: ['Change chords to C to compensate', 'Keep playing a B flat chord'],
  results: [
    'The band follows your key change oddly but this song, like most, did not need a key change',
    'You continue playing a B flat, which makes the singer sound quite bad. It appears as if the audience expects very little of him luckily',
  ],
};

const stepFiveStoryTwo: StoryStep = {
  correctAnswer: 1,
  prompt:
    'Unsure of the structure of this song, you stumble through to the second half of the chorus',
  options: [
    'Play a B flat chord',
    'Play the fifth chord of the root which is an F7 chord',
  ],
  results: [
    'The bassist plucks a B flat as well to really bring out the color in this musical piece',
    'This was a bad call and the lead singer will be having a word with you after the show.',
  ],
};

const stepSixStoryTwo: StoryStep = {
  correctAnswer: 2,
  prompt:
    'You begin to recognize the song as the chorus opens up and the lead singer starts to count. You continue to strum a B flat and realize you are playing One Margarita live with Luke Bryan! This present is for Danielle',
};

export const storyTwo = [
  stepOneStoryTwo,
  stepTwoStoryTwo,
  stepThreeStoryTwo,
  stepFourStoryTwo,
  stepFiveStoryTwo,
  stepSixStoryTwo,
];
