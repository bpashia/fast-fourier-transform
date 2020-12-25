import { StoryStep } from './general';

const stepOneStorySix: StoryStep = {
  correctAnswer: 1,
  prompt:
    'You enter a tavern looking for some nice meal and a bed to sleep in. A fellow who resembles a roly poly approaches and demands that you have taken his seat by the fire. Having had a long day, you suggest that the two of you play a game of Quartz, Parchment, Shears to settle this.',
  options: ['Throw Rock', 'Throw Scissors'],
  results: [
    'The man also throws rock! Tensions elevate',
    ' The man trounces you on the first go and you must give up your seat',
  ],
};
const stepTwoStorySix: StoryStep = {
  correctAnswer: 2,
  prompt: 'The next round begins...',
  options: ['Throw Rock', 'Throw Paper'],
  results: [
    'The man throws paper and engulfs your rock in shadows.',
    'The man throws paper as well and a small crowd gathers around',
  ],
};
const stepThreeStorySix: StoryStep = {
  correctAnswer: 1,
  prompt: 'The mans mustache beigins to twitch. Is this his tell?',
  options: ['Throw Paper', 'Throw Scissors'],
  results: [
    'When you throw paper, the man also simultaeously throws paper, continuing this coincedental phenomina!',
    'The man throws rock and he as bested you...',
  ],
};

const stepFourStorySix: StoryStep = {
  correctAnswer: 1,
  prompt:
    'Sweat forms at your brow. You feel as if you are trying to simply prolong the tie now instead of defeat your oponent!',
  options: ['Throw Paper', 'Throw Rock'],
  results: [
    'The man throws vertical paper, leading to many hushed groans from the spectators. Although this is generally illegal, you agree to allow it because you have once again tied',
    'The man throws paper and you look an insufferable fool',
  ],
};

const stepFiveStorySix: StoryStep = {
  correctAnswer: 2,
  prompt:
    'You feel as if you are about to break your opponents valiant defense in this next round',
  options: ['Throw Rock', 'Throw Scissors'],
  results: [
    'You hesitate and have a delayed throw causing the entire tavern to erupt in chaos and violence',
    'You throw scissors despite your better intuition, but disappointment sets in as you look up and see that the roly poly guy holds a clenched fist in front of you',
  ],
};

const stepSixStorySix: StoryStep = {
  correctAnswer: 1,
  prompt:
    'You skulk to your new seat while the man rejoices with his buddies. While you are sad you have lost, you gave it your all, and you think that that should probably count for something. This gift is for Wyatt!',
};
export const storySix = [
  stepOneStorySix,
  stepTwoStorySix,
  stepThreeStorySix,
  stepFourStorySix,
  stepFiveStorySix,
  stepSixStorySix,
];
