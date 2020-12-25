import { StoryStep } from './general';

const stepOneStoryThree: StoryStep = {
  correctAnswer: 1,
  prompt:
    'You are presented a box from IKEA containing the items required to make a fainting couch. Cautiously, you rip the top of the box to shreds.',
  options: [
    'Grab a slim-slom paddle and glue it to the flu-gorn',
    'Bend the shomguard and tap it with a mallet',
  ],
  results: [
    'You think this looks right',
    'The mallet tap was a bad call and you obliterate the shomguard. Since you destroyed the box you can not take it back. Your holidays are filled with perilous fainting',
  ],
};

const stepTwoStoryThree: StoryStep = {
  correctAnswer: 2,
  prompt:
    'You pick up something the instructions claim to be a shoogen-blooten.',
  options: [
    'Attach the shoogen-blooten to the star shaped inverted shift clatch',
    'Attach the shoogen-blooten to the hoop shaped inverted shift clatch',
  ],
  results: [
    'The clatch clicks and the shoogen-blooten is now stuck. Only one who is worthy will be able to remove it. You are not worthy.',
    'You are able to twist in the shoogen-blootin but had to shave one side so it would be flat',
  ],
};

const stepThreeStoryThree: StoryStep = {
  correctAnswer: 2,
  prompt:
    'Now you have a torque-fork and are asked to screw out a snap-cap from the trishaft',
  options: ['Screw clockwise', 'Screw CounterClockwise'],
  results: [
    'You drill a massive hole through the side of the fainting couch and the snap-cap flies into your forehead, leaving you concussed, and more importantly, ashamed',
    `"Righty Tighty, Lefty Loosey" Your father's voice exclaims in your mind`,
  ],
};

const stepFourStoryThree: StoryStep = {
  correctAnswer: 2,
  prompt: 'Jib-jam knock foil side-stop sheath jacket snapper-crank',
  options: ['Religiously follow the construction guide', 'Improvise!'],
  results: [
    "You get lost in aggressive terminology and build the whole thing upside down. No, turning it does not fix this issue, you'd have to see to understand",
    'You finish the project in a cloud of smoke and a whole lot of thumbtacks.',
  ],
};

const stepFiveStoryThree: StoryStep = {
  correctAnswer: 1,
  prompt:
    'You have what appears to be a fainting couch! You examine the instructions to see if you built it properly. There is simply no way to be sure. This gift is for Mother',
};

export const storyThree = [
  stepOneStoryThree,
  stepTwoStoryThree,
  stepThreeStoryThree,
  stepFourStoryThree,
  stepFiveStoryThree,
];
