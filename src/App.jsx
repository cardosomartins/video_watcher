import { useState } from 'react'
import turtle from './public/turtle.png'
import './App.css'
import TitleComponent from './Components/TitleComponent.jsx'
import SearchDescriptionComponent from './Components/SearchDescriptionComponent.jsx'
import SearchBarComponent from './Components/SearchBarComponent.jsx'
import YoutubeThumbnailComponent from './Components/YoutubeThumbnailComponent.jsx'
import YoutubeEmbedComponent from './Components/YoutubeEmbedComponent.jsx'

function App() {
  const Thumbnails = ["https://i.ytimg.com/vi/ma67yOdMQfs/default.jpg",
    "https://i.ytimg.com/vi/gWZ8PwO0CkQ/default.jpg", 
    "https://i.ytimg.com/vi/DaLUxjNlBSI/default.jpg"];

  const Titles = ["These Were The All-Time Surfing Moments Of The Year | Best Of 2020",
  "BIG WAVE SURFING COMPILATION 2024 * TOUR OF DUTY *",
  "Girl Tries Surfing Simulator ❤️"

  ];

  const PublishDates = ["2021-01-23T17:00:15Z", "2024-05-25T00:03:07Z", ];

  const Descriptions = ["Well, that was a weird ride. Though it hasn't been easy, at least when we fixed our gaze on the ocean — or favorite place in the ...",
  "BIG WAVE SURFING COMPILATION 2024 ** TOUR OF DUTY ** ** WORLD RECORD MONSTERS 60-100ft OF PURE FEAR ...",
  "This girl wanted to surf in the dangerous ocean, so she practiced on a surfing simulator with high tide. Her trainer held her with a ..."]

  const Prefix = "https://www.youtube.com/watch?v="
  const VideoURLs = ["ma67yOdMQfs", "gWZ8PwO0CkQ", "DaLUxjNlBSI"]


  return (
    <>
      <TitleComponent/>
      <div> <img src={turtle} alt="turtle" /> </div>
      <SearchDescriptionComponent/>
      <SearchBarComponent/>
      {Thumbnails.map((item, index) =>
      <YoutubeThumbnailComponent Key = {index} Title={Titles[index]} Description={Descriptions[index]} MediumThumbnail={Thumbnails[index]} PublishDate={PublishDates[index]} VideoURL = {Prefix+VideoURLs[index]} />)}
      {VideoURLs.map((item, index) => <YoutubeEmbedComponent VideoId={VideoURLs[index]} />)}        
    </>
  )
}

export default App
