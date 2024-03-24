"use client";
import { Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const TabPanel = ({ TabPanelOption, TableData }) => {
  return (
    <div className="w-full px-2 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-gray-900/20 p-1">
          {TabPanelOption.map((element, index) => (
            <Tab
              key={index}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2 text-sm font-medium leading-5 text-blue-700",
                  "ring-white ring-opacity-60  focus:outline-none focus:ring-0",
                  selected
                    ? "bg-white shadow"
                    : "text-white hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              {element.label}
            </Tab>
          ))}
        </Tab.List>

        <Tab.Panels className="mt-2">
          {TabPanelOption.map((element, idx) => (
            <Tab.Panel key={idx}>{element.component}</Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default TabPanel;
