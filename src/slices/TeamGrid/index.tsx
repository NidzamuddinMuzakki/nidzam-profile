import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";
// import { createClient } from "@/prismicio";
import { Content } from "@prismicio/client";
import { PrismicText, SliceComponentProps } from "@prismicio/react";
import React from "react";
import { Skater } from "./Skater";
import { SlideIn } from "@/components/SlideIn";

/**
 * Props for `TeamGrid`.
 */
export type TeamGridProps = SliceComponentProps<Content.TeamGridSlice>;

/**
 * Component for "TeamGrid" Slices.
 */
const skaters = [
  {
    id: 'Z1c3CRMAACgA475B',
    uid: 'sophie-castillo',
    url: null,
    type: "skater",
    href: 'https://suburbia.cdn.prismic.io/api/v2/documents/search?ref=Z2i-XxIAAC4AC__C&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22Z1c3CRMAACgA475B%22%29+%5D%5D',
    tags: [],
    first_publication_date: '2024-12-09T18:29:30+0000',
    last_publication_date: '2024-12-23T01:33:54+0000',
    slugs: [ 'sophie' ],
    linked_documents: [],
    lang: 'en-us',
    alternate_languages: [],
    data: {
      first_name: 'My',
      last_name: 'Team',
      photo_background: {
        dimensions: { width: 900, height: 1218 },
        alt: null,
        copyright: null,
        url: 'https://images.prismic.io/suburbia/Z1NbqpbqstJ98Lhy_sophie-back.png?auto=format,compress',
        id: 'Z1NbqpbqstJ98Lhy',
        edit: { x: 0, y: 0, zoom: 1, background: 'transparent' }
      },
      photo_foreground: {
        dimensions: { width: 900, height: 1218 },
        alt: null,
        copyright: null,
        url: 'https://nidzamuddinmuzakki.netlify.app//1742314289210.jpg',
        id: 'Z1NbqZbqstJ98Lhx',
        edit: { x: 0, y: 0, zoom: 1, background: 'transparent' }
      },
      customizer_link: {
        link_type: 'Web',
        key: '20ccae56-6a19-4306-8cd9-b2504de9d2ae',
        // url: '/build?wheel=yellow&deck=yellow-and-black&truck=black&bolt=yellow'
      }
    }
  },
  {
    id: 'Z1dAIBMAAC4A48yG',
    uid: 'dylan-foster',
    url: null,
    type: "skater",
    href: 'https://suburbia.cdn.prismic.io/api/v2/documents/search?ref=Z2i-XxIAAC4AC__C&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22Z1dAIBMAAC4A48yG%22%29+%5D%5D',
    tags: [],
    first_publication_date: '2024-12-09T19:08:17+0000',
    last_publication_date: '2024-12-23T01:34:29+0000',
    slugs: [ 'dylan' ],
    linked_documents: [],
    lang: 'en-us',
    alternate_languages: [],
    data: {
      first_name: 'Ollie',
      last_name: 'Style',
      photo_background: {
        dimensions: { width: 900, height: 1218 },
        alt: null,
        copyright: null,
        url: 'http://images.prismic.io/suburbia/Z1Nbq5bqstJ98Lh0_dylan-back.png?auto=format,compress',
        id: 'Z1Nbq5bqstJ98Lh0',
        edit: { x: 0, y: 0, zoom: 1, background: 'transparent' }
      },
      photo_foreground: {
        dimensions: { width: 900, height: 1218 },
        alt: null,
        copyright: null,
        url: 'https://nidzamuddinmuzakki.netlify.app//1742314303674 (1).jpg',

        id: 'Z1NbpZbqstJ98Lhr',
        edit: { x: 0, y: 0, zoom: 1, background: 'transparent' }
      },
      customizer_link: {
        link_type: 'Web',
        key: 'cc50e22d-39b3-4583-a571-e83b39e4d115',
        // url: '/build?wheel=yellow&deck=grid-streaks&truck=black&bolt=yellow'
      }
    }
  },
  
]
const TeamGrid = async ({ slice }: TeamGridProps): Promise<JSX.Element> => {

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-texture bg-brand-navy"
    >
      <SlideIn>
        <Heading as="h2" size="lg" className="mb-8 text-center text-white">
          <PrismicText field={slice.primary.heading} />
        </Heading>
      </SlideIn>
      <div className="grid grid-cols-2 gap-20 md:grid-cols-2" style={{justifyContent:'center'}}>
        {skaters.map((skater, index) => (
          <React.Fragment key={index}>
            {skater.data.first_name && (
              <SlideIn>
                <Skater index={index} skater={skater} />
              </SlideIn>
            )}
          </React.Fragment>
        ))}
      </div>
    </Bounded>
  );
};

export default TeamGrid;
