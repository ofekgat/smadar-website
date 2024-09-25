import React from 'react';
import './Process.css'; // Import the CSS for styling

function Process() {
  return (
    <section className="process-section">
      <h2 className="process-title">תהליך הייעוץ</h2>

      <div className="process-content">
        <p>?כמה זמן נמשכת פגישה<br />
        .פגישה ראשונה בדרך כלל ארוכה יותר והיא בין שעה לשעה וחצי. הפגישות הבאות, הן בנות שעה אחת</p>

        <p>?כמה זמן נמשך התהליך<br />
        .התהליך הוא אישי ומותאם לכל משפחה. יש כאלו שיגיעו ליעד שנקבע מראש, בשניים-שלושה מפגשים, ויהיו כאלה שיצטרכו יותר
        </p>

        <p>?היכן מתקיימים המפגשים  <br />
       .המפגשים מתקיימים אצלי בליניקה בהוד השרון או בזום

        </p>
   </div>
    </section>
  );
}

export default Process;