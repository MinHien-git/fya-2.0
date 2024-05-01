import { useEffect, useState } from "react";
import SecondaryNavigationBar from "../../../components/SecondaryNavigationBar/SecondaryNavigationBar";
import ManagePortfolio from "../ManagePortfolio/ManagePortfolio";
import { Reorder } from "framer-motion";
import DragPortfolioCard from "../../../components/DragPortfolio/DragPortfolioCard";
import PortfolioCard from "../../../components/PortfolioCard/PortfolioCard";
import { GetPagePortfoilio } from "../../../api/lib/page";
import { useSelector } from "react-redux";
const initialItems = ["🍅 Tomato", "🥒 Cucumber", "🧀 Cheese", "🥬 Lettuce"];
export default function Portfolio() {
  const [state, setState] = useState(0);
  const [services, setServices] = useState<Array<any>>([]);
  const page_id = useSelector((state: any) => state.page.page_id);
  const [portfolioID, setPortfolioID] = useState<string>("");

  useEffect(() => {
    async function getData() {
      const result = await GetPagePortfoilio(page_id);
      if (result.data.data) {
        setServices(result.data.data);
        console.log(result);
      }
    }
    getData();
  }, [state]);
  return (
    <>
      {state === 0 ? (
        <section className="mt-5 mx-auto h-[80vh] flex flex-col px-12 gap-2">
          <h2 className="font-title text-[1.875rem] text-center font-bold pt-5">
            Portfolio
          </h2>
          <p className="mb-3 mt-3 font-normal text-gray-700 dark:text-gray-400 text-sm">
            Elevate your agency's professional image with Fya's Portfolio
            feature. Highlight your expertise, services, and skills through a
            collection of past work. As a results, this help you to enhance your
            search ranking and increase your chances of securing high-value
            projects using the
            <span className="text-primary font-bold"> Leads Extension.</span>
          </p>
          <p className="text-gray-400 text-xs mt-4 font-bold">
            The arrangement of your awards will be displayed on your Page.
          </p>
          <section className="grid w-full gap-5 mt-6 overflow-y-auto">
            <Reorder.Group
              className="w-full grid gap-5"
              axis="y"
              onReorder={setServices}
              values={services}
            >
              {services.map((i) => (
                <DragPortfolioCard
                  projectName={i.project_name}
                  id={i.toString()}
                  key={i}
                  service_tags={i.services}
                  skill_tags={i.skills}
                  moveNext={() => {
                    setState(1);
                    setPortfolioID(i.portfolio_id);
                  }}
                />
              ))}
            </Reorder.Group>
            {Array.apply(null, new Array(5)).map((i) => (
              <PortfolioCard moveNext={() => setState(2)} />
            ))}
          </section>
        </section>
      ) : state == 1 ? (
        <ManagePortfolio
          moveNext={() => setState(0)}
          addService={false}
          id={portfolioID}
        />
      ) : (
        <ManagePortfolio moveNext={() => setState(0)} addService={true} />
      )}
    </>
  );
}
