
import { cn } from "@/lib/utils";
import BlurryCard from "../ui/BlurryCard";

interface PricingCategory {
  category: string;
  items: {
    service: string;
    prices: {
      small: string;
      medium: string;
      large: string;
      extraLarge?: string;
    };
  }[];
}

const PricingTable = () => {
  const pricingData: PricingCategory[] = [
    {
      category: "Basic Services",
      items: [
        {
          service: "Bath & Brush",
          prices: {
            small: "$35-45",
            medium: "$50-60",
            large: "$65-80",
            extraLarge: "$85-110",
          },
        },
        {
          service: "Full Grooming",
          prices: {
            small: "$55-65",
            medium: "$70-85",
            large: "$90-110",
            extraLarge: "$115-140",
          },
        },
        {
          service: "Nail Trim",
          prices: {
            small: "$15",
            medium: "$15",
            large: "$20",
            extraLarge: "$25",
          },
        },
        {
          service: "Face Trim",
          prices: {
            small: "$15",
            medium: "$20",
            large: "$25",
            extraLarge: "$30",
          },
        },
      ],
    },
    {
      category: "Specialty Services",
      items: [
        {
          service: "De-shedding Treatment",
          prices: {
            small: "$25",
            medium: "$35",
            large: "$45",
            extraLarge: "$60",
          },
        },
        {
          service: "Teeth Cleaning",
          prices: {
            small: "$12",
            medium: "$15",
            large: "$18",
            extraLarge: "$20",
          },
        },
        {
          service: "Flea Treatment",
          prices: {
            small: "$15",
            medium: "$20",
            large: "$25",
            extraLarge: "$30",
          },
        },
        {
          service: "Paw Moisturizing",
          prices: {
            small: "$10",
            medium: "$10",
            large: "$15",
            extraLarge: "$15",
          },
        },
      ],
    },
  ];

  return (
    <div className="space-y-10">
      {pricingData.map((category, index) => (
        <div key={index}>
          <h3 className="text-2xl font-display font-semibold mb-4">{category.category}</h3>
          <BlurryCard className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 px-4 text-left font-medium">Service</th>
                  <th className="py-3 px-4 text-left font-medium">Small<br/><span className="text-xs text-muted-foreground">(0-25 lbs)</span></th>
                  <th className="py-3 px-4 text-left font-medium">Medium<br/><span className="text-xs text-muted-foreground">(26-50 lbs)</span></th>
                  <th className="py-3 px-4 text-left font-medium">Large<br/><span className="text-xs text-muted-foreground">(51-80 lbs)</span></th>
                  <th className="py-3 px-4 text-left font-medium">X-Large<br/><span className="text-xs text-muted-foreground">(81+ lbs)</span></th>
                </tr>
              </thead>
              <tbody>
                {category.items.map((item, i) => (
                  <tr key={i} className={cn(i % 2 === 0 ? "bg-background/50" : "bg-transparent")}>
                    <td className="py-3 px-4 font-medium">{item.service}</td>
                    <td className="py-3 px-4">{item.prices.small}</td>
                    <td className="py-3 px-4">{item.prices.medium}</td>
                    <td className="py-3 px-4">{item.prices.large}</td>
                    <td className="py-3 px-4">{item.prices.extraLarge}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </BlurryCard>
        </div>
      ))}

      <div className="bg-petcare-green/20 border border-petcare-green/30 rounded-xl p-4 mt-8">
        <p className="text-sm">
          <strong>Note:</strong> Prices may vary based on coat condition, breed-specific requirements, and additional services requested. Matted coats may incur additional charges. Please ask for a precise quote during consultation.
        </p>
      </div>
    </div>
  );
};

export default PricingTable;
