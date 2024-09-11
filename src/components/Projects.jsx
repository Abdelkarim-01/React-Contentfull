import React from 'react'
import useFetchProjects from '../customHook/fetchProjects'
const Projects = () => {
  const {loading,projects} =useFetchProjects()
    
  if(loading){
    return (
        <section className="projects">
            <h2> Loading ...</h2>
        </section>
    )
  }

  return(
    <section className="projects">
        <div className="title">
            <h2>projects</h2>
            <div className="title-underline"></div>
        </div>
        <div className="projects-center">
            {
                projects.map(project=>{
                    const {id,url,title,img} =project
                    return <a key={id} href={url} target='_blank' rel='noreferrer' className='project'>
                        <img src={img} alt={title} className="img" />
                        <h5>{title}</h5>
                    </a>
                })
            }
        </div>
    </section>
  )
}
export default Projects ;