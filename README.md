# CURRICULUM VITAE — Οδηγός Εγκατάστασης

## Δομή αρχείων

```
cv_site/
├── index.php               ← Κεντρική σελίδα
├── pages/
│   ├── photo.php
│   ├── info.php
│   ├── bio.php
│   ├── work.php
│   ├── education.php
│   ├── skills.php
│   └── contact.php
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   └── img/
│       ├── kitchen-bg.jpg      ← ΒΑΛΕ ΕΔΩ φωτογραφία πάγκου κουζίνας
│       └── paper-texture.png   ← προαιρετικά texture χαρτιού
└── .htaccess
```

---

## Apache — .htaccess

```apache
Options -Indexes
DirectoryIndex index.php

# Σωστό charset
AddDefaultCharset UTF-8

# Cache για static assets
<FilesMatch "\.(css|js|jpg|png|webp)$">
    Header set Cache-Control "max-age=2592000, public"
</FilesMatch>
```

---

## Nginx — site config

```nginx
server {
    listen 80;
    server_name yourdomain.gr www.yourdomain.gr;
    root /var/www/cv_site;
    index index.php;

    charset utf-8;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location ~ \.php$ {
        include snippets/fastcgi-php.conf;
        fastcgi_pass unix:/run/php/php8.2-fpm.sock;
    }

    location ~* \.(css|js|jpg|jpeg|png|webp|ico)$ {
        expires 30d;
        add_header Cache-Control "public";
    }

    location ~ /\. {
        deny all;
    }
}
```

---

## Φωτογραφία background (kitchen-bg.jpg)

Βάλε στο `assets/img/` μια φωτογραφία πάγκου κουζίνας.
Καλές πηγές (δωρεάν, royalty-free):
- https://unsplash.com/s/photos/kitchen-counter
- https://www.pexels.com/search/kitchen%20counter/

Ιδανικές διαστάσεις: **1920×1080** ή μεγαλύτερο.
Το CSS χρησιμοποιεί `background-size: cover` + `background-attachment: fixed`
ώστε να λειτουργεί σωστά σε κάθε συσκευή.

---

## Blackletter γραμματοσειρά (προαιρετικό)

Για να εμφανίζεται σωστά η τίτλος "curicullum vitae" με μεσαιωνικό στυλ,
πρόσθεσε στο `<head>` του `index.php`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=UnifrakturMaguntia&display=swap" rel="stylesheet">
```

---

## Πώς να συμπληρώσεις περιεχόμενο

Κάθε αρχείο στο `pages/` είναι ανεξάρτητο PHP snippet.
Γράψε μέσα κανονική HTML — φόρτες αυτόματα μέσα στο modal.

Παράδειγμα `pages/info.php`:
```php
<h2>Προσωπικά Στοιχεία</h2>
<ul>
  <li><strong>Ονοματεπώνυμο:</strong> Γιώργος Παπαδόπουλος</li>
  <li><strong>Email:</strong> info@example.gr</li>
</ul>
```
