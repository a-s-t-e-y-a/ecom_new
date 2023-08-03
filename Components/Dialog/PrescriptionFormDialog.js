import { Fragment } from "react";
import { Button, Dialog, DialogBody, Textarea } from "@material-tailwind/react";


const sphere = [
  "-14.00",
  "-13.75",
  "-13.50",
  "-13.25",
  "-13.00",
  "-12.75",
  "-12.50",
  "-12.50",
  "-12.00",
  "-11.75",
  "-11.50",
  "-11.50",
  "-11.00",
  "-10.75",
  "-10.50",
  "-10.50",
  "-10.00",
  "-9.75",
  "-9.50",
  "-9.25",
  "-9.00",
  "-8.75",
  "-8.50",
  "-8.25",
  "-8.00",
  "-7.75",
  "-7.50",
  "-7.25",
  "-7.00",
  "-6.75",
  "-6.50",
  "-6.25",
  "-6.00",
  "-5.75",
  "-5.50",
  "-5.25",
  "-5.00",
  "-4.75",
  "-4.50",
  "-4.25",
  "-4.00",
  "-3.75",
  "-3.50",
  "-3.25",
  "-3.00",
  "-2.75",
  "-2.50",
  "-2.25",
  "-2.00",
  "-1.75",
  "-1.50",
  "-1.25",
  "-1.00",
  "-0.75",
  "-0.50",
  "-0.25",
  "0.00",
  "00 plano",
  "None",
  "SPH",
  "Balance",
  "+0.25",
  "+0.50",
  "+0.75",
  "+1.00",
  "+1.25",
  "+1.50",
  "+1.75",
  "+2.00",
  "+2.25",
  "+2.50",
  "+2.75",
  "+3.00",
  "+3.25",
  "+3.50",
  "+3.75",
  "+4.00",
  "+4.25",
  "+4.50",
  "+4.75",
  "+5.00",
  "+5.25",
  "+5.50",
  "+5.75",
  "+6.00",
  "+6.25",
  "+6.50",
  "+6.75",
  "+7.00",
  "+7.25",
  "+7.50",
  "+7.75",
  "+8.00",
  "+8.25",
  "+8.50",
  "+8.75",
  "+9.00",
];
const cylinder = [
  "-5.00",
  "-4.75",
  "-4.50",
  "-4.25",
  "-4.00",
  "-3.75",
  "-3.50",
  "-3.25",
  "-3.00",
  "-2.75",
  "-2.50",
  "-2.25",
  "-2.00",
  "-1.75",
  "-1.50",
  "-1.25",
  "-1.00",
  "-0.75",
  "-0.50",
  "-0.25",
  "0.00",
  "00 plano",
  "None",
  "SPH",
  "Balance",
  "+0.25",
  "+0.50",
  "+0.75",
  "+1.00",
  "+1.25",
  "+1.50",
  "+1.75",
  "+2.00",
  "+2.25",
  "+2.50",
  "+2.75",
  "+3.00",
  "+3.25",
  "+3.50",
  "+3.75",
  "+4.00",
  "+4.25",
  "+4.50",
  "+4.75",
  "+5.00",
];
const addition = [
  "None",
  ,
  "+0.25",
  "+0.50",
  "+0.75",
  "+1.00",
  "+1.25",
  "+1.50",
  "+1.75",
  "+2.00",
  "+2.25",
  "+2.50",
  "+2.75",
  "+3.00",
  "+3.25",
  "+3.50",
  "+3.75",
  "+4.00",
  "+4.25",
  "+4.50",
  "+4.75",
  "+5.00",
];

