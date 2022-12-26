import React from "react";
import Cards from "../cards";
export default function ProductList(props) {
  let { data } = props;
  return (
    <div class="bg-white">
      <div class="mx-auto max-w-2xl py-8 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="inline-flex justify-center">
          <Logo />
          <h2 class="text-2xl font-bold tracking-tight text-gray-900">
            Boarding Houses
          </h2>
        </div>
        <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data &&
            data.map((item, index) => {
              return <Cards data={item} />;
            })}
        </div>
      </div>
    </div>
  );
}
const Logo = () => {
  return (
    <svg
      width="20px"
      height="20px"
      viewBox="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill="#000000"
      stroke="#000000"
      stroke-width="0"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <title>location_2_fill</title>{" "}
        <g
          id="页面-1"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          {" "}
          <g id="location_2_fill">
            {" "}
            <path
              d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
              id="MingCute"
              fill-rule="nonzero"
            ></path>{" "}
            <path
              d="M6.72009,16.6398 C7.25029,16.4853 7.80543,16.7897 7.96003,17.32 C8.11462,17.8502 7.81012,18.4053 7.27991,18.5599 C6.77914,18.7059 6.41926,18.8607 6.18866,18.9996 C6.42735,19.1433 6.80251,19.303 7.32497,19.4523 C8.47958,19.7822 10.1328,19.9996 12,19.9996 C13.8672,19.9996 15.5204,19.7822 16.675,19.4523 C17.1975,19.303 17.5726,19.1433 17.8113,18.9996 C17.5807,18.8607 17.2209,18.7059 16.7201,18.5599 C16.1899,18.4053 15.8854,17.8502 16.04,17.32 C16.1946,16.7897 16.7497,16.4853 17.2799,16.6398 C17.948,16.8346 18.5608,17.0847 19.0293,17.4058 C19.4655,17.7048 20,18.2259 20,18.9996 C20,19.7832 19.4522,20.3078 19.0097,20.6067 C18.5322,20.9292 17.9071,21.1803 17.2245,21.3753 C15.8456,21.7693 13.9988,21.9996 12,21.9996 C10.0012,21.9996 8.15442,21.7693 6.77553,21.3753 C6.09289,21.1803 5.46776,20.9292 4.99033,20.6067 C4.54781,20.3078 4,19.7832 4,18.9996 C4,18.2259 4.53454,17.7048 4.97068,17.4058 C5.43918,17.0847 6.05202,16.8346 6.72009,16.6398 Z M12,2 C16.1421,2 19.5,5.35786 19.5,9.5 C19.5,12.0679 18.1005,14.1564 16.6502,15.6391 C16.0352526,16.2678158 15.3907163,16.8089881 14.7970227,17.2550925 C14.2033291,17.7011969 12.8455,18.5365 12.8455,18.5365 C12.3176,18.8347 11.6824,18.8347 11.1545,18.5365 C10.6266,18.2383 9.79665913,17.7011969 9.20296073,17.2550925 C8.60926233,16.8089881 7.96472316,16.2678158 7.34978,15.6391 C5.89953,14.1564 4.5,12.0679 4.5,9.5 C4.5,5.35786 7.85786,2 12,2 Z M12,7.5 C10.8954,7.5 10,8.39543 10,9.5 C10,10.6046 10.8954,11.5 12,11.5 C13.1046,11.5 14,10.6046 14,9.5 C14,8.39543 13.1046,7.5 12,7.5 Z"
              id="形状"
              fill="#09244B"
              fill-rule="nonzero"
            ></path>{" "}
          </g>{" "}
        </g>{" "}
      </g>
    </svg>
  );
};