import React from 'react'

const CTA = ({cv}) => {

    let ctaStyle = {
        display: 'flex',
        gap: '1rem'
    };
  return (
    <div className='cta' style={ctaStyle} >
        <a className='btn' href={cv} download={true}>Download CV</a>
        <a className='btn btn-primary' href="#contact">Let'sTalk</a>
    </div>
  )
}

export default CTA