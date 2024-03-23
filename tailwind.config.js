// tailwind.config.js 
module.exports = {
    theme: {
        extend: {
            // ... 
        },
    },
    variants: {
        // ... 
    },
    plugins: [
        // ... 
    ],
    experimental: {
        "tailwindCSS.classAttributes": [
            // ...
            "style"
        ],
        "tailwindCSS.experimental.classRegex": [
            "tw`([^`]*)",
            ["tw.style\\(([^)]*)\\)", "'([^']*)'"]
        ]
    },

}; 