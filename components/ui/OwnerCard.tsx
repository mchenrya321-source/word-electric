import { type Owner } from "@/lib/site-config";

interface OwnerCardProps {
  owner: Owner;
}

export function OwnerCard({ owner }: OwnerCardProps) {
  return (
    <div className="rounded-xl border border-gray-100 bg-light-gray p-5">
      <h3 className="font-semibold text-charcoal">{owner.name}</h3>
      <p className="mt-0.5 text-sm text-muted">{owner.role}</p>
      <a
        href={`tel:${owner.tel}`}
        className="mt-3 inline-block text-base font-semibold text-charcoal transition-colors hover:text-gold md:text-lg"
      >
        {owner.phone}
      </a>
    </div>
  );
}
