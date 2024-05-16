export interface Resume{
  workExperiences: WorkExperience[]
  education: Education[]
  certifications: Certification[]
}

export interface WorkExperience{
  title: string
  companyName: string
  location: string
  startDate: string
  endDate: string
  responsibilities: string[]
}

export interface Education{
  degreeName: string
  universityName: string
  department: string
}

export interface Certification{
  name:string
  issuer:string
  gainedKnowledage: string[]
}

export interface Skill{}
