/* eslint-disable prettier/prettier */

import ReactPlayer from 'react-player'

export default function Home({ posts }) {
  return (
    <div className="">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=qVA8XEPZ3gk"
        controls
        light
        playIcon={<div>Icon</div>}
        config={{
          file: {
            attributes: {
              controlsList: 'nodownload',
            },
          },
        }}
      />
    </div>
  )
}
