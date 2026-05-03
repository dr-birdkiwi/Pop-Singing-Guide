import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "A Comprehensive Guide to Pop Singing",
  description: "A reference companion for the serious returning learner",
  base: '/Pop-Singing-Guide/',
  themeConfig: {
    siteTitle: 'Pop Singing Guide',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Start Reading', link: '/intro' },
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'How to Use This Guide', link: '/intro' },
        ]
      },
      {
        text: 'Part 1: Foundations',
        link: '/part1',
        items: [
          { text: '1.1 What the Voice Physically Is', link: '/part1#s1-1' },
          { text: '1.2 Posture and Alignment', link: '/part1#s1-2' },
          { text: '1.3 Breathing — The Basics', link: '/part1#s1-3' },
          { text: '1.4 Finding Your Range and Your Passaggio', link: '/part1#s1-4' },
          { text: '1.5 Warming Up', link: '/part1#s1-5' },
        ],
      },
      {
        text: 'Part 2: The Pop Sound',
        link: '/part2',
        items: [
          { text: '2.1 The Core Paradox', link: '/part2#s2-1' },
          { text: '2.2 The Megaphone', link: '/part2#s2-2' },
          { text: '2.3 Vowels', link: '/part2#s2-3' },
          { text: '2.4 Onsets', link: '/part2#s2-4' },
          { text: '2.5 Twang', link: '/part2#s2-5' },
        ],
      },
      {
        text: 'Part 3: Registers and Mix',
        link: '/part3',
        items: [
          { text: '3.1 What Registers Actually Are', link: '/part3#s3-1' },
          { text: '3.2 The Break', link: '/part3#s3-2' },
          { text: '3.3 Mix — The Engine of Pop', link: '/part3#s3-3' },
          { text: '3.4 The High Belt', link: '/part3#s3-4' },
          { text: '3.5 Pure Head Voice and Falsetto', link: '/part3#s3-5' },
        ],
      },
      {
        text: 'Part 4: Breath and Power',
        link: '/part4',
        items: [
          { text: "4.1 The Powerlifter's Brace", link: '/part4#s4-1' },
          { text: '4.2 Anchoring', link: '/part4#s4-2' },
          { text: '4.3 The Over-Breathing Trap', link: '/part4#s4-3' },
        ],
      },
      {
        text: 'Part 5: Style — Where Pop Lives',
        link: '/part5',
        items: [
          { text: '5.1 Vibrato', link: '/part5#s5-1' },
          { text: '5.2 Vocal Fry', link: '/part5#s5-2' },
          { text: '5.3 Runs and Riffs', link: '/part5#s5-3' },
          { text: '5.4 Consonant Economy', link: '/part5#s5-4' },
          { text: '5.5 Stylistic Breathiness vs. Air Leak', link: '/part5#s5-5' },
          { text: '5.6 Pitch Slides and Ornamentation', link: '/part5#s5-6' },
        ],
      },
      {
        text: 'Part 6: The Microphone',
        link: '/part6',
        items: [
          { text: '6.1 The Proximity Effect', link: '/part6#s6-1' },
          { text: '6.2 Distance Modulation', link: '/part6#s6-2' },
          { text: '6.3 Mic Angle and Off-Axis Technique', link: '/part6#s6-3' },
          { text: '6.4 Live vs. Studio Microphone Technique', link: '/part6#s6-4' },
        ],
      },
      {
        text: 'Part 7: Practice and Progress',
        link: '/part7',
        items: [
          { text: '7.1 Structuring a Practice Session', link: '/part7#s7-1' },
          { text: '7.2 Daily, Weekly, Monthly Rhythms', link: '/part7#s7-2' },
          { text: '7.3 Recording and Listening Back', link: '/part7#s7-3' },
          { text: '7.4 Signs of Progress', link: '/part7#s7-4' },
          { text: '7.5 Signs of Trouble', link: '/part7#s7-5' },
        ],
      },
      {
        text: 'Part 8: Vocal Health',
        link: '/part8',
        items: [
          { text: '8.1 Hydration', link: '/part8#s8-1' },
          { text: '8.2 Sleep', link: '/part8#s8-2' },
          { text: '8.3 Reflux', link: '/part8#s8-3' },
          { text: '8.4 Allergies and Sinus Issues', link: '/part8#s8-4' },
          { text: '8.5 Tired vs. Damaged Voice', link: '/part8#s8-5' },
          { text: '8.6 Warm-Up Around Performance', link: '/part8#s8-6' },
          { text: '8.7 When to See a Specialist', link: '/part8#s8-7' },
        ],
      },
      {
        text: 'Part 9: A Few Honest Notes',
        link: '/part9',
        items: [
          { text: '9.1 You Need a Teacher', link: '/part9#s9-1' },
          { text: '9.2 Progress Is Slow and Worth It', link: '/part9#s9-2' },
          { text: '9.3 Find Your Voice', link: '/part9#s9-3' },
          { text: '9.4 The Aesthetic Is Casual; the Craft Is Not', link: '/part9#s9-4' },
        ],
      },
      {
        text: 'Appendix',
        items: [
          { text: 'Glossary', link: '/appendix' },
        ]
      },
    ],

    search: {
      provider: 'local'
    },

    editLink: {
      pattern: 'https://github.com/dr-birdkiwi/Pop-Singing-Guide/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/dr-birdkiwi/Pop-Singing-Guide' }
    ],

    lastUpdated: {
      text: 'Last updated',
    },
  },

  sitemap: {
    hostname: 'https://dr-birdkiwi.github.io/Pop-Singing-Guide/'
  }
})
