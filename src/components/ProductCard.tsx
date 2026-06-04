import Link from "next/link";

interface ProductCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  badge?: string;
  layout?: "default" | "horizontal";
}

export default function ProductCard({
  title,
  description,
  imageSrc,
  imageAlt,
  badge,
  layout = "default",
}: ProductCardProps) {
  if (layout === "horizontal") {
    return (
      <div className="bg-surface-container-low rounded-xl overflow-hidden soft-shadow group flex flex-row h-[190px]">
        <div className="w-2/5 overflow-hidden">
          <img
            alt={imageAlt}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            src={imageSrc}
          />
        </div>
        <div className="w-3/5 p-4 flex flex-col justify-center">
          <h3 className="font-noto-serif text-headline-sm text-on-background text-lg">
            {title}
          </h3>
          <p className="font-be-vietnam-pro text-body-md text-on-surface-variant text-sm mt-2 line-clamp-2">
            {description}
          </p>
          <Link
            href="#"
            className="inline-flex items-center gap-1 text-primary font-be-vietnam-pro text-label-sm hover:text-secondary transition-colors mt-auto"
          >
            Pesan{" "}
            <span className="material-symbols-outlined text-[16px]">
              arrow_forward
            </span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-surface-container-low rounded-xl overflow-hidden soft-shadow group">
      <div className="h-64 overflow-hidden relative">
        <img
          alt={imageAlt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          src={imageSrc}
        />
        {badge && (
          <div className="absolute top-4 left-4 bg-tertiary/90 backdrop-blur text-on-tertiary px-3 py-1 rounded-full font-be-vietnam-pro text-label-sm">
            {badge}
          </div>
        )}
      </div>
      <div className="p-6 space-y-4">
        <h3 className="font-noto-serif text-headline-sm text-on-background">
          {title}
        </h3>
        <p className="font-be-vietnam-pro text-body-md text-on-surface-variant">
          {description}
        </p>
        <Link
          href="#"
          className="inline-flex items-center gap-2 text-primary font-be-vietnam-pro text-label-lg hover:text-secondary transition-colors pt-2"
        >
          Pesan via WhatsApp{" "}
          <span className="material-symbols-outlined text-[20px]">
            arrow_forward
          </span>
        </Link>
      </div>
    </div>
  );
}
