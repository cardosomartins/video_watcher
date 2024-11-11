import { useEffect, useState } from 'react'
import turtle from './public/turtle.png'
import './App.css'
import TitleComponent from './Components/TitleComponent.jsx'
import SearchDescriptionComponent from './Components/SearchDescriptionComponent.jsx'
import SearchBarComponent from './Components/SearchBarComponent.jsx'
import YoutubeThumbnailComponent from './Components/YoutubeThumbnailComponent.jsx'
import YoutubeEmbedComponent from './Components/YoutubeEmbedComponent.jsx'

const url = "http://localhost:3000/items"

async function RetrieveData(){
  console.log("Starting Retrieve Data Method");
  const res = await fetch(url)
  const data = await res.json();
  console.log("Retrieve Data method executed! See data above and below");
  return data;
}


function App() {  
  
  const handleClick = (
    () => {
      setToggle(!toggleState);
      const Prefix = "https://www.youtube.com/watch?v="

      RetrieveData().then(result =>
        setData(result));    
    }
  );

  const [toggleState, setToggle] = useState(false);

  useEffect(() => {}, [toggleState])

  const [data, setData] = useState([])
  const VideoURLs = []
  const Prefix = "https://www.youtube.com/watch?v="

  return (
    <>
      <TitleComponent/>
      <div> <img src={turtle} alt="turtle" /> </div>

      <SearchDescriptionComponent/>

      <SearchBarComponent/>

      {data.map((item, index) =>
      <YoutubeThumbnailComponent Key = {index} Title={item.snippet.title} Description={item.snippet.description} MediumThumbnail={item.snippet.thumbnails.default.url} PublishDate={item.snippet.publishedAt} VideoURL = {Prefix + item.id.videoId} />)}
      
      {data.map((item, index) => <YoutubeEmbedComponent Key = {index} VideoId={item.id.videoId} />)}

      <button onClick={handleClick}> Click here to retrieve Videos! {toggleState}</button>      
    </>
  )
}

export default App
