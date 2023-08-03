import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from "@material-tailwind/react";
import Specification from "./Specification";
import Description from "./Description";
import WriteReview from "./WriteReview";
import ProductTag from "./ProductTag";

const SingleItemDescription = () => {
    const SpecificationData = [
        {title : "Frame Material " , value : "Metal "},
        {title : "Lens Material " , value : "Demo Polycarbonate "},
        {title : "Frame Color " , value : "Black "},
        {title : "Collection " , value : "Trend "},
        {title : "Shape " , value : "Round "},
        {title : "Gender " , value : "Both (M/F) "},
        {title : "Style " , value : "Full Frame "},
        {title : "Product Id " , value : "2303 "},
        {title : "Product Type " , value : "Eyeglasses "},
        {title : "Packaged by " , value : "akku ka chasma India "},
        {title : "Raw Material Sourced from " , value : "Imported [International] "},
        {title : "Know Your Size " , value : "Click "},
    ]
    const dataHead = [
        {
            label: "SPECIFICATION",
            value: "Specification",
            desc : <Specification data={SpecificationData}/>
        },
        {
            label: "DESCRIPTION",
            value: "Description",
            desc : <Description />
        },

        {
            label: "WRITE REVIEW",
            value: "Write Review",
            desc : <WriteReview />
        },

        {
            label: "PRODUCTS TAGS",
            value: "Product Tags",
            desc : <ProductTag />
        },
    ];



    return (
        <Tabs id="custom-animation" value="html">
            <TabsHeader 
                className="bg-transparent mb-3"
                indicatorProps={{
                  className: "bg-blue-400/10 shadow-none text-blue-500",
                  default: true,
                }}
            >
                {dataHead.map(({ label, value }) => (
                    <Tab key={value} value={value} className="font-bold  tracking-wide">
                        {label}
                    </Tab>
                ))}
            </TabsHeader>
            <TabsBody
            className=""
                animate={{
                    initial: { y: 250 },
                    mount: { y: 0 },
                    unmount: { y: 250 },
                }}
            >
                {dataHead.map(({ value, desc }) => (
                    <TabPanel key={value} value={value}>
                        {desc}
                    </TabPanel>
                ))}
            </TabsBody>
        </Tabs>
    );
}
export default SingleItemDescription