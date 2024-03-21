import React from "react";

export default function Blog() {
  return (
    <section className="mx-2 my-10 md:mx-60 md:my-20">
      <div className="animation-marquee">
        This Section is under development, I will add Some features in near
        Future :)
      </div>
      <h1 className="text-4xl font-bold mb-10">Blog</h1>
      {/* Blogs */}
      <div className="blog my-5 cursor-pointer">
        <div className="text-black font-bold text-xl">React Hook</div>
        <div className="flex">
          <div className="mr-2 my-2  text-black/80">11 March 2024</div>
          <div className="mx-2 my-2 border-r-2 border-black/75"></div>
          <div className="ml-2 my-2  text-black/50">ReactJS</div>
        </div>
        <p>
          React Hooks are introduced react 16 with functional component. There
          are multiple built in react Hooks which we commonly used during
          application.
        </p>
      </div>
      <div className="border-b-2"></div>
      {/* Blogs */}
      {/* Blogs */}
      <div className="blog my-5 cursor-pointer">
        <div className="text-black font-bold text-xl">
          What is aggregation pipeline in Mongodb?
        </div>
        <div className="flex">
          <div className="mr-2 my-2  text-black/80">04 March 2024</div>
          <div className="mx-2 my-2 border-r-2 border-black/75"></div>
          <div className="ml-2 my-2  text-black/50">MongoDB</div>
        </div>
        <p>
          Aggregation in mongodb is refered as the process of performing
          different type of operation on multiple documents with in a
          collection. This is done by using pipeline, which is made up of
          different stages. A stage output is input for another stage.
        </p>
      </div>
      <div className="border-b-2"></div>
      {/* Blogs */}
      {/* Blogs */}
      <div className="blog my-5 cursor-pointer">
        <div className="text-black font-bold text-xl">
          Difference between Access Token and Refresh Token
        </div>
        <div className="flex">
          <div className="mr-2 my-2  text-black/80">03 March 2024</div>
          <div className="mx-2 my-2 border-r-2 border-black/75"></div>
          <div className="ml-2 my-2  text-black/50">Authentication</div>
        </div>
        <p>
          <strong>Access Token:</strong>it is used to access the resource from
          server by using the token. But this token had a shorter time validy
          which can range from 15 minutes to 1 day. These access token
          can&apos;t be used after their validity time expired.
        </p>
        <p>
          <strong>Refresh Token:</strong>refresh token is used to refresh
          something. Refresh token has longer validity time than Access token.
          It can range from 5 days to months or year. This refresh token is used
          to refresh the Access token as access token will be expired after
          sometime. Refresh token provides extra layer of validation for
          Authentication.
        </p>
      </div>
      <div className="border-b-2"></div>
      {/* Blogs */}
    </section>
  );
}
