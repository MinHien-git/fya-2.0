import { Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import {
  GetData
} from "../../../api/lib/admin";

export default function AdminPage() {
  const [data, setData] = useState<any>([]);

  const fetchData = async () => {
    const result = await GetData();
    if (result.data.data) {
      setData(result.data.data);
    }
  };

  useEffect(() => {
    fetchData();

    const intervalId = setInterval(fetchData, 10000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <main className="w-full min-h-[20vh] py-2 pt-0 flex flex-col gap-2 overflow-y-auto h-full mx-auto">
      <div className="w-full">
        <div className="flex justify-center items-center h-[4rem] border-b-2 gap-4">
          <svg
            width="27"
            height="28"
            viewBox="0 0 27 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.57671 9.72088V16.5859M23.5952 15.4418V7.66136C23.5952 6.37977 23.5952 5.73896 23.3457 5.24946C23.1264 4.81888 22.7763 4.4688 22.3457 4.24942C21.8563 4 21.2154 4 19.9338 4H6.66136C5.37977 4 4.73897 4 4.24946 4.24942C3.81888 4.4688 3.4688 4.81888 3.24942 5.24946C3 5.73896 3 6.37977 3 7.66136V18.6455C3 19.927 3 20.5679 3.24942 21.0574C3.4688 21.4879 3.81888 21.8381 4.24946 22.0574C4.73897 22.3068 5.37977 22.3068 6.66136 22.3068H13.2976M13.2976 14.2976H14.2102C14.7193 14.2976 14.9738 14.2976 15.2158 14.3506C15.4304 14.3976 15.6371 14.4753 15.8297 14.5812C16.0466 14.7007 16.2381 14.8683 16.6213 15.2035L23.4406 21.1704C24.1435 21.7854 24.1795 22.8667 23.5191 23.5271C22.9181 24.1281 21.954 24.1603 21.3143 23.6005L14.5479 17.68C14.0879 17.2774 13.8578 17.0761 13.6926 16.8329C13.5462 16.6172 13.4377 16.3782 13.372 16.1261C13.2976 15.8417 13.2976 15.5359 13.2976 14.9245V14.2976Z"
              stroke="#000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <p className="font-title">Dashboard</p>
        </div>
      </div>

      <section className="w-full mx-auto px-12 flex mt-1 gap-3">
        <div className="grid gap-3">
          <div className="grid w-[15rem] rounded-xl border-2 mx-auto flex-col px-6 pb-6">
            <div className="flex items-center gap-4">
              <div className="aspect-square bg-primary w-10 rounded-lg flex flex-col justify-center items-center">
                <svg 
                  width="22" 
                  height="22" 
                  viewBox="0 0 22 22" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    opacity="0.4" 
                    d="M11.1226 11.7795C11.0526 11.7695 10.9626 11.7695 10.8826 11.7795C9.12265 11.7195 7.72266 10.2795 7.72266 8.50947C7.72266 6.69948 9.18265 5.22949 11.0026 5.22949C12.8126 5.22949 14.2826 6.69948 14.2826 8.50947C14.2726 10.2795 12.8826 11.7195 11.1226 11.7795Z" 
                    stroke="#F9FBFF" 
                    stroke-width="2" 
                    stroke-linecap="round" 
                    stroke-linejoin="round"
                  />
                  <path 
                    opacity="0.34" 
                    d="M17.7397 18.3795C15.9597 20.0095 13.5997 20.9995 10.9998 20.9995C8.39974 20.9995 6.03976 20.0095 4.25977 18.3795C4.35977 17.4396 4.95976 16.5196 6.02976 15.7996C8.76974 13.9796 13.2497 13.9796 15.9697 15.7996C17.0397 16.5196 17.6397 17.4396 17.7397 18.3795Z" 
                    stroke="#F9FBFF" 
                    stroke-width="2" 
                    stroke-linecap="round" 
                    stroke-linejoin="round"
                  />
                  <path 
                    d="M10.9999 20.9999C16.5227 20.9999 20.9999 16.5227 20.9999 10.9999C20.9999 5.47713 16.5227 1 10.9999 1C5.47713 1 1 5.47713 1 10.9999C1 16.5227 5.47713 20.9999 10.9999 20.9999Z" 
                    stroke="#F9FBFF" 
                    stroke-width="2" 
                    stroke-linecap="round" 
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <Typography placeholder={undefined} variant="h6" className="">
                All Users
              </Typography>
            </div>
            <div className="flex justify-center items-center text-3xl font-bold">{data.user_count}</div>
            <div className="flex justify-center items-end text-xs">active users</div>
          </div>

          <div className="grid w-[15rem] rounded-xl border-2 mx-auto flex-col px-6 pb-6">
            <div className="flex items-center gap-4">
              <div className="aspect-square bg-primary w-10 rounded-lg flex justify-center items-center">
                <svg 
                  width="25" 
                  height="25" 
                  viewBox="0 0 25 25" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M18.5566 5.22222H23.0011M20.7789 3V7.44444" 
                    stroke="#F9FBFF" 
                    stroke-width="2.5" 
                    stroke-linecap="round" 
                    stroke-linejoin="round"
                  />
                  <path 
                    d="M14.1133 3.38891C13.4012 3.12963 12.6489 2.99798 11.8911 3.00002C10.6685 2.99863 9.46916 3.33343 8.4241 3.96781C7.37903 4.60219 6.52853 5.51172 5.9656 6.59694C5.40267 7.68216 5.14899 8.90128 5.2323 10.121C5.3156 11.3407 5.73269 12.514 6.43796 13.5126C7.14322 14.5112 8.10949 15.2966 9.2311 15.783C10.3527 16.2694 11.5865 16.438 12.7975 16.2704C14.0085 16.1028 15.15 15.6054 16.0974 14.8326C17.0447 14.0599 17.7613 13.0415 18.1688 11.8889" 
                    stroke="#F9FBFF" 
                    stroke-width="2.5" 
                    stroke-linecap="round" 
                    stroke-linejoin="round"
                  />
                  <path 
                    d="M16.6555 14.3223C17.8341 14.637 18.8763 15.3308 19.6213 16.2967C20.3663 17.2626 20.7727 18.4469 20.7778 19.6667V20.7778C20.7778 20.7778 18.5555 23 11.8889 23C5.22222 23 3 20.7778 3 20.7778V19.6667C3.00506 18.4469 3.41145 17.2626 4.15646 16.2967C4.90147 15.3308 5.94368 14.637 7.12222 14.3223" 
                    stroke="#F9FBFF" 
                    stroke-width="2.5" 
                    stroke-linecap="round" 
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <Typography placeholder={undefined} variant="h6" className="">
                New Users
              </Typography>
            </div>
            <div className="flex justify-center items-center text-3xl font-bold">+xx</div>
            <div className="flex justify-center items-end text-xs">new users this week</div>
          </div>

          <div className="grid w-[15rem] rounded-xl border-2 mx-auto flex-col px-6 pb-6">
            <div className="flex items-center gap-4">
              <div className="aspect-square bg-primary w-10 rounded-lg flex justify-center items-center">
                <svg 
                  width="28" 
                  height="20" 
                  viewBox="0 0 28 20" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M1.54271 15.935C1.02098 15.935 0.564453 15.4785 0.564453 14.9568C0.564453 14.435 1.02098 13.9785 1.54271 13.9785H26.4558C26.9775 13.9785 27.3688 14.435 27.3688 14.9568C27.3688 15.4785 26.9775 15.935 26.4558 15.935H1.54271Z" 
                    fill="#F9FBFF"
                  />
                  <path 
                    d="M10.413 10.9786C10.0217 11.3699 9.43478 11.3699 9.04348 10.9786C8.65217 10.5873 8.65217 10.0003 9.04348 9.60899L12.6957 5.95682C13.0217 5.56552 13.6739 5.56552 14.0652 5.95682L16.5435 8.5003L22.6087 2.43508C23 2.04378 23.587 2.04378 23.9783 2.43508C24.3696 2.82638 24.3696 3.41334 23.9783 3.80465L17.2609 10.522C16.8696 10.9133 16.2826 10.9133 15.8913 10.522L13.3478 8.04378L10.413 10.9786Z" 
                    fill="#F9FBFF"
                  />
                  <path 
                    fill-rule="evenodd" 
                    clip-rule="evenodd" 
                    d="M24.3688 2.04395L23.9775 3.41351L23.6514 4.84829L22.6079 3.80481L21.5645 2.82655L22.9992 2.43525L24.3688 2.04395Z" 
                    fill="#F9FBFF"
                  />
                  <path 
                    d="M25.2822 2.30481L24.5648 5.10916C24.4344 5.6309 23.9126 5.89177 23.3909 5.76133C23.1952 5.69611 23.0648 5.6309 22.9344 5.50046L20.9126 3.47872C20.5213 3.08742 20.5213 2.50046 20.9126 2.10916C21.0431 1.97872 21.2387 1.9135 21.3691 1.84829L24.1083 1.1309C24.63 1.00046 25.1517 1.26133 25.2822 1.78307C25.3474 1.97872 25.3474 2.17437 25.2822 2.30481Z" 
                    fill="#F9FBFF"
                  />
                  <path 
                    d="M6.23896 18.7387C6.23896 19.2605 5.84766 19.6518 5.32592 19.6518C4.73896 19.6518 4.34766 19.2605 4.34766 18.7387V1.26049C4.34766 0.738749 4.73896 0.282227 5.32592 0.282227C5.84766 0.282227 6.23896 0.738749 6.23896 1.26049V18.7387Z" 
                    fill="#F9FBFF"
                  />
                </svg>
              </div>
              <Typography placeholder={undefined} variant="h6" className="">
                User Growth
              </Typography>
            </div>
            <div className="flex justify-center items-center text-3xl font-bold">+xx%</div>
            <div className="flex justify-center items-end text-xs">this week</div>
          </div>
        </div>
        
        <div className="grid gap-3">
          <div className="grid w-[15rem] rounded-xl border-2 mx-auto flex-col px-6 pb-6">
            <div className="flex items-center gap-4">
              <div className="aspect-square bg-dark_gray w-10 rounded-lg flex flex-col justify-center items-center">
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 20 20" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.08485 5.27778H5.0298M4.08485 8.11111H5.0298M8.80961 8.11111H9.75456M8.80961 10.9444H9.75456M4.08485 10.9444H5.0298M8.80961 5.27778H9.75456M5.0298 18.5V15.6667C5.0298 14.6234 5.87594 13.7778 6.9197 13.7778C7.9635 13.7778 8.80961 14.6234 8.80961 15.6667V18.5H5.0298ZM5.0298 18.5H1.25V3.01111C1.25 2.48217 1.25 2.2177 1.35299 2.01568C1.44359 1.83797 1.58815 1.69349 1.76595 1.60293C1.96809 1.5 2.2327 1.5 2.76192 1.5H11.0775C11.6068 1.5 11.8713 1.5 12.0735 1.60293C12.2513 1.69349 12.3958 1.83797 12.4864 2.01568C12.5894 2.2177 12.5894 2.48217 12.5894 3.01111V7.16667M17.0307 11.4167C17.0307 12.199 16.396 12.8333 15.6133 12.8333C14.8305 12.8333 14.1958 12.199 14.1958 11.4167C14.1958 10.6343 14.8305 10 15.6133 10C16.396 10 17.0307 10.6343 17.0307 11.4167ZM18.7316 18.5V18.0278C18.7316 16.7238 17.6739 15.6667 16.3692 15.6667H14.9518C13.6471 15.6667 12.5894 16.7238 12.5894 18.0278V18.5H18.7316Z" 
                    stroke="#476FD4" 
                    stroke-width="1.5" 
                    stroke-linecap="round" 
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <Typography placeholder={undefined} variant="h6" className="">
                All Agencies
              </Typography>
            </div>
            <div className="flex justify-center items-center text-3xl font-bold">{data.agency_count}</div>
            <div className="flex justify-center items-end text-xs">active Agency Pages</div>
          </div>

          <div className="grid w-[15rem] rounded-xl border-2 mx-auto flex-col px-6 pb-6">
            <div className="flex items-center gap-4">
              <div className="aspect-square bg-dark_gray w-10 rounded-lg flex justify-center items-center">
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 20 20" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M14.7055 18.8233V15.8822H11.7644C11.6084 15.8822 11.4587 15.8202 11.3484 15.7099C11.2381 15.5996 11.1761 15.4499 11.1761 15.2939C11.1761 15.1379 11.2381 14.9883 11.3484 14.878C11.4587 14.7677 11.6084 14.7057 11.7644 14.7057H14.7055V11.7645C14.7055 11.6085 14.7675 11.4589 14.8778 11.3486C14.9881 11.2383 15.1378 11.1763 15.2938 11.1763C15.4498 11.1763 15.5994 11.2383 15.7097 11.3486C15.82 11.4589 15.882 11.6085 15.882 11.7645V14.7057H18.8232C18.9792 14.7057 19.1288 14.7677 19.2391 14.878C19.3494 14.9883 19.4114 15.1379 19.4114 15.2939C19.4114 15.4499 19.3494 15.5996 19.2391 15.7099C19.1288 15.8202 18.9792 15.8822 18.8232 15.8822H15.882V18.8233C15.882 18.9794 15.82 19.129 15.7097 19.2393C15.5994 19.3496 15.4498 19.4116 15.2938 19.4116C15.1378 19.4116 14.9881 19.3496 14.8778 19.2393C14.7675 19.129 14.7055 18.9794 14.7055 18.8233ZM8.47024 19.4116H0.587891V2.35275C0.595634 1.87794 0.791306 1.42556 1.13202 1.09477C1.47274 0.763976 1.9307 0.581757 2.40554 0.588048H10.8879C11.3626 0.582069 11.8204 0.76439 12.1611 1.09512C12.5017 1.42584 12.6975 1.87804 12.7055 2.35275V9.41158C12.7055 9.57227 12.6417 9.72638 12.5281 9.84C12.4145 9.95363 12.2603 10.0175 12.0997 10.0175C11.939 10.0175 11.7849 9.95363 11.6712 9.84C11.5576 9.72638 11.4938 9.57227 11.4938 9.41158V2.35275C11.4913 2.19445 11.4261 2.0436 11.3125 1.93331C11.1989 1.82302 11.0462 1.76232 10.8879 1.76452H2.40554C2.24712 1.76232 2.09428 1.82298 1.9805 1.93324C1.86672 2.04349 1.80127 2.19434 1.79848 2.35275V18.2351H4.22318V14.1175C4.22597 13.959 4.29142 13.8082 4.4052 13.6979C4.51898 13.5877 4.67182 13.527 4.83024 13.5292H8.47024C8.62855 13.527 8.78127 13.5877 8.89486 13.698C9.00846 13.8083 9.07365 13.9592 9.07613 14.1175V18.2351H10.8879C11.0439 18.2351 11.1935 18.2971 11.3038 18.4074C11.4142 18.5177 11.4761 18.6673 11.4761 18.8233C11.4761 18.9794 11.4142 19.129 11.3038 19.2393C11.1935 19.3496 11.0439 19.4116 10.8879 19.4116H8.47024ZM5.43495 18.2351H7.85848V14.7057H5.43495V18.2351ZM7.85848 11.1763V8.82334H10.282V11.1763H7.85848ZM3.01142 11.1763V8.82334H5.43495V11.1763H3.01142ZM7.85848 6.4704V4.11746H10.282V6.4704H7.85848ZM3.01142 6.4704V4.11746H5.43495V6.4704H3.01142Z" 
                    fill="#476FD4"
                  />
                </svg>
              </div>
              <Typography placeholder={undefined} variant="h6" className="">
                New Agencies
              </Typography>
            </div>
            <div className="flex justify-center items-center text-3xl font-bold">+{data.new_agency_pages}</div>
            <div className="flex justify-center items-end text-xs">new Agency Pages this week</div>
          </div>

          <div className="grid w-[15rem] rounded-xl border-2 mx-auto flex-col px-6 pb-6">
            <div className="flex items-center gap-4">
              <div className="aspect-square bg-dark_gray w-10 rounded-lg flex justify-center items-center">
                <svg 
                  width="28" 
                  height="20" 
                  viewBox="0 0 28 20" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M1.54271 15.935C1.02098 15.935 0.564453 15.4785 0.564453 14.9568C0.564453 14.435 1.02098 13.9785 1.54271 13.9785H26.4558C26.9775 13.9785 27.3688 14.435 27.3688 14.9568C27.3688 15.4785 26.9775 15.935 26.4558 15.935H1.54271Z" 
                    fill="#476FD4"
                  />
                  <path 
                    d="M10.413 10.9786C10.0217 11.3699 9.43478 11.3699 9.04348 10.9786C8.65217 10.5873 8.65217 10.0003 9.04348 9.60899L12.6957 5.95682C13.0217 5.56552 13.6739 5.56552 14.0652 5.95682L16.5435 8.5003L22.6087 2.43508C23 2.04378 23.587 2.04378 23.9783 2.43508C24.3696 2.82638 24.3696 3.41334 23.9783 3.80465L17.2609 10.522C16.8696 10.9133 16.2826 10.9133 15.8913 10.522L13.3478 8.04378L10.413 10.9786Z" 
                    fill="#476FD4"
                  />
                  <path 
                    fill-rule="evenodd" 
                    clip-rule="evenodd" 
                    d="M24.3688 2.04395L23.9775 3.41351L23.6514 4.84829L22.6079 3.80481L21.5645 2.82655L22.9992 2.43525L24.3688 2.04395Z" 
                    fill="#476FD4"
                  />
                  <path 
                    d="M25.2822 2.30481L24.5648 5.10916C24.4344 5.6309 23.9126 5.89177 23.3909 5.76133C23.1952 5.69611 23.0648 5.6309 22.9344 5.50046L20.9126 3.47872C20.5213 3.08742 20.5213 2.50046 20.9126 2.10916C21.0431 1.97872 21.2387 1.9135 21.3691 1.84829L24.1083 1.1309C24.63 1.00046 25.1517 1.26133 25.2822 1.78307C25.3474 1.97872 25.3474 2.17437 25.2822 2.30481Z" 
                    fill="#476FD4"
                  />
                  <path 
                    d="M6.23896 18.7387C6.23896 19.2605 5.84766 19.6518 5.32592 19.6518C4.73896 19.6518 4.34766 19.2605 4.34766 18.7387V1.26049C4.34766 0.738749 4.73896 0.282227 5.32592 0.282227C5.84766 0.282227 6.23896 0.738749 6.23896 1.26049V18.7387Z" 
                    fill="#476FD4"
                  />
                </svg>
              </div>
              <Typography placeholder={undefined} variant="h6" className="">
                Agency Growth
              </Typography>
            </div>
            <div className="flex justify-center items-center text-3xl font-bold">+{data.agency_growth}%</div>
            <div className="flex justify-center items-end text-xs">this week</div>
          </div>
        </div>

        <div className="rounded-xl border-2 flex-col px-8 pb-4">
          <div className="flex items-center gap-2 mt-6">
            <div className="aspect-square bg-primary w-10 rounded-lg flex items-center justify-center">
              <svg 
                width="28" 
                height="18" 
                viewBox="0 0 28 18" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                d="M1.2045 8.2045C0.765165 8.64384 0.765165 9.35616 1.2045 9.7955L8.36396 16.955C8.8033 17.3943 9.51561 17.3943 9.95495 16.955C10.3943 16.5156 10.3943 15.8033 9.95495 15.364L3.59099 9L9.95495 2.63604C10.3943 2.1967 10.3943 1.48439 9.95495 1.04505C9.51561 0.605709 8.8033 0.605709 8.36396 1.04505L1.2045 8.2045ZM26.7955 9.7955C27.2348 9.35616 27.2348 8.64384 26.7955 8.2045L19.636 1.04505C19.1967 0.605709 18.4844 0.605709 18.045 1.04505C17.6057 1.48439 17.6057 2.1967 18.045 2.63604L24.409 9L18.045 15.364C17.6057 15.8033 17.6057 16.5156 18.045 16.955C18.4844 17.3943 19.1967 17.3943 19.636 16.955L26.7955 9.7955ZM2 10.125L26 10.125V7.875L2 7.875L2 10.125Z"
                fill="#F0F0F0"
                />
              </svg>
            </div>
            <Typography placeholder={undefined} variant="h6" className="">
              Project-Leads - status by stage 
            </Typography>
          </div>
          <ul className="flex h-[6rem] justify-between pt-2 mt-4">
            <li className="pl-4">
              <div className="text-3xl font-bold">{data.all_briefings}</div>
              <div className="text-xs w-[10rem]">all briefings clients <strong>Sent</strong></div>
            </li>
            <li>
              <div className="text-3xl font-bold">+{data.new_briefings}</div>
              <div className="text-xs w-[10rem]">new briefings clients <strong>Sent this week</strong></div>
            </li>
            <li className="pr-4">
              <div className="text-3xl font-bold">+{data.briefings_growth}%</div>
              <div className="text-xs w-[10rem]">growth this week</div>
            </li>
          </ul>
          <ul className="flex h-[6rem] justify-between -mt-4 border-b-2">
            <li className="pl-4">
              <div className="text-3xl font-bold">{data.briefings_received}</div>
              <div className="text-xs w-[10rem]">all <strong>New</strong> briefings agencies <strong>reveiced</strong></div>
            </li>
            <li>
              <div className="text-3xl font-bold">{data.briefings_rejected}</div>
              <div className="text-xs w-[10rem]">all <strong>New</strong> briefings agencies <strong>rejected</strong></div>
            </li>
            <li className="pr-4">
              <div className="text-3xl font-bold">{data.briefings_rejection_rate}%</div>
              <div className="text-xs w-[10rem]">briefings rejection rate</div>
            </li>
          </ul>
          <ul className="flex h-[6rem] justify-between pt-2 mt-4">
            <li className="pl-4">
              <div className="text-3xl font-bold">{data.open_projects}</div>
              <div className="text-xs w-[10rem]">all agencies' <strong>Open</strong> projects since launching</div>
            </li>
            <li>
              <div className="text-3xl font-bold">{data.current_open_projects}</div>
              <div className="text-xs w-[10rem]">all <strong>current</strong> agencies' <strong>Open</strong> projects</div>
            </li>
            <li className="pr-4">
              <div className="text-3xl font-bold">{data.open_new_percentage}%</div>
              <div className="text-xs w-[10rem]"><strong>Open/New</strong> percentage (leads purchase rate)</div>
            </li>
          </ul>
          <ul className="flex h-[6rem] justify-between -mt-4 border-b-2">
            <li className="pl-4">
              <div className="text-3xl font-bold">{data.proposals_received}</div>
              <div className="text-xs w-[10rem]">all proposals clients <strong>Received</strong></div>
            </li>
            <li>
              <div className="text-3xl font-bold">{data.proposals_rejected}</div>
              <div className="text-xs w-[10rem]">all <strong>Received</strong> proposals that clients <strong>rejected</strong></div>
            </li>
            <li className="pr-4">
              <div className="text-3xl font-bold">{data.proposals_rejection_rate}%</div>
              <div className="text-xs w-[10rem]">proposal rejection rate</div>
            </li>
          </ul>
          <ul className="flex h-[6rem] justify-between pt-2 mt-4">
            <li className="pl-4">
              <div className="text-3xl font-bold">{data.projects_won}</div>
              <div className="text-xs w-[10rem]">all projects agencies <strong>Won</strong></div>
            </li>
            <li>
              <div className="text-3xl font-bold">+{data.new_projects_won}</div>
              <div className="text-xs w-[10rem]">new projects agencies <strong>Won this week</strong></div>
            </li>
            <li className="pr-4">
              <div className="text-3xl font-bold">+{data.projects_won_rate}%</div>
              <div className="text-xs w-[10rem]">growth this week</div>
            </li>
          </ul>
          <ul className="flex h-[6rem] justify-between -mt-4 border-b-2">
            <li className="pl-4">
              <div className="text-3xl font-bold">{data.completed_projects}</div>
              <div className="text-xs w-[10rem]">all clients' <strong>Completed</strong> projects</div>
            </li>
            <li>
              <div className="text-3xl font-bold">+{data.new_completed_projects}</div>
              <div className="text-xs w-[10rem]">new clients' <strong>Conpleted</strong> projects <strong>this week</strong></div>
            </li>
            <li className="pr-4">
              <div className="text-3xl font-bold">+{data.completed_projects_growth}%</div>
              <div className="text-xs w-[10rem]">growth this week</div>
            </li>
          </ul>
          <ul className="flex h-[6rem] justify-between gap-4 py-2 mt-4">
            <li className="pl-4">
              <div className="text-3xl font-bold">{data.average_briefings_per_user}</div>
              <div className="text-xs w-[10rem]">average number of briefings <strong>Sent</strong> per user</div>
            </li>
            <li>
              <div className="text-3xl font-bold">{data.projects_per_thousand_briefings}</div>
              <div className="text-xs w-[10rem]"><strong>Completed</strong> projects per <strong>1000</strong> briefings <strong>Sent</strong></div>
            </li>
            <li className="pr-4">
              <div className="text-3xl font-bold">{data.open_projects}</div>
              <div className="text-xs w-[10rem]">total amount of times agencies pay to access briefings</div>
            </li>
          </ul>
        </div>

        <div className="rounded-xl border-2 flex-col px-8 pb-4">
          <div className="flex items-center gap-2 mt-6">
            <div className="aspect-square bg-secondary w-10 rounded-lg flex items-center justify-center">
              <svg 
                width="26" 
                height="26" 
                viewBox="0 0 26 26" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  fill-rule="evenodd" 
                  clip-rule="evenodd" 
                  d="M12.9023 2.00022C14.3017 2.00907 15.6864 2.28897 16.9797 2.82467C18.2941 3.36912 19.4884 4.16713 20.4944 5.17314C21.5005 6.17915 22.2985 7.37346 22.8429 8.68788C22.9706 8.9962 23.0838 9.30971 23.1822 9.62737C23.2147 9.73209 23.2455 9.83725 23.2747 9.94283C23.5349 10.8824 23.6676 11.8548 23.6676 12.8338C23.6676 14.9765 23.0322 17.0711 21.8418 18.8527C21.1545 19.8813 20.3 20.7789 19.3195 21.5117C19.1437 21.6431 18.9639 21.7692 18.7802 21.8898C18.214 22.2616 17.6115 22.5812 16.9797 22.8429C15.0001 23.6629 12.8218 23.8774 10.7202 23.4594C9.34965 23.1868 8.05187 22.6531 6.89459 21.8945C6.7152 21.7769 6.53919 21.654 6.3668 21.5257C5.94608 21.2127 5.54698 20.8683 5.17315 20.4944C3.65802 18.9793 2.6262 17.0489 2.20817 14.9474C1.87587 13.2768 1.9433 11.5577 2.39683 9.92846C2.42478 9.82806 2.45419 9.72801 2.48507 9.62832C2.58345 9.3107 2.69669 8.99687 2.82468 8.68788C3.64466 6.70826 5.03326 5.01625 6.81486 3.82582C8.58384 2.64383 10.6614 2.00904 12.7882 2.0001C12.8034 2.00003 12.8186 2 12.8338 2C12.8566 2 12.8795 2.00007 12.9023 2.00022ZM19.9824 11.7377C20.8076 10.9727 20.5708 10.2393 19.4528 10.1065L15.4064 9.62758L13.7 5.92737C13.4646 5.41695 13.1526 5.16105 12.8434 5.16105C12.5314 5.16105 12.2207 5.41695 11.9854 5.92737L10.2801 9.62518L10.2794 9.62667L6.2339 10.1065C5.1159 10.2393 4.8778 10.9727 5.70432 11.7377L8.6945 14.5022L8.69569 14.5033L7.90064 18.4991C7.74464 19.2845 8.01558 19.7416 8.53832 19.7416C8.80395 19.7277 9.06183 19.6472 9.28822 19.5076L12.8421 17.5172L12.8434 17.5165L16.3985 19.5076C16.6246 19.6466 16.882 19.7266 17.1471 19.7402C17.6698 19.7402 17.9407 19.2845 17.7847 18.4991L16.9913 14.5044L16.9911 14.5033L19.9824 11.7377ZM16.2555 13.7076L17.7546 12.3206L17.7578 12.3185L17.7587 12.3179L19.0245 11.1479L15.2778 10.7032C15.0936 10.6816 14.918 10.613 14.768 10.5039C14.6183 10.3951 14.4991 10.2498 14.4217 10.0817C14.4215 10.0813 14.4213 10.0809 14.4212 10.0805L12.8434 6.654L11.2628 10.0792C11.2626 10.0798 11.2623 10.0803 11.262 10.0809C11.1846 10.2487 11.0655 10.3939 10.916 10.5026C10.766 10.6116 10.5905 10.6802 10.4063 10.7018C10.4062 10.7018 10.4063 10.7018 10.4063 10.7018L8.37421 10.9431L6.66085 11.1465L7.92875 12.3186L9.43053 13.7068C9.43078 13.7071 9.43103 13.7073 9.43127 13.7075C9.56679 13.8332 9.66793 13.9914 9.72507 14.1671C9.78233 14.3432 9.79352 14.531 9.75758 14.7126L9.35801 16.7187V16.7215L9.02274 18.4128L12.3138 16.5723C12.314 16.5722 12.3136 16.5724 12.3138 16.5723C12.4753 16.4822 12.6577 16.4345 12.8427 16.4345C13.0279 16.4345 13.21 16.4819 13.3716 16.5723L16.664 18.4142L15.9279 14.7144C15.8921 14.5328 15.9032 14.3446 15.9605 14.1686C16.0177 13.9925 16.1197 13.8334 16.2555 13.7076ZM25.6676 12.8338C25.6676 15.3721 24.9149 17.8534 23.5047 19.9639C22.0945 22.0744 20.0901 23.7193 17.7451 24.6907C15.4 25.662 12.8196 25.9162 10.33 25.421C7.84054 24.9258 5.55377 23.7035 3.75894 21.9086C1.9641 20.1138 0.741798 17.827 0.246603 15.3375C-0.248591 12.848 0.00556076 10.2676 0.97692 7.92251C1.94828 5.57744 3.59322 3.57308 5.70372 2.16288C7.81423 0.752689 10.2955 0 12.8338 0C14.5192 0 16.188 0.331956 17.7451 0.976914C19.3021 1.62187 20.7169 2.5672 21.9087 3.75893C23.1004 4.95066 24.0457 6.36544 24.6907 7.92251C25.3356 9.47958 25.6676 11.1484 25.6676 12.8338Z" 
                  fill="#F9FBFF"
                />
              </svg>
            </div>
            <Typography placeholder={undefined} variant="h6" className="">
              Rating-Feedback
            </Typography>
          </div>
          <ul className="flex h-[6rem] justify-between gap-8 px-4 pt-2 mt-4">
            <li>
              <div className="text-3xl font-bold">0</div>
              <div className="text-xs w-[15rem]">all rating posted by all <strong>users</strong></div>
            </li>
            <li>
              <div className="text-3xl font-bold">0.123/5</div>
              <div className="text-xs w-[15rem]">average rating posted by all <strong>users</strong></div>
            </li>
          </ul>
          <ul className="flex h-[6rem] justify-between gap-8 px-4 -mt-4">
            <li>
              <div className="text-3xl font-bold">0</div>
              <div className="text-xs w-[15rem]">all rating posted on all <strong>Agency Page</strong></div>
            </li>
            <li>
              <div className="text-3xl font-bold">0.123/5</div>
              <div className="text-xs w-[15rem]">average rating of all <strong>Agency Page</strong></div>
            </li>
          </ul>
          <ul className="flex h-[6rem] justify-between gap-8 px-4 -mt-4">
            <li>
              <div className="text-3xl font-bold">0</div>
              <div className="text-xs w-[15rem]">all rating given to all <strong>Client</strong> (users who sent at least 1 briefing)</div>
            </li>
            <li>
              <div className="text-3xl font-bold">0.123/5</div>
              <div className="text-xs w-[15rem]">average rating of all <strong>Client</strong> (users who sent at least 1 briefing)</div>
            </li>
          </ul>
          <ul className="flex h-[6rem] justify-between gap-8 px-4 -mt-4 border-b-2">
            <li>
              <div className="text-3xl font-bold">0</div>
              <div className="text-xs w-[15rem]">all rating of all <strong>Completed projects</strong></div>
            </li>
            <li>
              <div className="text-3xl font-bold">0.123/5</div>
              <div className="text-xs w-[15rem]">average rating of all <strong>Completed projects</strong></div>
            </li>
          </ul>
          <ul className="flex h-[6rem] justify-between gap-8 px-4 pt-2 mt-4">
            <li>
              <div className="text-3xl font-bold">0</div>
              <div className="text-xs w-[15rem]">number of all feedback posted by <strong>users</strong></div>
            </li>
            <li>
              <div className="text-3xl font-bold">0.123</div>
              <div className="text-xs w-[15rem]">average number of feedback each user posted</div>
            </li>
          </ul>
          <ul className="flex h-[6rem] justify-between gap-8 px-4 -mt-4">
            <li>
              <div className="text-3xl font-bold">0</div>
              <div className="text-xs w-[15rem]">number of feedback on all <strong>Agency Page</strong></div>
            </li>
            <li>
              <div className="text-3xl font-bold">0.123</div>
              <div className="text-xs w-[15rem]">average number of feedback on each <strong>Agency Page</strong></div>
            </li>
          </ul>
          <ul className="flex h-[6rem] justify-between gap-8 px-4 -mt-4">
            <li>
              <div className="text-3xl font-bold">0</div>
              <div className="text-xs w-[15rem]">number of feedback on all <strong>Client</strong> (users who sent at least 1 briefing)</div>
            </li>
            <li>
              <div className="text-3xl font-bold">0.123</div>
              <div className="text-xs w-[15rem]">average number of feedback on each <strong>Client</strong> (users who sent at least 1 briefing)</div>
            </li>
          </ul>
          <ul className="flex h-[6rem] justify-between gap-8 px-4 -mt-4 ">
            <li>
              <div className="text-3xl font-bold">0</div>
              <div className="text-xs w-[15rem]">number of feedback on all <strong>Completed projects </strong></div>
            </li>
            <li>
              <div className="text-3xl font-bold">0.123</div>
              <div className="text-xs w-[15rem]">average number of feedback on each <strong>Completed projects </strong></div>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
