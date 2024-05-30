import React from 'react';

function Experience() {
  return (
    <section className="experience">
       <h2>Doświadczenie</h2>
            <div class="job">
                <h3>Junior Front-End Developer</h3>
                <h4>Firma 2</h4>
                <p class="date">Maj 2015 - Obecnie</p>
                <ul>
                    <li>Tworzenie stron interentowych dla klientów.</li>
                </ul>
            </div>
            <div class="job">
                <h3>Młodszy Specjalista IT</h3>
                <h4>Firma 1</h4>
                <p class="date">Czerwiec 2014 - Kwiecień 2015</p>
                <ul>
                    <li>Wsparcie techniczne klientów w problemach z Hardware oraz Software</li>
                </ul>
            </div>
    </section>
  );
}

export default Experience;