import React from "react";

const Career = () => {
  return (
    <div className="max-w-5xl mx-auto p-5 space-y-6">
      {/* Page Header */}
      <h1 className="text-4xl font-bold text-primary">Careers at The Dragon News</h1>
      <p className="text-lg text-gray-600">
        Join one of the fastest-growing digital news platforms. We’re always looking for
        passionate, creative, and talented people to help shape the future of modern journalism.
      </p>

      {/* Why Work With Us */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Why Work With Us?</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Work with an innovative digital newsroom</li>
          <li>Collaborate with experienced journalists and editors</li>
          <li>Opportunities to grow in content, design, and tech teams</li>
          <li>Flexible and friendly work environment</li>
          <li>Create real impact through impactful storytelling</li>
        </ul>
      </section>

      {/* Job Openings */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Current Job Openings</h2>

        <div className="grid md:grid-cols-2 gap-5">
          {/* Card 1 */}
          <div className="card bg-base-100 shadow-md">
            <div className="card-body">
              <h3 className="card-title">Junior Reporter</h3>
              <p>Research and report trending news topics under the guidance of senior editors.</p>
              <p className="text-sm text-gray-500">Location: Dhaka</p>
              <div className="card-actions">
                <button className="btn btn-primary btn-sm">Apply Now</button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card bg-base-100 shadow-md">
            <div className="card-body">
              <h3 className="card-title">Content Writer</h3>
              <p>Write engaging content for technology, education, national news, and features.</p>
              <p className="text-sm text-gray-500">Location: Remote</p>
              <div className="card-actions">
                <button className="btn btn-primary btn-sm">Apply Now</button>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card bg-base-100 shadow-md">
            <div className="card-body">
              <h3 className="card-title">Video Editor</h3>
              <p>Create compelling short-form and long-form video content for social media.</p>
              <p className="text-sm text-gray-500">Location: Dhaka</p>
              <div className="card-actions">
                <button className="btn btn-primary btn-sm">Apply Now</button>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="card bg-base-100 shadow-md">
            <div className="card-body">
              <h3 className="card-title">Frontend Developer</h3>
              <p>Work with our tech team to build modern, fast, and scalable UI components.</p>
              <p className="text-sm text-gray-500">Location: Remote</p>
              <div className="card-actions">
                <button className="btn btn-primary btn-sm">Apply Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Contact HR</h2>
        <p className="text-gray-700">
          If you’re interested in joining our team, send your resume and portfolio to:
        </p>
        <p className="font-semibold text-primary">careers@dragonnews.com</p>
      </section>
    </div>
  );
};

export default Career;
