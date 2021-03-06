import React from 'react'

const ProjectDetails = (props) => {
    console.log(props)
    const id = props.match.params.id
    return (
        <div className="container section project-details ">
            <div className="card 1-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet </p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted By Bryce</div>
                    <div>Dec 2nd 8am</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
