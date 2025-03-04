import { CourseType } from '@/types/course';

export const courseData: CourseType = {
  id: '1',
  title: 'Stating SEO as your Home Based Business',
  details: {
    instructor: 'Edward Norton',
    duration: '3 weeks',
    lessons: '8 lessons',
    enrolled: '100 students',
    language: 'English',
  },
  content: [
    {
      id: '1',
      title: 'Course Introduction',
      description: 'This is the first section of the course. It will introduce you to the course and the instructor.',
      lessons: [
        {
          title: 'Introduction',
          slug: 'introduction',
          video: '/videos/intro_to_seo.webm',
        },
        {
          title: 'Course Overview',
          slug: 'course-overview',
          video: '/videos/overview.webm',
        },
        {
          title: 'Course Exercise / Reference files',
          slug: 'course-exercise-reference-files',
          type: 'exam',
          attributes: {
            total_questions: 10,
            total_marks: 100,
            total_time: '10 minutes',
          },
          questions: [
            {
              id: '1',
              question: 'What is the main goal of Search Engine Optimization (SEO)?',
              options: {
                a: 'Increase website visitors from organic search results',
                b: "Improve only the website's speed",
                c: 'Make the website look more attractive',
                d: 'Increase paid advertisements',
              },
              correct_answer: 'a',
            },
            {
              id: '2',
              question: "Which of the following factors affects a website's ranking in search results?",
              options: {
                a: 'Website loading speed',
                b: 'Quality of backlinks',
                c: 'Content relevance',
                d: 'All of the above',
              },
              correct_answer: 'd',
            },
            {
              id: '3',
              question: "What does 'keyword stuffing' refer to in SEO?",
              options: {
                a: 'Using too many keywords unnaturally in content',
                b: 'Optimizing images for keywords',
                c: "Adding keywords only in the website's footer",
                d: 'Using keywords naturally in content',
              },
              correct_answer: 'a',
            },
            {
              id: '4',
              question: "Which tag is commonly used for defining a webpage's description for search engines?",
              options: {
                a: '<title>',
                b: '<meta description>',
                c: '<h1>',
                d: '<alt>',
              },
              correct_answer: 'b',
            },
            {
              id: '5',
              question: 'What is the purpose of an XML sitemap in SEO?',
              options: {
                a: 'To store website visitor data',
                b: 'To help search engines crawl and index website pages',
                c: 'To improve website design',
                d: 'To increase social media engagement',
              },
              correct_answer: 'b',
            },
          ],
        },
        {
          title: 'Code Editor Installation (Optional if you have already installed)',
          slug: 'code-editor-installation-optional-if-you-have-already-installed',
        },
        {
          title: 'Embedding PHP in HTML',
          slug: 'embedding-php-in-html',
        },
      ],
    },
    {
      id: '2',
      title: 'JavaScript Language Basics',
      lessons: [
        {
          title: 'Defining Functions',
          slug: 'defining-functions',
        },
        {
          title: 'Function Parameters',
          slug: 'function-parameters',
        },
        {
          title: 'Function Value from Functions',
          slug: 'function-value-from-functions',
        },
        {
          title: 'Global Variables and Scope',
          slug: 'global-variables-and-scope',
        },
        {
          title: 'Newer Way to creating constants',
          slug: 'newer-way-to-creating-constants',
        },
        {
          title: 'Constants',
          slug: 'constants',
        },
      ],
    },
  ],
  comments: [
    {
      id: '1',
      content: 'This SEO course is fantastic! I finally understand keyword research and on-page SEO strategies. Highly recommended!',
      user: { name: 'Sarah Smith', avatar: '/images/avatar1.jpg' },
      created_at: 'Oct 12, 2024',
    },
    {
      id: '2',
      content: 'Great explanation of technical SEO! The section on site speed optimization and mobile-friendliness was super helpful.',
      user: { name: 'Mark Johnson', avatar: '/images/avatar2.jpg' },
      created_at: 'Oct 2, 2024',
    },
    {
      id: '3',
      content: 'I improved my website’s ranking thanks to the backlink-building strategies in this course. Best investment ever!',
      user: { name: 'Emma Brown', avatar: '/images/avatar3.jpg' },
      created_at: 'Oct 1, 2024',
    },
  ],
};
