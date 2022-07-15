// components/Profile.js

/*
profile IDs for debugging:
stani: profile/0x05 | wallet/0x2E21f5d32841cf8C7da805185A041400bF15f21A
davidev: profile/0x16 | wallet/0x52EAF3F04cbac0a4B9878A75AB2523722325D4D4
yoginth: profile/0x0d | wallet/0x3A5bd1E37b099aE3386D13947b6a90d97675e5e3
*/

import Link from "next/link";
import { shorten_Ether_address } from './fancyLinks'

export default function Profile(props) {
  const profile = props.profile;

  const address_display = shorten_Ether_address(profile.ownedBy)

  // When displayFullProfile is true, we show more info.
  const displayFullProfile = props.displayFullProfile;

  console.log(profile)

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
                <Link href={`../wallet/${profile.ownedBy}`}>{address_display}</Link>
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
      </Link >
    </div >
  );
}