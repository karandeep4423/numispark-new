import React from 'react'
import NosProjectsSection from '../components/NosProjectsSection'
import FaqSection from '../components/FaqSection'
const projets = () => {
  return (
    <div className='mt-16'>
        <h1 className='text-center my-16 text-4xl font-[Neue_Montreal] font-semibold'>Notre Travail, Votre Image</h1>
        <NosProjectsSection />
        <FaqSection />
    </div>
  )
}

export default projets