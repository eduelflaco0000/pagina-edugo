import Image, { type ImageProps } from "next/image";

/**
 * next/image con soporte para SVG (los SVG se sirven sin optimizar).
 * Las fotos JPG/PNG/WebP se optimizan y redimensionan automáticamente.
 */
export function GalleryImage({ src, alt, ...props }: ImageProps & { src: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      unoptimized={src.endsWith(".svg")}
      draggable={false}
      {...props}
    />
  );
}
