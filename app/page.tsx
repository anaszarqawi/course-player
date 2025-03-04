import { redirect } from 'next/navigation';
import React from 'react';

const home = () => {
  // redirect to courses page
  redirect('/course');
};

export default home;
