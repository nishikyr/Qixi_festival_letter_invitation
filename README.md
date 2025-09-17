🌸 Qixi Postcard – Interactive Invitation

An interactive digital postcard that flips on click and lets you invite someone in a fun and special way.
It includes multilanguage support (English 🇬🇧 and Chinese 🇨🇳) and playful interactions.

✨ Features

📖 3D Flip Effect – the card flips when you click or press Enter/Space.

🌍 Internationalization (i18n) – supports English and 中文.

🧩 Accessibility-friendly – uses aria roles, aria-pressed states, and keyboard navigation.

📋 Interactive buttons:

Yes → copies the confirmation message (date & time) to the clipboard.

Maybe → opens a prompt to suggest another time.

Back → flips back to the front side.

🎨 Customizable design – uses Google Fonts, background images, and flexible styles.css.

🖼️ Preview

(Add a GIF or screenshot of the postcard here)

🚀 Getting Started

Clone this repository:

git clone https://github.com/yourusername/qixi-postcard.git
cd qixi-postcard


Open index.html in your browser.

Click the card to flip it and reveal the invitation.

Switch between languages using the 🇬🇧 / 🇨🇳 buttons.

⚙️ Project Structure
📂 qixi-postcard
 ├── index.html      # Main structure
 ├── script.js       # Logic (flip, i18n, interactions)
 ├── styles.css      # Custom styles
 ├── Tasmin-Qixi.jpg # Postcard cover image
 └── README.md       # Documentation

🌐 Internationalization

The script.js file includes the i18n object with all text strings in both languages:

const i18n = {
  en: { ... },
  zh: { ... }
};


📬 Credits
@anishikyr
