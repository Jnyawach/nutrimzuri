/** @type {import('tailwindcss').Config} */
//import typography
import typography from '@tailwindcss/typography';
export default {
    content: [
        './resources/**/*.antlers.html',
        './resources/**/*.antlers.php',
        './resources/**/*.blade.php',
        './resources/**/*.vue',
        './content/**/*.md',

    ],

    theme: {
        extend: {
            fontFamily: {
                'matter': ['Matter', 'serif'],
            },
        },
    },

    plugins: [
        typography,
    ],
};
