import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
import eva from "../eva.jpg";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
const urlFor = (source) => {
  return builder.image(source);
};
export default function About() {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type=="author"]{
      name,
      bio,
      'authorImage':image.asset->url
    }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);
  if (!author) {
    return <h1>loading</h1>;
  }
  return (
    <main className='relative'>
      <img
        src={eva}
        alt='background'
        className='absolute w-full '
        style={{ opacity: 0.6 }}
      />
      <div className='p-10 lg:pt-48 container mx-auto relative'>
        <section className='bg-green-800 rounded-lg shadow-2xl lg:flex p-20'>
          <img
            src={urlFor(author.authorImage).url()}
            alt={author.name}
            className='rounded w-32 h-32 lg:w-64 mr-8'
          />
          <div className='text-lg flex flex-col justify-center'>
            <h1 className='cursive text-6xl text-green-300 mb-4'>
              About Me <span className='text-green-100'>ranyou@</span>
            </h1>
            <div className='prose lg-prose-xl text-white'>
              <BlockContent
                blocks={author.bio}
                projectId='x5k7yxzq'
                dataset='production'
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
