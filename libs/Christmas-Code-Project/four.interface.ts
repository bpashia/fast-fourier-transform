import { StoryStep } from './general';

const stepOneStoryFour: StoryStep = {
  correctAnswer: 1,
  prompt: 'What is 7 x 9?',
  options: ['63', '72'],
  results: ['Yup', 'Nope'],
};

const stepTwoStoryFour: StoryStep = {
  correctAnswer: 1,
  prompt: 'What is 63 / 3?',
  options: ['21', '11'],
  results: ['Yup', 'Nope'],
};
const stepThreeStoryFour: StoryStep = {
  correctAnswer: 2,
  prompt: 'What is 21 + 6 * 2 / 4?',
  options: ['13.5', '63'],
  results: ['Nope', 'Yup'],
};

const stepFourStoryFour: StoryStep = {
  correctAnswer: 2,
  prompt:
    'If I = 4, M = 7, P = 20, O = 6, S = 1, B = 5, L = 3, E = 10, What is the sqrt( I + M * P - O / S + S + B * L * E )?',
  options: ['17', "It's me"],
  results: ['Nope', 'Yup'],
};

const stepFiveStoryFour: StoryStep = {
  correctAnswer: 1,
  prompt: 'Apologies for the math :) This gift is for Laurie',
};

export const storyFour = [
  stepOneStoryFour,
  stepTwoStoryFour,
  stepThreeStoryFour,
  stepFourStoryFour,
  stepFiveStoryFour,
];
