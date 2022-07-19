import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import fetchPublicationQuery from "../../queries/fetchPublicationQuery.js";
import Profile from "../../components/Profile.js";
import Post from "../../components/Post.js";
import Comment from "../../components/Comment.js";

export default function PublicationsPage() {
  const router = useRouter();
  const { pubId } = router.query;

  console.log("fetching comments for", pubId);  // TODO: expand to bring the original publication
  const { loading, error, data } = useQuery(fetchPublicationQuery, {
    variables: {
      request: {
        commentsOf: pubId,
        limit: 20,
      },
    },
  });

  if (loading) return "Loading comments for .." + pubId;
  if (error) return `Error! ${error.message}`;

  console.log(data);

  // TODO: add original post
  // TODO: possibly add original poster <Profile profile={data.profile} displayFullProfile={false} />
  // TODO: add pictures for commenters

  return (
    <div className="flex flex-col p-8 items-center">
      {data.publications.items.map((comment) => {
        return (
          <Comment key={comment.id} post={comment} />
        )
      })}
    </div>
  );
}