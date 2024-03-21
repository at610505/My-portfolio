export default function HomeBlog() {
  return (
    <section className="bg-sky-100">
      <div className="m-5 md:mx-40">
        <div className="flex justify-between my-5 py-5">
          <div>Recent Posts</div>
          <div className="text-sky-400 cursor-pointer">View all</div>
        </div>
        <div className="block md:flex py-4 ">
          <div
            id="blog-1"
            className="md:basis-1/2 border-2 shadow-sky-200 shadow-md bg-white rounded-lg py-3 my-4 md:my-0 md:mr-4 cursor-pointer"
          >
            <div className="mx-4 text-xl font-bold">React Hooks</div>
            <div className="flex my-4">
              <div className="mx-4">Mar 11, 2024</div>
              <div className="border-r-2  border-black/50 mx-10"></div>
              <div className="mx-4">React</div>
            </div>
            <div className="mx-4">
              React Hooks are introduced react 16 with functional component.
              There are multiple built in react Hooks which we commonly used
              during application.
            </div>
          </div>
          <div
            id="blog-2"
            className="md:basis-1/2 border-2 bg-white rounded-lg shadow-sky-200 shadow-md py-3 my-4 md:my-0 md:ml-4 cursor-pointer"
          >
            <div className="mx-4 text-xl font-bold">
              What is aggregation pipeline in Mongodb?
            </div>
            <div className="flex my-4">
              <div className="mx-4">Mar 4, 2024</div>
              <div className="border-r-2  border-black/50 mx-10"></div>
              <div className="mx-4">MongoDB</div>
            </div>
            <div className="mx-4">
              Aggregation in mongodb is refered as the process of performing
              different type of operation on multiple documents with in a
              collection. This is done by using pipeline, which is made up of
              different stages. A stage output is input for another stage.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
