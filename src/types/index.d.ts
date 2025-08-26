export namespace AppTypes {
  export interface Project {
    name: string
    imgFileName: string
    skills: string
    link: string
    repo: string
    section: string
    descriptionTitle: string
    descriptionBody: string
  }

  export interface ContactFormData {
    firstName: string
    lastName: string
    email: string
    message: string
  }
}
