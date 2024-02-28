import profileB from "../../public/profile-2.jpg";
import profileC from "../../public/profile-3.jpg";
import profileD from "../../public/profile-4.jpg";

import Image from "next/image";

const RecentUpdate = () => {
  return (
    <div>
      <div className="recent-updates text-black mt-8 pt-2 ">
        <h2 className="font-bold text-gray-600 text-xl mt-2">Recent Updates</h2>

        <div className=" bg-white rounded-xl grid gap-y-4 shadow-lg mt-4 w-[24rem] h-[18rem] p-5">
          <div className="update flex gap-2">
            {/* <div className="profile-photo"> */}
            <div className="">
              <Image
                src={profileB}
                alt="Profile"
                //   height={38}
                width={50}
                className="rounded-full"
              />
            </div>
            {/* </div> */}

            <div className="message">
              <p className="text-gray-500 text-sm">
                <b className="text-black">Joshua Mondie</b>received his order of
                the tech gps drone
              </p>
              <small className="text-gray-500 text-xs">2 munites ago</small>
            </div>
          </div>

          <div className=" flex gap-2">
            <div className="">
              <Image
                src={profileC}
                alt="Profile"
                //   height={38}
                width={50}
                className="rounded-full"
              />
            </div>
            <div className="message">
              <p className="text-gray-500 text-sm">
                <b className="text-black">Joshua Mondie</b>received his order of
                the tech gps drone
              </p>
              <small className="text-gray-500 text-xs">2 munites ago</small>
            </div>
        
          </div>

          <div className="update flex gap-2">
            <div className="">
              <Image
                src={profileD}
                alt="Profile"
                //   height={38}
                width={50}
                className="rounded-full"
              />
            </div>

            <div className="message">
              <p className="text-gray-500 text-sm ">
                <b className="text-black">Joshua Mondie</b>received his order of
                the tech gps drone
              </p>
              <small className="text-gray-500 text-xs">2 munites ago</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentUpdate;
