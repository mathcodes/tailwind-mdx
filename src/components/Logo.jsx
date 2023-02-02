import jCircle from '../images/logos/jCircle.png'
import Image from 'next/image'
// /Users/jonchristie/Downloads/tailwindui-protocol 2/src/images/logos/jCircle.png
export function Logo() {
  return (
    <Image
              src={jCircle}
              alt=""
              className="h-12 w-auto"
              unoptimized
            />
  )
}
