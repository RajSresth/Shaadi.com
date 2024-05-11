import React from 'react'
import Slider from "react-slick";
import img1 from "../assets/Vishal_image.jpg"
import img2 from "../assets/Alankar_image.jpg"
import img3 from "../assets/shashi_image.jpg"
import img4 from "../assets/Charmi_image.jpg"
import img5 from "../assets/srinesh_image.jpg"
import im6 from "../assets/Vishal_image.jpg"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardCarousal = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
    const data=[
        {
            img:img1,
            name:'Vishal & Vidya',
            review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, nesciunt ullam odit atque, sint quaerat ea maxime quia explicabo incidunt a pariatur ipsa doloremque eaque debitis. Laudantium '

        },
        {
            img:img2,
            name:'Alankar & Megha',
            review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, nesciunt ullam odit atque, sint quaerat ea maxime quia explicabo incidunt a pariatur ipsa doloremque eaque debitis. Laudantium '

        },
        {
            img:img3,
            name:'Dr Shashi & Dr Pooja',
            review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, nesciunt ullam odit atque, sint quaerat ea maxime quia explicabo incidunt a pariatur ipsa doloremque eaque debitis. Laudantium '

        },
        {
            img:img4,
            name:'Charmi & Udit',
            review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, nesciunt ullam odit atque, sint quaerat ea maxime quia explicabo incidunt a pariatur ipsa doloremque eaque debitis. Laudantium '

        },
        {
            img:img5,
            name:'Srinesh & Sanju',
            review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, nesciunt ullam odit atque, sint quaerat ea maxime quia explicabo incidunt a pariatur ipsa doloremque eaque debitis. Laudantium '

        },
        {
            img:img5,
            name:'Shubham & Nidhi',
            review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, nesciunt ullam odit atque, sint quaerat ea maxime quia explicabo incidunt a pariatur ipsa doloremque eaque debitis. Laudantium '

        }

    ]
  return (
    <div className='py-10 px-5 h-[515px] w-[1140px]'>
     <Slider {...settings} className=''>
        {
            data.map((val,i)=>{
                return(
                    <div key={i} className='w-[350px] h-[465px] card'>
                        <div>
                            <img src={val.img} className='h-[225px] w-[100%]'/>
                        </div>
                        <div className='px-4'>
                            <h3 className='text-[1.35rem] mb-2 mt-5'>{val.name}</h3>
                            <p className='text-[#83838d]'>{val.review}</p>
                        </div>
                    </div>
                )
            })
        }
     </Slider>

    </div>
  )
}

export default CardCarousal