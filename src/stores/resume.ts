import { defineStore } from 'pinia'

export interface ResumeState {
  currentSection: string;
  basicInfo: {
    name: string;
    gender: string;
    age: string;
    phone: string;
    email: string;
  };
  jobIntention: {
    position: string;
    city: string;
    salary: string;
  };
  education: Array<{
    school: string;
    major: string;
    degree: string;
    period: string;
  }>;
  skills: string;
  projects: Array<{
    name: string;
    role: string;
    period: string;
    description: string;
    achievement: string;
  }>;
  evaluation: string;
}

export const useResumeStore = defineStore('resume', {
  state: (): ResumeState => ({
    currentSection: 'basic',
    basicInfo: {
      name: '',
      gender: '',
      age: '',
      phone: '',
      email: ''
    },
    jobIntention: {
      position: '',
      city: '',
      salary: ''
    },
    education: [{
      school: '',
      major: '',
      degree: '',
      period: ''
    }],
    skills: '',
    projects: [{
      name: '',
      role: '',
      period: '',
      description: '',
      achievement: ''
    }],
    evaluation: ''
  }),

  actions: {
    updateBasicInfo(data: Partial<ResumeState['basicInfo']>) {
      this.basicInfo = { ...this.basicInfo, ...data }
    },
    updateJobIntention(data: Partial<ResumeState['jobIntention']>) {
      this.jobIntention = { ...this.jobIntention, ...data }
    },
    updateEducation(data: ResumeState['education']) {
      this.education = data
    },
    updateSkills(skills: string) {
      this.skills = skills
    },
    updateProjects(data: ResumeState['projects']) {
      this.projects = data
    },
    updateEvaluation(evaluation: string) {
      this.evaluation = evaluation
    },
    resetAll() {
      this.$patch({
        currentSection: 'basic',
        basicInfo: {
          name: '',
          gender: '',
          age: '',
          phone: '',
          email: ''
        },
        jobIntention: {
          position: '',
          city: '',
          salary: ''
        },
        education: [{
          school: '',
          major: '',
          degree: '',
          period: ''
        }],
        skills: '',
        projects: [{
          name: '',
          role: '',
          period: '',
          description: '',
          achievement: ''
        }],
        evaluation: ''
      })
    }
  }
})
