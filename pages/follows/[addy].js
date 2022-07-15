import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import fetchFollowingQuery from "../../queries/fetchFollowingQuery.js";
import Profile from "../../components/Profile.js";

export default function FollowsPage() {
  const router = useRouter();
  const { addy } = router.query;

  console.log("fetching follows for", addy);
  const { loading, error, data } = useQuery(fetchFollowingQuery, {
    variables: {
      request: {
        address: addy,
        limit: 10
      },
    },
  });

  if (loading) return "Loading..";
  if (error) return "This page is not implemented yet..."; // `Error! ${error.message}`;

  console.log(data);

  /*
        {data.follows.items.map((followed_profile, idx) => {
          return <Profile key={idx} profile={followed_profile}/>;
        })}

  */
  return (
    <div className="flex flex-col p-8 items-center">
      <Profile profile={data.profile} displayFullProfile={false} />
    </div>
  );
}