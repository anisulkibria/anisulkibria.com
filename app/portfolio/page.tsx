import Image from 'next/image'
import Link from 'next/link'

export default function Portfolio() {
  return (
    <>
      <div className="relative flex w-full place-items-center max-w-3xl xl:p-8">
          <div className="main-content">
            <h1 className='text-4xl leading-normal mb-4'>Portfolio</h1>

            <div className="projects">
            <div className='my-4'>
                    <h3 className='project'>
                        <Link href="/">React.JS</Link>
                    </h3>
                </div>
                <div className='my-4'>
                    <h3 className='project'>
                        <Link href="https://themefantome.com">Ghost Themes</Link>
                    </h3>
                </div>
                <div className='my-4'>
                    <h3 className='project'>
                        <Link href="https://anisul.com">My Portfolio</Link>
                    </h3>
                </div>
            </div>
          </div>
      </div>
    </>
  )
}