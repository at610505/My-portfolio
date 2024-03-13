import React from 'react'
import Image from 'next/image';

export default function Footer() {
    function getFullYear() {
        return new Date().getFullYear();
    }
  return (
    <footer className='p-10'>
        <div className="flex justify-center py-5">
            <div className="flex ">
                <Image className='mx-2 cursor-pointer' src="/GithubIcon.svg" alt="Facebook" width={30} height={30} />
                <Image className='mx-2 cursor-pointer' src="/InstaIcon.svg" alt="Facebook" width={30} height={30} />
                <Image className='mx-2 cursor-pointer' src="/TwitterIcon.svg" alt="Facebook" width={30} height={30} />
                <Image className='mx-2 cursor-pointer' src="/LinkedInIcon.svg" alt="Facebook" width={30} height={30} />
                <Image className='mx-2 cursor-pointer' src="/WhatsAppIcon.svg" alt="Facebook" width={30} height={30} />
            </div>
        </div>
        <div className='text-center'>Copyright &#169;{getFullYear()} All Right Reserved</div>
    </footer>
  )
}
