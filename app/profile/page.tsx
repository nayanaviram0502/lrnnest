'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Brain, Target, Trophy, Clock, Star } from 'lucide-react';

const mockUser = {
  id: '1',
  username: 'BrainChain',
  name: 'Alex Thompson',
  email: 'brainchain@example.com',
  joinedDate: '2024-01-15',
  studyStreak: 15,
  totalStudyHours: 120,
  completedQuizzes: 45,
  weakAreas: ['Digital Logic', 'Tree Algorithms', 'Java Inheritance'],
  strengths: ['Array Algorithms', 'Database Design', 'Circuit Analysis'],
  achievements: [
    { name: 'Quiz Master', description: 'Completed 50 quizzes', icon: Trophy },
    { name: 'Study Streak', description: '15 days study streak', icon: Target },
    { name: 'Top Contributor', description: 'Most active in study groups', icon: Star },
  ],
};

export default function ProfilePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-6 mb-8">
          <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-4xl font-bold text-primary">
              {mockUser.name.charAt(0)}
            </span>
          </div>
          <div>
            <h1 className="text-3xl font-bold">{mockUser.name}</h1>
            <p className="text-muted-foreground">@{mockUser.username}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            icon={Clock}
            title="Study Hours"
            value={mockUser.totalStudyHours}
            unit="hours"
          />
          <StatCard
            icon={Brain}
            title="Completed Quizzes"
            value={mockUser.completedQuizzes}
            unit="quizzes"
          />
          <StatCard
            icon={Target}
            title="Study Streak"
            value={mockUser.studyStreak}
            unit="days"
          />
          <StatCard
            icon={BookOpen}
            title="Active Groups"
            value={5}
            unit="groups"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Areas to Improve</h2>
            <div className="flex flex-wrap gap-2">
              {mockUser.weakAreas.map((area) => (
                <Badge key={area} variant="secondary">
                  {area}
                </Badge>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Strong Areas</h2>
            <div className="flex flex-wrap gap-2">
              {mockUser.strengths.map((strength) => (
                <Badge key={strength} variant="default">
                  {strength}
                </Badge>
              ))}
            </div>
          </Card>

          <Card className="p-6 md:col-span-2">
            <h2 className="text-xl font-semibold mb-4">Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {mockUser.achievements.map((achievement) => (
                <div
                  key={achievement.name}
                  className="flex items-center gap-3 p-4 rounded-lg bg-secondary/20"
                >
                  <achievement.icon className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="font-medium">{achievement.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon: Icon, title, value, unit }: any) {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <div>
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className="text-2xl font-bold">
            {value} <span className="text-base font-normal text-muted-foreground">{unit}</span>
          </p>
        </div>
      </div>
    </Card>
  );
}