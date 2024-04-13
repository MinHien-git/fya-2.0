import AwardCard from "../../../components/AwardCard/AwardCard";
import SecondaryNavigationBar from "../../../components/SecondaryNavigationBar/SecondaryNavigationBar";

export default function Awards() {
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
          <AwardCard isEmpty={false} />
          <AwardCard isEmpty={true} />
          <AwardCard isEmpty={true} />
          <AwardCard isEmpty={true} />
          <AwardCard isEmpty={true} />
        </section>
      </section>
    </>
  );
}
