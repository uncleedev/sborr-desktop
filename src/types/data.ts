export interface CardSessionData {
    title: string;
    date: string;
    time: string;
    location: string;
    status?: "ongoing" | "completed" | "scheduled";
    attendees: string;
    relatedDocs: string[];
}