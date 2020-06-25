import React from 'react'
import Main from '../Contents/HomePage/Main'
import About from '../Contents/HomePage/About'
import WhatWeDo from '../Contents/HomePage/WhatWeDo'
import WhoWeServe from '../Contents/HomePage/WhoWeServe'
import WhatWepromise from '../Contents/HomePage/WhatWepromise'
import WhatWeCreated from '../Contents/HomePage/WhatWeCreated'


export default function Home() {
    return (
        <>
          <Main /> 
          <About /> 
          <WhatWeDo />
          <WhoWeServe />
          <WhatWeCreated />
          <WhatWepromise />

        </>
    )
}
