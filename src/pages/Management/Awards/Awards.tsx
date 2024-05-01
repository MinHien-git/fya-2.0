import { useEffect, useState } from "react";
import AwardCard from "../../../components/AwardCard/AwardCard";
import SecondaryNavigationBar from "../../../components/SecondaryNavigationBar/SecondaryNavigationBar";
import { GetPageAward } from "../../../api/lib/page";
import { useSelector } from "react-redux";
import { Reorder } from "framer-motion";

export default function Awards() {
  const [awards, setAwards] = useState<Array<any>>([]);
  const [awardsID, setAwardsID] = useState<Array<string>>([]);

  const page_id = useSelector((state: any) => state.page.page_id);
  useEffect(() => {
    async function getData() {
      const result = await GetPageAward(page_id);
      setAwards(result.data.data);
      setAwardsID(result.data.data.map((i) => i.award_id));
    }

    getData();
  }, []);

  return (
    <>
      <section className="mt-5 mx-auto h-[80vh] flex flex-col px-12 gap-2">
        <h2 className="font-title text-[1.875rem] text-center font-bold pt-5">
          Awards
        </h2>
        <p className="text-center">
          Showcase to your clients all of your company's achievements and
          certifications. They will be visible on your Agency Page.
        </p>
        <p className="text-gray-400 text-xs mt-4 font-bold">
          The arrangement of your awards will be displayed on your Page.
        </p>
        <section className="grid w-full gap-5 mt-6  overflow-y-auto">
          <Reorder.Group
            axis="y"
            onReorder={setAwardsID}
            values={awardsID}
            className="grid w-full gap-5"
          >
            {awards.map((award, index) => (
              <AwardCard
                isEmpty={false}
                award_data={award}
                id={awardsID[index]}
                key={awardsID[index]}
              />
            ))}
          </Reorder.Group>
          {Array.apply(null, new Array(5 - awards.length)).map((i) => (
            <AwardCard isEmpty={true} award_data={{}} />
          ))}
        </section>
      </section>
    </>
  );
}
