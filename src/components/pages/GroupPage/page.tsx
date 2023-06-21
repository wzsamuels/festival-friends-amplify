import {useAuthenticator} from "@aws-amplify/ui-react";
import {Link} from "react-router-dom";
import Button from "../../common/Button/Button";
import React from "react";

const GroupPage = () => {
  const { authStatus } = useAuthenticator(context => [context.authStatus]);

    return (
      <>
        <div className='bg-[url("https://twinsilver.mo.cloudinary.net/eventfriends/public/website/Untitled-2.png?tx=q_auto,f_auto")] w-full bg-cover relative min-h-[calc(100vh-5rem)] h-full'>
          <div className="flex flex-col items-center justify-center bg-white p-4 rounded-xl w-full max-w-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <h1 className="m-4 text-xl">
              Connect with your community!
            </h1>
            { authStatus !== "authenticated" ?
              <>
                <p>The Event Friends groups feature allows university students and teachers to connect with each other in order to share events and make friends.</p>
                <p className="my-2">Content creators and influencers can also connect with brands and sponsored events.</p>
                <p className="my-2">Sign in to get started!</p>
                <Link to="/account">
                  <Button>Sign In</Button>
                </Link>
              </>
              :
              <div className="flex justify-center gap-4">
                <Link to="university"><Button>University Groups</Button></Link>
                <Link to="brand"><Button>Influencer Groups</Button></Link>
              </div>
            }
          </div>
        </div>
      </>
    );
}

export default GroupPage;