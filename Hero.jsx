import React from 'react';
import './Hero.css'; // Import the CSS for styling

function Hero() {
  return (
    <section className="hero-section">
      <h1 className="hero-title">הדרכת הורים </h1>
      <h1 className="hero-title">וייעוץ משפחתי</h1>
      <p className="hero-subtitle">תהליך ייעוץ וליווי מלא להורים ולזוגות</p>

      <div className="hero-content">
        <h2 className="hero-about-title">קצת עליי</h2>
        <p className="hero-description">
        .נעים להכיר, אני סמדר גת , נשואה לשגיא ואמא לשני בנים- אופק ושחר
        </p>
        <p className="hero-description">
        .במשך 20 שנים עברתי במשרד החינוך בתפקיד מורה למתמטיקה ומחנכת 
        </p>
        <p className="hero-description">
        .למרות המשיכה שלי לעולם המספרים, החלטתי לעזוב את הוראת המתמטיקה ולהתמקד מקצועית בחינוך לטובת הילדים
        </p>
        <p className="hero-description">
        הניסיון שצברתי במהלך השנים בהם לימדתי בכל מיני סוגים של בתי ספר (יסודי, חטיבת ביניים ועליונה), הביא אותי באופן טבעי 
        </p>
        <p className="hero-description">
        לבחור בהדרכת הורים וייעוץ משפחתי. אני מאמינה בכל ליבי, כי ייעוץ להורים היא הדרך האולטימטיבית לעזור ולכוון אותם כאשר הם 
        </p>
        <p className="hero-description">
            .נתקלים בקשיים
        </p>
      </div>
    </section>
  );
}

export default Hero;