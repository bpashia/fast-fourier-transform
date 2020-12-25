import { StoryStep } from './general';

const stepOneStoryFive: StoryStep = {
  correctAnswer: 2,
  prompt:
    'You are in the distant, distant future. You set out for your daily commute to the library when you happen to hover by a skate park. Some kid named Tevin yells at you for loitering "Hey, you!"',
  options: [
    'Pay Tevin no mind and simply continue down the way',
    'Look blankly at Tevin and keep your distance',
  ],
  results: [
    'Tevin sprints after you for a few blocks before catching you on his hoverboard and produces rude and uneligant jeers about you to his friends. You have been bullied.',
    'Tevin gets uncomfortably close to your face and shoves a hoverboard in your chest. "Show us something cool and we will spare you this time," exclaims Tevin in a sing-song tone.',
  ],
};

const stepTwoStoryFive: StoryStep = {
  correctAnswer: 2,
  prompt:
    'You try to humbly decline but the alternative seems like it will lead to only dispair so you take the board',
  options: ['Do a kickflip', 'Try a trick on the half pipe'],
  results: [
    'You do a kickflip. No one cares.',
    'Having never done a trick on the halfpipe in your life you start down at maximum speed',
  ],
};

const stepThreeStoryFive: StoryStep = {
  correctAnswer: 2,
  prompt:
    'You launch you and your board off one side and do a spin move much to your delight! But then you begin to fall...',
  options: [
    'Attempt to levely your board to the angle with the ramp, theoretically continuing your fluid motion',
    'Accept defeat and prepare to do a barrel roll on impact',
  ],
  results: [
    'You point the front of your hover board towards the ground but are not successful, as you absolutely crunch on the cement',
    'Smart choice! A human can survive falling from any distance with a barrel roll',
  ],
};

const stepFourStoryFive: StoryStep = {
  correctAnswer: 1,
  prompt:
    'Tevin looks up at you with watering eyes. You launched his hoverboard into the Missoura river with no chance of getting it back.',
  options: [
    'Offer counseling to Tevin',
    'Turn and run the other way before he whoops you',
  ],
  results: [
    'Tevin is angry at first, but you are able to calm him by singing some lines from the national anthem',
    'You run away successfully, but you have missed out on the opportunity for a close friend',
  ],
};

const stepFiveStoryFive: StoryStep = {
  correctAnswer: 1,
  prompt:
    'You and Tevin have become closer than siblings this day, and over the next four months, you painstakingly teach Tevin to read. Well done on making a friend! This gift is for Mason.',
};

export const storyFive = [
  stepOneStoryFive,
  stepTwoStoryFive,
  stepThreeStoryFive,
  stepFourStoryFive,
  stepFiveStoryFive,
];
