import { MongoClient } from 'mongodb';

const uri = "mongodb+srv://Nayan0502:Nayan555!@lrnnest-cluster.nzorx.mongodb.net/?retryWrites=true&w=majority&appName=LrnNest-Cluster";
const options = {
  serverApi: {
    version: '1' as const,
    strict: true,
    deprecationErrors: true,
  }
};

let client;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === 'development') {
  let globalWithMongo = global as typeof globalThis & {
    _mongoClientPromise?: Promise<MongoClient>;
  };

  if (!globalWithMongo._mongoClientPromise) {
    client = new MongoClient(uri, options);
    globalWithMongo._mongoClientPromise = client.connect();
  }
  clientPromise = globalWithMongo._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;

// Helper function to insert mock user data
export async function insertMockUser() {
  try {
    const client = await clientPromise;
    const db = client.db('UserData');
    
    const mockUser = {
      id: '1',
      username: 'BrainChain',
      name: 'Alex Thompson',
      email: 'brainchain@example.com',
      joinedDate: new Date('2024-01-15'),
      studyStreak: 15,
      totalStudyHours: 120,
      completedQuizzes: 45,
      weakAreas: ['Digital Logic', 'Tree Algorithms', 'Java Inheritance'],
      strengths: ['Array Algorithms', 'Database Design', 'Circuit Analysis'],
      subjectPerformance: {
        'Data Structures': {
          topics: ['Arrays', 'Linked Lists', 'Trees', 'Graphs', 'Sorting'],
          scores: [85, 92, 78, 88, 95],
        },
        'OOPs using Java': {
          topics: ['Classes', 'Inheritance', 'Polymorphism', 'Abstraction', 'Interfaces'],
          scores: [90, 75, 85, 88, 92],
        },
        'Digital Electronics': {
          topics: ['Boolean Algebra', 'Logic Gates', 'Flip Flops', 'Counters', 'Registers'],
          scores: [82, 88, 75, 90, 85],
        },
        'Discrete Mathematics': {
          topics: ['Set Theory', 'Relations', 'Functions', 'Graph Theory', 'Logic'],
          scores: [95, 88, 92, 78, 85],
        },
      },
    };

    await db.collection('users').insertOne(mockUser);
    console.log('Mock user data inserted successfully');
  } catch (error) {
    console.error('Error inserting mock user:', error);
  }
}