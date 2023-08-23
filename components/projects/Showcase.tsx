import React from "react";
import {MdDateRange,MdLocationOn} from "react-icons/md";

const projects = [
  {
    name: '3DC Website',
    description: 'This website was built using Next.js, Tailwind CSS, and TypeScript. It is hosted on Vercel.',
    date: '04/08/23 3pm',
    venue: 'Thinktank 13 2.307',
    type: 'Project',
    href: '',
    image:'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg',
  },

  {
    name: '3DC Website a very very very very very long title',
    description: 'This website was built using Next.js, Tailwind CSS, and TypeScript. It is hosted on Vercel. It is hosted on Vercel.It is hosted on Vercel.It is hosted on Vercel.',
    date: '04/08/23 3pm',
    venue: 'Thinktank 13 2.307',
    type: 'Event',
    href: '',
    image:'https://images.ctfassets.net/hrltx12pl8hq/3j5RylRv1ZdswxcBaMi0y7/b84fa97296bd2350db6ea194c0dce7db/Music_Icon.jpg',
  },
  {
    name: '3DC Website',
    description: 'This website was built using Next.js, Tailwind CSS, and TypeScript. It is hosted on Vercel.',
    date: '04/08/23 3pm',
    venue: 'Thinktank 13 2.307',
    type: 'Project',
    href: '',
    image:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
  },

  {
    name: '3DC Website a very very very very very long title',
    description: 'This website was built using Next.js, Tailwind CSS, and TypeScript. It is hosted on Vercel. It is hosted on Vercel.It is hosted on Vercel.It is hosted on Vercel.',
    date: '04/08/23 3pm',
    venue: 'Thinktank 13 2.307',
    type: 'Workshop',
    href: '',
  },  {
    name: '3DC Website',
    description: 'This website was built using Next.js, Tailwind CSS, and TypeScript. It is hosted on Vercel.',
    date: '04/08/23 3pm',
    venue: 'Thinktank 13 2.307',
    type: 'Workshop',
    href: '',
    image:'https://th.bing.com/th/id/OIG.CO2sHWK_IEYIwzXsC2hX',
  },

  {
    name: '3DC Website a very very very very very long title',
    description: 'This website was built using Next.js, Tailwind CSS, and TypeScript. It is hosted on Vercel. It is hosted on Vercel.It is hosted on Vercel.It is hosted on Vercel.',
    date: '04/08/23 3pm',
    venue: 'Thinktank 13 2.307',
    type: 'Project',
    href: '',
    image:'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
  },

];

function ShowcaseCard(props) {
  const { name, description, href, date, venue, type} = props;
  var shortdesc = ''
  if (description.length < 120){shortdesc = description}
  else {shortdesc = description.slice(0,90)+"..."}
  var shorttitle = ''
  if (name.length < 36){shorttitle = name}
  else {shorttitle = name.slice(0,36)+"..."}

  return (
    <a href={props.href}><div className="bg-white border border-gray-200 hover:-translate-y-1 overflow-auto rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] w-60 h-full">
      <img className="rounded-t-lg object-cover h-40 w-60 aspect-video" src={props.image} alt=""/>
      <p className="px-5 pt-3 text-xs text-gray-400 font-bold">{props.type}</p>

      
      <h5 className= "px-5 pt-3 text-xl font-bold tracking-tight text-gray-900">
        {shorttitle}
        {/* {props.name} */}
      </h5>
      <div className="px-5 py-3">
        <div className="flex"><MdDateRange/> <p className="px-2 text-sm"> {props.date}</p></div>
        <div className="flex"><MdLocationOn/><p className="px-2 text-sm">{props.venue}</p></div>
      </div>
      
      <p className="px-5 pb-5 text-gray-700">
        {shortdesc}
      </p>

    </div></a>


  );
}

//const getData = async (id: string) => {
//   const res = await fetch(`http://localhost:3000/api/projects/`, {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("Failed!");
//   }

//   return res.json();
// };


export default function Showcase() {
  return (
      // <div className="px-4 py-4 grid sm:grid-cols-1 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
      <div className="px-4 py-4 flex gap-4 overflow-auto">
        {projects.map((project) => (
          <ShowcaseCard {...project} />
        ))}
      </div>
  );
}