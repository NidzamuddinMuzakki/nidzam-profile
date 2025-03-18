import {  isFilled } from "@prismicio/client";
// import { PrismicNextImage } from "@prismicio/next";
// import { FaStar } from "react-icons/fa6";

// import { createClient } from "@/prismicio";
// import { ButtonLink } from "@/components/ButtonLink";
import { HorizontalLine, VerticalLine } from "@/components/Line";
import clsx from "clsx";
import { Scribble } from "./Scribble";

// async function getDominantColor(url: string) {
//   const paletteURL = new URL(url);
//   paletteURL.searchParams.set("palette", "json");

//   const res = await fetch(paletteURL);
//   const json = await res.json();

//   return (
//     json.dominant_colors.vibrant?.hex || json.dominant_colors.vibrant_light?.hex
//   );
// }

type Props = {
  id: string;
};

const VERTICAL_LINE_CLASSES =
  "absolute top-0 h-full stroke-2 text-stone-300 transition-colors group-hover:text-stone-400";

const HORIZONTAL_LINE_CLASSES =
  "-mx-8 stroke-2 text-stone-300 transition-colors group-hover:text-stone-400";
const mm = [{
  id: 'Z1TLsBEAAC0ASgxF',
  uid: 'oni-mask',
  url: null,
  type: 'skateboard',
  href: 'https://www.instagram.com/reel/DHHOFdCzLjredywY4392dTNrIQ_JtbCiORcCwA0/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  tags: [],
  first_publication_date: '2024-12-07T22:26:58+0000',
  last_publication_date: '2024-12-23T01:31:14+0000',
  slugs: [ 'oni-mask' ],
  linked_documents: [],
  lang: 'en-us',
  alternate_languages: [],
  data: {
    name: 'Aplikasi Antrian',
    image: {
      dimensions: { width: 475, height: 1697 },
      alt: null,
      copyright: null,
      url: 'https://nidzamuddinmuzakki.netlify.com/images/VID_20250318_071127_388.mp4',
      id: 'Z1Nbl5bqstJ98LhW',
      edit: { x: 0, y: 0, zoom: 1, background: 'transparent' }
    },
    price: 1,
    customizer_link: {
      link_type: 'Web',
      key: '311dcbbc-3427-47c9-bd6b-48c592c9fc86',
      url: '/build?wheel=cream&deck=oni-mask&truck=black&bolt=steel'
    }
  }
},
{
  id: 'Z1Tw-BEAACoASkCk',
  uid: 'pink-drop',
  url: null,
  type: 'skateboard',
  href: 'https://www.instagram.com/reel/Cgl05MkgclKryKaCjwo1hXP-RjM0McQwBlC4wU0/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  tags: [],
  first_publication_date: '2024-12-08T01:06:03+0000',
  last_publication_date: '2024-12-23T01:31:55+0000',
  slugs: [ 'pink-drop' ],
  linked_documents: [],
  lang: 'en-us',
  alternate_languages: [],
  data: {
    name: 'NiKi',
    image: {
      dimensions:{ width: 475, height: 1692 },
      alt: null,
      copyright: null,
      url: 'https://nidzamuddinmuzakki.netlify.com/images/VID_20250318_071224_8922.mp4',
      id: 'Z1NblZbqstJ98LhT',
      edit: { x: 0, y: 0, zoom: 1, background: 'transparent' }
    },
    price: 2,
    customizer_link: {
      link_type: 'Web',
      key: '6cd5d6c8-c86d-41c2-b417-23d886ba2e9b',
      url: '/build?wheel=cream&deck=pink-swirl&truck=silver&bolt=silver'
    }
  }
},
{
  id: 'Z1Tw1xEAACwASkBy',
  uid: 'thank-you',
  url: null,
  type: 'skateboard',
  href: 'https://www.instagram.com/reel/Chmo6f1AfIO3tAsWFx2utwj4kVsLXa43xm_h-A0/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  tags: [],
  first_publication_date: '2024-12-08T01:05:29+0000',
  last_publication_date: '2024-12-23T01:33:07+0000',
  slugs: [ 'thank-you' ],
  linked_documents: [],
  lang: 'en-us',
  alternate_languages: [],
  data: {
    name: 'Netflix Clone',
    image: {
      dimensions: { width: 475, height: 1695 },
      alt: null,
      copyright: null,
      url: 'https://nidzamuddinmuzakki.netlify.com/images/VID_20250318_071217_0172.mp4',
      id: 'Z1NblpbqstJ98LhV',
      edit:{ x: 0, y: 0, zoom: 1, background: 'transparent' }
    },
    price: 3,
    customizer_link: {
      link_type: 'Web',
      key: 'f34bba36-7e72-49e9-8f2c-174605ecbe31',
      url: '/build?wheel=red&deck=thank-you&truck=silver&bolt=silver'
    }
  }
},
{
  id: 'Z1TxGxEAAC4ASkDa',
  uid: 'yellow-and-black',
  url: null,
  type: 'skateboard',
  href: 'https://www.instagram.com/reel/CgZvq7gB4iiq9sBLnqo83kQMTE631Bygfq-bow0/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  tags: [],
  first_publication_date: '2024-12-08T01:06:38+0000',
  last_publication_date: '2024-12-23T01:33:42+0000',
  slugs: [ 'yellow--black' ],
  linked_documents: [],
  lang: 'en-us',
  alternate_languages: [],
  data: {
    name: 'PizZam',
    image: {
      dimensions:{ width: 475, height: 1694 },
      alt: null,
      copyright: null,
      url: 'https://nidzamuddinmuzakki.netlify.com/images/VID_20250318_071233_2982.mp4',
      id: 'Z1NbmJbqstJ98LhY',
      edit: { x: 0, y: 0, zoom: 1, background: 'transparent' }
    },
    price: 4,
    customizer_link: {
      link_type: 'Web',
      key: 'a5d964b4-e655-471a-b427-0bac0a5611f1',
      url: '/build?wheel=yellow&deck=yellow-and-black&truck=black&bolt=yellow'
    }
  }
}]
export async function SkateboardProduct({ id }: Props) {
  // const client = createClient();
  // const product = await client.getByID<Content.SkateboardDocument>(id);
  // console.log(product.data.image.edit)
  const product =  mm.find(aa=>aa.id==id) 
  if(!product) {
    console.error('No data here!');
     return null
  }
  const price = isFilled.number(product.data.price)
    ? `${product.data.price}`
    : "Price Not Available";

  // const dominantColor = isFilled.image(product.data.image)
  //   ? await getDominantColor(product.data.image.url)
  //   : undefined;

  return (
    <div className="group relative mx-auto w-full max-w-72 px-8 pt-4 ">
      <VerticalLine className={clsx(VERTICAL_LINE_CLASSES, "left-4")} />
      <VerticalLine className={clsx(VERTICAL_LINE_CLASSES, "right-4")} />
      <HorizontalLine className={HORIZONTAL_LINE_CLASSES} />

      <div className="flex items-center justify-between ~text-sm/2xl">
        <span>{price}</span>
        {/* <span className="inline-flex items-center gap-1">
          <FaStar className="text-yellow-400" /> 37
        </span> */}
      </div>
      <div className="-mb-1 overflow-hidden py-4">
        <Scribble
          className="absolute inset-0 h-full w-full"
          // color={dominantColor}
        />
        <video   autoPlay={true} muted controls={false}  style={{height:'300px', width:'600px'}}>
          <source src={product.data.image.url} type="video/mp4"/>
          Your browser does not support the video tag.
        </video>
        {/* <PrismicNextImage
          alt=""
          field={product.data.image}
          width={150}
          className=" mx-auto w-[58%] origin-top transform-gpu transition-transform duration-500 ease-in-out group-hover:scale-150"
        /> */}
      </div>
      <HorizontalLine className={HORIZONTAL_LINE_CLASSES} />

      <h3 className="my-2 text-center font-sans leading-tight ~text-lg/xl">
        {product.data.name}
      </h3>

      {/* <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        <ButtonLink field={product.data.customizer_link}>See Details</ButtonLink>
      </div> */}
    </div>
  );
}
