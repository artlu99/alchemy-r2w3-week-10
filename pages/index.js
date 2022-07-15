import { useQuery } from "@apollo/client";
import recommendedProfilesQuery from '../queries/recommendedProfilesQuery.js';
import Profile from '../components/Profile.js';

export default function Home() {
  const { loading, error, data } = useQuery(recommendedProfilesQuery);

  if (loading) return 'Loading..';
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      {data.recommendedProfiles.map((profile, index) => {
        return (<Profile key={profile.id} profile={profile} displayFullProfile={true} />);
      })}
    </div>
  )
}