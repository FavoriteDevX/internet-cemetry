# 🏛️ The Digital Graveyard: Internet Artifacts & Dead Services

<img width="1000" height="684" alt="image" src="https://github.com/user-attachments/assets/71c9bb4d-7acd-4d6b-a715-d91fe7388904" />

Inspired by the visual storytelling of projects like *neal.fun*, this website allows users to take a horizontal walk through time, exploring the legacies and downfalls of products ranging from early 90s dial-up infrastructure to modern generative AI experiments.

## 🚀 Live Demo
You can explore the museum live at: 

---

## 📅 Catalog

* AOL Dial-Up (1991)
* Internet Explorer (1995)
* AOL Instant Messenger (AIM) (1997)
* Microsoft MSN Messenger (1999)
* BlackBerry OS (1999)
* Orkut (2004)
* Google Play Music (2011)
* Google+ (2011)
* Google Play Movies & TV (2012)
* Vine (2013)
* WWE Network (2014)
* Periscope (2015)
* Mixer (2016)
* YouTube Stories (2017)
* IGTV (Instagram TV) (2018)
* Google Podcasts (2018)
* Facebook Gaming (2018)
* Google Stadia (2019)
* Humane AI Pin (2023)
* ChatGPT Atlas (2025)

---

## 🛠️ Project Architecture

To keep the museum fast and lightweight, the application is built entirely as a client-side static site without heavy frameworks:

* **`index.html`** – Core semantic skeleton.
* **`style.css`** – Minimalist white-gray aesthetic featuring responsive flex-layouts and custom canvas styling.
* **`app.js`** – Dynamic UI injection and high-precision mouse wheel translation (converting vertical scrolls into smooth horizontal exploration).
* **`artifacts.json`** – The museum's structured dataset holding titles, lifespans, comprehensive summaries, and asset paths.

---

## 🤝 How to Contribute (Bury a New Service!)

This museum is fully crowdsourced and open to expansion. If you want to add a feature or service that was officially *sunsetted* or *shut down*, follow these steps:

1. **Fork** this repository.
2. Open the `artifacts.json` file.
3. Append a new JSON block at the correct **chronological position** using the following template:

```json
  {
    "title": "Name of the Dead Service",
    "date": "Launch Year — Shutdown Year",
    "summary": "A detailed 3 to 5 sentence summary detailing what the service did, its peak cultural impact, and the business or technological reasons behind its official demise.",
    "image": "A stable public URL to the official logo asset (preferably a high-quality SVG from Wikimedia Commons)"
  }
```

4. Submit a **Pull Request** detailing your addition!

---

## 📜 License
This project is open-source and available under the [MIT License](LICENSE). All corporate logos and trademarks used inside the museum belong to their respective legacy entities and are utilized strictly under educational and historical preservation frameworks.
