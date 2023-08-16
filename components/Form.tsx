import Link from "next/link"

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="black">
        <h1 className="">
            <span className="">{type} Post</span>
        </h1>
        <p className="">
            {type} and share amazing prompts with the world and let your imagiantion run wild be any AI-powered platform
        </p>
        <form onSubmit={handleSubmit} className="">
            <label>
                <span className="block">
                    Your Post Title
                </span>
                <input 
                    className="text-black"
                    value={post.title}
                    onChange={(e) => setPost({ ...post, title: e.target.value })}
                    placeholder="Your title here"
                    required
                />
                
            </label>
            <label>
                <span className="block">
                    Body
                </span>
                <textarea 
                    className="text-black"
                    value={post.body}
                    onChange={(event) => setPost({ ...post, body: event.target.value })}
                    placeholder="Write your prompt here..."
                    required
                />
    
            </label>
            <div className="">
                <Link href="/" className=""></Link>
                <button 
                    className=""
                    type="submit"
                    disabled={submitting}
                >
                    {submitting ? `${type}...` : type}
                </button>
            </div>
        </form>
    </section>
  )
}

export default Form