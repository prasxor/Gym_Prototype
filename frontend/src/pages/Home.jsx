import React from 'react'
import FeatureCard from '../components/Atoms/FeatureCard/FeatureCard'
import bodyBuilding from "../assets/body-part-muscle.svg"
import personalTraining from "../assets/wellness.svg"
import cardio from "../assets/workout-stretching.svg"
import yoga from "../assets/workout-stretching1.svg"


const Home = () => {
  return (
    <section className='bg-amber-300 h-auto w-full flex items-center justify-center flex-col'>
        <div className='bg-green-500 h-screen w-full'>
            <h1>Hero section</h1>
        </div>
        <div className='h-[50vh] w-full bg-fuchsia-400 flex flex-col justify-center items-center'>
            <div className='flex flex-col items-center justify-center border border-amber-400 h-[30%] w-full'>
                <h2 className='text-4xl mb-2 font-extrabold'>Transform Your Body</h2>
                <p className='text-l text-black opacity-70'>Choose the right program based on your goals — strength, weight loss, or overall fitness.</p>
            </div>
            <div className='flex flex-row items-center justify-center border border-amber-400 h-[70%] w-full gap-7'>
            <FeatureCard img={bodyBuilding} heading={"Weight Training"}/>
            <FeatureCard img={personalTraining} heading={"Personal Training"}/>
            <FeatureCard img={cardio} heading={"Cardio / HIIT"}/>
            <FeatureCard img={yoga} heading={"Yoga / Zumba"}/>
            </div>
        </div>
        <div className='h-[90vh] w-full border border-amber-400'></div>
    </section>
  )
}

export default Home