import Link from "next/link";

export default function Post(props) {
  const post = props.post;

  // When displayProfile is true, we show the poster information.
  const displayProfile = props.displayProfile;

  var dtString = new Date(post.createdAt).toString().replace(/GMT.*/g, "") + '(local time)';

  return (
    <div className="p-2">
      <div className="max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="w-full p-2 text-xs">
            <div className="mt-2 float-right">
              {dtString}
            </div>
            {
              displayProfile ? (
                <div className="mt-2">
                  <a href={`../posts/${post.profile.id}`} id={`${post.id}`}>
                    {post.profile.id} | {post.profile.name}
                  </a>
                </div>
              ) : (" ")
            }
            <div className="mt-2">
              ({post.stats.totalAmountOfCollects.toLocaleString()} collects)
              ({post.stats.totalAmountOfMirrors.toLocaleString()} mirrors)
              ({post.stats.totalUpvotes.toLocaleString()}👍🏽:👎🏽{post.stats.totalDownvotes.toLocaleString()})
            </div>
            <hr />
            <div className="mt-2 whitespace-pre-line">
              {post.metadata.content}
            </div>
            <hr />
            <div className="mt-2 text-right">
              (public+private) comments:&nbsp;
              <Link href={`../comments/${post.id}`}>
                {post.stats.totalAmountOfComments.toLocaleString()}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}