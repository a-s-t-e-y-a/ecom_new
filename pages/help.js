import Layout from '@/Layout/Layout'
import TabPanel from '@/Components/Tab/TabPanel'
import Cancellation from '@/Components/Help/Cancellation';
import RefundPolicy from '@/Components/Help/RefundPolicy';
import GuideToBuy from '@/Components/Help/GuideToBuy';
import PrivacyPolicy from '@/Components/Help/PrivacyPolicy';
import DeliveryandShippingTime from '@/Components/Help/DeliveryandShippingTime';
import EasyReturnPolicy from '@/Components/Help/EasyReturnPolicy';

const help = () => {
  const TabPanelOption = [
    // { label: "Cancellation", component: Cancellation },
    // { label: "Refund Policy", component: RefundPolicy },
    { label: "Privacy Policy", component: PrivacyPolicy },
    { label: "Guide To Buy", component: GuideToBuy },
    { label: "Delivery and Shipping Time", component: DeliveryandShippingTime },
    { label: "7-Day Easy Return Policy", component: EasyReturnPolicy },
  ];

  return (
    <Layout>
        <div className='text-gray-700 m-4'>
          <h1 className='text-5xl font-bold tracking-wide text-center py-12'>We Here To Help You</h1>
          <div className='w-[90%] flex flex-col items-center'>
            <TabPanel TabPanelOption={TabPanelOption}/>
          </div>
        </div>
    </Layout>
  )
}

export default help