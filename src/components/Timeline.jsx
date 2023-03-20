import React from 'react';
import timeline from '../data/timeline';
import TimelineItem from './TimelineItem';
import Title from './Title';

const Timeline = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center my-20'>
      <div className='w-full md:w-7/12'>
        <Title>Timeline</Title>
        {timeline.map(data => (
          <TimelineItem 
            year={data.year}
            title={data.title}
            duration={data.duration}
            details={data.details}
          />
        ))}
      </div>
    </div>
  )
}

export default Timeline