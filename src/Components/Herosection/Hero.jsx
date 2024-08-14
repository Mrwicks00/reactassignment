import React from 'react'
import heroimg from '../../images/hyra1.svg'
import heroimg2 from '../../images/hyra2.png'
import herotwitter from '../../images/svgexport-4.svg'
import herogithub from '../../images/svgexport-5.svg'
import herodiscord from '../../images/svgexport-6.svg'

const Hero = () => {
  return (
    <div className='hero-section' style={{
        backgroundImage: `url(${heroimg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: "100%",
        height: "100vh",
        
    }}>
        <img src={heroimg2} alt="" style={{position: 'absolute', marginLeft: "-50px"}} />

        <div className='hero-text'>
            <h1>UNISWAP <span className='protocol'>PROTOCOL</span></h1>
            <p>
            Swap, earn, and build on the leading decentralized crypto trading <br /> protocol.
            </p>
            <div className='hero-socials'>
                <img src={herotwitter} alt="" />
                <img src={herogithub} alt="" />
                <img src={herodiscord} alt="" />
            </div>
            
        </div>

    </div>
  )
}

export default Hero