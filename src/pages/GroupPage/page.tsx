import {Link} from "react-router-dom";
import Button from "../../components/common/Button/Button";
import React from "react";

const GroupPage = () => {
  return (
    <div className='bg-[url("https://twinsilver.mo.cloudinary.net/eventfriends/public/website/friends.png?tx=q_auto,f_auto")] w-full bg-cover relative min-h-[calc(100vh-5rem)] h-full'>
      <div className="flex flex-col items-center justify-center bg-white p-4 rounded-xl w-full max-w-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="m-4 text-xl">
          Connect with your community!
        </h1>
        <div className="flex justify-center gap-4">
          <Link to="/groups/university"><Button>University Groups</Button></Link>
          <Link to="groups/brand"><Button>Influencer Groups</Button></Link>
        </div>
      </div>
    </div>
  );
}

export default GroupPage;