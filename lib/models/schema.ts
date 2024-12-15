import { Schema, model, models, Document } from 'mongoose';

interface IUser extends Document {
  email: string;
  name: string;
  image?: string;
  weakAreas: string[];
  quizResults: Array<{
    quizId: Schema.Types.ObjectId;
    score: number;
    date: Date;
  }>;
}

interface IStudyGroup extends Document {
  name: string;
  description: string;
  creator: Schema.Types.ObjectId;
  members: Schema.Types.ObjectId[];
  topics: string[];
  meetings: Array<{
    date: Date;
    duration: number;
    meetingUrl: string;
  }>;
}

interface IQuiz extends Document {
  title: string;
  description: string;
  creator: Schema.Types.ObjectId;
  questions: Array<{
    question: string;
    type: 'mcq' | 'long';
    options?: string[];
    correctAnswer: string;
    points: number;
  }>;
  topics: string[];
  duration: number;
}

interface INote extends Document {
  content: string;
  creator: Schema.Types.ObjectId;
  studyGroup: Schema.Types.ObjectId;
  topics: string[];
  createdAt: Date;
}

const UserSchema = new Schema<IUser>({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  image: String,
  weakAreas: [String],
  quizResults: [{
    quizId: { type: Schema.Types.ObjectId, ref: 'Quiz' },
    score: Number,
    date: Date,
  }],
});

const StudyGroupSchema = new Schema<IStudyGroup>({
  name: { type: String, required: true },
  description: String,
  creator: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  members: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  topics: [String],
  meetings: [{
    date: Date,
    duration: Number,
    meetingUrl: String,
  }],
});

const QuizSchema = new Schema<IQuiz>({
  title: { type: String, required: true },
  description: String,
  creator: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  questions: [{
    question: String,
    type: { type: String, enum: ['mcq', 'long'] },
    options: [String],
    correctAnswer: String,
    points: Number,
  }],
  topics: [String],
  duration: Number,
});

const NoteSchema = new Schema<INote>({
  content: { type: String, required: true },
  creator: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  studyGroup: { type: Schema.Types.ObjectId, ref: 'StudyGroup' },
  topics: [String],
  createdAt: { type: Date, default: Date.now },
});

export const User = models.User || model<IUser>('User', UserSchema);
export const StudyGroup = models.StudyGroup || model<IStudyGroup>('StudyGroup', StudyGroupSchema);
export const Quiz = models.Quiz || model<IQuiz>('Quiz', QuizSchema);
export const Note = models.Note || model<INote>('Note', NoteSchema);