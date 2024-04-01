import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function Page404() {
  return (
    <main className="w-full h-[100vh] flex justify-center items-center flex-col">
      <div className="h-[70vh] w-full flex flex-col items-center justify-center gap-4">
        <img
          src="/static/images/404 Error with a cute animal-amico.svg"
          alt="Update feature"
          className="w-1/2"
        />

        <p className="font-bold">
          Sorry... We could not find page you are looking for
        </p>
        <Link to="/">
          <Button placeholder={undefined} className="bg-primary">
            Return home
          </Button>
        </Link>
      </div>
    </main>
  );
}
