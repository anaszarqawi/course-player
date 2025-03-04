import React from 'react';
import { CommentType } from '@/types/course';
import Image from 'next/image';
import { IconArrowRight } from '@tabler/icons-react';

type CommentsProps = {
  comments: CommentType[];
  className?: string;
};

const Comments = ({ comments, className }: CommentsProps) => {
  return (
    <div className={`comments scroll-mt-[260px] lg:scroll-mt-8 w-full ${className ?? ''}`}>
      <div className="text-2xl text-gray-900 font-medium mt-6">Comments</div>
      <div className="flex flex-col divide-y divide-gray-200">
        {comments.map((comment) => (
          <div key={comment.id}>
            <div className="flex items-start gap-4 py-6">
              <Image
                src={comment.user.avatar || '/images/avatar.webp'}
                alt={comment.user.name}
                width={50}
                height={50}
                className="w-14 h-14 rounded-full object-cover border border-gray-200"
              />
              <div className="flex flex-col gap-1">
                <div className="text text-gray-700">{comment.user.name}</div>
                <div className="text-xs text-gray-500">{comment.created_at}</div>
                <div className="text-sm text-gray-500 mt-2">{comment.content}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <form className="mt-6">
        <textarea className="input-1 shadow-1" rows={5} placeholder="Write a comment..." />
        <button type="submit" className="button-1 mt-4">
          Submit Review
          <IconArrowRight size={16} />
        </button>
      </form>
    </div>
  );
};

export default Comments;
