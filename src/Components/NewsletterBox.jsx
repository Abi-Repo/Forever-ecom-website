import React from 'react'

const NewsletterBox = () => {

    const onSubmitHandler = (event) =>{
        event.preventDefault();
        console.log('form submitted')
    }

  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
        <p className='text-gray-400 mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dicta explicabo, totam rerum temporibus deleniti eos possimus adipisci vel incidunt, illum necessitatibus mollitia, eius non corporis neque natus nisi reiciendis!</p>
        <form onSubmit={onSubmitHandler} action="" className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
            <input type="email" className='w-full sm:flex-1 outline-none' placeholder='enter your email' />
            <button type='submit' className='bg-black text-white text-xs px-10 py-4 cursor-pointer '>submit</button>
        </form>
        <br/>
        
    </div>
  )
}

export default NewsletterBox