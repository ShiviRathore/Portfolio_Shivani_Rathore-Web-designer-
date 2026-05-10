import React from 'react'

function Footer() {
  return (
    <>
      <div className='bg-[#081B29] py-8'>
        <div className='container max-w-6xl mx-auto xl:px-16 px-8'>
          <p className='text-center text-white font-semibold text-base hover:text-sky-500'>
                 © {new Date().getFullYear()} Web Designer Shivani Rathore. All rights reserved.
            </p>
        </div>
      </div>
    </>
  )
}

export default Footer
