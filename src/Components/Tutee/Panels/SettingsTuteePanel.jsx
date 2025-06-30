// // src/Components/Tutee/Panels/SettingsTuteePanel.jsx
// import React from 'react';
// import useTuteeSettingsData from '../Data/useSettingsData';
// // import '../../Styles/TuteePage.css';


// export default function SettingsTuteePanel() {
//   const {
//     emailNotif, setEmailNotif,
//     sessionAlert, setSessionAlert,
//     showModal, setShowModal,
//     tutorData, toggleDay, savePreferences
//   } = useTuteeSettingsData();

//   return (
//     <div>
//       <HeaderTutee />
//       <h1 className="settings-tutee">Settings</h1>

//       <div className="middle-section">
//         <div className="section-header"><h3>Personal Information</h3></div>
//         <div className="card-content notification">
//           <div className="toggle-row">
//             <span>Email Notifications</span>
//             <label className="switch">
//               <input type="checkbox" checked={emailNotif} onChange={() => setEmailNotif(!emailNotif)} />
//               <span className="slider round"></span>
//             </label>
//           </div>
//           <div className="toggle-row">
//             <span>Session Alerts</span>
//             <label className="switch">
//               <input type="checkbox" checked={sessionAlert} onChange={() => setSessionAlert(!sessionAlert)} />
//               <span className="slider round"></span>
//             </label>
//           </div>
//         </div>
//       </div>

//       <div className="lower-section">
//         <div className="card-header"><h3>Booking & Session Preferences</h3></div>
//         <div className="card-content booking">
//           <div className="availability">
//             <p>Tutor Availability</p>
//             <div className="days">
//               {['M', 'T', 'W', 'TH', 'F'].map(day => (
//                 <button
//                   key={day}
//                   className={`day-button ${tutorData.availability.includes(day) ? 'active' : ''}`}
//                   onClick={() => toggleDay(day)}
//                 >
//                   {day}
//                 </button>
//               ))}
//             </div>

//             <p>Rate per Hour (₱)</p>
//             <input
//               className="rate-input"
//               type="number"
//               value={tutorData.rate_per_hour}
//               onChange={(e) => setTutorData({ ...tutorData, rate_per_hour: e.target.value })}
//               placeholder="Enter rate"
//             />

//             <p>Subjects Offered</p>
//             <input
//               className="subject-input"
//               type="text"
//               value={tutorData.subjects_offered}
//               onChange={(e) => setTutorData({ ...tutorData, subjects_offered: e.target.value })}
//               placeholder="Enter subjects"
//             />
//           </div>
//         </div>

//         <button className="edit-button" onClick={() => setShowModal(true)}>Save Preferences</button>
//       </div>

//       {showModal && (
//         <div className="modal-overlay">
//           <div className="modal">
//             <h3>Confirm Update</h3>
//             <p>Are you sure you want to save your preferences?</p>
//             <div className="modal-buttons">
//               <button className="confirm" onClick={() => { savePreferences(); setShowModal(false); }}>Yes</button>
//               <button className="cancel" onClick={() => setShowModal(false)}>No</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }



import React from 'react';
import useSettingsData from '../Data/useSettingsData';

export default function SettingsTuteePanel() {
  const {
    emailNotif, setEmailNotif,
    sessionAlert, setSessionAlert,
    preferredSubjects, setPreferredSubjects,
    preferredTime, setPreferredTime,
    saveSettings
  } = useSettingsData();

  return (
    <div className="settings-panel">
      <h2 className="settings-heading">Settings</h2>

      <div className="settings-section">
        <h3>Notifications</h3>
        <label className="toggle-row">
          <span>Email Notifications</span>
          <input type="checkbox" checked={emailNotif} onChange={() => setEmailNotif(!emailNotif)} />
        </label>
        <label className="toggle-row">
          <span>Session Alerts</span>
          <input type="checkbox" checked={sessionAlert} onChange={() => setSessionAlert(!sessionAlert)} />
        </label>
      </div>

      <div className="settings-section">
        <h3>Learning Preferences</h3>
        <label>
          Preferred Subjects
          <input
            type="text"
            value={preferredSubjects}
            onChange={(e) => setPreferredSubjects(e.target.value)}
            placeholder="e.g. Math, English"
          />
        </label>

        <label>
          Preferred Time of Session
          <select value={preferredTime} onChange={(e) => setPreferredTime(e.target.value)}>
            <option>Morning</option>
            <option>Afternoon</option>
            <option>Evening</option>
          </select>
        </label>
      </div>

      <div className="settings-actions">
        <button onClick={saveSettings} className="save-button">Save Preferences</button>
      </div>
    </div>
  );
}
