import React from "react";

export default function Cards(props) {
  const { data } = props;
  return (
    <div class="group relative">
      <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
        <img
          src={
            data?.photo
              ? data?.photo[0]
              : "https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg"
          }
          alt="Front of men&#039;s Basic Tee in black."
          class="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div class="mt-4 flex justify-between">
        <div>
          <h3 class="text-sm text-gray-700">
            <a href="#">
              <span aria-hidden="true" class="absolute inset-0"></span>
              {data?.name}
            </a>
          </h3>
          <p class="mt-1 text-sm text-gray-500"> {data?.address}</p>
        </div>
        <p class="text-sm font-medium text-gray-900">
          ₱ {data?.rent_price ? data?.rent_price : 0}
        </p>
      </div>
    </div>
  );
}
