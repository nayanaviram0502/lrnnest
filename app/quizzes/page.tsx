'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Wrench, Plus, Upload } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export default function LrnBotPage() {
  const [message, setMessage] = useState('');
  const [isUploadDialogOpen, setIsUploadDialogOpen] = useState(false);
  const [isAuthenticated] = useState(false); // TODO: Replace with actual auth state

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isAuthenticated) {
      window.location.href = '/login';
      return;
    }
    // TODO: Implement message handling
    setMessage('');
  };

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col items-center">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-primary mb-2">LrnBot</h1>
        <p className="text-muted-foreground">
          Your AI learning assistant powered by advanced language models
        </p>
      </div>

      <div className="flex gap-4 mb-6 justify-center">
        <Button
          variant="outline"
          className="gap-2"
          onClick={() => setIsUploadDialogOpen(true)}
          title="Lrnnovate: Upload your PYQs and Syllabus to get unique assessments!"
        >
          <Wrench className="h-4 w-4" />
          Lrnnovate
        </Button>
        <Button variant="outline" className="gap-2" onClick={() => !isAuthenticated && (window.location.href = '/login')}>
          <Plus className="h-4 w-4" />
          New Chat
        </Button>
      </div>

      <div className="w-full max-w-5xl mx-auto">
        <Card className="p-4 mb-4 min-h-[400px] flex items-center justify-center text-muted-foreground">
          Chat messages will show up here, work in progress.
        </Card>

        <form onSubmit={handleSendMessage} className="flex gap-2 w-full max-w-5xl mx-auto">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask LrnBot anything..."
            className="flex-1 px-4 py-2 border rounded-md text-muted-foreground"
          />
          <Button type="submit" className="px-4 py-2">
            Send
          </Button>
        </form>
      </div>

      <Dialog open={isUploadDialogOpen} onOpenChange={setIsUploadDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Upload Learning Materials</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label>Previous Year Questions</Label>
              <div className="mt-2 border-2 border-dashed rounded-lg p-4 text-center">
                <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  Drop your PYQ files here or click to browse
                </p>
                <input type="file" className="hidden" accept=".pdf,.docx,.txt" />
              </div>
            </div>
            <div>
              <Label>Syllabus</Label>
              <div className="mt-2 border-2 border-dashed rounded-lg p-4 text-center">
                <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  Drop your syllabus file here or click to browse
                </p>
                <input type="file" className="hidden" accept=".pdf,.docx,.txt" />
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}