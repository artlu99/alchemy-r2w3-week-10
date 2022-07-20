import Link from "next/link";

export default function Comment(props) {
  // the Lens API / GraphQL returns comments as a type of post
  const comment = props.post;  // hence, this is props.post, not props.comment

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
              <a href={`../posts/${comment.profile.id}`} id={`${comment.id}`}>
                {comment.profile.id} | {comment.profile.handle}
              </a>
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