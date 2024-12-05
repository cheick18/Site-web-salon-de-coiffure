import React from 'react'
import Header from '../Components/Header'
import Section from '../Components/SectionPhotoText'
import HaircutCards from '../Components/CardCoiffure'
import Space from '../Components/Space'



export default function Home() {
  return (
    <div>
        <Header />
        <Section />
        <Space />

      <HaircutCards />
    </div>
  )
}
