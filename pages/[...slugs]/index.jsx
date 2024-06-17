import { useRouter } from 'next/router'
import React from 'react'

const DynamicPage = () => {
    const router = useRouter();
    console.log(router.query?.slugs);


  return (
    <div>DynamicPage</div>
  )
}

export default DynamicPage