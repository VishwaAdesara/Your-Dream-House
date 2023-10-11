import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Recent Property Listed' subtitle='This newly listed property boasts modern elegance in the heart of the city. With an open-concept layout, sleek finishes, and a private balcony overlooking the skyline, it is the perfect oasis for city living ' />
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent
