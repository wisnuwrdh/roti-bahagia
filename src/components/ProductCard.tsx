interface ProductCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export default function ProductCard({
  title,
  description,
  imageSrc,
  imageAlt,
}: ProductCardProps) {
  return (
    <div className="bg-surface-container-low rounded-xl overflow-hidden soft-shadow group">
      {/* Product Image */}
      <div className="aspect-[4/3] overflow-hidden">
        <img
          alt={imageAlt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          src={imageSrc}
        />
      </div>

      {/* Product Info */}
      <div className="p-4 md:p-5 space-y-2">
        <h3 className="font-noto-serif text-headline-sm text-on-background">
          {title}
        </h3>
        <p className="font-be-vietnam-pro text-body-md text-on-surface-variant leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  );
}
