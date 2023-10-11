import React from "react"
import Heading from "../../common/Heading"
import { team } from "../../data/Data"
import "./team.css"
import { Link } from "react-router-dom";

const Team = () => {
  return (
    <>
      <section className='team background'>
        <div className='container'>
          <Heading title='Our Featured Agents' subtitle='Our handpicked team of agents is dedicated to making your property journey seamless, providing unmatched support in selling, renting, or purchasing homes.'/>
          <div className='content mtop grid3'>
            {team.map((val, index) => (
              <div className='box' key={index}>
                <div className='details'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                    <i className='fa-solid fa-circle-check'></i>
                  </div>
                  <label>{val.address}</label>
                  <h4>{val.name}</h4> 
                  <div className='buttonaa'>
                    <button>
                    <Link to="../contact">
                      <i className='fa fa-envelope'></i>
                      Message
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Team
