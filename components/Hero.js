import Image from 'next/image'

const Hero = () => {
  return (
    <div className="z-20 w-full">
      <Image src="/static/ortodoxa/rökelse01.png" alt="" layout="fill" />
      <h1 className="">FIORI DI ZUCCA</h1>
      <span className="">$19.90</span>
      <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
  )
}

export default Hero
