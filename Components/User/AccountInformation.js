import { customLocalStorage } from "@/utils/Helpers";
import { Input } from "@material-tailwind/react";
import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";

const AccountInformation = () => {
  const data = customLocalStorage.getItem("user_data");
  const { control, handleSubmit, reset } = useForm({
    mode: "all",
    defaultValue: {
      ...data,
    },
  });

  useEffect(() => {
    const payload = {
      name: data?.name || "",
      email: data?.email || "",
      phone: data?.phone || "",
      address: data?.address || "",
    };
    reset(payload);
  }, [data, reset]);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="h-full w-auto">
      <h1 className="font-semibold text-xl">Your Profile</h1>
      <span className="block my-3">
        <hr />
      </span>

      <div className="pt-3">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="w-[300px]">
            <Controller
              name="name"
              control={control}
              render={({ field: { value, onChange } }) => (
                <Input
                  type="text"
                  label="Full Name"
                  value={value}
                  onChange={onChange}
                />
              )}
            />
          </div>
          <div className="w-[300px]">
            <Controller
              name="email"
              control={control}
              render={({ field: { value, onChange } }) => (
                <Input
                  type="email"
                  label="Email"
                  value={value}
                  onChange={onChange}
                />
              )}
            />
          </div>
          <div className="space-y-6">
            <p className="text-small tracking-wide font-normal">Gender</p>
            <div className="flex gap-5 text-sm pl-3">
              <div className="flex items-center gap-1">
                <Controller
                  name="gender"
                  control={control}
                  render={({ field: { value, onChange } }) => {
                    return (
                      <>
                        <input
                          type="radio"
                          id="male"
                          name="gender"
                          value={value}
                          onChange={onChange}
                        />
                        <label htmlFor="male">Male</label>
                      </>
                    );
                  }}
                />
              </div>
              <div className="flex items-center gap-1">
                <Controller
                  name="gender"
                  control={control}
                  render={({ field: { value, onChange } }) => {
                    return (
                      <>
                        <input
                          type="radio"
                          id="female"
                          name="Gender"
                          value={value}
                          onChange={onChange}
                        />
                        <label htmlFor="female">Female</label>
                      </>
                    );
                  }}
                />
              </div>
              <div className="flex items-center gap-1">
                <Controller
                  name="gender"
                  control={control}
                  render={({ field: { value, onChange } }) => {
                    return (
                      <>
                        <input
                          type="radio"
                          id="other"
                          name="Gender"
                          value={value}
                          onChange={onChange}
                        />
                        <label htmlFor="other">Other</label>
                      </>
                    );
                  }}
                />
              </div>
            </div>
          </div>
          <div className="w-[300px]">
            <Controller
              name="change_password"
              control={control}
              render={({ field: { value, onChange } }) => (
                <Input
                  type="password"
                  label="Change Password"
                  value={value}
                  onChange={onChange}
                />
              )}
            />
          </div>
          <div className="pt-6">
            <button
              type="submit"
              className="text-sm py-1 px-3 rounded-lg tracking-wide text-small bg-gray-700 text-white hover:bg-gray-800 cursor-pointer"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AccountInformation;
