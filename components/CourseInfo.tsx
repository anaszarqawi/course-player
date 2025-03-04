import React from 'react';
import { CourseDetailsType } from '@/types/course';
import { IconBooks, IconUser, IconWorld } from '@tabler/icons-react';
import { IconUsers } from '@tabler/icons-react';
import { IconClock } from '@tabler/icons-react';

type CourseInfoProps = {
  info: CourseDetailsType;
};

const iconProps = {
  size: 20,
  className: 'text-gray-500',
  stroke: 1.5,
};

const IconMap = {
  instructor: <IconUser {...iconProps} />,
  duration: <IconClock {...iconProps} />,
  lessons: <IconBooks {...iconProps} />,
  enrolled: <IconUsers {...iconProps} />,
  language: <IconWorld {...iconProps} />,
};

const CourseInfo = ({ info }: CourseInfoProps) => {
  return (
    <div>
      <div className="text-2xl text-gray-900 font-medium mb-4 mt-6">Course Materials</div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 bg-white shadow-1 px-6 py-2 rounded divide-y divide-gray-200">
        {Object.entries(info).map(([key, value]) => (
          <div key={key} className="flex items-center justify-between gap-2 flex-[1_1_49%] py-4">
            <div className="flex items-center gap-2">
              {IconMap[key as keyof typeof IconMap]}
              <span className="text-sm text-gray-500">{key}:</span>
            </div>
            <span className="text-sm text-gray-900">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseInfo;
