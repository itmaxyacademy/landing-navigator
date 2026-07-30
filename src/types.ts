export type Language = 'id' | 'en';

export type UserTier = 'free' | 'tier1' | 'tier2';

export interface QuizQuestion {
  id: number;
  question: { id: string; en: string };
  options: { id: string[]; en: string[] };
  correctIndex: number;
  explanation: { id: string; en: string };
}

export interface CourseModule {
  day: number; // 1 to 28
  title: { id: string; en: string };
  category: { id: string; en: string };
  description: { id: string; en: string };
  durationJP: number; // e.g. 1 JP or 2 JP
  tierRequired: 'tier1' | 'tier2'; // days 1-21: tier1, days 22-28: tier2
  isMentoring: boolean;
  learningObjectives: { id: string[]; en: string[] };
  videoUrl?: string;
  summaryContent: { id: string; en: string };
  quiz: QuizQuestion[];
  requiresProjectSubmission?: boolean;
}

export interface ProjectSubmission {
  day: number;
  projectTitle: string;
  repoOrDocUrl: string;
  submissionDate: string;
  status: 'pending' | 'approved' | 'needs_revision';
  mentorFeedback?: string;
}

export interface UserState {
  name: string;
  email: string;
  tier: UserTier;
  paidTiers?: UserTier[];
  hasTier1?: boolean;
  hasTier2?: boolean;
  completedModules: number[]; // array of day numbers completed e.g. [1,2,3,4,5,6,7,8,9,10,11]
  quizScores: Record<number, number>; // day -> score %
  projectSubmissions: Record<number, ProjectSubmission>;
  claimedCoupons: string[];
  certificateIssued?: {
    id: string;
    tier: 'tier1' | 'tier2';
    certificateTitle: string;
    jpCount: number;
    issueDate: string;
    accredifyHash: string;
    qrCodeUrl: string;
  };
}

export interface CouponCode {
  code: string;
  discountAmount: number;
  targetTier: 'tier1' | 'tier2' | 'all';
  isFreePass?: boolean;
  description: { id: string; en: string };
}
