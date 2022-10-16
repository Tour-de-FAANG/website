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
            'Interview Guide': 'Interview Guide',
            'Study Guide': 'Study Guide',
            'Github': 'GitHub',
            'Support Ukraine': 'Support Ukraine 🇺🇦',
            'Support Ukraine2': 'You can save lives, no matter where in the world you are.',
            'Brand name': 'Tour de FAANG',
            'FAQs support card title': 'Still have questions?',
            'FAQs support card description': 'Can\'t find the answer you\'re looking for? Please chat to our friendly community.',
            'FAQs support card button title': 'Ask community',
            'FAQs filter no results warning': '<strong>🤷‍♂️ Nothing found.</strong> You should check in on some of those fields below.',
            'Coding Problems title': '🧮 Coding Problems',
            'Study Guide hero title': '🧑‍🏫 Study Guide',
            'Interview Guide hero title': '🏅 Interview Guide',
            'Coding Problems description': 'ℹ️ The problem list below is based on <strong>Leetcode</strong>\'s data for the company tag and the frequency of problems appearing in a company\'s interview available in a Premium subscription, as claimed by <a href=\'https://leetcode.com/\'>Leetcode</a>. The listing includes Meta (Facebook), Amazon, Apple, Netflix, Google, Microsoft, Uber, Lyft, and Airbnb.',
            'Study Guide description': 'ℹ️ A proper and well-established study plan is a necessary first step toward a successful interview experience at any <strong>FAANG</strong>-like company. This plan right here is the compilation of the best resources to get you up and running in pursuit of your dream job.',
        }
    }
};

export function l(key: string): string {
    if (key in resources.en.translation) {
        return resources.en.translation[key];
    }

    return key;
};
