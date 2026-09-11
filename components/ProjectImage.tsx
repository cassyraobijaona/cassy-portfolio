import Image from "next/image";
import type { IconType } from "react-icons";

type ProjectImageProps = {
  image?: string;
  icon: IconType;
  alt: string;
};

export default function ProjectImage({ image, icon: Icon, alt }: ProjectImageProps) {
  if (image) {
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-surface">
        <Image src={image} alt={alt} fill className="object-cover" />
      </div>
    );
  }

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-gradient-to-br from-accent/20 via-surface to-accent-warm/10 flex items-center justify-center">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#F8FAFC 1px, transparent 1px), linear-gradient(90deg, #F8FAFC 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <Icon size={32} className="relative text-foreground/60" />
    </div>
  );
}
