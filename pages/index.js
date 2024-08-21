import Image from "next/image";
import { Inter } from "next/font/google";
import CircularProgressBar from "@/components/circularProgressBar";
import ImageData from "@/components/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const leaveData = [
    {
      leaveType: "Casual leave",
      remainingLeaves: "08",
      image: "Ring.svg",
    },
    {
      leaveType: "Privilege",
      remainingLeaves: "11",
      image: "Ring.svg",
    },
    {
      leaveType: "Sick Leave",
      remainingLeaves: "03",
      image: "Ring.svg",
    },
    {
      leaveType: "Comp off",
      remainingLeaves: "02",
      image: "Ring.svg",
    },
  ];
  const EmpData = [
    {
      empName: "Suresh",
      leaveType: "PL",
      leaveFrom: "02 Jun 2024 - FH",
      leaveTo: "02 Jun 2024 - FH",
      days: "0.5",
    },
    {
      empName: "Logesh",
      leaveType: "PL",
      leaveFrom: "02 Jun 2024 - FH",
      leaveTo: "02 Jun 2024 - FH",
      days: "0.5",
    },
    {
      empName: "Ashok Kumar",
      leaveType: "PL",
      leaveFrom: "02 Jun 2024 - FH",
      leaveTo: "02 Jun 2024 - FH",
      days: "0.5",
    },
    {
      empName: "Suresh",
      leaveType: "PL",
      leaveFrom: "02 Jun 2024 - FH",
      leaveTo: "02 Jun 2024 - FH",
      days: "0.5",
    },
  ];
  return (
    <main>

      {/* <>
            <svg
        width="75"
        height="76"
        viewBox="0 0 75 76"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M71.2454 38.0581C71.2454 33.6266 70.3726 29.2385 68.6767 25.1443C66.9808 21.0501 64.4952 17.33 61.3616 14.1965C58.2281 11.0629 54.508 8.57726 50.4138 6.88139C46.3196 5.18552 41.9315 4.31267 37.5 4.31267C33.0685 4.31266 28.6804 5.18551 24.5862 6.88138C20.492 8.57724 16.7719 11.0629 13.6383 14.1965C10.5048 17.33 8.01911 21.0501 6.32324 25.1443C4.62737 29.2385 3.75452 33.6266 3.75452 38.0581"
          stroke="#black"
          stroke-width="6.98182"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M3.75452 38.0581C3.75452 34.4991 4.31754 30.9625 5.4227 27.5794"
          stroke="#DD2590"
          stroke-width="6.98182"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M34.6311 36.5019C33.6785 36.5019 32.8609 36.2609 32.1782 35.7788C31.4994 35.2928 30.9768 34.5928 30.6105 33.6788C30.2479 32.7609 30.0666 31.6559 30.0666 30.3639C30.0705 29.0719 30.2537 27.9727 30.6162 27.0664C30.9826 26.1562 31.5052 25.462 32.184 24.9837C32.8666 24.5055 33.6824 24.2664 34.6311 24.2664C35.5799 24.2664 36.3956 24.5055 37.0782 24.9837C37.7609 25.462 38.2835 26.1562 38.646 27.0664C39.0124 27.9766 39.1956 29.0758 39.1956 30.3639C39.1956 31.6598 39.0124 32.7667 38.646 33.6846C38.2835 34.5986 37.7609 35.2967 37.0782 35.7788C36.3994 36.2609 35.5837 36.5019 34.6311 36.5019ZM34.6311 34.6912C35.3716 34.6912 35.9559 34.3267 36.384 33.5978C36.816 32.865 37.0319 31.787 37.0319 30.3639C37.0319 29.4229 36.9336 28.6322 36.7369 27.992C36.5402 27.3518 36.2625 26.8697 35.9038 26.5457C35.5452 26.2179 35.1209 26.054 34.6311 26.054C33.8945 26.054 33.3121 26.4204 32.884 27.1532C32.4559 27.8821 32.2399 28.9523 32.2361 30.3639C32.2322 31.3088 32.3267 32.1033 32.5195 32.7474C32.7162 33.3915 32.9939 33.8774 33.3526 34.2052C33.7113 34.5292 34.1374 34.6912 34.6311 34.6912ZM45.9367 24.4284V36.2763H43.7904V26.5168H43.721L40.9499 28.2871V26.3201L43.8945 24.4284H45.9367Z"
          fill="#344054"
        />
        <path
          d="M16.1781 61.0399H14.5517L18.2062 50.8846H19.9765L23.631 61.0399H22.0046L19.1335 52.7292H19.0542L16.1781 61.0399ZM16.4508 57.0631H21.7269V58.3523H16.4508V57.0631ZM30.5397 53.4234L27.7777 61.0399H26.1909L23.424 53.4234H25.0157L26.9446 59.2846H27.024L28.948 53.4234H30.5397ZM33.9314 61.2085C33.4488 61.2085 33.0124 61.1193 32.6223 60.9408C32.2322 60.759 31.9232 60.4961 31.6951 60.1523C31.4703 59.8085 31.3579 59.3871 31.3579 58.8879C31.3579 58.4581 31.4405 58.1044 31.6058 57.8267C31.7711 57.549 31.9942 57.3292 32.2752 57.1672C32.5562 57.0052 32.8703 56.8829 33.2174 56.8003C33.5645 56.7176 33.9182 56.6548 34.2785 56.6118C34.7347 56.559 35.105 56.516 35.3893 56.4829C35.6736 56.4466 35.8802 56.3887 36.0091 56.3094C36.138 56.23 36.2025 56.1011 36.2025 55.9226V55.8879C36.2025 55.4548 36.0802 55.1193 35.8356 54.8813C35.5942 54.6433 35.2339 54.5242 34.7546 54.5242C34.2554 54.5242 33.862 54.635 33.5744 54.8565C33.2901 55.0747 33.0934 55.3176 32.9843 55.5854L31.5909 55.268C31.7562 54.8052 31.9975 54.4317 32.3149 54.1474C32.6356 53.8598 33.0041 53.6515 33.4207 53.5226C33.8372 53.3904 34.2752 53.3242 34.7347 53.3242C35.0389 53.3242 35.3612 53.3606 35.7017 53.4333C36.0455 53.5028 36.3661 53.6317 36.6637 53.8201C36.9645 54.0085 37.2108 54.278 37.4025 54.6284C37.5942 54.9755 37.6901 55.4267 37.6901 55.9821V61.0399H36.2422V59.9986H36.1827C36.0868 60.1904 35.943 60.3788 35.7513 60.5639C35.5595 60.749 35.3132 60.9028 35.0124 61.0251C34.7116 61.1474 34.3513 61.2085 33.9314 61.2085ZM34.2537 60.0185C34.6637 60.0185 35.0141 59.9375 35.305 59.7755C35.5992 59.6135 35.8223 59.4019 35.9744 59.1408C36.1298 58.8763 36.2075 58.5937 36.2075 58.2928V57.311C36.1546 57.3639 36.0521 57.4135 35.9 57.4598C35.7513 57.5028 35.581 57.5408 35.3893 57.5738C35.1975 57.6036 35.0108 57.6317 34.8289 57.6581C34.6471 57.6813 34.4951 57.7011 34.3727 57.7176C34.0851 57.754 33.8223 57.8152 33.5843 57.9011C33.3496 57.9871 33.1612 58.111 33.019 58.273C32.8802 58.4317 32.8108 58.6433 32.8108 58.9077C32.8108 59.2747 32.9463 59.5523 33.2174 59.7408C33.4884 59.9259 33.8339 60.0185 34.2537 60.0185ZM39.6649 61.0399V53.4234H41.1475V61.0399H39.6649ZM40.4137 52.2482C40.1558 52.2482 39.9343 52.1623 39.7492 51.9904C39.5674 51.8152 39.4765 51.6069 39.4765 51.3656C39.4765 51.1209 39.5674 50.9127 39.7492 50.7408C39.9343 50.5656 40.1558 50.478 40.4137 50.478C40.6715 50.478 40.8913 50.5656 41.0732 50.7408C41.2583 50.9127 41.3508 51.1209 41.3508 51.3656C41.3508 51.6069 41.2583 51.8152 41.0732 51.9904C40.8913 52.1623 40.6715 52.2482 40.4137 52.2482ZM44.6248 50.8846V61.0399H43.1422V50.8846H44.6248ZM49.9021 61.1937C49.1517 61.1937 48.5054 61.0333 47.9632 60.7127C47.4244 60.3887 47.0079 59.9342 46.7137 59.349C46.4227 58.7606 46.2773 58.0714 46.2773 57.2813C46.2773 56.5011 46.4227 55.8135 46.7137 55.2185C47.0079 54.6234 47.4178 54.159 47.9434 53.8251C48.4723 53.4912 49.0905 53.3242 49.798 53.3242C50.2277 53.3242 50.6442 53.3953 51.0475 53.5375C51.4508 53.6796 51.8128 53.9028 52.1335 54.2069C52.4542 54.511 52.707 54.9061 52.8922 55.392C53.0773 55.8747 53.1699 56.4614 53.1699 57.1523V57.678H47.1153V56.5672H51.717C51.717 56.1771 51.6376 55.8317 51.4789 55.5309C51.3203 55.2267 51.0971 54.9871 50.8095 54.8118C50.5252 54.6366 50.1913 54.549 49.8079 54.549C49.3913 54.549 49.0277 54.6515 48.717 54.8565C48.4095 55.0581 48.1715 55.3226 48.0029 55.6499C47.8376 55.9738 47.755 56.3259 47.755 56.7061V57.5738C47.755 58.0829 47.8442 58.516 48.0227 58.873C48.2046 59.23 48.4575 59.5028 48.7814 59.6912C49.1054 59.8763 49.4839 59.9689 49.917 59.9689C50.198 59.9689 50.4542 59.9292 50.6856 59.8499C50.917 59.7672 51.117 59.6449 51.2856 59.4829C51.4542 59.3209 51.5831 59.1209 51.6723 58.8829L53.0756 59.1358C52.9632 59.549 52.7616 59.911 52.4707 60.2218C52.1831 60.5292 51.8211 60.7689 51.3847 60.9408C50.9517 61.1094 50.4575 61.1937 49.9021 61.1937ZM57.6661 61.1887C57.0513 61.1887 56.5025 61.0317 56.0199 60.7176C55.5405 60.4003 55.1637 59.949 54.8893 59.3639C54.6182 58.7755 54.4827 58.0697 54.4827 57.2466C54.4827 56.4234 54.6199 55.7193 54.8942 55.1342C55.1719 54.549 55.5521 54.1011 56.0347 53.7904C56.5174 53.4796 57.0645 53.3242 57.6761 53.3242C58.1488 53.3242 58.5289 53.4036 58.8165 53.5623C59.1075 53.7176 59.3322 53.8995 59.4909 54.1077C59.6529 54.316 59.7785 54.4995 59.8678 54.6581H59.957V50.8846H61.4397V61.0399H59.9918V59.8548H59.8678C59.7785 60.0168 59.6496 60.2019 59.481 60.4102C59.3157 60.6185 59.0876 60.8003 58.7967 60.9556C58.5058 61.111 58.1289 61.1887 57.6661 61.1887ZM57.9934 59.9242C58.4199 59.9242 58.7802 59.8118 59.0744 59.5871C59.3719 59.359 59.5967 59.0433 59.7488 58.6399C59.9041 58.2366 59.9818 57.7672 59.9818 57.2317C59.9818 56.7028 59.9058 56.2399 59.7537 55.8433C59.6017 55.4466 59.3785 55.1375 59.0843 54.916C58.7901 54.6945 58.4265 54.5837 57.9934 54.5837C57.5471 54.5837 57.1752 54.6995 56.8777 54.9309C56.5802 55.1623 56.3554 55.478 56.2033 55.878C56.0546 56.278 55.9802 56.7292 55.9802 57.2317C55.9802 57.7408 56.0562 58.1986 56.2083 58.6052C56.3603 59.0118 56.5851 59.3342 56.8827 59.5722C57.1835 59.8069 57.5537 59.9242 57.9934 59.9242Z"
          fill="#475467"
        />
      </svg>
      </> */}
      <nav>
        <div className="w-full flex justify-end h-20 items-center px-4 md:px-10 ">
          <div>
            <Image src="/Logo.png" alt="Vercel Logo" width={44} height={44} />
          </div>
        </div>
        <div className="border-y px-9 ">
          <div className="flex space-x-8  pt-8 pb-5">
            <a href="#" className="text-gray-500 font-medium">
              Attendance
            </a>
            <a
              href="#"
              className="text-red-500 font-medium border-b-2 border-red-500"
            >
              Leave
            </a>
            <a href="#" className="text-gray-500 font-medium">
              Remote
            </a>
            <a href="#" className="text-gray-500 font-medium">
              Others
            </a>
          </div>
        </div>
      </nav>
      <div className="px-6">
        <div className="flex  pt-8 pb-5">
          <button
            type="button"
            className=" flex gap-2 text-gray-500 hover:text-black border border-gray-700  hover:border-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
          >
            <Image
              src="/CallenderIcon.png"
              alt="Vercel Logo"
              width={20}
              height={20}
            />
            2022
          </button>
          <button
            type="button"
            className="flex gap-2 text-white bg-red-500 border border-red-500 focus:outline-none hover:bg-red-500 focus:ring-4 focus:ring-red-500 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
          >
            <Image
              src="/PlusIcon.png"
              alt="Vercel Logo"
              width={20}
              height={20}
            />
            Apply Leave
          </button>
        </div>

        <div className="flex gap-4">
          {leaveData.map((item, key) => {
            return (
              <>
                <div
                  key={key}
                  className="flex flex-col gap-3 items-center border border-gray-200 rounded-lg shadow md:flex-row md:max-w-72 md:min-w-72 hover:bg-gray-100"
                >
                  <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl tracking-tight text-black bg-">
                      {item?.leaveType}
                    </h5>
                    <p className="mb-3 font-medium text-gray-700 ">
                      <span className="text-black">
                        {" "}
                        {item?.remainingLeaves}
                      </span>{" "}
                      remaining
                    </p>
                  </div>
                  <ImageData color="#DC6803" />
                  {/* <Image
                    src="/Ring.svg"
                    alt="Vercel Logo"
                    width={75}
                    height={75}
                  /> */}
                </div>
              </>
            );
          })}
        </div>
        <div className="w-full flex py-6">
          <div className="flex gap-6 w-1/2 ">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <div className="flex justify-between px-6 py-5">
                <div className="flex">
                  <div>
                    <Image
                      src="/Featuredicon.png"
                      alt="Vercel Logo"
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className="pl-3">
                    <h3 className="text-lg">Team Leave Requests</h3>
                    <h5 className="font-medium text-gray-400 text-sm">
                      Manage your team members leave requests here.
                    </h5>
                  </div>
                </div>
                <div>
                  <form className="max-w-md mx-auto">
                    <label
                      for="default-search"
                      className="mb-2 text-sm font-medium  sr-only text-white"
                    >
                      Search
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg
                          className="w-4 h-4  text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 20"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                          />
                        </svg>
                      </div>
                      <input
                        type="search"
                        id="default-search"
                        className="block w-full p-4 ps-10 text-sm rounded-lg ring-blue-500  focus:ring-blue-500 focus:border-blue-500 border-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Search..."
                        required
                      />
                    </div>
                  </form>
                </div>
              </div>
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Type
                    </th>
                    <th scope="col" className="px-6 py-3">
                      From
                    </th>
                    <th scope="col" className="px-6 py-3">
                      To
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Days
                    </th>
                    <th scope="col" className="px-5 py-3">
                      Decision
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {EmpData.map((data, key) => {
                    return (
                      <>
                        <tr className="bg-white border-b   hover:bg-gray-50 ">
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                          >
                            {data?.empName}
                          </th>
                          <td className="px-6 py-4">
                            <span className="bg-pink-100 rounded-xl px-3 text-pink-600">{data.leaveType}</span></td>
                          <td className="px-6 py-4">{data.leaveFrom}</td>
                          <td className="px-6 py-4">{data.leaveTo}</td>
                          <td className="px-6 py-4">{data.days}</td>
                          <td className="px-6 py-4">
                            {/* <div className="flex justify-center items-center w-full flex-col  border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100">
                              <div className="w-1/2 flex justify-center items-center relative">
                                <Image
                                  className=" opacity-100  hover:opacity-0  hover:absolute  hover:left-0 "
                                  src="/check.png"
                                  alt="Vercel Logo"
                                  width={20}
                                  height={20}
                                />
                                <p className="absolute left-0 opacity-0  hover:opacity-100 transition-opacity duration-300">
                                  Approve
                                </p>
                              </div>
                              <div className="w-1/2 flex justify-center items-center">
                                <Image
                                  src="/x.png"
                                  alt="Vercel Logo"
                                  width={20}
                                  height={20}
                                />
                              </div>
                            </div> */}
                            <div className="inline-flex border border-gray-200 rounded-lg">
                              <button className="  text-gray-800 font-bold py-2 px-4 rounded-l group border-r-gray-200 border-r border-solid;">
                                <span className="">
                                  <Image
                                    src="/check.png"
                                    alt="Vercel Logo"
                                    width={20}
                                    height={20}
                                  />
                                </span>
                                <span className="hidden group-hover:inline">
                                  Prev
                                </span>
                              </button>
                              <button className="  text-gray-800 font-bold py-2 px-4 rounded-r group">
                                <span className="">
                                  <Image
                                    src="/x.png"
                                    alt="Vercel Logo"
                                    width={20}
                                    height={20}
                                  />
                                </span>
                                <span className="hidden group-hover:inline">
                                  Next
                                </span>
                              </button>
                            </div>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div className="w-1/2">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <div className="flex justify-between px-8 py-5">
                <div className="flex">
                  <div>
                    <Image
                        src="/Avatar.png"
                      alt="Vercel Logo"
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className="pl-3">
                    <h3  className="text-lg">My Leave Request</h3>
                    <h5 className="font-medium text-gray-400 text-sm">
                      Check your leave requests here
                    </h5>
                  </div>
                </div>
              </div>
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Type
                    </th>
                    <th scope="col" className="px-6 py-3">
                      From
                    </th>
                    <th scope="col" className="px-6 py-3">
                      To
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Days
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Status
                    </th>
                    <th scope="col" className="px-5 py-3">
                      Decision
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {EmpData.map((data, key) => {
                    return (
                      <>
                        <tr className="bg-white border-b   hover:bg-gray-50 ">
                        <td className="px-6 py-4">
                        <span className="bg-pink-100 rounded-md px-3 text-pink-600">{data.leaveType}</span></td>
                          <td className="px-6 py-4">{data.leaveFrom}</td>
                          <td className="px-6 py-4">{data.leaveTo}</td>
                          <td className="px-6 py-4">{data.days}</td>
                          <td className="px-6 py-4">
                        <span className="bg-green-100 rounded-xl p-2 text-green-600">Approved</span></td>
                        <td className="px-6 py-4">
                       View Details</td>
                          {/* <td className="px-6 py-4"> */}
                            {/* <div className="flex justify-center items-center w-full flex-col  border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100">
                              <div className="w-1/2 flex justify-center items-center relative">
                                <Image
                                  className=" opacity-100  hover:opacity-0  hover:absolute  hover:left-0 "
                                  src="/check.png"
                                  alt="Vercel Logo"
                                  width={20}
                                  height={20}
                                />
                                <p className="absolute left-0 opacity-0  hover:opacity-100 transition-opacity duration-300">
                                  Approve
                                </p>
                              </div>
                              <div className="w-1/2 flex justify-center items-center">
                                <Image
                                  src="/x.png"
                                  alt="Vercel Logo"
                                  width={20}
                                  height={20}
                                />
                              </div>
                            </div> */}
                            {/* <div className="inline-flex border border-gray-200 rounded-lg">
                              <button className="  text-gray-800 font-bold py-2 px-4 rounded-l group border-r-gray-200 border-r border-solid;">
                                <span className="">
                                  <Image
                                    src="/check.png"
                                    alt="Vercel Logo"
                                    width={20}
                                    height={20}
                                  />
                                </span>
                                <span className="hidden group-hover:inline">
                                  Prev
                                </span>
                              </button>
                              <button className="  text-gray-800 font-bold py-2 px-4 rounded-r group">
                                <span className="">
                                  <Image
                                    src="/x.png"
                                    alt="Vercel Logo"
                                    width={20}
                                    height={20}
                                  />
                                </span>
                                <span className="hidden group-hover:inline">
                                  Next
                                </span>
                              </button>
                            </div> */}
                          {/* </td> */}
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
