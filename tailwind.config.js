/** @type {import('tailwindcss').Config} */
import {initFlowbite} from "flowbite";
export default {
    content: [
        './resources/**/*.antlers.html',
        './resources/**/*.antlers.php',
        './resources/**/*.blade.php',
        './resources/**/*.vue',
        './content/**/*.md',
        "./node_modules/flowbite/**/*.js"
    ],

    theme: {
        extend: {
            fontFamily: {
                'matter': ['Matter', 'serif'],
            },
        },
    },

    plugins: [
        initFlowbite
    ],
};
