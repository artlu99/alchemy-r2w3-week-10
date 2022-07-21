import Link from "next/link";
import { shorten_Ether_address } from './fancyLinks'

export default function Profile(props) {
  const profile = props.profile;

  const address_display = shorten_Ether_address(profile.ownedBy);

  // When displayFullProfile is true, we show more info.
  const displayFullProfile = props.displayFullProfile;

  return (
    <div className="p-8">
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
                alt={profile.id}
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
          <div className="p-8 w-full">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              {profile.handle}
              {profile.name && " (" + profile.name + ")"}
            </div>
            <div className="mt-2 text-xs">
              <Link href={`../wallet/${profile.ownedBy}`}>
                {`${profile.id}` + " | " + address_display}
              </Link>
            </div>
            <div className="block mt-1 text-sm leading-tight font-medium text-black">
              {displayFullProfile && profile.bio}
            </div>
            <div className="mt-2 text-xs text-right">
              <p>following:
                <Link href={`/follows/${profile.ownedBy}`}>
                  {profile.stats.totalFollowing}
                </Link>
              </p>
              <p>
                (public+private) posts:
                <Link href={`/posts/${profile.id}`}>
                  {profile.stats.totalPosts}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}