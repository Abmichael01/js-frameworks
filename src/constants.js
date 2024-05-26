const frameworks = [
    {
        "name": "React",
        "icon": "fa-brands fa-react",
        "pros": [
            {
                "title": "Easy to learn",
                "text": "React provides a straightforward learning curve, making it accessible for developers to pick up and start building applications."
            },
            {
                "title": "Easy to use",
                "text": "React's component-based architecture simplifies development by allowing developers to create reusable UI components."
            },
            {
                "title": "Easy to deploy",
                "text": "React applications can be easily deployed to various platforms, including web browsers, mobile devices, and desktop applications."
            }
        ],
        "cons": [
            {
                "title": "Steep learning curve",
                "text": "While React is easy to get started with, mastering more advanced concepts (such as state management and hooks) can be challenging."
            },
            {
                "title": "Lacks built-in routing",
                "text": "React does not include built-in routing capabilities, requiring developers to use third-party libraries or build their own routing solutions."
            }
        ]
    },

    {
        "name": "Angular",
        "icon": "fa-brands fa-angular",
        "pros": [
            {
                "title": "Powerful framework",
                "text": "Angular is a robust and feature-rich framework that provides powerful tools for building complex web applications."
            },
            {
                "title": "TypeScript support",
                "text": "Angular is built with TypeScript, a statically typed superset of JavaScript, which enhances code quality and maintainability."
            },
            {
                "title": "Modular architecture",
                "text": "Angular encourages a modular approach, allowing developers to organize their code into reusable components and services."
            }
        ],
        "cons": [
            {
                "title": "Steep learning curve",
                "text": "Angular has a learning curve, especially for beginners. However, the effort is worthwhile for large-scale projects."
            },
            {
                "title": "Verbose syntax",
                "text": "Angular's syntax can be verbose, which may lead to longer code compared to other frameworks."
            },
            {
                "title": "Limited SEO capabilities",
                "text": "As a single-page application (SPA), Angular has limitations in terms of SEO. However, prerendering with Angular Universal can mitigate this."
            }
        ]
    },

    {
        "name": "Vue.js",
        "icon": "fa-brands fa-vuejs",
        "pros": [
            {
                "title": "Lightweight and Performance",
                "text": "Vue.js is known for its small size and excellent performance. The main package, when gzipped, weighs only 18kB, making it a lightweight choice for web development."
            },
            {
                "title": "Highly Customizable and Extensible",
                "text": "Vue.js supports a wide range of libraries and tools, allowing developers to tailor their applications according to their needs."
            }
        ],
        "cons": [
            {
                "title": "Language Barrier",
                "text": "While Vue.js has a growing community, some resources and documentation might be less abundant compared to React or Angular."
            }
        ]
    }


]

export default frameworks;