'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Clock, BookOpen, Share2 } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { useState } from 'react';
import { ShareDialog } from '@/components/share-dialog';
import { useRouter } from 'next/navigation';

interface GroupCardProps {
  group: {
    id: string;
    name: string;
    description: string;
    members: number;
    nextMeeting: string;
    topics: string[];
  };
}

export function GroupCard({ group }: GroupCardProps) {
  const [isShareDialogOpen, setIsShareDialogOpen] = useState(false);
  const [isAuthenticated] = useState(false); // TODO: Replace with actual auth state
  const router = useRouter();

  const handleJoinGroup = () => {
    if (!isAuthenticated) {
      router.push('/login');
      return;
    }
    // TODO: Implement group joining logic
  };

  return (
    <Card className="p-6">
      <h3 className="text-xl font-semibold mb-2 text-foreground">{group.name}</h3>
      <p className="text-muted-foreground mb-4">{group.description}</p>
      
      <div className="space-y-3">
        <div className="flex items-center text-sm text-muted-foreground">
          <Users className="h-4 w-4 mr-2" />
          <span>{group.members} members</span>
        </div>
        
        <div className="flex items-center text-sm text-muted-foreground">
          <Clock className="h-4 w-4 mr-2" />
          <span>Next meeting: {formatDistanceToNow(new Date(group.nextMeeting), { addSuffix: true })}</span>
        </div>
        
        <div className="flex items-center text-sm text-muted-foreground">
          <BookOpen className="h-4 w-4 mr-2" />
          <div className="flex flex-wrap gap-2">
            {group.topics.map((topic) => (
              <span
                key={topic}
                className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-4 flex gap-2">
        <Button className="flex-1" onClick={handleJoinGroup}>Join Group</Button>
        <Button variant="outline" size="icon" onClick={() => setIsShareDialogOpen(true)}>
          <Share2 className="h-4 w-4" />
        </Button>
      </div>

      <ShareDialog 
        open={isShareDialogOpen}
        onOpenChange={setIsShareDialogOpen}
        groupId={group.id}
      />
    </Card>
  );
}