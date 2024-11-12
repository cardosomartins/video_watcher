import React from 'react'

export default function YoutubeThumbnailComponent(
{Title, MediumThumbnail,  Description, PublishedAt, VideoURL}) {
  return (
    <div>
      <a href={VideoURL}>
        <img src={MediumThumbnail} alt="image" />
        {Title}
        {Description}
        {PublishedAt}
      </a>        
    </div>
  )
}
