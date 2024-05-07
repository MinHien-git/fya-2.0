import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import EditService from "../EditService/EditService";
import { Reorder, useDragControls, useMotionValue } from "framer-motion";
import { useRaisedShadow } from "../../../hooks/useRaisedShadow";
import DragServiceCard from "../../../components/DragServicesCard/DragServicesCard";
import { GetPageService } from "../../../api/lib/page";
import { useSelector } from "react-redux";
import ServiceCard from "../../../components/ServiceCard/ServiceCard";

export default function Services() {
  const [state, setState] = useState(0);

  const page_id = useSelector((state: any) => state.page.page_id);
  const [services, setServices] = useState<Array<any>>([]);
  const [servicesID, setServicesID] = useState<Array<string>>([]);
  const [serviceId, setServiceID] = useState<string>("");

  useEffect(() => {
    async function getData() {
      const result = await GetPageService(page_id);
      console.log(result);
      if (result?.data?.data) {
        setServices(result?.data?.data);
        setServicesID(result?.data?.data.map((i) => i.service_id));
      }
    }

    getData();
    console.log(services);
  }, [state]);

  return (
    <>
      {state === 0 ? (
        <section className=" mt-5 mx-auto h-[80vh] flex flex-col px-12 gap-2">
          <h2 className="font-title text-[1.875rem] text-center font-bold pt-5">
            Service & Skills Tags
          </h2>
          <p className="mb-3 mt-3 font-normal text-gray-700 dark:text-gray-400 text-sm">
            Highlight your abilities to deliver services to potential clients by
            highlighting your areas of expertise and skills related to your
            services. The order in which you arrange your services and skills
            will have an impact on the projects we match you with.
          </p>
          <p className="text-gray-400 text-xs mt-4 font-bold">
            The arrangement of your awards will be displayed on your Page.
          </p>
          <section className="grid w-full gap-5 mt-6 overflow-y-auto">
            <Reorder.Group
              className="w-full grid gap-5"
              axis="y"
              onReorder={setServicesID}
              values={servicesID}
            >
              {services?.map((i, index) => (
                <DragServiceCard
                  serviceName={i.service_tags}
                  key={servicesID[index]}
                  moveNext={() => {
                    setState(1);
                    setServiceID(i.service_id);
                  }}
                  id={servicesID[index]}
                  skill_tags={i.skill_tags}
                />
              ))}
            </Reorder.Group>
            {Array.apply(null, new Array(5 - services.length)).map((i) => (
              <ServiceCard moveNext={() => setState(2)} />
            ))}
          </section>
        </section>
      ) : state === 1 && serviceId ? (
        <EditService
          moveNext={() => setState(0)}
          addService={false}
          id={serviceId}
        />
      ) : (
        <EditService moveNext={() => setState(0)} addService={true} />
      )}
    </>
  );
}
