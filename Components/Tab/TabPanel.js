import { Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const TabPanel = ({ TabPanelOption }) => {
  return (
    <Tab.Group>
      <Tab.List className={"flex"}>
        {TabPanelOption.map((list, indx) => (
          <Tab
            key={indx}
            className={({ selected }) =>
              classNames(
                "w-[250px]  rounded-lg py-2.5 text-sm bg-slate-300 font-medium leading-5",
                "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                selected
                  ? "bg-white text-blue-700 shadow"
                  : " hover:bg-white/[0.12] hover:text-blue-700"
              )
            }
          >
            {list?.label}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels>
        {TabPanelOption.map((elemt, indx) => (
          <Tab.Panel key={indx} >{elemt?.component}</Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default TabPanel;
