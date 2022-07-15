// components/Profile.js

import Link from "next/link";
import { Etherscan_copy_link } from './fancyLinks'

export default function Profile(props) {
  const profile = props.profile;

  // When displayFullProfile is true, we show more info.
  const displayFullProfile = props.displayFullProfile;

  return (
    <div className="p-8">
      <Link href={`/profile/${profile.id}`}>
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="md:shrink-0">
              {profile.picture ? (
                <img
                  src={
                    profile.picture.original
                      ? profile.picture.original.url
                      : profile.picture.uri
                  }
                  className="h-48 w-full object-cover md:h-full md:w-48"
                />
              ) : (
                <div
                  style={{
                    backgroundColor: "gray",
                  }}
                  className="h-48 w-full object-cover md:h-full md:w-48"
                />
              )}
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                {profile.handle}
                {displayFullProfile &&
                  profile.name &&
                  " (" + profile.name + ")"}
              </div>
              <div className="mt-2 text-xs text-slate-900">
                <Etherscan_copy_link full_address={`${profile.ownedBy}`}></Etherscan_copy_link>
              </div>
              <div className="block mt-1 text-sm leading-tight font-medium text-black hover:underline">
                {profile.bio}
              </div>
              <div className="mt-2 text-xs text-slate-500 text-right">
                following: {profile.stats.totalFollowing} {" "}
                followers: {profile.stats.totalFollowers}
                <p>(public+private) posts: {profile.stats.totalPosts}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}