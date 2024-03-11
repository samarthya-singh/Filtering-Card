import React, { useEffect, useState } from 'react'
import { apiUrl, filterData } from "./data";
import Navbar from "./components/Navbar";
import Filter from './components/Filter';
import { toast } from "react-toastify";
import Cards from "./components/Cards";
import Spinner from "./components/Spinner"

const App = () => {

  const [category, setCategory] = useState(filterData[0].title);
  const [loading, setLoading] = useState(true);
  const [courses, setcourses] = useState("")
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const res = await fetch(apiUrl);
        const output = await res.json();
        //save data into a varible
        setcourses(output.data);
      }
      catch (error) {
        toast.error("something went wrong")
      }
      setLoading(false)
    }
    fetchData()
  }, [])


  return (
    <div className='min-h-screen  bg-bgDark2 flex flex-col'>
      <div>
        <Navbar />
      </div>
      <div className=''>
        <div>
          <Filter
            filterData={filterData}
            category={category}
            setCategory={setCategory}
          />
        </div>
        <div>
          {
            loading ? (<Spinner />) : (<div className='w-11/12 max-w-[1200px] mx-auto flex flex-warp justify-center
              items-center min-h-[50vh] '>
              <Cards
                courses={courses}
                category={category}
              />
            </div>)
          }
        </div>
      </div>
    </div>
  )
}

export default App





