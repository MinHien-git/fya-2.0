import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function PageCreateNavigation() {
  return (
    <main className="w-full min-h-[50vh] p-2 h-auto">
      <section className="w-full border-[1px] py-8 shadow-primary/35 shadow-3xl bg-light_gray max-w-7xl px-8 lg:px-0 my-5 rounded-[3rem] md:mx-auto flex flex-col md:gap-2 md:px-0  min-h-[50vh] lg:min-h-[80vh] h-[100%] items-center lg:justify-center">
        <img
          src={"/static/images/Logo_BG.svg"}
          alt="logo"
          className="w-[4rem] lg:w-[8rem] mb-6 shadow-3xl shadow-primary/35 rounded-[2rem]"
        />
        <div className="flex flex-col md:flex-row gap-3 px-5 max-w-[60rem] lg:mb-10">
          <Card
            className="mt-6 w-[100%] md:w-1/3 justify-between py-8 shadow-primary/35 shadow-3xl"
            placeholder={undefined}
          >
            <CardBody placeholder={undefined}>
              <Typography
                variant="h5"
                color="blue-gray"
                className="mb-2"
                placeholder={undefined}
              >
                I’m an agency
              </Typography>
              <Typography placeholder={undefined}>
                looking for new clients and projects
              </Typography>
            </CardBody>
            <CardFooter className="pt-0" placeholder={undefined}>
              <Button
                className="w-[100%] bg-primary px-0 py-0"
                placeholder={undefined}
              >
                <Link
                  to="/create-page"
                  className="flex justify-between items-center py-3 px-6"
                >
                  Agency Page <FaArrowRight />
                </Link>
              </Button>
            </CardFooter>
          </Card>
          <Card
            className="mt-6 w-[100%] md:w-1/3 justify-between py-8 shadow-primary/35 shadow-3xl"
            placeholder={undefined}
          >
            <CardBody placeholder={undefined}>
              <Typography
                variant="h5"
                color="blue-gray"
                className="mb-2"
                placeholder={undefined}
              >
                I’m a client
              </Typography>
              <Typography placeholder={undefined}>
                Looking for agencies to provide services and promote my brands
              </Typography>
            </CardBody>
            <CardFooter className="pt-0" placeholder={undefined}>
              <Button
                className="w-[100%] bg-primary py-0 px-0"
                placeholder={undefined}
              >
                <Link
                  to="/create-page"
                  className="flex justify-between items-center py-3 px-6"
                >
                  Brand Page <FaArrowRight />
                </Link>
              </Button>
            </CardFooter>
          </Card>
          <Card
            className="mt-6 w-[100%] md:w-1/3 justify-between py-8 shadow-primary/35 shadow-3xl"
            placeholder={undefined}
          >
            <CardBody placeholder={undefined}>
              <Typography
                variant="h5"
                color="blue-gray"
                className="mb-2"
                placeholder={undefined}
              >
                I’m a user
              </Typography>
              <Typography placeholder={undefined}>
                Looking for agencies to provide services and promote my brands
              </Typography>
            </CardBody>
            <CardFooter className="pt-0" placeholder={undefined}>
              <Button
                className="w-[100%] bg-primary py-0 px-0"
                placeholder={undefined}
              >
                <Link
                  to="/create-page"
                  className="flex justify-between items-center py-3 px-6"
                >
                  Personal Page <FaArrowRight />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </main>
  );
}
