import React from 'react'

const embedPrefix = "https://www.youtube.com/embed/";

export default function YoutubeEmbedComponent({VideoId}) {
  return (
    <div>
        <iframe
            width="480"
            height="385"
            src={embedPrefix + VideoId}>            
        </iframe>
    </div>
  )
}
