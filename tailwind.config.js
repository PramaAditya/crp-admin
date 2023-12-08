import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./vendor/laravel/jetstream/**/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/**/**/*.blade.php",
        "./resources/**/**/*.js",
        "./app/View/Components/**/**/*.php",
        "./app/Livewire/**/**/*.php",

        "./vendor/robsontenorio/mary/src/View/Components/**/*.php",
    ],

    daisyui: {
        themes: ["light", "dark", "nord",
            {
                night: {
                    ...require("daisyui/src/theming/themes")["night"],
                    'base-100': '#404040', // Your custom color
                    'base-200': '#2D2D2D', // Your custom color
                    'base-300': '#0D0D0D', // Your custom color
                    // ... other colors for the 'night' theme ...
                },

                pastel:{
                    ...require("daisyui/src/theming/themes")["pastel"],
                    'neutral': '#FFC0CB', // pink
                    'primary': '#c92894', // deep pink
                    'primary-content': '#ffffff',
                    'error': '#ff0000', // red
                    'error-content': '#ffffff',
                    "--rounded-btn": "10rem",
                },
            },

        ],
    },

    theme: {
        extend: {
            fontFamily: {
                sans: [
                    "IBM Plex Sans Condensed",
                    ...defaultTheme.fontFamily.sans,
                ],
            },
        },
    },

    plugins: [forms, typography, require("daisyui")],
};
