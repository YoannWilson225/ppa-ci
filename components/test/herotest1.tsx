'use client';
import React from "react";
import {
  Navbar,
  Collapse,
  Button,
  IconButton,
  Input,
} from "@material-tailwind/react";

interface NavItemPropsType {
  children: React.ReactNode;
}

// function NavItem({ children }: NavItemPropsType) {
//   return (
//     <li>
//       <li
//         as="a"
//         href="#"
//         variant="paragraph"
//         color="blue-gray"
//         className="text-blue-gray-700 flex items-center gap-2 font-medium"
//       >
//         {children}
//       </li>
//     </li>
//   );
// }

export function HeroSection16() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false),
    );
  }, []);

  return (
    <>
      <header className="bg-white p-8">
        <div className="grid mt-16 min-h-[82vh] w-full lg:h-[54rem] md:h-[34rem] place-items-stretch bg-[url('/image/bg-hero-17.svg')] bg-center bg-contain bg-no-repeat">
          <div className="container mx-auto px-4 text-center">
            <li className="inline-flex text-xs rounded-lg border-[1.5px] border-blue-gray-50 bg-white py-1 lg:px-4 px-1 font-medium text-primary">
              Exciting News! Introducing our latest innovation
            </li>
            <li
              color="blue-gray"
              className="mx-auto my-6 w-full leading-snug  !text-2xl lg:max-w-3xl lg:!text-5xl"
            >
              Get ready to experience a new level of{" "}
              <span className="text-green-500 leading-snug ">
                performance
              </span>{" "}
              and{" "}
              <span className="leading-snug text-green-500">
                functionality
              </span>
              .
            </li>
            <li
              className="mx-auto w-full !text-gray-500 lg:text-lg text-base"
            >
              The time is now for it to be okay to be great. For being a bright
              color. For standing out.
            </li>
            {/* <div className="mt-8 grid w-full place-items-start md:justify-center">
              <div className="mb-2 flex w-full flex-col gap-4 md:flex-row">
                <Input color="gray" label="Enter your email" size="lg" />
                <Button
                  color="gray"
                  className="w-full px-4 md:w-[12rem]"
                >
                  get started
                </Button>
              </div>
            </div> */}
          </div>
        </div>
      </header>
    </>
  );
}

export default HeroSection16;