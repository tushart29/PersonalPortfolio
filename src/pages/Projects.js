import React from 'react'
import Projectitem from '../components/Projectitem'
import { ProjectList } from '../helpers/ProjectList'


import '../styles/Project.css'
function Projects() {


    return (
        <div className='projects'>
            <h1>Projects</h1>
            {/* navigate will act like a redirect */}
            <div className='projectList'>

                {ProjectList.map((project, idx) => {
                    return <Projectitem id={idx} name={project.name} image={project.image} />
                })}

            </div>
        </div >
    )
}

export default Projects
