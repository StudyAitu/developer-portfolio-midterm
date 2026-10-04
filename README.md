Responsive Multi-Page Website Project

📖 Project Overview

This project is a multi-page, fully responsive web application built as a midterm assignment. The site is designed to deliver a modern, clean, and intuitive user experience across a variety of device viewport sizes.

The application integrates standard semantic HTML5 elements, custom CSS3 styling (including Flexbox, CSS Grid, custom properties, and keyframe animations), and the Bootstrap 5 framework for responsive layouts and utility styling.

🌐 Live Demo & Deployment

Live URL: Click Here to View Deployed Site https://studyaitu.github.io/developer-portfolio-midterm/

Repository: GitHub Repository https://github.com/StudyAitu/developer-portfolio-midterm/new/main?filename=README.md

✨ Key Features & Technical Implementations

1. Multi-Page Architecture & Navigation

5+ Dedicated Pages:

index.html — Home Page (Hero section with keyframe entrance animation and featured highlights).

about.html — About Page (Company background, mission statement, and team bio).

services.html — Services & Pricing (Interactive pricing and features comparison table).

gallery.html — Gallery / Portfolio (Responsive CSS Grid display showcasing projects/images).

contact.html — Contact Us (Complete interactive contact form and styled contact info cards).

Global Navigation Bar: Accessible across all pages, enabling seamless site navigation.

2. HTML5 Semantic Structure & Components

Semantic Tags: Used <header>, <nav>, <main>, <section>, <article>, and <footer> to guarantee clean code hierarchy, accessibility (a11y), and optimal SEO foundation.

Data Tables: Features a custom-styled table wrapped in a scrollable container (.table-wrap) for mobile readability, utilizing semantic <thead>, <tbody>, <th>, and <td> tags.

Interactive Forms: Styled with Bootstrap control classes and enhanced with custom focus ring variables (--brand), smooth borders (border-radius: 12px), and structured input groups.

3. Custom CSS3 & Styling Innovations

CSS Custom Properties (Variables): Centralized design system managing colors (var(--brand), var(--brand-dark)) and shadows (var(--shadow)).

Positioning Techniques:

relative & absolute: Used in .contact-card and .contact-card::before for dynamic pseudo-element background accents.

fixed: Implemented for the floating back-to-top action button (.back-top) pinned at bottom: 20px; right: 20px.

Layout Engines:

Flexbox: Used for component alignment, button groups, and navbar link spacing.

CSS Grid: Applied for multi-column gallery cards and centered grid alignment (place-items: center for .back-top).

CSS Animations: Embedded smooth Entrance Keyframe Animations (@keyframes fadeUp) for visual enhancement.

4. Responsive Design & Breakpoints

Bootstrap 5 Grid System: Leverages container, row, and column layout utilities (col-md-*, col-lg-*).

Custom Media Queries:

Tablet Breakpoint (max-width: 991.98px): Adjusts hero section paddings and scales down body typography.

Mobile Breakpoint (max-width: 575.98px): Optimizes typography hierarchy (h1 scaled to 2.7rem), scales down profile frames, and reduces vertical padding for small viewports.

Horizontal Scroll Prevention: Encapsulated data tables inside overflow containers (.table-wrap) to maintain structure on mobile viewports.

📁 Project Directory Structure

├── css/
│   └── style.css            # Custom CSS styles, variables, media queries, and animations
├── images/                  # Media assets, banners, and gallery images
├── index.html               # Home Page
├── about.html               # About Page
├── services.html            # Services & Pricing Table Page
├── gallery.html             # Portfolio / Gallery Page
├── contact.html             # Contact Form & Location Page
└── README.md                # Project documentation


🎓 Instructor Defence & Technical Explanation Guide

Use the following outline during the 30-point oral defence to explain code implementation decisions:

1. Project Concept & Architecture

"The website is designed with a modern user interface centered around accessibility and ease of navigation. The goal was to build a cohesive brand identity across 5 distinct pages connected by a consistent header and footer."

2. HTML Semantics & Layout Logic

"Semantic HTML5 elements like <section>, <article>, and <nav> were used instead of unsemantic <div> containers where possible. The contact page features a structured <form> with validation attributes, while the services page leverages semantic <table> elements wrapped in overflow containers for responsive readability."

3. CSS Architecture, Positioning & Design Choices

"CSS Variables (var(--brand)) maintain brand identity consistency. I utilized multiple positioning strategies: relative/absolute positioning for background accents on .contact-card, and fixed positioning for the floating navigation button (.back-top). Hardware-accelerated CSS animations (@keyframes fadeUp) enhance UI engagement upon initial page load."

4. Layout Systems: Flexbox & CSS Grid

"Flexbox handles one-dimensional layouts, such as navigation bar spacing and form button align-items. CSS Grid handles two-dimensional structures like gallery layouts and precise alignment tasks like centering icon elements via place-items: center."

5. Responsiveness & Media Queries

"Responsiveness combines the Bootstrap 12-column grid with custom CSS media queries. Breakpoints at 991.98px and 575.98px adjust typography sizes, padding values, and element stacks so that mobile users experience seamless layout adaptation without horizontal layout breakages."

🛠️ Technologies Used

HTML5: Standard markup language.

CSS3: Stylesheet language utilizing Flexbox, CSS Grid, Variables, and CSS Keyframes.

Bootstrap 5.3: Front-end framework for rapid grid layout and UI utility classes.

Git & GitHub / Netlify: Version control and web hosting deployment.

✍️ Author & Credits

Course: Web Technologies 

Project: Midterm Project Assignment

Student Name: Murtbek Ibrai

Group / Section: Se 2529 theme developer portfolio
