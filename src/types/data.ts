export interface CardSessionData {
    title: string;
    date: string;
    time: string;
    location: string;
    status?: "ongoing" | "completed" | "scheduled";
    attendees: string;
    relatedDocs: string[];
}

export type DocumentType = {
    referrenceNo: string;
    subject: string;
    author: string;
    category: "Resolution" | "Ordinance" | "Memorandum";
    series: string;
    status: "Approved" | "Pending" | "Draft";
    attachement?: string;
    dateUploaded: string;
    dateApproved: string;
    remarks?: string
}

export interface DocumentProps {
    data: DocumentType
}

export type SessionType = {
  title: string;
  date: string;
  time: string;
  venue: string;
  chairperson: string;
  status: "scheduled" | "completed" | "on-going";
  attendees: string[];
  relatedDocuments: string[];
  agenda: string[];
};

export interface SessionProps {
    data: SessionType;
    option: "table" | "grid";
}

export type UserType = {
    name: string;
    username: string;
    email: string;
    role: "administration" | "councilor" | "noRole" | "staff";
    phone: string;
    department: string;
    tmpPassword: string;
}

export interface UserProps  {
    data: UserType;
}
