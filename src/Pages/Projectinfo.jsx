import React from 'react';
import { useParams } from 'react-router-dom';

const Projectinfo = ({ projects }) => {
    const { id } = useParams()
    const project = projects.find((project) => project.id === +id)
    return (
        <h1>{project.title} test</h1>
    );
}

export default Projectinfo;
