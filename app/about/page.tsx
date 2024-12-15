export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">About LrnNest</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600">
              LrnNest is dedicated to transforming the way engineering students learn and collaborate. 
              We believe in the power of collective learning and leveraging technology to enhance 
              educational experiences.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium mb-2">AI-Powered Learning</h3>
                <p className="text-gray-600">
                  Our platform uses advanced AI to generate personalized quizzes and study materials,
                  helping you focus on what matters most.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2">Collaborative Study Groups</h3>
                <p className="text-gray-600">
                  Connect with peers, form study groups, and learn together in real-time. Share
                  resources and knowledge to accelerate your learning.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2">Performance Analytics</h3>
                <p className="text-gray-600">
                  Track your progress with detailed analytics and insights. Identify areas for
                  improvement and celebrate your achievements.
                </p>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Join Our Community</h2>
            <p className="text-gray-600">
              Whether you&apos;re studying algorithms, machine learning, or any other engineering
              subject, LrnNest provides the tools and community you need to succeed.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}