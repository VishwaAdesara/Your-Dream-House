import React,{useState} from "react"
import { list } from "../../data/Data"
import { Link } from "react-router-dom";


const RecentCard = () => {
  const [isClicked, setIsClicked] = useState(false); // State to track if the item is clicked

  const handleClick = () => {
    setIsClicked(true); // Update state when the item is clicked
  };
  return (
    <>
      <div className='content grid3 mtop'>
        {list.map((val, index) => {
          const { cover, category, location, name, price, type } = val
          return (
            <div className='box shadow' key={index}>
              <div className='img'>
                <img src={cover} alt='' />
              </div>
              <div className='text'>
                <div className='category flex'>
                  <span style={{ background: category === "For Sale" ? "#25b5791a" : "#ff98001a", color: category === "For Sale" ? "#25b579" : "#ff9800" }}>{category}</span>
                  <Link to="../contact/contact">
                  <i className='fa fa-heart heart' onClick={handleClick}></i>
                  </Link>
                </div>
                <h4>{name}</h4>
                <p>
                  <i className='fa fa-location-dot'></i> {location}
                </p>
              </div>
              {/* <div className='button flex'>
                <div>
                  <button className='btn2'>{price}</button> <label htmlFor=''>/sqft</label>
                </div>
                <span>{type}</span>
              </div> */}
              <div>
              <Link to="../contact">
                <button className="button">
                  Buy Now
                </button>
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default RecentCard
