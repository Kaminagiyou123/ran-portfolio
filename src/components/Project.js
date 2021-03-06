import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";

export default function Project() {
  const [projectData, setProjectData] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type=="project"]{
      title,
      date,
      place,
      description,
      projectType,
      link,
      tags
    }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);
  return (
    <main className='bg-green-100 min-h-screen p-12'>
      <section className='container mx-auto'>
        <h1 className='text-5xl flex justify-center cursive font-bold'>
          My Projects
        </h1>
        <h2 className='text-lg text-grey-600 flex justify-center mb-12'>
          Welcome to my projects page
        </h2>
        <section className='grid grid-cols-2 gap-8 p-10 '>
          {projectData &&
            projectData.map((project, index) => {
              return (
                <article className='relative rounded-lg shadow-xl bg-white p=20 '>
                  <h3 className='text-grey-800 text-2xl font-bold mb-2 hover:text-green-800 pl-4'>
                    <a
                      href={project.link}
                      alt={project.title}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {project.title}
                    </a>
                  </h3>
                  <div className='text-gray-500 text-xs space-x-4 '>
                    <span className='pl-4'>
                      <strong className='font-bold'> Finished on</strong>:{" "}
                      {new Date(project.date).toLocaleDateString()}
                    </span>
                    {/* <span>
                      <strong className='font-bold'>Location</strong>:{" "}
                      {project.place}
                    </span> */}
                    <span>
                      <strong className='font-bold'>Type</strong>:{" "}
                      {project.projectType}
                    </span>
                    <p className='my-6 text-lg text-grey-700 leading-relaxed'>
                      {project.description}
                    </p>
                    <a
                      href={project.link}
                      alt={project.title}
                      rel='noopener noreferrer'
                      target='_blank'
                      className='font-bold hover:underline hover: text-green-800 text-xl mb-5 '
                    >
                      View the Project{" "}
                      <span role='img' aria-label='rightpointer'>
                        ????
                      </span>
                    </a>
                  </div>
                </article>
              );
            })}
        </section>
      </section>
    </main>
  );
}
