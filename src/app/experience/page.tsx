export default function Experience() {
  return (
    <section className="mx-2 my-10 md:mx-60 md:my-20">
      <div className="text-3xl font-bold">Experience</div>
      <ol className="list-decimal">
        <li>
          <div className="my-5">
            <div className="text-xl font-bold">Freelance Web Developer</div>
            <p>
              I undertook freelance projects to support local businesses in
              enhancing their online presence and driving growth through
              tailored web solutions.
            </p>
            <div>
              <em>Key Projects:</em>
            </div>
            <div className="mx-4">
              <ul className="list-disc">
                <li>
                  <strong>
                    <a href="https://www.varshamekup.in" target="_blank">
                      Varsha Mekup Studio:
                    </a>
                  </strong>{" "}
                  Developed a responsive website for a local Beauty Parlour
                  Coaching Institue, integrated Certification generation for
                  students functionality and enhancing user experience to
                  increase student engagement and integrated functionality for
                  students to view and download their Certificate by
                  authentication in website. Currently Website have 200 active
                  users.
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <div className="my-5">
            <div className="text-xl font-bold">React JS Trainee</div>
            <div className="text-sm my-1 font-medium text-black/60">
              SSDN Technologies Pvt. Ltd.
            </div>
            <p className="my-2">
              As a React JS Trainee at{" "}
              <em>SSDN Technologies Private Limited</em>, I underwent
              comprehensive training in React JS development methodologies and
              best practices. Collaborating closely with experienced developers,
              I gained hands-on experience in building dynamic user interfaces
              and responsive web applications using React JS.
            </p>
            <div className="font-semibold">
              Key Responsibilities and Achievements:
            </div>
            <div className="mx-4">
              <ul className="list-disc">
                <li>
                  Participated in immersive training sessions focused on React
                  JS fundamentals, including component-based architecture, state
                  management, and JSX syntax.
                </li>
                <li>
                  Contributed to the development of various projects, learning
                  to integrate React JS with other technologies such as Redux
                  for state management and React Router for client-side routing.
                </li>
                <li>
                  Assisted in debugging and troubleshooting code issues,
                  enhancing my problem-solving skills in a real-world
                  development environment.
                </li>
                <li>
                  Engaged in code reviews and collaborated with team members to
                  ensure code quality and adherence to project requirements.
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ol>
    </section>
  );
}
