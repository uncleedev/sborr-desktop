import { DocumentType, SessionType, UserType } from "@/types/data";

export const users: UserType[] = [
  {
    name: "Jhon Brian Arce",
    username: "uncledev",
    email: "uncledev@gmail.com",
    role: "administration",
    department: "MITO",
    phone: "123456789",
    tmpPassword: "uncle"
  },
  {
    name: "Try",
    username: "user",
    email: "user@gmail.com",
    role: "councilor",
    department: "MITO",
    phone: "1235345",
    tmpPassword: "hello"
  },
]


export const sessions: SessionType[] = [
  {
    title: "Barangay Mascap 2014",
    date: "Jan 19, 2014",
    time: "14:00",
    venue: "Room A",
    chairperson: "Mr. Arce",
    status: "on-going",
    attendees: ["Vice Mayor", "Finance Team"],
    relatedDocuments: ["Road Maintenance", "Budget"],
    agenda: ["talk", "speak"],
  },

  {
    title: "Barangay Mascap 2014",
    date: "Jan 19, 2014",
    time: "14:00",
    venue: "Room A",
    chairperson: "Mr. Arce",
    status: "on-going",
    attendees: ["Vice Mayor", "Finance Team"],
    relatedDocuments: ["Road Maintenance", "Budget"],
    agenda: ["talk", "speak"],
  },

  {
    title: "Barangay Mascap 2014",
    date: "Jan 19, 2014",
    time: "14:00",
    venue: "Room A",
    chairperson: "Mr. Arce",
    status: "on-going",
    attendees: ["Vice Mayor", "Finance Team"],
    relatedDocuments: ["Road Maintenance", "Budget"],
    agenda: ["talk", "speak"],
  },

  {
    title: "Barangay Mascap 2014",
    date: "Jan 19, 2014",
    time: "14:00",
    venue: "Room A",
    chairperson: "Mr. Arce",
    status: "on-going",
    attendees: ["Vice Mayor", "Finance Team"],
    relatedDocuments: ["Road Maintenance", "Budget"],
    agenda: ["talk", "speak"],
  },

  {
    title: "Barangay Mascap 2014",
    date: "Jan 19, 2014",
    time: "14:00",
    venue: "Room A",
    chairperson: "Mr. Arce",
    status: "on-going",
    attendees: ["Vice Mayor", "Finance Team"],
    relatedDocuments: ["Road Maintenance", "Budget"],
    agenda: ["talk", "speak"],
  },

  {
    title: "Barangay Mascap 2014",
    date: "Jan 19, 2014",
    time: "14:00",
    venue: "Room A",
    chairperson: "Mr. Arce",
    status: "on-going",
    attendees: ["Vice Mayor", "Finance Team"],
    relatedDocuments: ["Road Maintenance", "Budget"],
    agenda: ["talk", "speak"],
  },

  {
    title: "Barangay Mascap 2014",
    date: "Jan 19, 2014",
    time: "14:00",
    venue: "Room A",
    chairperson: "Mr. Arce",
    status: "completed",
    attendees: ["Vice Mayor", "Finance Team"],
    relatedDocuments: ["Road Maintenance", "Budget"],
    agenda: ["talk", "speak"],
  },

  {
    title: "Hello",
    date: "Jan 19, 2014",
    time: "14:00",
    venue: "Room A",
    chairperson: "Mr. Arce",
    status: "on-going",
    attendees: ["Vice Mayor", "Finance Team"],
    relatedDocuments: ["Road Maintenance", "Budget"],
    agenda: ["talk", "speak"],
  },
];

export const documents: DocumentType[] = [
  {
    referrenceNo: "RSL-01234",
    subject: "Barangay Budget 2014",
    author: "Brian",
    category: "Resolution",
    series: "2013",
    status: "Approved",
    attachement: "file.pdf",
    dateApproved: "Jan 18, 2014",
    dateUploaded: "Jan 20, 2014",
    remarks: "",
  },
  {
    referrenceNo: "RSL-01235",
    subject: "hello",
    author: "APPROP",
    category: "Resolution",
    series: "2014",
    status: "Draft",
    attachement: "file.pdf",
    dateApproved: "Jan 18, 2014",
    dateUploaded: "Jan 20, 2014",
    remarks: "",
  },
];