import React from 'react';

import { IconChevronRight } from '@tabler/icons-react';
import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav className="w-full py-4 flex justify-start items-center">
      <div className="flex justify-start flex-wrap items-center">
        {items.map((item, index) => (
          <span
            key={index}
            className={`font-normal text-sm transition-all flex items-center ${
              index === items.length - 1 ? 'text-gray-900 font-medium' : 'text-gray-600 hover:text-gray-700 hover:underline'
            }`}>
            {index !== items.length - 1 ? <Link href={item.href || '#'}>{item.label}</Link> : <span>{item.label}</span>}
            {index < items.length - 1 && (
              <span className="text-gray-400 inline-flex align-middle mx-1 lg:mx-1.5">
                <IconChevronRight stroke={2} size={16} />
              </span>
            )}
          </span>
        ))}
      </div>
    </nav>
  );
};

export default Breadcrumbs;
