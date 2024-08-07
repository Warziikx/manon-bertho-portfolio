import type { Page, PageBlocks } from "../tina/__generated__/types";
import { Content } from "./blocks/content";
import { CTA } from "./blocks/cta";
import { Features } from "./blocks/features";
import { Hero } from "./blocks/hero";
import { Marquee } from "./blocks/marquee";
import { NumberFeatures } from "./blocks/number_features";
import { Presentation } from "./blocks/presentation";
import { Prestation } from "./blocks/prestation";
import { Shop } from "./blocks/shop";
import { Testimonial } from "./blocks/testimonial";
import { tinaField } from "tinacms/dist/react";

export const Blocks = (props: Omit<Page, "id" | "_sys" | "_values">) => {
  return (
    <>
      {props.blocks
        ? props.blocks.map(function (block, i) {
            return (
              <div key={i} data-tina-field={tinaField(block)}>
                <Block {...block} />
              </div>
            );
          })
        : null}
    </>
  );
};

const Block = (block: PageBlocks) => {
  switch (block.__typename) {
    case "PageBlocksContent":
      return <Content data={block} />;
    case "PageBlocksHero":
      return <Hero data={block} />;
    case "PageBlocksFeatures":
      return <Features data={block} />;
    case "PageBlocksNumberFeatures":
      return <NumberFeatures data={block} />;
    case "PageBlocksPresentation":
      return <Presentation data={block} />;
    case "PageBlocksTestimonial":
      return <Testimonial data={block} />;
    case "PageBlocksCta":
      return <CTA data={block} />;
    case "PageBlocksShop":
      return <Shop data={block} />;
    case "PageBlocksPrestation":
      return <Prestation data={block} />;
      case "PageBlocksMarquee":
        return <Marquee data={block} />;
    default:
      return null;
  }
};
