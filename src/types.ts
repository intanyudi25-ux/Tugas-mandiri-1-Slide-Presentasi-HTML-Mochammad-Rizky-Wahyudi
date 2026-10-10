export interface StudentProfile {
  name: string;
  nim: string;
  prodi: string;
  university: string;
  course: string;
  lecturer: string;
  githubUrl: string;
  netlifyUrl: string;
  demoUrl: string;
}

export interface SlideItem {
  id: number;
  title: string;
  subtitle: string;
  category: 'identitas' | 'sistem' | 'arsitektur' | 'database' | 'finops' | 'ai-prompt' | 'troubleshooting' | 'kesimpulan' | 'optimasi' | 'showcase';
  badge: string;
  estimatedTime: string;
  presenterNotes: string[];
}

export interface FinOpsState {
  monthlyUsers: number;
  dataStorageTB: number;
  monthlyBandwidthTB: number;
  computeInstances: number;
  computeType: 'aws-ec2' | 'gcp-compute' | 'serverless';
  dbType: 'aurora' | 'cloudsql' | 'managed-supabase';
}

export interface TroubleshootingItem {
  id: string;
  issue: string;
  symptom: string;
  rootCause: string;
  solution: string;
  status: 'Resolved' | 'Optimized';
  severity: 'Critical' | 'High' | 'Medium';
}

export interface PromptLogItem {
  id: string;
  phase: string;
  aiTool: string;
  promptText: string;
  rawOutputSummary: string;
  manualRefinement: string;
  qualityRating: number;
  tags: string[];
}
