import React from 'react'

type Props = {}

const BlogCard = (props: Props) => {
  return (
    <div className="flex justify-between items-center w-full">
    <p className='text-violet-800 cursor-pointer hover:text-pink-500'>
        Why you should learn type script
    </p>
    <p className='text-center text-sm text-violet-500 hidden md:block'>2023/20/12</p>

</div>
  )
}

export default BlogCard