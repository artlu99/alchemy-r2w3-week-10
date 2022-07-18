export default function Post(props) {
  const post = props.post;

  // When displayProfile is true, we show the poster information.
  const displayProfile = props.displayProfile;

  var dtString = new Date(post.createdAt).toString().replace(/GMT.*/g, "") + '(local time)';

  console.log(post);

  return (
    <div className="p-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="p-8">
            <div className="mt-2 text-xs text-slate-500 float-right">
              {dtString}
            </div>
            {
              displayProfile ? (
                <div className="mt-2 text-xs text-slate-500">
                  {post.profile.id} | {post.profile.name}
                </div>
              ) : (" ")
            }
            <div className="mt-2 text-xs text-slate-500">
              ({post.stats.totalAmountOfCollects} collects)
              ({post.stats.totalAmountOfMirrors} mirrors)
            </div>
            <hr />
            <div className="mt-2 text-xs text-slate-500 whitespace-pre-line">
              {post.metadata.content}
            </div>
            <div className="mt-2 text-xs text-slate-500 text-right">
              comments: {post.stats.totalAmountOfComments} {" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}