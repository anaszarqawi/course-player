export type CourseDetailsType = {
  instructor: string;
  duration: string;
  lessons: string;
  enrolled: string;
  language: string;
};

export type QuestionType = {
  id: string;
  question: string;
  options: {
    [key: string]: string;
  };
  correct_answer: string;
};

export type LessonAttributesType = {
  total_questions: number;
  total_marks: number;
  total_time: string;
};

export type LessonType = {
  title: string;
  slug: string;
  video?: string;
  type?: 'exam';
  attributes?: LessonAttributesType;
  questions?: QuestionType[];
};

export type SectionType = {
  id: string;
  title: string;
  description?: string;
  lessons: LessonType[];
};

export type CommentType = {
  id: string;
  content: string;
  created_at: string;
  user: {
    name: string;
    avatar: string;
  };
};

export type CourseType = {
  id: string;
  title: string;
  details: CourseDetailsType;
  content: SectionType[];
  comments: CommentType[];
};
