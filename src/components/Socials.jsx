import React from 'react'
import { Link } from 'react-router-dom';
import { socialLinks } from '../constants';

const Socials = () => {
  return (

    <div className='flex flex-wrap my-10 gap-10'>
          {socialLinks.map((so) => (
            <div className='lg:w-[250px] w-full flex justify-center items-center' key={so.name}>
              <div className='block-container w-12 h-12'>
                
                <div className='btn-front rounded-xl flex justify-center items-center'>
                    <a
                        href={so.link}
                        target="_blank"
                        rel='noopener noreferrer'
                    >
                        <img
                            src={so.iconUrl}
                            alt='Social Media Icon'
                            className='w-1/2 h-1/2 object-contain'/>
                    </a>  
                  
                </div>  
              </div>

              <div className='mt-5 flex flex-col'>
                <h4 className='text-2xl font-poppins font-semibold'>
                    <a
                        href={so.link}
                        target="_blank"
                        rel='noopener noreferrer'
                    >
                        {so.name}
                    </a> 
                </h4> 

              </div>
            </div>
          ))}

        </div>
  )
}

export default Socials

