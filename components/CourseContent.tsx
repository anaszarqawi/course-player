import React from 'react';
import { SectionType, LessonType } from '@/types/course';
import Link from 'next/link';
import { IconFileDescription, IconLock } from '@tabler/icons-react';
import Chip from './Chip';
import { useParams } from 'next/navigation';

type CourseContentProps = {
  content: SectionType[];
};
const CourseContent = ({ content }: CourseContentProps) => {
  const { lesson } = useParams() as { lesson: string };

  return (
    <div className="curriculum scroll-mt-[260px] lg:scroll-mt-8 flex flex-col gap-12">
      {content.map((item: SectionType) => (
        <div key={item.id} className="border border-gray-200 p-6 pb-1">
          <div className="mb-6">
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p className="text-sm text-gray-500 mt-2">{item.description}</p>
          </div>
          <div className="flex flex-col">
            {item.lessons.map((lessonItem: LessonType) => (
              <Link
                key={lessonItem.slug}
                href={`/course/${lessonItem.slug}`}
                data-active={lessonItem.slug === lesson}
                className="flex items-center justify-between gap-3 py-4 transition-colors text-gray-500 hover:text-gray-900 border-t border-gray-200 cursor-pointer data-[active=true]:text-gray-900 data-[active=true]:font-semibold">
                <div className="flex items-center gap-2 truncate">
                  <span>
                    <IconFileDescription size={16} />
                  </span>
                  <div className="text-base truncate">{lessonItem.title}</div>
                </div>
                <div>
                  {lessonItem.type === 'exam' && lessonItem.attributes?.total_questions && lessonItem.attributes?.total_time ? (
                    <div className="flex flex-col items-end gap-2">
                      <Chip label={`${lessonItem.attributes.total_questions} questions`} color="green" />
                      <Chip label={lessonItem.attributes?.total_time} color="red" />
                    </div>
                  ) : (
                    <IconLock size={16} />
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseContent;
