import { Head } from '@inertiajs/react'
import tvSvg from '/assets/tv.png'
import tvSvg2 from '/assets/tv2.png'
import tvSvg3 from '/assets/tv3.png'
import React from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faVolumeUp, faEye, faTv } from '@fortawesome/free-solid-svg-icons';

import plutoPng from '/assets/logos/pluto.png'
import cravePng from '/assets/logos/crave.png'
import peacockPng from '/assets/logos/peacock.png'
import FuboPng from '/assets/logos/fubo.png'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { router } from '@inertiajs/react';


import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'

import logo from '/assets/logos/adriche-logo.svg'

import adRicheGif from '/assets/adrichetargeting.gif'
import adRicheGif2 from '/assets/adrichetargeting2.gif'
export default function ConnectedTV() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  return (
    <div className="bg-[#FEF4E0] mx-auto">
      <Head title="Connected TV Advertising - Eskimi" />

      {/* <div className="relative min-h-screen bg-gradient-to-br from-[#fff7ef] to-white overflow-hidden"> */}
      {/* bg-gradient-to-br from-[#fffaf3] to-[#fffefe] */}
      {/* bg-[#fffefe] */}
      {/* bg-[#fef3d7] */}
      {/* bg-[#fef6e7] */}

      {/* Navigation */}
      <nav className=" top-0 left-0 right-0 flex justify-between items-center max-w-full px-30 mx-auto space-x-8  z-10">
        <div className="text-[#ea513f] text-3xl font-bold whitespace-nowrap">
          <img src={logo} onClick={() => router.visit('/connected-tv')} alt="Adriche Logo" className="h-40 w-40 " />
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#why-us" className="text-gray-700 hover:text-gray-900">Why Us</a>
          <a onClick={() => router.visit('/waitlist')} className="text-gray-700 hover:text-gray-900">Join the Waitlist</a>
          <a onClick={() => router.visit('/contact-us')} className="text-gray-700 hover:text-gray-900">Contact</a>
        </div>
        <div className="md:hidden">
          <button id="menu-toggle" className="text-gray-700 focus:outline-none">
            <span className="material-icons">menu</span>
          </button>
        </div>
      </nav>
      <div id="mobile-menu" className="hidden md:hidden px-4">
        <a href="#why-us" className="block py-2 text-gray-700 hover:bg-gray-100">Why Us</a>
        <a onClick={() => router.visit('/waitlist')} className="block py-2 text-gray-700 hover:bg-gray-100">Join the Waitlist</a>
        <a onClick={() => router.visit('/contact-us')} className="block py-2 text-gray-700 hover:bg-gray-100">Contact</a>
      </div>

      {/* Hero Section */}
      <main className="  bg-[#FEF4E0] h-[72vh] overflow-hidden grid md:grid-cols-3 xl:grid-cols-2  space-x-5   md:pr-0 lg:pr-30 xl:pt-10 w-full ">
        <div className="md:pl-0 lg:pl-30 space-y-0 xl:space-y-20 2xl:space-y-50 col-span-3 xl:col-span-1">
          <div className="space-y-6">
            <h1>
              <span className="text-xl xl:pt-4 px-4 w-screen mx-auto sm:pl-6 md:px-0 flex justify-center items-center lg:w-full md:text-4xl lg:text-5xl font-medium block leading-[1.5]">
                Advertise your business on Streaming TV
              </span>
            </h1>
            <p className="sm:px-4 lg:px-0 sm:w-screen xl:text-xl xl:text-2xl xl:w-[70%] md:px-0 lg:w-[90%] flex sm:justify-center lg:justify-start text-gray-600 leading-relaxed">
              Reach your ideal audience by running powerful campaigns on Streaming TV
            </p>
          </div>
         
          <div className="hidden xl:block space-y-4">
          <p className="text-sm hidden lg:block text-gray-500">
            * Currently only available in Canada
          </p>
          <button className=" bg-[#ea513f] text-white px-10 py-4 rounded-full text-xl hover:bg-[#7048d1] transition-colors">
            Book a demo
          </button>
          </div>
        </div>

        <div className="col-span-3 xl:col-span-1 md:pl-5">
          <img 
            src={tvSvg3}
            alt="Connected TV Display"
            className="w-[100%] max-w-[1200px] h-auto object-contain  z-10  lg:translate-x-0 md:scale-100 xl:scale-115 2xl:scale-120"
          />
        </div>
          <div className=" col-span-3 mx-auto pt-10 flex items-center justify-center xl:hidden ">
          <button className="bg-[#ea513f] text-white p-4 px-8 rounded-full hover:bg-[#7048d1] transition-colors">
            Book a demo
          </button>
          </div>
      </main>

        
      {/* Background decoration */}
      {/* <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-gradient-to-r from-[#f4bc63]/30 to-transparent rounded-full blur-3xl -z-10"></div> */}
   

    <div style={{ backgroundColor: '#1f2125' }} className="text-white py-16 max-w-full mx-auto px-4 rounded-lg">
      
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
        Reach your ideal audience with pinpoint accuracy
        </h2>
        
        <div className="text-center">
          <img src={adRicheGif2} alt="Benefits of CTV advertising" className="mx-auto" />
        </div>
        <div className="text-center mt-12">
          <button className="bg-[#ea513f] text-white px-6 py-3 rounded-full hover:bg-[#7048d1] transition-colors">
            Book a demo
          </button>
        </div>
      </div>
    </div>

  <div id="why-us" className="hidden  xl:block space-x-10 py-16 pr-30 items-center bg-white">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold pl-15">
          Elevate your marketing strategy with placements across premium channels and apps that deliver results.
        </h2>
      </div>
      <Slider {...settings}>
        <div className="-px-20">
          <img src={peacockPng} alt="Slide 1" className="w-3/4 h-48 mx-auto" />
        </div>
        <div className="-px-20">
          <img src={cravePng} alt="Slide 2" className="w-3/4 h-48 mx-auto" />
        </div>
        <div className="-px-20">
          <img src={plutoPng} alt="Slide 3" className="w-3/4 h-48 mx-auto" />
        </div>
        <div className="-px-20">
          <img src={FuboPng} alt="Slide 4" className="w-3/4 h-48 mx-auto" />
        </div>
      </Slider>
    </div>

    {/* New Section: Why Advertise on Streaming TV */}
    <div className="py-10 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Why Advertise on Streaming TV?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="text-center">
            <CardHeader>
              <span className="material-icons text-3xl mb-2">gps_fixed</span>
              <CardTitle className="text-xl font-semibold mb-2">Advanced Targeting</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Reach your audience based on location, device type, mobile operator, app inventory, time of day, and more.</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <span className="material-icons text-3xl mb-2">volume_up</span>
              <CardTitle className="text-xl font-semibold mb-2">Engaging Ad Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Capture attention with autoplay sound, ensuring your ads are both seen and heard.</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <span className="material-icons text-3xl mb-2">visibility</span>
              <CardTitle className="text-xl font-semibold mb-2">Exceptional Viewability</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Achieve high performance—many campaigns reach up to 100% ad completion rates.</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <span className="material-icons text-3xl mb-2">tv</span>
              <CardTitle className="text-xl font-semibold mb-2">Audience-Friendly Format</CardTitle>
            </CardHeader>
            <CardContent>
              <p>CTV ads are generally viewed as less intrusive compared to other advertising channels.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>

    {/* Footer Section */}
    <footer className="bg-[#1f2125] text-white py-12">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          {/* <img src="/path/to/logo.png" alt="CompCrafter Logo" className="h-8" /> */}
          <span className="font-bold">Adriche</span>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:underline">LinkedIn</a>
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Terms</a>
        </div>
        
      </div>
      <div className="text-center mt-4">
        <p className="text-sm">
          © {new Date().getFullYear()} Adriche. All Rights Reserved.
        </p>
      </div>
    </footer>
  </div>
)
} 