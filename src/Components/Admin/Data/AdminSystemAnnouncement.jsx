import Announcement from "../../Panels/Announcement";
import { useState } from "react";

export default function AdminSystemAnnouncement() {
  const [announcements] = useState([
    { id: 1, title: "System Maintenance", content: "The system will be down for maintenance on Saturday from 2 AM to 4 AM." },
    { id: 2, title: "New Feature Release", content: "We have released a new feature that allows users to filter sessions by subject." },
    { id: 3, title: "Holiday Schedule", content: "Please note the holiday schedule for the upcoming week." },
    { id: 4, title: "Security Update", content: "Security patches have been applied to protect your data." },
    { id: 5, title: "UI Improvements", content: "We've updated the interface for better usability." },
    { id: 6, title: "Bug Fixes", content: "Fixed bugs reported in session booking and chat." },
    { id: 7, title: "Performance Boost", content: "System performance has been improved significantly." },
    { id: 8, title: "Downtime Notice", content: "Scheduled downtime this Sunday from 1 AM to 3 AM." },
    { id: 9, title: "New Admin Tools", content: "Admins can now export session logs in CSV format." },
    { id: 10, title: "Tutor Highlight", content: "This week’s featured tutor is Ms. Angela Santos." },
    { id: 11, title: "Content Guidelines", content: "New posting rules for public messages are in effect." },
    { id: 12, title: "Feedback System", content: "You can now rate tutors and sessions." },
    { id: 13, title: "Updated Terms", content: "Please review our updated Terms of Use and Privacy Policy." },
    { id: 14, title: "New Subjects Added", content: "Engineering and Chemistry now available for tutoring." },
    { id: 15, title: "Mobile App Update", content: "New version 1.3 now available in Google Play." },
    { id: 16, title: "Public Holiday", content: "The system will be unavailable during National Heroes Day." },
    { id: 17, title: "System Cleanup", content: "Old sessions are being archived to improve performance." },
    { id: 18, title: "Event Reminder", content: "Join our Webinar on AI in Education, June 30." },
    { id: 19, title: "Tutor Applications", content: "Now open for August intake!" },
    { id: 20, title: "Session Feedback", content: "Survey form now live after every session." },
    { id: 21, title: "Calendar Integration", content: "You can sync session schedules to Google Calendar." },
    { id: 22, title: "Profile Tips", content: "Make your tutor profile more engaging with a bio." },
    { id: 23, title: "Support Hours", content: "Live support available from 9 AM – 5 PM daily." },
    { id: 24, title: "Browser Compatibility", content: "Works best on Chrome and Firefox." },
    { id: 25, title: "Internship Opportunity", content: "Apply for our tech internship program today." },
    { id: 26, title: "New Admin Dashboard", content: "Redesigned with better user analytics." },
    { id: 27, title: "Reminder System", content: "SMS & Email reminders for upcoming sessions are live." },
    { id: 28, title: "Voice Chat Feature", content: "Beta version of voice chat is available for tutors." },
    { id: 29, title: "Student Achievements", content: "Celebrating top learners every month!" },
    { id: 30, title: "Backup Schedule", content: "Weekly system backup every Sunday at 12 MN." }
  ]);

  return <Announcement announcements={announcements} />;
}
