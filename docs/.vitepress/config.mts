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
        items: [
          { text: '1.1 What the Voice Physically Is', link: '/part1#_1-1-what-the-voice-physically-is' },
          { text: '1.2 Posture and Alignment', link: '/part1#_1-2-posture-and-alignment' },
          { text: '1.3 Breathing — The Basics', link: '/part1#_1-3-breathing-the-basics' },
          { text: '1.4 Finding Your Range and Your Passaggio', link: '/part1#_1-4-finding-your-range-and-your-passaggio' },
          { text: '1.5 Warming Up', link: '/part1#_1-5-warming-up' },
        ],
        link: '/part1'
      },
      {
        text: 'Part 2: The Pop Sound',
        items: [
          { text: '2.1 The Core Paradox', link: '/part2#_2-1-the-core-paradox' },
          { text: '2.2 The Megaphone', link: '/part2#_2-2-the-megaphone-space-larynx-jaw' },
          { text: '2.3 Vowels', link: '/part2#_2-3-vowels' },
          { text: '2.4 Onsets', link: '/part2#_2-4-onsets-how-a-note-starts' },
          { text: '2.5 Twang', link: '/part2#_2-5-twang-the-mouthpiece-of-the-megaphone' },
        ],
        link: '/part2'
      },
      {
        text: 'Part 3: Registers and Mix',
        items: [
          { text: '3.1 What Registers Actually Are', link: '/part3#_3-1-what-registers-actually-are' },
          { text: '3.2 The Break', link: '/part3#_3-2-the-break-and-what-to-do-about-it' },
          { text: '3.3 Mix — The Engine of Pop', link: '/part3#_3-3-mix-the-engine-of-pop' },
          { text: '3.4 The High Belt', link: '/part3#_3-4-the-high-belt-a-head-mix-in-a-chest-costume' },
          { text: '3.5 Pure Head Voice and Falsetto', link: '/part3#_3-5-pure-head-voice-and-falsetto-in-pop' },
        ],
        link: '/part3'
      },
      {
        text: 'Part 4: Breath and Power',
        items: [
          { text: '4.1 The Powerlifter\'s Brace', link: '/part4#_4-1-the-powerlifters-brace-not-the-marathoners-flow' },
          { text: '4.2 Anchoring', link: '/part4#_4-2-anchoring' },
          { text: '4.3 The Over-Breathing Trap', link: '/part4#_4-3-the-over-breathing-trap' },
        ],
        link: '/part4'
      },
      {
        text: 'Part 5: Style — Where Pop Lives',
        items: [
          { text: '5.1 Vibrato', link: '/part5#_5-1-vibrato-a-dial-not-a-default' },
          { text: '5.2 Vocal Fry', link: '/part5#_5-2-vocal-fry-and-why-it-needs-a-pressure-shift' },
          { text: '5.3 Runs and Riffs', link: '/part5#_5-3-runs-and-riffs' },
          { text: '5.4 Consonant Economy', link: '/part5#_5-4-consonant-economy' },
          { text: '5.5 Stylistic Breathiness vs. Air Leak', link: '/part5#_5-5-stylistic-breathiness-vs-air-leak' },
          { text: '5.6 Pitch Slides and Ornamentation', link: '/part5#_5-6-pitch-slides-and-ornamentation' },
        ],
        link: '/part5'
      },
      {
        text: 'Part 6: The Microphone',
        items: [
          { text: '6.1 The Proximity Effect', link: '/part6#_6-1-the-proximity-effect' },
          { text: '6.2 Distance Modulation', link: '/part6#_6-2-distance-modulation' },
          { text: '6.3 Mic Angle and Off-Axis Technique', link: '/part6#_6-3-mic-angle-and-off-axis-technique' },
          { text: '6.4 Live vs. Studio Microphone Technique', link: '/part6#_6-4-live-vs-studio-microphone-technique' },
        ],
        link: '/part6'
      },
      {
        text: 'Part 7: Practice and Progress',
        items: [
          { text: '7.1 Structuring a Practice Session', link: '/part7#_7-1-structuring-a-practice-session' },
          { text: '7.2 Daily, Weekly, Monthly Rhythms', link: '/part7#_7-2-daily-weekly-monthly-rhythms' },
          { text: '7.3 Recording and Listening Back', link: '/part7#_7-3-recording-and-listening-back' },
          { text: '7.4 Signs of Progress', link: '/part7#_7-4-signs-of-progress' },
          { text: '7.5 Signs of Trouble', link: '/part7#_7-5-signs-of-trouble' },
        ],
        link: '/part7'
      },
      {
        text: 'Part 8: Vocal Health',
        items: [
          { text: '8.1 Hydration', link: '/part8#_8-1-hydration' },
          { text: '8.2 Sleep', link: '/part8#_8-2-sleep' },
          { text: '8.3 Reflux', link: '/part8#_8-3-reflux' },
          { text: '8.4 Allergies and Sinus Issues', link: '/part8#_8-4-allergies-and-sinus-issues' },
          { text: '8.5 Tired vs. Damaged Voice', link: '/part8#_8-5-the-tired-voice-vs-damaged-voice-distinction' },
          { text: '8.6 Warm-Up Around Performance', link: '/part8#_8-6-warm-up-and-cool-down-around-performance' },
          { text: '8.7 When to See a Specialist', link: '/part8#_8-7-when-to-see-a-specialist' },
        ],
        link: '/part8'
      },
      {
        text: 'Part 9: A Few Honest Notes',
        items: [
          { text: '9.1 You Need a Teacher', link: '/part9#_9-1-you-need-a-teacher-and-you-have-one' },
          { text: '9.2 Progress Is Slow and Worth It', link: '/part9#_9-2-progress-is-slow-and-worth-it' },
          { text: '9.3 Find Your Voice', link: '/part9#_9-3-find-your-voice-not-someone-elses' },
          { text: '9.4 The Aesthetic Is Casual; the Craft Is Not', link: '/part9#_9-4-the-aesthetic-is-casual-the-craft-is-not' },
        ],
        link: '/part9'
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
