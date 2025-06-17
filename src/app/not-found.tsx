import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="flex h-screen">
        <div className="m-auto text-center p-12">
            <h2 className='text-5xl md:text-7xl font-bold tracking-tighter leading-tight pb-4'>404 - PAGE NOT FOUND</h2>
            <p className='text-base md:text-xl pb-8'>The page you are looking for might have been moved, had it name changed or is temporarily unavailable</p>
            <Link href="/" className='mx-3 text-lg font-bold hover:underline underline-offset-4 p-2'>
                GO TO HOMEPAGE
            </Link>
        </div>
    </div>
  )
}