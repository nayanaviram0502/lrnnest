'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import CreateGroupDialog from '@/components/groups/CreateGroupDialog';
import { GroupCard } from '@/components/groups/GroupCard';

export default function GroupsPage() {
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);

  // Temporary mock data - will be replaced with Firebase data
  const groups = [
    {
      id: '1',
      name: 'Data Structures Study Group',
      description: 'Weekly discussions on advanced data structures and algorithms',
      members: 8,
      nextMeeting: '2024-02-20T15:00:00',
      topics: ['Arrays', 'Linked Lists', 'Trees'],
    },
    {
      id: '2',
      name: 'Machine Learning Club',
      description: 'Exploring ML concepts and implementing algorithms',
      members: 12,
      nextMeeting: '2024-02-21T18:00:00',
      topics: ['Neural Networks', 'Deep Learning', 'Python'],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-primary mb-2">Study Groups</h1>
          <p className="text-muted-foreground">
            Join or create study groups to learn together
          </p>
        </div>
        <Button onClick={() => setIsCreateDialogOpen(true)} className="gap-2">
          <Plus className="h-4 w-4" /> Create Group
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map((group) => (
          <GroupCard key={group.id} group={group} />
        ))}
      </div>

      <CreateGroupDialog
        open={isCreateDialogOpen}
        onOpenChange={setIsCreateDialogOpen}
      />
    </div>
  );
}