import SelectBox from "@/Components/ui/SelectBox";
import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";

function Test() {
  const [value, setValue] = React.useState();

  const options = [
    {
      products_categories_id: 26,
      name: "Eyeglass",
      image:
        "https://akkukachasma.s3.amazonaws.com/1713360256155Eyeglass frame.png",
      created_on: "2024-04-17T13:24:17.362Z",
      updated_on: "2024-04-17T13:24:17.362Z",
      status: 1,
      url: "Eyeglass",
      imageArray:
        "https://akkukachasma.s3.amazonaws.com/1713360256155Eyeglass frame.png",
    },
    {
      products_categories_id: 27,
      name: "Sunglass",
      image:
        "https://akkukachasma.s3.amazonaws.com/1713360273982Sunglass price.jpeg",
      created_on: "2024-04-17T13:24:35.110Z",
      updated_on: "2024-04-17T13:24:35.110Z",
      status: 1,
      url: "Sunglass",
      imageArray:
        "https://akkukachasma.s3.amazonaws.com/1713360273982Sunglass price.jpeg",
    },
    {
      products_categories_id: 28,
      name: "Reading Glass",
      image:
        "https://akkukachasma.s3.amazonaws.com/1713360338742Reading Glass for Near reading.jpg",
      created_on: "2024-04-17T13:25:40.098Z",
      updated_on: "2024-04-17T13:25:40.098Z",
      status: 1,
      url: "Reading Glass",
      imageArray:
        "https://akkukachasma.s3.amazonaws.com/1713360338742Reading Glass for Near reading.jpg",
    },
    {
      products_categories_id: 30,
      name: "Prescription Sunglasses",
      image:
        "https://akkukachasma.s3.amazonaws.com/1713360545060Prescriotion sunglass .jpeg",
      created_on: "2024-04-17T13:29:05.959Z",
      updated_on: "2024-04-17T13:29:05.959Z",
      status: 1,
      url: "Prescription Sunglasses",
      imageArray:
        "https://akkukachasma.s3.amazonaws.com/1713360545060Prescriotion sunglass .jpeg",
    },
    {
      products_categories_id: 31,
      name: "Accessories",
      image:
        "https://akkukachasma.s3.amazonaws.com/1713360576210Box and Cloth.jpg",
      created_on: "2024-04-17T13:29:37.500Z",
      updated_on: "2024-04-17T13:29:37.500Z",
      status: 1,
      url: "Accessories",
      imageArray:
        "https://akkukachasma.s3.amazonaws.com/1713360576210Box and Cloth.jpg",
    },
    {
      products_categories_id: 32,
      name: "Offer 99",
      image: "https://akkukachasma.s3.amazonaws.com/1713360607751Offer99.png",
      created_on: "2024-04-17T13:30:08.612Z",
      updated_on: "2024-04-17T13:30:08.612Z",
      status: 1,
      url: "Offer 99",
      imageArray:
        "https://akkukachasma.s3.amazonaws.com/1713360607751Offer99.png",
    },
  ];

  const { reset, control } = useForm();

  useEffect(() => {
    const payload = [
      {
        products_categories_id: 31,
        name: "Accessories",
        image:
          "https://akkukachasma.s3.amazonaws.com/1713360576210Box and Cloth.jpg",
        created_on: "2024-04-17T13:29:37.500Z",
        updated_on: "2024-04-17T13:29:37.500Z",
        status: 1,
        url: "Accessories",
        imageArray:
          "https://akkukachasma.s3.amazonaws.com/1713360576210Box and Cloth.jpg",
      },
      {
        products_categories_id: 32,
        name: "Offer 99",
        image: "https://akkukachasma.s3.amazonaws.com/1713360607751Offer99.png",
        created_on: "2024-04-17T13:30:08.612Z",
        updated_on: "2024-04-17T13:30:08.612Z",
        status: 1,
        url: "Offer 99",
        imageArray:
          "https://akkukachasma.s3.amazonaws.com/1713360607751Offer99.png",
      },
    ];
    const prePopulateData = payload.map((item) => {
      return {
        label: item.name,
        value: item.products_categories_id,
      };
    });
    const resetPayload = {
      multi: prePopulateData,
    }
    reset(resetPayload)
  }, [reset]);


  return (
    <div className="h-screen grid place-content-center bg-slate-200">
      <Controller
        name="multi"
        control={control}
        rules={{ required: true }}
        render={({ field: { value, onChange } }) => {
          return (
            <SelectBox
              options={options}
              value={value}
              onChange={onChange}
              label="Multiple Selection"
              multiple
            />
          );
        }}
      />
    </div>
  );
}
export default Test;
