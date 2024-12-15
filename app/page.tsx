'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, BookOpen, Users, Brain, Trophy, Sparkles, Target, Clock } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl font-bold text-foreground mb-8">
              Transform Your Learning Journey with{' '}
              <span className="text-primary">LrnNest</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              An AI-powered collaborative learning platform designed for engineering
              students to excel together. Join thousands of students who are already
              mastering their subjects through interactive learning.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/register">
                <Button size="lg" className="gap-2 text-lg">
                  Get Started <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg" className="text-lg">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background border-t">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
            Why Choose LrnNest?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={Brain}
              title="AI-Powered Learning"
              description="Generate personalized quizzes and study materials using advanced AI technology."
            />
            <FeatureCard
              icon={Users}
              title="Collaborative Study"
              description="Form study groups and learn together in real-time with peers from around the world."
            />
            <FeatureCard
              icon={Sparkles}
              title="Smart Content"
              description="Access a vast library of curated educational resources and practice questions."
            />
            <FeatureCard
              icon={Trophy}
              title="Track Progress"
              description="Monitor your performance with detailed analytics and insights."
            />
            <FeatureCard
              icon={Target}
              title="Personalized Goals"
              description="Set and achieve your learning objectives with customized study plans."
            />
            <FeatureCard
              icon={Clock}
              title="Flexible Learning"
              description="Study at your own pace with 24/7 access to all resources."
            />
            <FeatureCard
              icon={BookOpen}
              title="Rich Resources"
              description="Access comprehensive study materials across various engineering disciplines."
            />
            <FeatureCard
              icon={Brain}
              title="Smart Assessment"
              description="Get instant feedback and recommendations based on your performance."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: any;
  title: string;
  description: string;
}) {
  return (
    <div className="p-8 rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow">
      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
        <Icon className="h-7 w-7 text-primary" />
      </div>
      <h3 className="text-2xl font-semibold mb-3 text-foreground">{title}</h3>
      <p className="text-muted-foreground text-lg">{description}</p>
    </div>
  );
}