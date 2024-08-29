import { CardSummary } from "./components/CardSummary";
import { LastCustomers } from "./components/LastCustomers";
import { SalesDistributors } from "./components/SalesDistributors";

import { dataCardSummary } from "./components/CardSummary/CardSummary.data";
import { TotalSuscribers } from "./components/TotalSuscribers";
import { ListIntegrations } from "./components/ListIntegrations";

export default function Home() {
  return (
    <div>
      <h2 className="text-2xl mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-x-20">
        {dataCardSummary.map(
          ({ average, icon, id, title, tooltipText, total }) => (
            <CardSummary
              key={id}
              icon={icon}
              title={title}
              tooltipText={tooltipText}
              total={total}
              average={average}
            />
          )
        )}
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 md:gap-x-10 sm:gap-y-4 mt-12">
        <LastCustomers />
        <SalesDistributors />
      </div>

      <div className="flex-col xl:flex xl:flex-row md:gap-x-10 gap-y-4 md:gap-y-0 mt-12 md:mb-10 justify-center">
        <TotalSuscribers />
        <ListIntegrations />
      </div>
    </div>
  );
}
