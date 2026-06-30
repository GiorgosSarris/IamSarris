<?php
$titles = [
    'bio'     => 'Βιογραφία & Προφίλ',
    'info'    => 'Προσωπικά Στοιχεία',
    'work'    => 'My Projects',
    'contact' => 'Contact Me',
];
?>
<!DOCTYPE html>
<html lang="el">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= $titles['work'] ?> — Curriculum Vitae</title>
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
        <h2><?= $titles['work'] ?></h2>
        <!-- περιεχόμενο εδώ -->
    </div>
</div>
<script src="../assets/js/main.js"></script>
</body>
</html>