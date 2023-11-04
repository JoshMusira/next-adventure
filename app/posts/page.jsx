import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Posts from '@/components/Posts'
import React from 'react'

const page = () => {
    return (
        <>
            <Navbar />
            <Posts />
            <Footer />
        </>
    )
}

export default page