export default function Comment(props) {
  const comment = props.post;  // this should be props.post, not props.comment
  // the Lens API / GraphQL returns comments as a type of post

  var dtString = new Date(comment.createdAt).toString().replace(/GMT.*/g, "") + '(local time)';

  return (
    <div className="p-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="p-8">
            <div className="mt-2 text-xs text-slate-500 float-right">
              {dtString}
            </div>
            <div className="mt-2 text-xs text-slate-500">
              {comment.profile.id} | {comment.profile.handle}
            </div>
            <hr />
            <div className="mt-2 text-xs text-slate-500 whitespace-pre-line">
              {comment.metadata.content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}