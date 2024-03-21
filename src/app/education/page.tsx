import React from "react";

export default function Education() {
  return (
    <section className="mx-2 my-10 md:mx-60 md:my-20">
      <div className="text-3xl font-bold">Education</div>
      <div className="my-5">
        <div className="text-xl font-bold">Bachelors of Technology</div>
        <div className="text-sm my-1 font-medium text-black/60">
          Computer Science Engineering
        </div>
        <div className="flex justify-between">
          <div className="text-kg text-black/60 t">
            IK Gujral Punjab Technical University
          </div>
          <div> 2020 - 2024</div>
        </div>
        <div className="my-2">
          <ul>
            <li className="my-1">
              <strong>Relevant Courses:</strong> Operating Systems, C++,
              Object-Oriented Programming, Data Structures and Algorithms,
              Computer Networks, Machine Learning, Deep Learning, Enterprise
              Resource Planning, Database Management Systems, Artificial
              Intelligence, Python, etc.
            </li>
            <li className="my-1">
              <strong>GPA:</strong> 7.5/10.0
            </li>
          </ul>
          <ul className="">
            <strong>First Prize, Intra-College Hackathon:</strong> Demonstrated
            problem-solving skills and creativity by winning the first prize in
            an intra-college hackathon competition.
          </ul>
        </div>
      </div>
      <div className="border-b-2"></div>
      <div className="my-5">
        <div className="text-xl font-bold">Senior Secondary School</div>
        <div className="text-sm font-medium text-black/60">
          Physics, Chemistry, Math
        </div>
        <div className="flex justify-between">
          <div className="text-black/60">DAV Sr. Sec. School</div>
          <div className=""> 2018 - 2020</div>
        </div>
        <div className="my-2">
          <ul>
            <li className="text-base">Stream: Non-Medical Science</li>
            <li className="text-base">Overall Percentage: 81%</li>
            <li className="text-base">JEE Mains Percentile: 79</li>
          </ul>
        </div>
        <ul className="">
          <strong>Outstanding Student and Class Representative:</strong>{" "}
          Recognized as an outstanding student by teachers and classmates,
          serving as the Class Representative and fostering a positive learning
          environment.
        </ul>
      </div>
      <div className="border-b-2"></div>
      <div className="my-5">
        <div className="text-xl font-bold">High School</div>
        <div className="flex justify-between">
          <div className="text-black/60">Green Land High School</div>
          <div>2016</div>
        </div>
        <div className="my-2">
          <ul>
            <li className="text-base">Overall Percentage: 84%</li>
          </ul>
        </div>
      </div>
      <div className="border-b-2"></div>
    </section>
  );
}
