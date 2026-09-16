import Image from "next/image";

type CsImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  align?: "left" | "center";
  priority?: boolean;
};

export function CsImage({
  src,
  alt,
  width,
  height,
  caption,
  align = "left",
  priority = false,
}: CsImageProps) {
  return (
    <figure className={align === "center" ? "cs-figure cs-figure--center" : "cs-figure"}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes="(max-width: 1250px) 100vw, 1168px"
        priority={priority}
      />
      {caption ? <figcaption className="cs-caption">{caption}</figcaption> : null}
    </figure>
  );
}
