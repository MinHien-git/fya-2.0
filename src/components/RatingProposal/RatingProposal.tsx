import { Typography, Button, Rating, Textarea } from "@material-tailwind/react";
import { Label } from "flowbite-react";
import { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { GetClientProjectDetail } from "../../api/lib/project";
interface IRatingProposal {
  handleClose: () => void;
  id: string;
}
export default function RatingProposal({ handleClose, id }: IRatingProposal) {
  const [index, SetIndex] = useState<number>(1);
  const [project, SetProject] = useState<any>({});
  useEffect(() => {
    SetIndex(0);
  }, []);

  useEffect(() => {
    async function getProjectDetails() {
      const result = await GetClientProjectDetail(id);
      console.log(result);

      if (result.data.data) {
        console.log(result.data.data);
      }
    }

    getProjectDetails();
  }, [id]);

  return index === 0 ? (
    <div className="w-[100vw] h-[100vh] bg-blue-gray-500/50 absolute top-0 left-0 flex justify-center items-center z-[1000]">
      <div className="bg-white shadow-lg rounded-2xl min-w-[70rem] flex flex-col items-center py-10 max-w-[72rem] relative h-[80vh] max-h-[60rem]">
        <div
          className="absolute top-2 right-2 bg-gray-200 rounded-full p-2 "
          onClick={handleClose}
        >
          <IoCloseSharp className="w-6 h-6" />
        </div>
        <Typography variant="h2" placeholder={undefined} className="capitalize">
          Client Name’s project
        </Typography>
        <div className="flex w-full px-10  mt-6  gap-2 overflow-y-auto">
          <div className="w-1/2 flex flex-col gap-4 ">
            <div className="grid w-full shadow-lg px-6 py-8 border rounded-xl gap-4">
              <Typography
                variant="h4"
                placeholder={undefined}
                className="capitalize"
              >
                Client’s detail:
              </Typography>
              <Typography variant="h6" placeholder={undefined}>
                Name:{" "}
                <span className="font-normal">{} (Hidden until Accepted)</span>
              </Typography>
              <Typography variant="h6" placeholder={undefined}>
                Office address: <span className="font-normal">[Address]</span>
              </Typography>
              <Typography variant="h6" placeholder={undefined}>
                Rating: <span className="font-normal">0.0/5.0</span>
              </Typography>

              <Link to="/" className="text-primary underline font-bold">
                See Client Name’s Review and Feedback
              </Link>
            </div>
            <div className="grid w-full shadow-lg px-6 py-8 border rounded-xl gap-4 h-fit">
              <Typography
                variant="h4"
                placeholder={undefined}
                className="capitalize"
              >
                Your company detail:
              </Typography>
              <Typography variant="h6" placeholder={undefined}>
                Company name: <span className="font-normal">[Name]</span>
              </Typography>
              <Typography variant="h6" placeholder={undefined}>
                Office address: <span className="font-normal">[Address]</span>
              </Typography>
              <Typography variant="h6" placeholder={undefined}>
                Team size: <span className="font-normal"> xx-yy people</span>
              </Typography>
              <Typography variant="h6" placeholder={undefined}>
                Industry: <span className="font-normal"> [Industry Name]</span>
              </Typography>
              <Typography variant="h6" placeholder={undefined}>
                Your role in the company:{" "}
                <span className="font-normal"> [Role Name]</span>
              </Typography>
            </div>
            <div className="grid w-full shadow-lg px-6 py-8 border rounded-xl gap-4 h-fit">
              <Typography
                variant="h4"
                placeholder={undefined}
                className="capitalize"
              >
                Your rating and feedback:
              </Typography>
              <Typography variant="h6" placeholder={undefined}>
                Rating: <span className="font-normal">0.0/5.0</span>
              </Typography>
              <Typography variant="h6" placeholder={undefined}>
                Feedback: <span className="font-normal">No feedback yet.</span>
              </Typography>
              <Button
                placeholder={undefined}
                className="flex text-text min-w-[8rem] items-center justify-center bg-secondary w-1/2"
                size="md"
                onClick={() => SetIndex(1)}
              >
                Send feedback
              </Button>
            </div>
          </div>
          <div className="w-1/2 shadow-lg rounded-xl px-6 py-8 flex flex-col gap-4 border h-fit">
            <Typography
              variant="h4"
              placeholder={undefined}
              className="capitalize"
            >
              Your proposal for the project:
            </Typography>
            <Typography variant="small" placeholder={undefined}>
              [Lorem ipsum dolor sit amet, consectetur adipiscing elit.]
            </Typography>
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="email2"
                  value="Services wanted:"
                  className="font-bold"
                />
              </div>
              <div className="w-full h-[4rem] border rounded-lg"></div>
            </div>
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="email2"
                  value="Skills required:"
                  className="font-bold"
                />
              </div>
              <div className="w-full h-[4rem] border rounded-lg"></div>
            </div>
            <p>
              <span className="font-bold">Proposed price:</span> $xxxx - $xxxx
            </p>
            <p>
              <span className="font-bold">Client’s email: </span>{" "}
              sample@sample.com
            </p>

            <p>
              <span className="font-bold">Proposed duration: </span> x - x
              months
            </p>

            <div className="grid w-full">
              <p>
                <span className="font-bold">Proposal:</span>
              </p>
              <p>
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="w-[100vw] h-[100vh] bg-blue-gray-500/50 absolute top-0 left-0 flex justify-center items-center z-[1000]">
      <div className="bg-white shadow-lg rounded-2xl min-w-[70rem] flex flex-col items-center py-10 max-w-[72rem] relative h-[80vh] max-h-[60rem]">
        <div
          className="absolute top-2 right-2 bg-gray-200 rounded-full p-2"
          onClick={handleClose}
        >
          <IoCloseSharp className="w-6 h-6" />
        </div>
        <Typography variant="h2" placeholder={undefined} className="capitalize">
          Review & Feedback for Client Name’s project
        </Typography>
        <div className="flex w-full px-10  mt-6  gap-2 overflow-y-auto h-fit">
          <div className="w-1/2 flex flex-col gap-4 ">
            <div className="grid w-full shadow-lg px-6 py-8 border rounded-xl gap-4">
              <Typography
                variant="h4"
                placeholder={undefined}
                className="capitalize"
              >
                Rating
              </Typography>
              <Rating placeholder={undefined} />
              <Typography variant="h6" placeholder={undefined}>
                Rated this agency on:
                <span className="font-normal"> [dd/mm/yyyy]</span>
              </Typography>
              <Typography variant="h6" placeholder={undefined}>
                Duration of the project:{" "}
                <span className="font-normal"> [mm/yyyy - mm/yyyy]</span>
              </Typography>
            </div>
            <div className="grid w-full shadow-lg px-6 py-8 border rounded-xl gap-4">
              <Typography
                variant="h4"
                placeholder={undefined}
                className="capitalize"
              >
                Services provided
              </Typography>
              <ul className="flex flex-wrap gap-2">
                <li className="text-white bg-primary h-[2rem] font-bold px-4 text-xs flex justify-center items-center rounded-md">
                  Service 1
                </li>
                <li className="text-white bg-primary h-[2rem] font-bold px-4 text-xs flex justify-center items-center rounded-md">
                  Service 2
                </li>
                <li className="text-white bg-primary h-[2rem] font-bold px-4 text-xs flex justify-center items-center rounded-md">
                  Service 3
                </li>
                <li className="text-white bg-primary h-[2rem] font-bold px-4 text-xs flex justify-center items-center rounded-md">
                  Service 3 Service 3
                </li>
                <li className="text-white bg-primary h-[2rem] font-bold px-4 text-xs flex justify-center items-center rounded-md">
                  Service 3 Service 3
                </li>
              </ul>
            </div>
            <div className="grid w-full shadow-lg px-6 py-8 border rounded-xl gap-4">
              <Typography
                variant="h4"
                placeholder={undefined}
                className="capitalize"
              >
                Rate your client
              </Typography>
              <div>
                <Typography
                  variant="h6"
                  placeholder={undefined}
                  className="text-primary"
                >
                  Punctuality:
                </Typography>
                <Rating placeholder={undefined} />

                <Typography
                  variant="h6"
                  placeholder={undefined}
                  className="text-primary"
                >
                  Work Ethics:
                </Typography>
                <Rating placeholder={undefined} />
              </div>
            </div>
            <div className="flex w-full justify-between py-2 gap-4 mt-auto">
              <Button
                placeholder={undefined}
                className="flex bg-red-300 text-red-700 min-w-[8rem] items-center justify-center w-1/2"
                size="lg"
                onClick={() => SetIndex(0)}
              >
                Cancel
              </Button>
              <Button
                placeholder={undefined}
                className="flex text-text min-w-[8rem] items-center justify-center bg-secondary w-1/2"
                size="md"
                onClick={() => SetIndex(1)}
              >
                Send feedback
              </Button>
            </div>
          </div>
          <div className="gap-2 flex flex-col">
            <div className="grid w-full shadow-lg px-6 py-8 border rounded-xl gap-4 h-min">
              <Typography
                variant="h4"
                placeholder={undefined}
                className="capitalize"
              >
                Contacts & Details (from project info)
              </Typography>
              <Typography variant="h6" placeholder={undefined}>
                Your name: <span className="font-normal">[Name]</span>
              </Typography>
              <Typography variant="h6" placeholder={undefined}>
                Your job title: <span className="font-normal">[Job Title]</span>
              </Typography>
              <Typography variant="h6" placeholder={undefined}>
                Your email address:
                <span className="font-normal">[sample@sample.com]</span>
              </Typography>
              <Typography variant="h6" placeholder={undefined}>
                Your company name:
                <span className="font-normal">[Company Name]</span>
              </Typography>
              <Typography variant="h6" placeholder={undefined}>
                Your company industry:
                <span className="font-normal">[Industry Name]</span>
              </Typography>
              <Typography variant="h6" placeholder={undefined}>
                Your company size:
                <span className="font-normal">[Size]</span>
              </Typography>
            </div>
            <div className="grid w-full shadow-lg px-6 py-8 border rounded-xl gap-4 h-min">
              <Typography
                variant="h4"
                placeholder={undefined}
                className="capitalize"
              >
                Your comment on your collaboration with Client Name:
              </Typography>
              <Textarea placeholder={undefined} rows={6} label="Feedback" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
