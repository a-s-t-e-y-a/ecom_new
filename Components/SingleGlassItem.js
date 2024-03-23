import React from "react";
import SlideOnHover from "./Swiper/SlideOnHover";
import { IoIosShareAlt } from "react-icons/io";

const SingleGlassItem = ({value}) => {
	const imageArray = value?.product_images?.split(',')
	return (
		<div className=" w-auto px-3 hover:shadow-xl rounded-md">
			<div className="relative   space-y-3">
				<div className=" w-full px-4">
					<SlideOnHover data={imageArray} />
				</div>

				{/* Detail  */}
				<div>
					<div className="grid grid-cols-3 items-center justify-center gap-5">
						<div className="col-span-1 flex flex-col items-center justify-between">
							<span className="text-base text-nowrap font-semibold tracking-wider">
								135 <span className="text-xs">MM</span>
							</span>
							<span className="text-xs text-gray-500 tracking-wider">
								FrameWidth
							</span>
						</div>
						<div className="col-span-1  text-nowrap flex flex-col items-center justify-center">
							<span className="text-base font-semibold tracking-wider">
								135 <span className="text-xs">MM</span>
							</span>
							<span className="text-xs text-gray-500 tracking-wider">
								LensWidth
							</span>
						</div>
						<div className="col-span-1 flex flex-col items-center justify-center">
							<span className="text-base font-semibold tracking-wider">
								Medium
							</span>
							<span className="text-xs text-gray-500 tracking-wider">
								FrameSize
							</span>
						</div>
						<div className="col-span-1  text-nowrap flex flex-col items-center justify-center">
							<span className="text-lg font-bold">
								$ 599
							</span>
						</div>
					</div>
					
				</div>
			</div>
		</div>
	);
};

export default SingleGlassItem;
