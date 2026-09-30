export const siteContent = {
  brand: 'Remote30',
  eyebrow: 'A 30-day field challenge',
  heroTitle: 'Build your path to international work.',
  heroAccent: 'In 30 days.',
  heroDescription: 'A focused, practical sprint for Nigerian designers and developers who want clearer profiles, stronger conversations, and a better shot at international work.',
  challengeLabel: 'The challenge',
  challengeTitle: 'A clearer path to international work.',
  challengeDescription: 'Remote30 gives you a practical sequence for turning your expertise into better conversations and paid projects.',
  steps: [
    { number: '01', title: 'Position', copy: 'Make your value clear to the clients you want to work with.' },
    { number: '02', title: 'Connect', copy: 'Build a warm, international network without awkward pitching.' },
    { number: '03', title: 'Convert', copy: 'Turn good conversations into paid project opportunities.' },
  ],
  signupLabel: 'Cohort 01 · Starts October 1, 2026',
  signupTitle: 'Ready to make the next 30 days count?',
  signupDescription: 'Join the Remote30 community and get the challenge details before the cohort begins.',
  communityLink: 'https://tinyurl.com/JoinRemote30',
  footer: 'Make your work travel.',
} as const

export const siteSettings = {
  colors: {
    blue: '#0B4FC4',
    darkBlue: '#0A3D9E',
    cyan: '#22E1FF',
    surface: '#F3F8FF',
  },
} as const

export type Step = (typeof siteContent.steps)[number]
