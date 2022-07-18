import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import fetchProfileQuery from "../../queries/fetchProfileQuery.js";
import Profile from "../../components/Profile.js";
import Post from "../../components/Post.js";

export default function PublicationsPage() {
  const router = useRouter();
  const { id } = router.query;

  console.log("fetching profile for", id);
  const { loading, error, data } = useQuery(fetchProfileQuery, {
    variables: {
      request: { profileId: id },
      publicationsRequest: {
        profileId: id,
        publicationTypes: ["COMMENT"],
      },
    },
  });

  if (loading) return "Loading..";
  if (error) return `Error! ${error.message}`;

  console.log(data);

  return (
    <div className="flex flex-col p-8 items-center">
      <Profile profile={data.profile} displayFullProfile={false} />
      {data.publications.items.map((comment) => {
        return (
          <Post key={comment.mainPost.id} post={comment.mainPost} displayProfile={true} />
          // <Post key={comment.id} post={comment} displayProfile={true} />
        )
      })}
    </div>
  );
}