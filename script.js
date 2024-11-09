// Smooth scrolling for all anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Prevent scrolling with mouse wheel 
document.querySelectorAll('.no-scroll').forEach(section => {
    section.addEventListener('wheel', (e) => {
        e.preventDefault();
    }, { passive: false });

    section.addEventListener('touchmove', (e) => {
        e.preventDefault();
    }, { passive: false });
});

// Function to show pop-up with content based on id
function showPopup(sectionId) {
    const content = {
        about: `<h2>ABOUT ME</h2>
                <p> 
                    I am a passionate software engineering student who not only loves IT but also values the power of collaboration and teamwork. 
                    My enthusiasm for technology is matched by my ability to communicate effectively and build strong relationships with peers and colleagues. 
                    Known for my sociable nature, I thrive in environments where I can interact with and contribute to a team's success.
                </p>`,

        contact: `<h2>CONTACT</h2><ul><li><strong>Phone:</strong> +34-646-433-326</li><li><strong>Email:</strong> aniolbuxedapascual@gmail.com</li><li><strong>Address:</strong> C/ Tren 9A, Quart, Girona</li></ul>`,

        languages: `<h2>LANGUAGES</h2>
                    <ul>
                        <li>
                            <strong>
                                Catalan and Spanish:
                            </strong> 
                            Native speaker
                            </li>
                            <li>
                                <strong>
                                    English:
                                </strong> 
                                C1 level (Cambridge English Advanced)
                            </li>
                    </ul>`,

        skills: `<h2>SKILLS</h2>
                <div class="skill-container">
                    <div class="skill">
                        <strong>C, C++, Java, Linux OS:</strong>
                        <div class="progress-bar" style="--progress: 100%;"></div>
                    </div>
                    <div class="skill">
                        <strong>PHP, Python, JavaScript, HTML, CSS, Excel:</strong>
                        <div class="progress-bar" style="--progress: 80%;"></div>
                    </div>
                    <div class="skill">
                        <strong>SQL, React, Bourne Shell(sh):</strong>
                        <div class="progress-bar" style="--progress: 50%;"></div>
                    </div>
                </div>`,

        education: `<h2>ACADEMIC BACKGROUND</h2>
                    <ul>
                        <li>
                            <strong>
                                2020-2022:
                            </strong> 
                            "Batxillerat Tecnològic" at Institute of Vilablareix.
                        </li>
                        <li>
                            <strong>
                                2022-present:
                            </strong> 
                            Third year of Computer Engineering at UdG.
                        </li>
                    </ul>`,

        experience: `<h2>WORK EXPERIENCE</h2>
                    <ul>
                        <li>
                            <strong>
                                Summers 2021-2023:
                            </strong> 
                            Production Operator at Boadas 1880 working full-time.
                        </li>
                        <li>
                            <strong>
                                Summer 2024:
                            </strong> 
                            Basketball Camp Counselor at "Bàsquet Quart" campus, where i trained 8-16 year old kids.
                        </li>
                    </ul>`
    };
    document.getElementById('popup-text').innerHTML = content[sectionId];
    document.getElementById('popup').classList.remove('hidden');
}

// Function to hide pop-up
function hidePopup() {
    document.getElementById('popup').classList.add('hidden');
}

// Event listener for closing the popup with the Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        hidePopup();
    }
});