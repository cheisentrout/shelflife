import { ToyCondition, DevelopmentalDomain } from "@prisma/client";

export const demoToys = [
  {
    id: "1",
    title: "Rainbow Wooden Blocks",
    condition: ToyCondition.LIKE_NEW,
    developmentalDomains: [
      DevelopmentalDomain.FINE_MOTOR,
      DevelopmentalDomain.COGNITIVE,
      DevelopmentalDomain.CREATIVE,
    ],
    city: "Portland",
    state: "OR",
    photos: [
      "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800",
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=800",
    ],
    user: {
      name: "Sarah",
    },
  },
  {
    id: "2",
    title: "Plush Bear Friend",
    condition: ToyCondition.WELL_LOVED,
    developmentalDomains: [DevelopmentalDomain.SOCIAL_EMOTIONAL, DevelopmentalDomain.LANGUAGE],
    city: "Seattle",
    state: "WA",
    photos: ["https://images.unsplash.com/photo-1530325553241-4f6e7690cf36?w=800"],
    user: {
      name: "Michael",
    },
  },
  {
    id: "3",
    title: "Vintage Race Car",
    condition: ToyCondition.EXCELLENT,
    developmentalDomains: [DevelopmentalDomain.GROSS_MOTOR, DevelopmentalDomain.CREATIVE],
    city: "Eugene",
    state: "OR",
    photos: ["https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=800"],
    user: {
      name: "Jessica",
    },
  },
  {
    id: "4",
    title: "Musical Xylophone",
    condition: ToyCondition.GOOD,
    developmentalDomains: [
      DevelopmentalDomain.SENSORY,
      DevelopmentalDomain.FINE_MOTOR,
      DevelopmentalDomain.COGNITIVE,
      DevelopmentalDomain.CREATIVE,
    ],
    city: "Portland",
    state: "OR",
    photos: [],
    user: {
      name: "Alex",
    },
  },
];
