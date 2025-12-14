import React from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../Components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img src={assets.about_img} className="w-full md:max-w-[450px]" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            deserunt adipisci sed libero doloremque dolorum non, voluptatibus
            laborum porro impedit corporis maxime odio ut laboriosam perferendis
            officia omnis culpa iusto.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, iste
            quas dolor corrupti autem molestias ipsum? Id error quia eaque
            obcaecati at perferendis? Tempora nisi esse blanditiis recusandae
            labore quam!
          </p>
          <b>Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
            deleniti quibusdam quasi dignissimos praesentium, architecto
            reiciendis beatae, voluptates soluta assumenda.
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance</b>
          <p className='text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
            aperiam? Perspiciatis laudantium repellat deleniti explicabo beatae
            non minus. Debitis ullam mollitia maxime eum!
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience</b>
          <p className='text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
            aperiam? Perspiciatis laudantium repellat deleniti explicabo beatae
            non minus. Debitis ullam mollitia maxime eum!
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service</b>
          <p className='text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
            aperiam? Perspiciatis laudantium repellat deleniti explicabo beatae
            non minus. Debitis ullam mollitia maxime eum!
          </p>
        </div>
      </div>

      <NewsletterBox/>

      <br />
    </div>
  );
}

export default About