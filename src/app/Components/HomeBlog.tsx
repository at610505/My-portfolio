

export default function HomeBlog() {
  return (
    <section className="bg-sky-100">
        <div className="m-5 md:mx-40">
            <div className="flex justify-between my-5 py-5">
                <div>Recent Posts</div>
                <div className="text-sky-400 cursor-pointer">View all</div>
            </div>
            <div className="block md:flex py-4">
                <div id="blog-1" className="md:basis-1/2 border-2 shadow-sky-200 shadow-md bg-white rounded-lg py-3 my-4 md:my-0 md:mr-4">
                    <div className="mx-4 text-xl font-bold">Blog Title</div>
                    <div className="flex my-4">
                        <div className="mx-4">Date</div>
                        <div className="border-r-2  border-black/50 mx-10"></div>
                        <div className="mx-4">Topic</div>
                    </div>
                    <div className="mx-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum non magni, ex praesentium vitae recusandae minima vel porro nostrum voluptate, molestiae ullam sequi mollitia dolores incidunt quia soluta natus quasi.</div>
                    
                </div>
                <div id="blog-2" className="md:basis-1/2 border-2 bg-white rounded-lg shadow-sky-200 shadow-md py-3 my-4 md:my-0 md:ml-4">
                    <div className="mx-4 text-xl font-bold">Blog Title</div>
                    <div className="flex my-4">
                        <div className="mx-4">Date</div>
                        <div className="border-r-2  border-black/50 mx-10"></div>
                        <div className="mx-4">Topic</div>
                    </div>
                    <div className="mx-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum non magni, ex praesentium vitae recusandae minima vel porro nostrum voluptate, molestiae ullam sequi mollitia dolores incidunt quia soluta natus quasi.</div>
                    
                </div>
            </div>
        </div>
    </section>
  )
}
