<?php
$titles = [
    'bio'     => 'Βιογραφία & Προφίλ',
    'info'    => 'Προσωπικά Στοιχεία',
    'work'    => 'My Projects',
    'resume' => 'My resume',
];
?>
<!DOCTYPE html>
<html lang="el">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= $titles['resume'] ?> — Curriculum Vitae</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../assets/css/style.css">
</head>
<body>
<div class="newspaper">
    <div class="np-topbar">
        Βιογραφικό Σημείωμα &nbsp;✦&nbsp; <?= date('j F Y') ?>
    </div>
    <div class="np-dateline">
        <span>✦</span>
        <span>Αθήνα, Ελλάδα</span>
        <span>✦</span>
        <a href="../index.php" class="np-back"><- Exit</a>
        <span>✦</span>
    </div>
    <div class="np-page-body">
        <h2><?= $titles['resume'] ?></h2>
        <h3>GEORGIOS NIKOLAOS SARRIS</h3>
        <p>Athens, Attica|  Phone: 6947011911 | Email: sarrisgeorge5@gmail.com | Website: lamSarris</p>

        <h2>PROFESSIONAL SUMMARY</h2>
        <p>Computer Science student at the National and Kapodistrian University of Athens, the most prestigious institution in the country, with a strong background in algorithms, databases, operating systems, and artificial intelligence. Experienced in C, C++, Python, Java, Assembly, PHP, Javascript, HTML, CSS and SQL. Familiar with Linux environments and backend/frontend application development.</p>

        <h2>PROFESSIONAL EXPERIENCE</h2>
        <p><strong>Full Stack Developer</strong> - Ironcloud ΙΚΕ, Athens (2026-Present)</p>
        <p><strong>Restaurant Waiter</strong> - "Sklithri" Restaurant, Skiathos (2022-2025)</p>
        <p><strong>Beach Bar Manager</strong> (4 years of experience)</p>
        

        <h2>THESIS</h2>
        <p><strong>Development of an Integrated Programming Assignment Evaluation System Agent</strong></p>
        <ul>
            <li>Backend: Python | Frontend: Streamlit</li>
            <li>The application allows instructors to evaluate assignments in C, C++, Python, Java, and JavaScript.</li>
            <li>Analysis of student folders and files.</li>
            <li>Automatic identification of programming languages.</li>
            <li>Extraction of critical information from code.</li>
            <li>Integration of assignment prompts and instructor requirements.</li>
            <li>Generation of personalized quizzes.</li>
            <li>Cleansing and transformation to an Aiken format, ready for eClass.</li>
        </ul>

        <h2>TECHNICAL SKILLS</h2>
        <ul>
            <li><strong>Languages:</strong> C, C++, Python, Java, Assembly, SQL, PHP, HTML, CSS, Javascript</li>
            <li><strong>Tools:</strong> bash, git, Rest API</li>
            <li><strong>Operating Systems:</strong> Linux Ubuntu/Manjaro, Windows</li>
            <li><strong>Other:</strong> AI Agents, Data Mining, Debugging, Electrical Wiring</li>
        </ul>

        <h2>EDUCATION</h2>
        <p><strong>Undergraduate Student</strong> - Department of Informatics and Telecommunications, National and Kapodistrian University of Athens (2023 - Present)</p>
        <p><em>Representative Completed Courses:</em></p>
        <ul>
            <li>Linear Algebra, Discrete Mathematics, Introduction to Programming, Introduction to Informatics and Telecommunications</li>
            <li>Logic Design, Analysis 1, Computer Architecture 1, Data Structures and Programming Techniques, Object Oriented Programming, System Programming</li>
            <li>Electromagnetism, Analysis 2, Object-Oriented Programming, Probability and Statistics</li>
            <li>Signals and Systems, Algorithms and Complexity, Communication Networks 1, Communication Systems</li>
            <li>Database Design and Use, Implementation of Database Systems, Operating Systems, Graphics</li>
            <li>Numerical Analysis, Number Theory, Artificial Intelligence 1, Data Mining Techniques, Algorithms for Machine Learning, Recognition patterns of Machine Learning</li>
            <li>Structure and Institutions of the European Union, Educational Psychology, Project Management, Innovation and Entrepreneurship</li>
        </ul>


        <h2>LANGUAGES</h2>
        <ul>
            <li>Greek: Native</li>
            <li>English: C2 (Proficiency Michigan)</li>
            <li>French: B2 (DELF)</li>
            <li>Italian: Good</li>
        </ul>
    </div>
</div>
<script src="../assets/js/main.js"></script>
</body>
</html>α