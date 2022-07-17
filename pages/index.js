import { useQuery } from "@apollo/client";
import fetchFollowingQuery from "../queries/fetchFollowingQuery.js";
import Profile from '../components/Profile.js';

export default function Home() {
  const { loading, error, data } = useQuery(fetchFollowingQuery, {
    variables: {
      request: {
        address: "0xF5FFF32CF83A1A614e15F25Ce55B0c0A6b5F8F2c",  // Albert
        limit: 50
      },
    },
  });

  if (loading) return 'Loading..';
  if (error) return `Error! ${error.message}`;
  
  console.log(data);

  return (
    <div>
      {data.following.items.map((following) => {
        return (<Profile key={following.profile.id} profile={following.profile} displayFullProfile={true} />);
      })}
    </div>
  )
}