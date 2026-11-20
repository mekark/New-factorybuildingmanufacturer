export type Office = {
  city: string;
  address: string;
};

export const OFFICES: Office[] = [
  {
    city: "Chennai · HQ",
    address:
      "5th Floor, Polyhose Towers, Anna Salai, Little Mount, Guindy, Chennai, TN 600032",
  },
  {
    city: "Bangalore",
    address: "22nd Cross Rd, Sector 2, HSR Layout, Bengaluru, Karnataka 560102",
  },
  {
    city: "Delhi",
    address:
      "Awfis, Mohan Cooperative, Ground Floor, 1st and 2nd Floor, A - 24/9, Mohan Co-operative Industrial Estate, Mathura Road, Saidabad Mohan C, Block B-1, Badarpur, New Delhi, Delhi",
  },
  {
    city: "Mumbai",
    address:
      "Parinee Crescenzo, 1st Floor, 1B-102, Kautilya Bhawan-2, BKC, G Block BKC, Bandra Kurla Complex, Bandra East, Mumbai, Maharashtra 400051",
  },
  {
    city: "Kolkata",
    address:
      "5th Floor, 83, Shyama Prasad Mukherjee Rd, Devi Market, Manoharpukur, Kalighat, Kolkata, West Bengal - 700026",
  },
];

export const OFFICE_SLOT: string[] = [
  "xl:col-start-1 xl:row-start-1",
  "xl:col-start-2 xl:row-start-1",
  "sm:max-xl:col-span-2 xl:col-start-3 xl:row-start-1 xl:row-span-2",
  "xl:col-start-1 xl:row-start-2",
  "xl:col-start-2 xl:row-start-2",
];