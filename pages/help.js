import Layout from '@/Layout/Layout'
import TabPanel from '@/components/Tab/TabPanel'
import Cancellation from '@/components/Help/Cancellation';
import RefundPolicy from '@/components/Help/RefundPolicy';
import GuideToBuy from '@/components/Help/GuideToBuy';
import PrivacyPolicy from '@/components/Help/PrivacyPolicy';
import DeliveryandShippingTime from '@/components/Help/DeliveryandShippingTime';
import EasyReturnPolicy from '@/components/Help/EasyReturnPolicy';

const help = () => {
  const TabPanelOption = [
    { label: "Cancellation", component: Cancellation },
    { label: "Refund Policy", component: RefundPolicy },
    { label: "Privacy Policy", component: PrivacyPolicy },
    { label: "Guide To Buy", component: GuideToBuy },
    { label: "Delivery and Shipping Time", component: DeliveryandShippingTime },
    { label: "7-Day Easy Return Policy", component: EasyReturnPolicy },
  ];

  return (
    <Layout>
        <div className='text-gray-700'>
          <h1 className='text-5xl font-bold tracking-wide text-center'>We Here To Help You</h1>
          <div className='w-[90%] mx-auto'>
            <TabPanel TabPanelOption={TabPanelOption}/>
          </div>
        </div>
    </Layout>
  )
}

export default help