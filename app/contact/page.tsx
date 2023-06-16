import Image from 'next/image'
import Link from 'next/link'

export default function Contact() {
  return (
    <>
      <div className="relative flex w-full place-items-center max-w-3xl p-8">
          <div className="main-content">
            <h1 className='text-4xl leading-normal mb-4'>Contact</h1>

            <div>
                <a href="mailto:a@anisul.com">a@anisul.com</a>
            </div>
          </div>
      </div>
    </>
  )
}