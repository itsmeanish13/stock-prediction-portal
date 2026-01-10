import React from 'react'
import Button from './Button'
import Header from './Header'
import Footer from './Footer'


const Body = () => {
  
  return (
    <>
    
        <div className='container'>
            <div className='p-5 text-center bg-light-dark rounded'>
                <h1 className='text-light'>Stock Prediction Portal</h1>
                <p className='text-light lead'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio consectetur at dignissimos modi reprehenderit. Odio sed itaque nostrum quam est magni sapiente laborum officiis non quasi deserunt porro dolorem quidem ducimus, dolore, nulla rem error eius eligendi. Nesciunt voluptatem quas unde nam sit nulla aperiam, corporis fugiat dolorem, enim iste!</p>
                <Button text="Explore Now" class="btn-outline-info" url="/dashboard"/>
                

            </div>

        </div>
      
    </>
  )
}

export default Body