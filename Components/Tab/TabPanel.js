import { useState } from 'react'
import { Tab } from '@headlessui/react'
import Cancellation from '../Help/Cancellation'
import RefundPolicy from '../Help/RefundPolicy'
import PrivacyPolicy from '../Help/PrivacyPolicy'
import GuideToBuy from '../Help/GuideToBuy'
import DeliveryandShippingTime from '../Help/DeliveryandShippingTime'
import EasyReturnPolicy from '../Help/EasyReturnPolicy'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const TabPanel = () => {
  let [categories] = useState({
    "Cancellation": [<Cancellation />],
    "Refund Policy": [<RefundPolicy />],
    "Privacy Policy": [<PrivacyPolicy/>],
    "Guide To Buy": [<GuideToBuy/>],
    "Delivery and Shipping Time": [<DeliveryandShippingTime/>],
    "7-Day Easy Return Policy": [<EasyReturnPolicy/>],
  })

  
  return (
    <div className="w-full  px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                  'ring-white ring-opacity-60 ring-offset-1 ring-offset-blue-400 focus:outline-none focus:ring-1',
                  selected
                    ? 'bg-white shadow'
                    : 'text-white hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-xl bg-white p-3',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}
            >
              {
                posts.map((posts) => 
                  {
                    switch(idx){
                      case 0 : return <Cancellation />;
                      case 1 : return <RefundPolicy />;
                      case 2 : return <PrivacyPolicy />;
                      case 3 : return <GuideToBuy />;
                      case 4 : return <DeliveryandShippingTime />;
                      case 5 : return <EasyReturnPolicy />;
                    }
                  }
                )
              }
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}


export default TabPanel