import { defineConfig } from 'vitepress'

const enSidebar = [
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
]

const zhSidebar = [
  {
    text: '简介',
    items: [
      { text: '如何使用本指南', link: '/zh/intro' },
    ]
  },
  {
    text: '第一部分：基础',
    link: '/zh/part1',
    items: [
      { text: '1.1 嗓音的物理本质', link: '/zh/part1#s1-1' },
      { text: '1.2 姿势与身体对齐', link: '/zh/part1#s1-2' },
      { text: '1.3 呼吸基础', link: '/zh/part1#s1-3' },
      { text: '1.4 音域与换声区', link: '/zh/part1#s1-4' },
      { text: '1.5 热身', link: '/zh/part1#s1-5' },
    ],
  },
  {
    text: '第二部分：流行音色',
    link: '/zh/part2',
    items: [
      { text: '2.1 核心悖论', link: '/zh/part2#s2-1' },
      { text: '2.2 扩音筒', link: '/zh/part2#s2-2' },
      { text: '2.3 元音', link: '/zh/part2#s2-3' },
      { text: '2.4 起音', link: '/zh/part2#s2-4' },
      { text: '2.5 Twang（鸣音）', link: '/zh/part2#s2-5' },
    ],
  },
  {
    text: '第三部分：声区与混声',
    link: '/zh/part3',
    items: [
      { text: '3.1 声区究竟是什么', link: '/zh/part3#s3-1' },
      { text: '3.2 换声点', link: '/zh/part3#s3-2' },
      { text: '3.3 混声——流行的引擎', link: '/zh/part3#s3-3' },
      { text: '3.4 高音强力演唱', link: '/zh/part3#s3-4' },
      { text: '3.5 纯头声与假声', link: '/zh/part3#s3-5' },
    ],
  },
  {
    text: '第四部分：气息与力量',
    link: '/zh/part4',
    items: [
      { text: '4.1 举重运动员式支撑', link: '/zh/part4#s4-1' },
      { text: '4.2 身体锚定', link: '/zh/part4#s4-2' },
      { text: '4.3 过度换气的陷阱', link: '/zh/part4#s4-3' },
    ],
  },
  {
    text: '第五部分：风格——流行的灵魂',
    link: '/zh/part5',
    items: [
      { text: '5.1 颤音', link: '/zh/part5#s5-1' },
      { text: '5.2 气泡音', link: '/zh/part5#s5-2' },
      { text: '5.3 即兴花腔', link: '/zh/part5#s5-3' },
      { text: '5.4 辅音节省', link: '/zh/part5#s5-4' },
      { text: '5.5 风格性气息感与漏气', link: '/zh/part5#s5-5' },
      { text: '5.6 滑音与装饰音', link: '/zh/part5#s5-6' },
    ],
  },
  {
    text: '第六部分：麦克风',
    link: '/zh/part6',
    items: [
      { text: '6.1 近讲效应', link: '/zh/part6#s6-1' },
      { text: '6.2 距离调控', link: '/zh/part6#s6-2' },
      { text: '6.3 麦克风角度与偏轴技术', link: '/zh/part6#s6-3' },
      { text: '6.4 现场与录音室麦克风技术', link: '/zh/part6#s6-4' },
    ],
  },
  {
    text: '第七部分：练习与进步',
    link: '/zh/part7',
    items: [
      { text: '7.1 如何安排一次练习', link: '/zh/part7#s7-1' },
      { text: '7.2 每日、每周、每月节奏', link: '/zh/part7#s7-2' },
      { text: '7.3 录音与回听', link: '/zh/part7#s7-3' },
      { text: '7.4 进步的迹象', link: '/zh/part7#s7-4' },
      { text: '7.5 问题的信号', link: '/zh/part7#s7-5' },
    ],
  },
  {
    text: '第八部分：嗓音健康',
    link: '/zh/part8',
    items: [
      { text: '8.1 补水', link: '/zh/part8#s8-1' },
      { text: '8.2 睡眠', link: '/zh/part8#s8-2' },
      { text: '8.3 反流', link: '/zh/part8#s8-3' },
      { text: '8.4 过敏与鼻窦问题', link: '/zh/part8#s8-4' },
      { text: '8.5 疲劳嗓音与受损嗓音', link: '/zh/part8#s8-5' },
      { text: '8.6 演出前后的热身', link: '/zh/part8#s8-6' },
      { text: '8.7 何时就医', link: '/zh/part8#s8-7' },
    ],
  },
  {
    text: '第九部分：几点肺腑之言',
    link: '/zh/part9',
    items: [
      { text: '9.1 你需要一位老师', link: '/zh/part9#s9-1' },
      { text: '9.2 进步缓慢，值得坚持', link: '/zh/part9#s9-2' },
      { text: '9.3 找到你自己的声音', link: '/zh/part9#s9-3' },
      { text: '9.4 美学是随性的，技艺不是', link: '/zh/part9#s9-4' },
    ],
  },
  {
    text: '附录',
    items: [
      { text: '术语表', link: '/zh/appendix' },
    ]
  },
]

export default defineConfig({
  title: "A Comprehensive Guide to Pop Singing",
  description: "A reference companion for the serious returning learner",
  base: '/Pop-Singing-Guide/',

  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      themeConfig: {
        siteTitle: 'Pop Singing Guide',
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Start Reading', link: '/intro' },
        ],
        sidebar: enSidebar,
        editLink: {
          pattern: 'https://github.com/dr-birdkiwi/Pop-Singing-Guide/edit/main/docs/:path',
          text: 'Edit this page on GitHub'
        },
      }
    },
    zh: {
      label: '中文',
      lang: 'zh-CN',
      link: '/zh/',
      themeConfig: {
        siteTitle: '流行演唱指南',
        nav: [
          { text: '首页', link: '/zh/' },
          { text: '开始阅读', link: '/zh/intro' },
        ],
        sidebar: zhSidebar,
        editLink: {
          pattern: 'https://github.com/dr-birdkiwi/Pop-Singing-Guide/edit/main/docs/:path',
          text: '在 GitHub 上编辑此页'
        },
      }
    },
  },

  themeConfig: {
    search: {
      provider: 'local'
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
