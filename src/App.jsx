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
  
  const [data, setData] = useState([])
  const [searchText, setSearchText] = useState("");
  const Prefix = "https://www.youtube.com/watch?v="

  const handleSearch = (search) => {
    setSearchText(search);
      
    if (search == "") return;
    RetrieveData().then(result => setData(result));
  };

  useEffect(() => {
    if(searchText != "") RetrieveData().then(result => setData(result));},    
    [searchText]);

  return (
    <>
      <TitleComponent/>
      <div> <img src={turtle} alt="turtle" /> </div>

      <SearchDescriptionComponent/>

      <SearchBarComponent onSearch={handleSearch}/>
      
      {data.map((item, index) =>
      <YoutubeThumbnailComponent Key = {index} Title={item.snippet.title} Description={item.snippet.description} MediumThumbnail={item.snippet.thumbnails.default.url} PublishDate={item.snippet.publishedAt} VideoURL = {Prefix + item.id.videoId} />)}
      
      {data.map((item, index) => <YoutubeEmbedComponent Key = {index} VideoId={item.id.videoId} />)}
    </>
  )
}

export default App