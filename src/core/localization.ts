/**
 * Copyright (c) Bohdan Shtepan.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

const resources = {
    en: {
        translation: {
            'Home': 'Home',
            'Home title': 'Tour de FAANG',
            'Home description': '🎉 Yet another FAANG interview preparation guide.',
            'Home 1st p': '👋 Hello there! My name is <i>Bohdan Shtepan</i>. A few years ago I contested myself with an idea of landing a dream job at one of the best tech companies in the world (commonly reffered as <strong>FAANG</strong>). My journey was rough and full of obstacles, I had no formal CS background and knew little to nothing about algorithms and data structures. I\'ve read dozen of books, watched hundred of hours of video courses, solved thousands of problems, piece by piece I gathered a great wealth of knowledge to finally get my first FAANG offers.',
            'Home 2nd p': 'Today I\'m giving back to the community by distilling my own experience into this preparation guide. I hope it will help you land dream job of yours.',
            'Home 1st subtitle': '🏁 Start your jorney here',
            'Home 2nd subtitle': '🎈 One more thing...',
            'Home 3rd p': `In its essence, this guide is heavily based on a lot of the discussions from the Ukrainian 🇺🇦 Telegram groups like <a href='https://t.me/FaangInterview'>FAANG Interview</a>, <a href='https://t.me/FaangTechInterview'>TECH Interview</a>, <a href='https://t.me/sysdesign_interview'>SysDesgin Interview</a>, and <a href='https://t.me/Behavioral_interview'>Behavioral Interview</a> (all English-speaking 🇬🇧 friendly). Big shout out to all the participants that helped me and others all the way through. I also learned a lot from many people on discussion forums like <a href='https://leetcode.com/discuss/'>LeetCode Discuss</a> and <a href='https://www.teamblind.com/'>Blind</a>. But the most valuable things I learned was during the actual interviews. Feel free to hit me up on <a href='https://www.linkedin.com/in/bohdan-shtepan/'>LinkedIn</a> or write me a DM using <a href='https://virtyaluk.t.me/'>Telegram</a>. And best of luck with your interviews!`,

            // Interview Guide
            'Interview Guide': 'Interview Guide',
            'Interview Guide hero title': '🏅 Interview Guide',
            'Interview Guide card description': 'Explore all the nitty-gritty details of the software engineering interview at FAANG.',
            'Interview Guide card action button text': 'Start exploring',

            // Study Guide
            'Study Guide': 'Study Guide',
            'Study Guide hero title': '🧑‍🏫 Study Guide',
            'Study Guide description': 'ℹ️ A proper and well-established study plan is a necessary first step toward a successful interview experience at any <strong>FAANG</strong>-like company. This plan right here is the compilation of the best resources to get you up and running in pursuit of your dream job.',
            'Study Guide card description': 'Learn algorithms, data structures, systems design, etc. in order to ace the interview.',
            'Study Guide card action button text': 'Start learning',

            // Coding Problems
            'Coding Problems': 'Coding Problems',
            'Coding Problems title': '🧮 Coding Problems',
            'Coding Problems description': 'ℹ️ The problem list below is based on <strong>Leetcode</strong>\'s data for the company tag and the frequency of problems appearing in a company\'s interview available in a Premium subscription, as claimed by <a href=\'https://leetcode.com/\'>Leetcode</a>. The listing includes Meta (Facebook), Amazon, Apple, Netflix, Google, Microsoft, Uber, Lyft, and Airbnb.',
            'Coding Problems card description': 'Practice algorithmic problems even before you see them during your interview.',
            'Coding Problems card action button text': 'Start practicing',

            'Github': 'GitHub',
            'Support Ukraine': 'Support Ukraine 🇺🇦',
            'Support Ukraine2': 'You can save lives, no matter where in the world you are.',
            'Brand name': 'Tour de FAANG',
        }
    }
};

export function l(key: string): string {
    if (key in resources.en.translation) {
        return resources.en.translation[key];
    }

    return key;
};
