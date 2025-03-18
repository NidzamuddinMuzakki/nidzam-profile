import { Content, isFilled } from "@prismicio/client";
import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";

import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";
import { SkateboardProduct } from "./SkateboardProduct";
import { SlideIn } from "@/components/SlideIn";


/**
 * Props for `ProductGrid`.
 */
export type ProductGridProps = SliceComponentProps<Content.ProductGridSlice>;

/**
 * Component for "ProductGrid" Slices.
 */
const product =[
  {
    skateboard: {
      id: 'Z1TLsBEAAC0ASgxF',
      type: 'skateboard',
      tags: [],
      lang: 'en-us',
      slug: 'oni-mask',
      first_publication_date: '2024-12-07T22:26:58+0000',
      last_publication_date: '2024-12-23T01:31:14+0000',
      uid: 'oni-mask',
      link_type: 'Document',
      key: '20971ad4-d1fe-45cf-9d59-80ff9a8209cd',
      isBroken: false
    }
  },
  {
    skateboard: {
      id: 'Z1Tw-BEAACoASkCk',
      type: 'skateboard',
      tags: [],
      lang: 'en-us',
      slug: 'pink-drop',
      first_publication_date: '2024-12-08T01:06:03+0000',
      last_publication_date: '2024-12-23T01:31:55+0000',
      uid: 'pink-drop',
      link_type: 'Document',
      key: 'f14e2b3c-8915-48ce-9553-5b3cda7ce755',
      isBroken: false
    }
  },
  {
    skateboard: {
      id: 'Z1Tw1xEAACwASkBy',
      type: 'skateboard',
      tags: [],
      lang: 'en-us',
      slug: 'thank-you',
      first_publication_date: '2024-12-08T01:05:29+0000',
      last_publication_date: '2024-12-23T01:33:07+0000',
      uid: 'thank-you',
      link_type: 'Document',
      key: 'e4601dd3-635f-474f-9068-04e450067a3f',
      isBroken: false
    }
  },
  {
    skateboard: {
      id: 'Z1TxGxEAAC4ASkDa',
      type: 'skateboard',
      tags: [],
      lang: 'en-us',
      slug: 'yellow--black',
      first_publication_date: '2024-12-08T01:06:38+0000',
      last_publication_date: '2024-12-23T01:33:42+0000',
      uid: 'yellow-and-black',
      link_type: 'Document',
      key: '0e52085a-2ce6-468a-b1fa-d07068fb6108',
      isBroken: false
    }
  }
]
const ProductGrid = ({ slice }: ProductGridProps): JSX.Element => {
  // console.log(slice.primary.product)
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-texture"
    >
      <SlideIn>
        <Heading className="text-center ~mb-4/6" as="h2">
          <PrismicText field={
[
  {
    type: 'heading2',
    text: 'Project',
    spans: [],
    direction: 'ltr'
  }
]} />
        </Heading>
      </SlideIn>
      <SlideIn>
        <div className="text-center ~mb-6/10">
          {/* <PrismicRichText field={slice.primary.body} /> */}
        </div>
      </SlideIn>
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {product.map(
          ({ skateboard }) =>
            isFilled.contentRelationship(skateboard) && (
              <SkateboardProduct key={skateboard.id} id={skateboard.id} />
            )
        )}
      </div>
    </Bounded>
  );
};

export default ProductGrid;
