import React from 'react';
import { useParams } from 'react-router-dom';

const Projectinfo = ({ projects }) => {
    const { id } = useParams()
    const project = projects.find((project) => project.id === +id)
    return (
        <div className="projects__body">
            <div className="container projects__container">
                <div className="row projects__row">
                    
                </div>
            </div>
        </div>
    );
}

export default Projectinfo;
