<?php
$titles = [
    'bio'    => 'Βιογραφία & Προφίλ',
    'info'   => 'Προσωπικά Στοιχεία',
    'work'   => 'Τα Έργα μου',
    'biografiko' => 'Το Βιογραφικό μου',
];
?>
<!DOCTYPE html>
<html lang="el">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= $titles['biografiko'] ?> — Curriculum Vitae</title>
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

        <h2><?= $titles['biografiko'] ?></h2>

        <h3>ΓΕΩΡΓΙΟΣ ΝΙΚΟΛΑΟΣ ΣΑΡΡΗΣ</h3>
        <p> Αθήνα, Αττική| Τηλέφωνο: 6947011911| Email:sarrisgeorge5@gmail.com| Website:lamSarris</p>
        <h2>ΕΠΑΓΓΕΛΜΑΤΙΚΟ ΠΡΟΦΙΛ</h2>
        <p>
            Φοιτητής Πληροφορικής στο Εθνικό και Καποδιστριακό Πανεπιστήμιο Αθηνών,
            με ισχυρό υπόβαθρο στους αλγορίθμους, στις βάσεις δεδομένων, στα λειτουργικά
            συστήματα και στην τεχνητή νοημοσύνη. Διαθέτω εμπειρία σε C, C++, Python,
            Java, Assembly, PHP, JavaScript, HTML, CSS και SQL. Είμαι εξοικειωμένος με
            περιβάλλοντα Linux, καθώς και με την ανάπτυξη backend και frontend εφαρμογών.
        </p>

        <h2>ΕΠΑΓΓΕΛΜΑΤΙΚΗ ΕΜΠΕΙΡΙΑ</h2>
        <p><strong>Full Stack Developer</strong> — Ironcloud ΙΚΕ, Αθήνα (2026-Σήμερα)</p>
        <p><strong>Σερβιτόρος Εστιατορίου</strong> — Εστιατόριο «Σκλήθρι», Σκιάθος (2022-2025)</p>
        <p><strong>Υπεύθυνος Beach Bar</strong> — 4 χρόνια εμπειρίας</p>

        <h2>ΠΤΥΧΙΑΚΗ ΕΡΓΑΣΙΑ</h2>
        <p><strong>Ανάπτυξη Ολοκληρωμένου Συστήματος Agent για την Αξιολόγηση Προγραμματιστικών Εργασιών</strong></p>
        <ul>
            <li>Backend: Python | Frontend: Streamlit</li>
            <li>Η εφαρμογή επιτρέπει σε διδάσκοντες να αξιολογούν εργασίες σε C, C++, Python, Java και JavaScript.</li>
            <li>Ανάλυση φακέλων και αρχείων φοιτητών.</li>
            <li>Αυτόματη αναγνώριση γλωσσών προγραμματισμού.</li>
            <li>Εξαγωγή κρίσιμων πληροφοριών από τον κώδικα.</li>
            <li>Ενσωμάτωση εκφώνησης εργασίας και απαιτήσεων διδάσκοντα.</li>
            <li>Δημιουργία προσωποποιημένων quiz.</li>
            <li>Καθαρισμός και μετατροπή σε μορφή Aiken, έτοιμη για εισαγωγή στο eClass.</li>
        </ul>

        <h2>ΤΕΧΝΙΚΕΣ ΔΕΞΙΟΤΗΤΕΣ</h2>
        <ul>
            <li><strong>Γλώσσες Προγραμματισμού:</strong> C, C++, Python, Java, Assembly, SQL, PHP, HTML, CSS, JavaScript</li>
            <li><strong>Εργαλεία:</strong> bash, git, REST API</li>
            <li><strong>Λειτουργικά Συστήματα:</strong> Linux Ubuntu/Manjaro, Windows</li>
            <li><strong>Άλλες Δεξιότητες:</strong> AI Agents, Data Mining, Debugging, Ηλεκτρολογική Καλωδίωση</li>
        </ul>

        <h2>ΕΚΠΑΙΔΕΥΣΗ</h2>
        <p><strong>Προπτυχιακός Φοιτητής</strong> — Τμήμα Πληροφορικής και Τηλεπικοινωνιών, Εθνικό και Καποδιστριακό Πανεπιστήμιο Αθηνών (2023 - Σήμερα)</p>
        <p><strong>Ενδεικτικά ολοκληρωμένα μαθήματα:</strong></p>
        <ul>
            <li>Γραμμική Άλγεβρα, Διακριτά Μαθηματικά, Εισαγωγή στον Προγραμματισμό, Εισαγωγή στην Πληροφορική και στις Τηλεπικοινωνίες</li>
            <li>Λογική Σχεδίαση, Ανάλυση 1, Αρχιτεκτονική Υπολογιστών 1, Δομές Δεδομένων και Τεχνικές Προγραμματισμού, Αντικειμενοστραφής Προγραμματισμός, Προγραμματισμός Συστήματος</li>
            <li>Ηλεκτρομαγνητισμός, Ανάλυση 2, Πιθανότητες και Στατιστική</li>
            <li>Σήματα και Συστήματα, Αλγόριθμοι και Πολυπλοκότητα, Δίκτυα Επικοινωνιών 1, Συστήματα Επικοινωνιών</li>
            <li>Σχεδίαση και Χρήση Βάσεων Δεδομένων, Υλοποίηση Συστημάτων Βάσεων Δεδομένων, Λειτουργικά Συστήματα, Γραφικά</li>
            <li>Αριθμητική Ανάλυση, Θεωρία Αριθμών, Τεχνητή Νοημοσύνη 1, Τεχνικές Εξόρυξης Δεδομένων, Αλγόριθμοι για Μηχανική Μάθηση, Αναγνώριση Προτύπων Μηχανικής Μάθησης</li>
            <li>Δομή και Θεσμοί της Ευρωπαϊκής Ένωσης, Εκπαιδευτική Ψυχολογία, Διοίκηση Έργων, Καινοτομία και Επιχειρηματικότητα</li>
        </ul>

        <h2>ΓΛΩΣΣΕΣ</h2>
        <ul>
            <li>Ελληνικά: Μητρική γλώσσα</li>
            <li>Αγγλικά: C2 — Proficiency Michigan</li>
            <li>Γαλλικά: B2 — DELF</li>
            <li>Ιταλικά: Καλή γνώση</li>
        </ul>
    </div>
</div>
<script src="../assets/js/main.js"></script>
</body>
</html>