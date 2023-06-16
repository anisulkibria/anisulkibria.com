import Image from 'next/image'
import Link from 'next/link'

export default function Testimonials() {
  return (
    <>
      <div className="relative flex w-full place-items-center max-w-3xl p-8">
          <div className="main-content">
            <h1 className='text-4xl leading-normal mb-4'>Testimonials</h1>

            <div className="testimonials">
                <div className='my-8'>
                    <h3 className='flex-1 text-xl text-justify'>Anisul is a great developer with tons of experience. Will recommend him to all needing great fast services.</h3>
                    <div className='text-end'>- Anoop</div>
                </div>
                <div className='my-8'>
                    <h3 className='flex-1 text-xl text-justify'>Thank you for the work you did on this project Anisul. I will most definitely work with you again.</h3>
                    <div className='text-end'>- Penny</div>
                </div>
                <div className='my-8'>
                    <h3 className='flex-1 text-xl text-justify'>Thank you Anisul. You are a great person. I will highly recommend you.</h3>
                    <div className='text-end'>- Mattheo</div>
                </div>
            </div>
          </div>
      </div>
    </>
  )
}