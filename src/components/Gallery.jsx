import { useState } from 'react'
import Img from './Img.jsx'
import { Meta } from './Type.jsx'

/** Main image + thumbnail strip. Accepts any number of images. */
export default function Gallery({ images }) {
  const [i, setI] = useState(0)
  const cur = images[i]
  const pad = (n) => String(n).padStart(2, '0')

  return (
    <div className="grid gap-6 md:grid-cols-12 md:gap-10">
      <div className="md:col-span-8 lg:col-span-7">
        <Img key={cur.src} src={cur.src} alt={cur.alt} ratio={cur.ratio || '4 / 5'} className="w-full" />
        <div className="mt-3 flex items-baseline justify-between">
          <Meta>{cur.alt}</Meta>
          <Meta>{pad(i + 1)} / {pad(images.length)}</Meta>
        </div>
      </div>

      <div className="flex gap-3 md:col-span-4 md:col-start-9 md:flex-col md:justify-end lg:col-span-3 lg:col-start-9">
        {images.map((im, n) => (
          <button
            key={im.src}
            onClick={() => setI(n)}
            aria-label={`Show image ${n + 1}: ${im.alt}`}
            aria-current={n === i}
            className={`group w-20 shrink-0 transition-opacity duration-500 md:w-full md:max-w-[9rem] ${n === i ? 'opacity-100' : 'opacity-45 hover:opacity-100'}`}
          >
            <Img src={im.src} alt="" ratio="4 / 5" hover />
          </button>
        ))}
      </div>
    </div>
  )
}
