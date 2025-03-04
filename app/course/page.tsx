import { redirect } from 'next/navigation';
import { courseData } from '@/data/course';

// جلب أول درس
async function getFirstLesson() {
  return courseData.content[0].lessons[0].slug; // هنا ضع الـ slug لأول درس بالكورس
}

export default async function CoursePage() {
  const firstLesson = await getFirstLesson();
  redirect(`/course/${firstLesson}`);
}
