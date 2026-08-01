<!DOCTYPE html>
<html lang="el">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Curriculum Vitae</title>
    <link rel="icon" type="image/png" href="assets/img/gslogo.png">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=UnifrakturMaguntia&family=Playfair+Display:wght@700;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>

<div class="newspaper newspaper-home">

    <!-- MASTHEAD -->
    <div class="np-topbar">
        Βιογραφικό Σημείωμα &nbsp;✦&nbsp; <?= date('j F Y') ?>
    </div>

    <div class="np-masthead">
        <h1>Curriculum Vitae</h1>
    </div>

    <div class="np-dateline">
        <span>✦</span>
        <span>Αθήνα, Ελλάδα</span>
        <span>✦</span>
        <span>Σελίδα Πρώτη</span>
        <span>✦</span>
    </div>

    <!-- SECTION 1: αριστερά 2 links stacked | δεξιά φωτό -->
    <div class="np-section np-grid-main">

        <div class="np-left-stack">

            <a href="pages/biografiko.php" class="np-cell np-stack-cell">
                <div class="np-cell-head">Ελληνικά</div>
                <div class="np-cell-title">Βιογραφικό Σημείωμα </div>
                <div class="np-cell-sub">Περιγραφή της εργασιακής μου εμπειρίας, των δεξιοτήτων μου και πληροφορίες σχετικά με τις επιδόσεις μου στην σχολή</div>
                <div class="np-lines">
                    <div class="np-line"></div><div class="np-line"></div>
                    <div class="np-line short"></div><div class="np-line"></div>
                </div>
                <span class="np-cell-arrow">→</span>
            </a>

            <a href="pages/resume.php" class="np-cell np-stack-cell">
                <div class="np-cell-head">English</div>
                <div class="np-cell-title">Resume</div>
                <div class="np-cell-sub">Description of my work experience, skills, and academic progress</div>
                <div class="np-lines"><div class="np-line short"></div>
                <div class="np-line"></div><div class="np-line"></div><div class="np-line short"></div><div class="np-line"></div>
                </div>
                <span class="np-cell-arrow">→</span>
            </a>

        </div>

        <div class="np-photo">
            <div class="np-photo-frame">
                <img src="assets/img/photo.jpg" alt="Φωτογραφία" onerror="this.style.display='none'">
            </div>
        </div>

    </div>

    <!-- SECTION 2 -->
    <div class="np-section np-grid-mid">

        <a  href="https://www.linkedin.com/in/%CE%B3%CE%B9%CF%8E%CF%81%CE%B3%CE%BF%CF%82-%CF%83%CE%B1%CF%81%CF%81%CE%AE%CF%82-b917753ab/"  target="_blank"  rel="noopener noreferrer"  class="np-cell">
            <div class="np-cell-head">Professional Profile</div>
            <div class="np-cell-title">LinkedIn Profile</div>
            <div class="np-cell-sub">Connect with me professionally and view my experience, education and career updates.</div>
            <div class="np-lines">
                <div class="np-line"></div>
                <div class="np-line"></div>
            </div>
            <span class="np-cell-arrow">→</span>
        </a>

        <a href="https://github.com/GiorgosSarris" target="_blank" class="np-cell">
            <div class="np-cell-head">projects</div>
            <div class="np-cell-title">My Github Link</div>
            <div class="np-cell-sub">For all my projects contact me. Some repositories are unavailable on the public.</div>
            <div class="np-lines">
                <div class="np-line"></div>
                <div class="np-line"></div>
            </div>
            <span class="np-cell-arrow">→</span>
        </a>

    </div>

    <!-- SECTION 3 -->
    <div class="np-section np-grid-foot">

        <a href="https://giorgossarris.github.io/IamSarris/" target="_blank" class="np-cell">
            <div class="np-cell-head">My old website</div>
            <div class="np-cell-title">IamSarris old</div>
            <div class="np-cell-sub">This was my first try on simple frontend development outside of university. My resume in this site has not been renewed.</div>
            <div class="np-lines">
                <div class="np-line"></div><div class="np-line short"></div>
            </div>
            <span class="np-cell-arrow">→</span>
        </a>

        <a href="pages/contact.php" class="np-cell">
            <div class="np-cell-head">Where to find me</div>
            <div class="np-cell-title">Contact Me</div>
            <div class="np-cell-sub">Email, phone, LinkedIn</div>
            <div class="np-lines">
                <div class="np-line"></div>
                <div class="np-line"></div><div class="np-line short"></div>
            </div>
            <span class="np-cell-arrow">→</span>
        </a>

    </div>

</div><!-- /newspaper -->

<script src="assets/js/main.js"></script>
</body>
</html>
