import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import fetchProfileQuery from "../../queries/fetchProfileQuery.js"
import fetchPublicationQuery from "../../queries/fetchPublicationQuery.js";
import Profile from "../../components/Profile.js";
import Post from "../../components/Post.js";
import Comment from "../../components/Comment.js";

export default function PublicationsPage() {
  const router = useRouter();
  const { pubId } = router.query;

  console.log("fetching post+comments for", pubId);
  const { loading, error, data } = useQuery(fetchPublicationQuery, {
    variables: {
      postRequest: {
        publicationId: pubId,
        // publicationTypes: ["POST", "COMMENT", "MIRROR"],
      },
      request: {
        commentsOf: pubId,
        limit: 50,
      }
    },
  });

  if (loading) return "Loading comments for .." + pubId;
  if (error) return `Error! ${error.message}`;

  console.log(data);

  // TODO: add pictures for original poster, commenters

  return (
    <div className="flex flex-col p-8 items-center">
      <Post key={data.publication.id} post={data.publication} displayProfile={true} />
      {data.publications.items.map((comment) => {
        return (
          <Comment key={comment.id} post={comment} />
        )
      })}
    </div>
  );
}