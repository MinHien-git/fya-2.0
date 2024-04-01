import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import Sparkle from "react-sparkle";
import { motion } from "framer-motion";
export default function Subscription() {
  return (
    <main className="w-full min-h-80 py-2 pt-0">
      <section className="w-full border-2 pb-5 rounded-b-3xl md:mx-auto min-h-[50vh] bg-dark_blue px-3 flex items-center">
        <div className="grid gap-3 px-2 py-5 h-full mx-auto">
          <motion.h1
            className="text-2xl lg:text-5xl sm:text-4xl font-bold text-white text-center lg:w-full font-header"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
          >
            Generate revenue, <span className="text-secondary">on repeat.</span>{" "}
          </motion.h1>
          <motion.p
            className="text-white text-center text-lg opacity-65"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 0.65, y: 0 }}
            transition={{ ease: "easeOut", duration: 0.5, delay: 0.2 }}
          >
            Sign up for <span className="text-secondary">FyaPro</span> and watch
            qualified leads roll in month after month
          </motion.p>
        </div>
      </section>

      <section className="w-full max-w-4xl px-2 sm:px-4 lg:px-12 mt-[-4rem] mb-4 md:mx-auto flex flex-col justify-center items-center md:grid gap-4 md:grid-cols-2 md:items-stretch">
        <motion.div
          className="border-2 w-full flex flex-col justify-center rounded-[1.25rem] py-6 px-8 bg-white gap-2"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
        >
          <h3 className="text-3xl text-center font-semibold">Free</h3>
          <div>
            <p className="text-xs text-center invisible">From</p>
            <p className="font-bold text-[2.625rem] text-center">$0</p>
          </div>
          <p className="font-bold">Included:</p>
          <ul className="grid gap-2 mb-4">
            <li>
              <div className="flex items-start gap-2">
                <div className="w-4 aspect-square bg-green-300 rounded-full mt-1"></div>{" "}
                <p className="w-[calc(100%-4rem)]">
                  Create a free Agency Page.
                </p>
              </div>
            </li>
            <li>
              <div className="flex items-start gap-2">
                <div className="w-4 aspect-square bg-green-300 rounded-full mt-1"></div>{" "}
                <p className="w-[calc(100%-4rem)]">
                  Showcase your company, team, awards & experience
                </p>
              </div>
            </li>
            <li>
              <div className="flex items-start gap-2">
                <div className="w-4 aspect-square bg-green-300 rounded-full mt-1"></div>{" "}
                <p className="w-[calc(100%-4rem)]">
                  Get your verified reviews widget & boost client confidence.
                </p>
              </div>
            </li>
            <li>
              <div className="flex items-start gap-2">
                <div className="w-4 aspect-square bg-green-300 rounded-full mt-1"></div>{" "}
                <p className="w-[calc(100%-4rem)]">
                  Being discovered via Fya's search engine
                </p>
              </div>
            </li>
          </ul>
          <p className="font-bold">Not Included:</p>
          <ul className="grid gap-2">
            <li>
              <div className="flex items-start gap-2">
                <div className="w-4 aspect-square bg-red-500 rounded-full mt-1"></div>{" "}
                <div className="w-[calc(100%-4rem)] grid gap-1">
                  <p>Access to Advertising Features</p>
                  <p className="text-xs">From $0.12/click</p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-start gap-2">
                <div className="w-4 aspect-square bg-red-500 rounded-full mt-1"></div>{" "}
                <div className="w-[calc(100%-4rem)] grid gap-1">
                  <p>Receiving projects via the Post Your Project feature</p>
                  <p className="text-xs">From $2.00/project</p>
                </div>
              </div>
            </li>
          </ul>
          <Button
            placeholder={undefined}
            className="bg-primary text-white font-bold text-base rounded-lg px-8 py-3 mx-auto mt-5 md:w-fit md:mx-auto w-full md:mt-auto capitalize"
          >
            Create free Agency Page
          </Button>
          <p className="text-text/50 text-center mt-5 text-sm">
            No payment required
          </p>
        </motion.div>
        <motion.div
          className="border-2 w-full flex flex-col justify-center border-secondary rounded-[1.25rem] py-6 px-8 bg-white gap-2 drop-shadow-xl shadow-yellow-500/40"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <Sparkle
            count={5}
            fadeOutSpeed={20}
            color={"#FFCB37"}
            minSize={8}
            maxSize={12}
            newSparkleOnFadeOut={false}
            flickerSpeed={"slowest"}
          />
          <h3 className="text-3xl text-center font-semibold">FyaPro</h3>
          <div>
            <p className="text-xs text-center">From</p>
            <p className="font-bold text-[2.625rem] text-center">
              $30.99<span className="text-xs font-normal">/month</span>
            </p>
          </div>
          <p className="font-bold">Everything in Free, plus:</p>
          <ul className="grid gap-2 mb-4">
            <li>
              <div className="flex items-start gap-2">
                <div className="w-4 aspect-square bg-green-300 rounded-full mt-1"></div>{" "}
                <p className="w-[calc(100%-4rem)]">
                  Get a Fya certified badge on your Agency Page
                </p>
              </div>
            </li>
            <li>
              <div className="flex items-start gap-2">
                <div className="w-4 aspect-square bg-green-300 rounded-full mt-1"></div>{" "}
                <p className="w-[calc(100%-4rem)]">
                  It’s All About You: No more suggestions for competitors on
                  your profile
                </p>
              </div>
            </li>
            <li>
              <div className="flex items-start gap-2">
                <div className="w-4 aspect-square bg-green-300 rounded-full mt-1"></div>{" "}
                <p className="w-[calc(100%-4rem)]">
                  Fya’s search engine priority: be shown on top of the results
                </p>
              </div>
            </li>
            <li>
              <div className="flex items-start gap-2">
                <div className="w-4 aspect-square bg-green-300 rounded-full mt-1"></div>{" "}
                <p className="w-[calc(100%-4rem)]">
                  Receive an SEO backlink to your website
                </p>
              </div>
            </li>
            <li>
              <div className="flex items-start gap-2">
                <div className="w-4 aspect-square bg-green-300 rounded-full mt-1"></div>{" "}
                <div className="w-[calc(100%-4rem)] grid gap-1">
                  <p>Access to Advertising Features</p>
                  <p className="text-xs">From $0.12/click</p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-start gap-2">
                <div className="w-4 aspect-square bg-green-300 rounded-full mt-1"></div>{" "}
                <div className="w-[calc(100%-4rem)] grid gap-1">
                  <p>Receiving projects via the Post Your Project feature</p>
                  <p className="text-xs">From $0.12/click</p>
                </div>
              </div>
            </li>
          </ul>{" "}
          <Button
            placeholder={undefined}
            className="bg-secondary text-text font-bold text-base rounded-lg px-8 py-3 mx-auto mt-5 md:w-fit md:mx-auto w-full md:mt-auto capitalize"
          >
            Get Started
          </Button>
          <Link
            to="/"
            className="text-primary underline underline-offset-2 font-semibold text-center mt-5 text-sm"
          >
            Contact us for a trial
          </Link>
        </motion.div>
      </section>
      <section>
        <h2 className="text-[2rem] py-2 font-bold text-center font-title">
          Why should your business use{" "}
          <span className="text-secondary">FyaPro</span>
        </h2>
      </section>
      <section className="w-full border-2 max-w-5xl px-2 sm:px-4 lg:px-12 my-5 rounded-[3rem] md:mx-auto flex flex-col justify-center items-center">
        <div className="py-5 w-11/12 md:w-full">
          <div className="aspect-video w-full"></div>
        </div>
      </section>
      <section className="w-full border-2 max-w-5xl px-2 sm:px-4 lg:px-12 my-5 rounded-[3rem] md:mx-auto flex flex-col justify-center items-center">
        <div className="py-5 w-11/12 md:w-full">
          <div className="aspect-video w-full"></div>
        </div>
      </section>
      <section className="w-full border-2 max-w-5xl px-2 sm:px-4 lg:px-12 my-5 rounded-[3rem] md:mx-auto flex flex-col justify-center items-center">
        <div className="py-5 w-11/12 md:w-full">
          <h2 className="md:text-xl lg:text-[2rem] py-2 font-bold text-center font-title">
            Frequently Asked Questions
          </h2>
          <div className="aspect-video w-full"></div>
        </div>
      </section>
    </main>
  );
}
