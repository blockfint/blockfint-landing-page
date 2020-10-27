import { BREAKPOINT } from 'assets/globalStyle'
import { Slider } from 'components/Slider'
import React from 'react'
import styled from 'styled-components'
import { InfoGraphic } from './components/InfoGraphic'
import { StoryAbout } from './components/StoryAbout'
import { TopPage } from './components/TopPage'
const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 340px;
`
const Footer = styled.div`
overflow:hidden;
`
export const About = () => {
  return (
    <div style={{ overflow: 'hidden' }}>
      <TopPage />
      <Image src="/office-life.png" alt="" />
      <InfoGraphic />
      <StoryAbout />
      <Footer>
        <Slider sectionName="Achievement" images={images} description={description}/>
      </Footer>
    </div>
  )
}
const images = ['/images/slide1.jpg', '/images/slide2.jpg', '/images/slide3.jpg']
const description = ['Enjoying free lunch', 'Enjoying free lunch', 'Enjoying free lunch']
