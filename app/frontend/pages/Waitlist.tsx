import React from 'react';
import logo from '/assets/logos/adriche-logo.svg'
import { Card, CardContent } from '@/components/ui/card';
import { router } from '@inertiajs/react';
export default function Waitlist() {
  return (
    <div  className="bg-[#FEF4E0]">
    <nav className="fixed top-0 left-0 right-0 flex justify-between items-center max-w-full px-30 mx-auto space-x-8 bg-[#FEF4E0] z-10">
        <div className="text-[#ea513f] text-3xl font-bold whitespace-nowrap">
          <img src={logo} onClick={() => router.visit('/connected-tv')} alt="Adriche Logo" className="h-40 w-40 " />
        </div>
        <div className="hidden md:flex space-x-8">
          <a  onClick={()=>router.visit('/connected-tv#why-us')} className="text-gray-700 hover:text-gray-900">Why Us</a>
          <a onClick={() => router.visit('/waitlist')} className="text-gray-700 hover:text-gray-900">Join the Waitlist</a>
          <a onClick={() => router.visit('/contact-us')} className="text-gray-700 hover:text-gray-900">Contact</a>
        </div>
        <div className="md:hidden">
          <button id="menu-toggle" className="text-gray-700 focus:outline-none">
            <span className="material-icons">menu</span>
          </button>
        </div>
      </nav>

      
      <div className="bg-[#FEF4E0] pt-30 md:pt-5">

        <div style={{ height: 'calc(100vh - 80px)', overflow: 'hidden', backgroundColor: '#FEF4E0' }}>
          <div style={{ position: 'relative', height: '100%', overflow: 'hidden' }}>
            <iframe
              src="https://tally.so/r/3y1dK8?transparentBackground=1"
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                border: 0,
                width: '100%',
                height: '100%',
                margin: 0,
                padding: 0,
              }}
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Be the first to know when Adriche Launches"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}