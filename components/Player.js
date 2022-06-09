/* eslint-disable prettier/prettier */
import { useRef, useEffect } from 'react'
import Link from 'next/link'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'

export default function IndexPage() {
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      videojs(videoRef.current, {
        sources: [
          {
            src: 'https://www.youtube.com/watch?v=XrTLcjN7p0o',
          },
        ],
      })
    }
  })

  return (
    <div>
      Hello World.{' '}
      <Link href="/about">
        <a>About</a>
      </Link>
      <video controls ref={videoRef} className="video-js" />
    </div>
  )
}
