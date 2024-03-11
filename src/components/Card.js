import React from 'react'
import {FcLike,FcLikePlaceholder} from "react-icons/fc"
import {toast} from "react-toastify"

const Card = (props) => {
       let course=props.course
       let LikedCourses=props.LikedCourses;
       let setLikedCourses=props.setLikedCourses;



    function clickHandler(){
       //logic for liked and un liked love 
       if (LikedCourses.includes(course.id)){
        //phele se like  hau pada hai
        //ab agr koi phele se like hua pada hai to hme
        //course me se likedcourse ko remove krna padega
        setLikedCourses((prev)=>prev.filter((cid)=>(cid !== course.id) ) );
        toast.warning("like removed");
       }
       else{
        //phele se like nhi hai ye course
        //insert krna hai ye course like course me 
        if(LikedCourses.length ===0){
          setLikedCourses([course.id]);
        }
        else{
          //non-empty pehle se 
          setLikedCourses((prev)=> [...prev, course.id]);
        }
        toast.success("liked succesfully");
       }
    }

  return (
    <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>
      <div className='relative'>
        <img src={course.image.url}></img>

        <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-3  grid place-items-center'>
          <button onClick={clickHandler}>
           {/* <FcLike fontSize="1.75rem" /> */}
           {/* agr liked couse hai to fc like chlega nhi to placeholder wala */}
           {
            !LikedCourses.includes(course.id)?
            (<FcLikePlaceholder fontSize="1.75rem" />):
            (<FcLike fontSize="1.75rem" />)
           }
          </button>
        </div>
      </div>

      <div className='p-4'>
        <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
        <p className='mt-2 text-white'>
        
        {
          course.description.length>100 ?
          (course.description.substr(0,100))+"...":
          (course.description)
        }

        </p>
      </div>
    </div>
  )
}

export default Card;