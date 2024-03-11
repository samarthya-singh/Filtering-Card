import React, { useState } from 'react'
import Card from './Card';
const Cards = (props) => {
  let courses = props.courses
  let category = props.category;
  const [LikedCourses, setLikedCourses] = useState([]);


  //this to take  all different array in one array
  //returns you a list of all courses recived from api response
  //course category ke jgh pe kuch bhi jaes earry
  const getCourses = () => {
    if (category === "All") {
      let allCourses = [];
      Object.values(courses).forEach((courseCategory) => {
        courseCategory.forEach((course) => {
          allCourses.push(course);
        })
      })
      return allCourses;
    }
    else{
      //main srif specific category ka arrsy pass krunga
      return courses[category]
    }
  }

  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
      {
        //with the help of getcourse we get all the data od courses
        //har course ke leye hm ek card bnana chate hai to hm map function ka use kr rhe
        getCourses().map((course) => {

          return <Card key={course.id} course={course} LikedCourses={LikedCourses} setLikedCourses={setLikedCourses} />
        })
      }
    </div>
  )
}

export default Cards;