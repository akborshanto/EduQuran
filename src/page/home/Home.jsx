import React from 'react'
import { Banner } from '../../component/Banner'
import { OurTeacher } from '../../component/OurTeacher'
import TopStudent from '../../component/TopStudent'
import NewsLetter from '../../component/NewsLetter'
import StudentProfile from '../../component/NewsAnnouncement'

export const Home = () => {
  return (
    <div>
 
      <Banner></Banner>
<StudentProfile></StudentProfile>
 <NewsLetter></NewsLetter>
    </div>
  )
}
