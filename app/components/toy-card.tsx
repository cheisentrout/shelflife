//
import React from "react";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { DevelopmentalDomain, ToyCondition } from "@prisma/client";

interface ToyCardProps {
  toy: {
    id: string;
    title: string;
    condition: ToyCondition;
    developmentalDomains: DevelopmentalDomain[];
    city: string;
    state: string;
    photos: string[];
    user: {
      name: string;
    };
  };
}

// Helper to format condition labels
const conditionColors = {
  LIKE_NEW: "bg-emerald-500",
  EXCELLENT: "bg-blue-500",
  GOOD: "bg-amber-500",
  FAIR: "bg-orange-500",
  WELL_LOVED: "bg-purple-500",
};

const conditionLabels = {
  LIKE_NEW: "Like New",
  EXCELLENT: "Excellent",
  GOOD: "Good",
  FAIR: "Fair",
  WELL_LOVED: "Well Loved",
};

export default function ToyCard({ toy }: ToyCardProps) {
  return (
    <Link href={`/toys/${toy.id}`} className="block">
      <div className="h-full overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:shadow-md">
        {/* Image Section */}
        <div className="relative h-64 w-full overflow-hidden bg-stone-100">
          {toy.photos.length > 0 ? (
            <>
              <img src={toy.photos[0]} alt={toy.title} className="h-full w-full object-cover" />
              {/* Condition Badge */}
              <div
                className={`absolute left-4 top-4 rounded-full ${conditionColors[toy.condition]} px-4 py-1.5 text-sm font-medium text-white shadow-sm`}
              >
                {conditionLabels[toy.condition]}
              </div>
              {/* Photo indicator dots */}
              {toy.photos.length > 1 && (
                <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
                  {toy.photos.slice(0, 5).map((_, i) => (
                    <div key={i} className="h-1.5 w-1.5 rounded-full bg-white shadow-sm" />
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-2">
              <div className="text-6xl">📦</div>
              <p className="text-sm text-stone-400">No photos yet</p>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="p-5">
          {/* Title and Owner */}
          <div className="mb-3">
            <h3 className="text-xl font-semibold text-stone-800 mb-1">{toy.title}</h3>
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-full bg-stone-300" />
              <p className="text-sm text-stone-600">{toy.user.name}</p>
            </div>
          </div>

          {/* Location */}
          <div className="mb-4 flex items-center gap-1.5 text-sm text-stone-600">
            <MapPin className="h-4 w-4" />
            <span>{toy.city}</span>
          </div>

          {/* Developmental Domains */}
          <div className="flex flex-wrap gap-2">
            {toy.developmentalDomains.slice(0, 3).map((domain) => (
              <span
                key={domain}
                className="rounded-md bg-stone-100 px-3 py-1.5 text-xs font-medium text-stone-700"
              >
                {domain
                  .replace(/_/g, " ")
                  .toLowerCase()
                  .replace(/\b\w/g, (c) => c.toUpperCase())}
              </span>
            ))}
            {toy.developmentalDomains.length > 3 && (
              <span className="rounded-md bg-stone-100 px-3 py-1.5 text-xs font-medium text-stone-700">
                +{toy.developmentalDomains.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