const PrescriptionFormDialog = (props) => {
  const { openPreForm, setOpenPreForm, handleOpenForm } = props;

  return (
    <Fragment>
      <Dialog open={openPreForm} handler={handleOpenForm} className="border">
        <DialogBody divider>
          <div className="w-full text-gray-700 space-y-8">
            <h1 className="text-xl font-semibold tracking-wide text-center">
              Fill it out online
            </h1>
            <div className="space-y-4">
              <div>
                <table className="border-collapse border p-2 border-slate-400 rounded-lg text-sm">
                  <thead className="tracking-wide">
                    <tr>
                      <th className="border px-6 py-2">#</th>
                      <th className="border px-6 py-2">Sphere (SPH)</th>
                      <th className="border px-6 py-2">Cylinder (CYL)</th>
                      <th className="border px-6 py-2">Axis (AXI)</th>
                      <th className="border px-6 py-2">Add</th>
                    </tr>
                  </thead>
                  <tbody className="p-1 space-y-1 ">
                    <tr className="border">
                      <td className="font-semibold p-2">Right (OD)</td>
                      <td className="border">
                        <div className="w-full h-full">
                          <select
                            className="w-full h-full px-3 outline-none focus:ring-0"
                            animate={{
                              mount: { y: 0 },
                              unmount: { y: 25 },
                            }}
                          >
                            {sphere.map((data, index) => (
                              <option key={index}>{data}</option>
                            ))}
                          </select>
                        </div>
                      </td>
                      <td className="border">
                        <div className="w-full h-full">
                          <select
                            className="w-full h-full px-3 outline-none focus:ring-0"
                            animate={{
                              mount: { y: 0 },
                              unmount: { y: 25 },
                            }}
                          >
                            {cylinder.map((data, index) => (
                              <option key={index}>{data}</option>
                            ))}
                          </select>
                        </div>
                      </td>
                      <td className="border">1961</td>
                      <td className="border">
                        <div className="w-full h-full">
                        <select
                          className="w-full h-full px-3 outline-none focus:ring-0"
                          animate={{
                            mount: { y: 0 },
                            unmount: { y: 25 },
                          }}
                        >
                          {
                            addition.map((data,index)=>(
                                <option key={index} >{data}</option>
                            ))
                          }
                        </select>
                        </div>
                      </td>
                    </tr>
                    <tr className="border">
                      <td className="font-semibold p-2">Left (OS)</td>
                      <td className="border">
                        <div className="w-full h-full">
                          <select
                            className="w-full h-full px-3 outline-none focus:ring-0"
                            animate={{
                              mount: { y: 0 },
                              unmount: { y: 25 },
                            }}
                          >
                            {sphere.map((data, index) => (
                              <option key={index}>{data}</option>
                            ))}
                          </select>
                        </div>
                      </td>
                      <td className="border">
                        <div className="w-full h-full">
                          <select
                            className="w-full h-full px-3 outline-none focus:ring-0"
                            animate={{
                              mount: { y: 0 },
                              unmount: { y: 25 },
                            }}
                          >
                            {cylinder.map((data, index) => (
                              <option key={index}>{data}</option>
                            ))}
                          </select>
                        </div>
                      </td>
                      <td className="border">1972</td>
                      <td className="border">
                        <div className="w-full h-full">
                        <select
                          className="w-full h-full px-3 outline-none focus:ring-0"
                          animate={{
                            mount: { y: 0 },
                            unmount: { y: 25 },
                          }}
                        >
                          {
                            addition.map((data,index)=>(
                                <option key={index} >{data}</option>
                            ))
                          }
                        </select>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="space-x-2">
                <input
                  type="checkbox"
                  id="checkBox"
                  name="checkBox"
                  value="True"
                />
                <label
                  for="checkBox"
                  className="text-sm tracking-wide"
                >
                  I have 2PD numbers
                </label>
              </div>
              
              <div className="space-x-2">
                <input
                  type="checkbox"
                  id="checkBox"
                  name="checkBox"
                  value="True"
                />
                <label
                  for="checkBox"
                  className="text-sm tracking-wide"
                >
                  My prescription includes prism (+$30)
                </label>
              </div>
              
              <div className="space-x-2">
                <input
                  type="checkbox"
                  id="checkBox"
                  name="checkBox"
                  value="True"
                />
                <label
                  for="checkBox"
                  className="text-sm tracking-wide"
                >
                  Save my Prescriptions
                </label>
              </div>
              
              <div className="py-3">
                <Textarea label="Additionals Comments...." />
              </div>
              
              <div>
                <Button
                  variant="text"
                  color="red"
                  onClick={() => setOpenPreForm(false)}
                  className="mr-1"
                >
                  <span>Cancel</span>
                </Button>
                <Button variant="text" color="green" onClick={handleOpenForm}>
                  <span>Confirm</span>
                </Button>
              </div>
            </div>
          </div>
        </DialogBody>
      </Dialog>
    </Fragment>
  );
};

export default PrescriptionFormDialog;
