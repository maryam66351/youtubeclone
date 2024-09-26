import React from 'react'
import Feed from "./Feed"
import Sidebar from "./Sidebar"

function Home({shrink, category, setCategory}) {
    return (
        <>
            <div className='flex'>
                <Sidebar shrink={shrink} category={category} setCategory={setCategory} />
                <Feed shrink={shrink} category={category} />

            </div>



        </>
    )
}

export default Home