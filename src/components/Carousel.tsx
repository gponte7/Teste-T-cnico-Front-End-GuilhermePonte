'use client'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import Image from 'next/image'

import f1Logo from '@/../public/f1-2024-thumb.jpg'
import aloneInTheDarkLogo from '@/../public/alone-in-the-dark-thumb.jpg'
import spidermanLogo from '@/../public/spider-man-2-thumb.jpeg'
import outlastLogo from '@/../public/outlast-thumb.jpg'

export function Carousel() {
  const settings = {
    infinite: true,
    speed: 500,
    autoplaySpeed: 3000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  }

  return (
    <div>
      <Slider {...settings}>
        <div>
          <Image
            className="rounded-xl h-52 md:h-96 lg:h-[500px] 2xl:h-[700px]"
            alt=""
            src={spidermanLogo}
            width={1920}
            height={1080}
            quality={100}
          />
        </div>
        <div>
          <Image
            className="rounded-xl h-52 md:h-96 lg:h-[500px] 2xl:h-[700px]"
            alt=""
            src={f1Logo}
            quality={100}
            width={1920}
            height={1080}
          />
        </div>
        <div>
          <Image
            className="rounded-xl h-52 md:h-96 lg:h-[500px] 2xl:h-[700px]"
            alt=""
            src={aloneInTheDarkLogo}
            quality={100}
            width={1920}
            height={1080}
          />
        </div>
        <div>
          <Image
            className="rounded-xl h-52 md:h-96 lg:h-[500px] 2xl:h-[700px]"
            alt=""
            src={outlastLogo}
            quality={100}
            width={1920}
            height={1080}
          />
        </div>
      </Slider>
    </div>
  )
}
