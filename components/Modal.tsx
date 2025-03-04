'use client';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';
import React, { useEffect } from 'react';

type PopupProps = {
  children: React.ReactNode;
  show?: boolean | null;
  classNames?: {
    base?: string;
    body?: string;
  };
  onClose?: () => void;
};

const Modal = ({ onClose, show, classNames, children }: PopupProps) => {
  const modalRef = React.useRef(null);
  const containerRef = React.useRef<HTMLDivElement>(null);

  useOnClickOutside(modalRef, () => onClose && show && onClose());

  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [show]);

  return (
    <div
      ref={containerRef}
      className={
        `fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-all duration-300 p-6 ${classNames?.base ?? ''}` +
        (show ? ' opacity-100 visible' : ' opacity-0 invisible')
      }>
      <div ref={modalRef} className={`relative w-full lg:max-w-[500 px] bg-zinc-50 rounded-3xl shadow-lg p-6 ${classNames?.body ?? ''}`}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
