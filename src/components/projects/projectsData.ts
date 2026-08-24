import type { Project } from "./types";

import mentaviaImage from "../../assets/images/mentavia-project.png";
import shopMartImage from "../../assets/images/shopmart-project.png";
import fcaihGuideImage from "../../assets/images/fcaih-guide-project.png";

export const projects: Project[] = [
  {
    id: 1,
    title: "Mentavia",
    type: "Full-Stack Mental Wellness Platform",
    description:
      "A mental wellness platform shaped by real domain research to make professional support easier to access and help therapists follow patients beyond individual sessions.",
    technologies: ["Bootstrap", "PHP", "MySQL", "JavaScript"],
    features: [
      "Role-Based Access",
      "Wellness Tracking",
      "Patient Community",
      "Custom APIs",
    ],
    liveUrl: "https://mentavia.infinityfreeapp.com",
    image: mentaviaImage,
    story: [
      {
        id: "problem",
        label: "It Started With a Real Problem",
        text:
          "Mentavia started with one goal: make it easier for patients to reach therapists from home while giving therapists useful context before and between sessions. Before development, we spent an extended phase studying the domain, gathering requirements and defining the system through UML.",
      },
      {
        id: "research",
        label: "Research Before Features",
        text:
          "We met with a psychiatrist from Abbassia to understand what therapists actually need to know about a patient. That research influenced the onboarding questions and highlighted how mood, sleep and everyday habits can provide valuable context throughout a patient's recovery journey.",
      },
      {
        id: "role",
        label: "My Role",
        text:
          "As Team Leader, I distributed tasks based on each member's strengths, reviewed the team's work and coordinated the connection between frontend and backend. I also worked across both sides of the application and personally implemented authentication, protected routes and the landing experience.",
      },
      {
        id: "experience",
        label: "Beyond a Booking Platform",
        text:
          "The platform includes wellness tracking where therapists can follow patient progress, assign supportive tasks and generate PDF reports. We also built a supervised patient community where users can share posts and comments anonymously or publicly, helping them express themselves more comfortably and feel less alone.",
      },
      {
        id: "result",
        label: "From Requirements to a Working Product",
        text:
          "After the research, requirements and UML phase, we implemented the platform in around 20 days. The project received bonus marks and positive feedback for its problem-solving approach, UX and interface design.",
      },
      {
        id: "next",
        label: "What's Next",
        text:
          "I want to continue developing Mentavia as my AI knowledge grows, especially around smarter therapist matching and an AI Listener that can provide supportive, non-clinical conversation alongside professional care.",
      },
    ],
  },

  {
    id: 2,
    title: "Shop Mart",
    type: "Next.js E-Commerce Application",
    description:
      "A production-style e-commerce application built to connect authentication, REST APIs, validation, state and checkout into one complete shopping experience.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "ShadCN UI",
    ],
    features: [
      "REST APIs",
      "NextAuth",
      "Zod Validation",
      "Checkout Flow",
    ],
    liveUrl: "https://e-commerce-project-alpha-blond.vercel.app",
    image: shopMartImage,
    story: [
      {
        id: "project",
        label: "More Than a UI Exercise",
        text:
          "Shop Mart was developed independently as part of the Route Front-End Diploma. The goal was to test whether I could connect the concepts I had learned into one complete application rather than building isolated frontend exercises.",
      },
      {
        id: "challenge",
        label: "Working With a Real API",
        text:
          "The biggest challenge was integrating a large REST API where almost every feature depended on understanding endpoints, request structures, authentication and application state correctly. I used Postman extensively to explore and test the API before connecting each flow to the interface.",
      },
      {
        id: "build",
        label: "Building the Full Shopping Flow",
        text:
          "I built the application using Next.js and TypeScript, created reusable UI with Tailwind CSS and ShadCN UI, implemented authentication with NextAuth, protected routes using middleware and handled form validation with Zod.",
      },
      {
        id: "experience",
        label: "From Products to Payment",
        text:
          "The application connects real API data across product browsing, categories, wishlist, cart, authentication and checkout. Building these flows together was what made the project feel like a real application rather than a collection of frontend screens.",
      },
      {
        id: "result",
        label: "What It Tested",
        text:
          "Shop Mart became a practical test of my understanding of REST APIs and modern frontend development. It pushed me to think about how authentication, data fetching, validation, state and user flow all affect each other inside one complete product.",
      },
    ],
  },

  {
    id: 3,
    title: "FCAIH Guide System",
    type: "Student-Centered Academic Platform",
    description:
      "A university guide built from real student feedback to solve everyday problems around campus navigation, academic resources and faculty services.",
    technologies: ["Bootstrap", "JavaScript", "Google Maps"],
    features: [
      "Student Research",
      "Campus Navigation",
      "Course Guide",
      "System Analysis",
    ],
    liveUrl: "https://tasneem-khaled.github.io/FCAIH-Student-Guide/",
    image: fcaihGuideImage,
    story: [
      {
        id: "problem",
        label: "We Were the Users",
        text:
          "During our first semester at FCAIH, my teammates and I were facing many of the same everyday problems as other students: getting lost around campus, searching for scattered course resources and trying to find important university services and links.",
      },
      {
        id: "research",
        label: "We Asked Before We Built",
        text:
          "Instead of assuming what students needed, we created a Google Form and shared it across the faculty. We analyzed the responses, identified recurring problems and used that real feedback as the starting point for our system requirements.",
      },
      {
        id: "solution",
        label: "Turning Problems Into Features",
        text:
          "The resulting platform combines a university map connected to Google Maps, an organized course guide, important faculty links, opportunities and a proposed ticketing workflow that helps students communicate problems more clearly.",
      },
      {
        id: "role",
        label: "My Role",
        text:
          "I worked as Team Leader, designed the interface and developed the entire frontend independently using Bootstrap and JavaScript. Alongside implementation, our team approached the project as a system analysis project and documented it through around 30 diagrams covering its pages and workflows.",
      },
      {
        id: "result",
        label: "It Didn't Stop at Submission",
        text:
          "The project received bonus marks for the effort behind the research and implementation, but its strongest result came after we shared it publicly. Students engaged with the project, suggested future directions and some told us they were already using the platform in their daily university life.",
      },
      {
        id: "impact",
        label: "A Project With Room to Grow",
        text:
          "FCAIH Guide showed me the difference between designing around assumptions and designing around evidence. The long-term vision is to keep expanding it into a more complete platform that saves students time and makes university information and processes easier to access.",
      },
    ],
  },
];