import React from 'react'
import './Card.css';
import pro1 from '../../assets/pic1.webp';
import pro2 from '../../assets/pic2.jpg';
import pro3 from '../../assets/pic3.jpg';
import pro4 from '../../assets/pic4.jpg';


const Card = ({project}) => {
   if(project == 1)
    {
        return (
            <div className="card">
                <h2>Weather Application</h2>
                <img className='pro' src={pro1} alt="" />
                <div className="btn-group">
                    <button className='btn btn-pro'>Github</button>
                    <button className='btn btn-pro'>Watch</button>
                </div>
            </div>
        )
    }
   if(project == 1)
    {
        return (
            <div className="card">
                <h2>Amazon Clone</h2>
                <img className='pro' src={pro1} alt="" />
                <div className="btn-group">
                    <button className='btn btn-pro'>Github</button>
                    <button className='btn btn-pro'>Watch</button>
                </div>
            </div>
        )
    }
   if(project == 2)
    {
        return (
            <div className="card">
                <h2>Rock Paper Scissors</h2>
                <img className='pro' src={pro2} alt="" />
                <div className="btn-group">
                    <button className='btn btn-pro'>Github</button>
                    <button className='btn btn-pro'>Watch</button>
                </div>
            </div>
        )
    }
   if(project == 3)
    {
        return (
            <div className="card">
                <h2>PDF Merger</h2>
                <img className='pro' src={pro3} alt="" />
                <div className="btn-group">
                    <button className='btn btn-pro'>Github</button>
                    <button className='btn btn-pro'>Watch</button>
                </div>
            </div>
        )
    }
   if(project == 4)
    {
        return (
            <div className="card">
                <h2>Amazon Clone</h2>
                <img className='pro' src={pro4} alt="" />
                <div className="btn-group">
                    <button className='btn btn-pro'>Github</button>
                    <button className='btn btn-pro'>Watch</button>
                </div>
            </div>
        )
    }
   
  
  
}

export default Card