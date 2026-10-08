# ExploreBD

**A Full-Stack Travel and Tourism Platform for Bangladesh**

> Group 05 — Team Yogurt · Software Engineering Laboratory · United International University

[![Demo Video](https://img.shields.io/badge/Watch-Demo%20Video-red?style=for-the-badge&logo=youtube)](https://youtu.be/-qx8GuC2MWg)

## Demo

▶ **Watch the project demo:** [https://youtu.be/-qx8GuC2MWg](https://youtu.be/-qx8GuC2MWg)

## About

ExploreBD is a full-stack travel and tourism platform built to make travel planning in Bangladesh simpler, wiser, and more interesting. It helps tourists discover destinations, compare options, book travel services, and plan personalised trips with minimal effort — while giving local providers (hotel owners, transport operators, tour guides, and destination managers) their own digital platform to display and manage their services.

## Key Features

1. **Destination Discovery** — Browse destinations across Bangladesh with details, images, travel information, and user reviews.
2. **Hotel and Room Booking** — Search hotels, compare pricing and facilities, view room details, and book rooms online. Hotel owners manage details, room stock, and approvals from dedicated dashboards.
3. **Vehicle and Ride Booking** — Inter-city and outer-city transport search, vehicle comparison, and trip bookings.
4. **Trip Planning & Itinerary Generation** — Build trips by destination, time, budget, group size, and interests; get suggested hotels, transport, and day-wise itineraries.
5. **AI Travel Assistant** — Rule-based intent recognition and entity extraction that answers travel queries about destinations, hotels, guides, vehicles, and trip planning.
6. **ExploreMatch AI Mood Quiz** — Answer a few questions about mood, budget, trip duration, group, and activity preferences to get personalised destination recommendations.
7. **Hidden Gems & Community Contributions** — Explore off-the-beaten-path places, upload media, add reviews, and contribute local travel information.
8. **Community Submission & Gamification** — Submit new places with duplicate detection, moderation checks, points, badges, and user profiles.
9. **Admin Dashboard** — Manage destinations, hotels, vehicles, events, reviews, bookings, users, and hidden gems.
10. **Messaging, Notifications & Profiles** — In-platform messaging, alerts, saved favourite listings, and profile management.

## Screenshots / UI Highlights

- Home page and destination browsing
- Hotel and vehicle listing pages
- Booking and trip planner flows
- AI assistant chat panel
- Admin management dashboard
- Hidden gem and contribution pages
- ExploreMatch AI mood quiz

## Tech Stack

| Layer | Technologies |
| --- | --- |
| Frontend | React, TypeScript, Vite, Tailwind CSS |
| Routing | Custom client-side routing logic |
| Backend | Node.js, Express.js |
| Database | MySQL |
| Authentication | JWT-based authentication with role-based access |
| File Uploads | Multer |
| Maps & Location | Leaflet, OpenStreetMap |
| UI Enhancements | Framer Motion, Lucide icons, canvas-confetti, jsPDF, QR generation |
| API Communication | Custom fetch-based API layer |
| AI Features | Custom rule-based recommendation, scoring, and NLP-inspired logic |
| Testing | Unit testing and Selenium-based automation testing |
| Version Control | Git |

### Architecture Overview

- **Frontend** — React + TypeScript, built with Vite and styled with Tailwind CSS. Includes pages for discovering travel options, booking trips, planning itineraries, and viewing dashboards.
- **Backend** — Node.js + Express APIs for destinations, hotels, vehicles, bookings, guides, user profiles, trip planning, and admin activities, plus authentication and file uploads.
- **Database** — MySQL storing users, destinations, bookings, reviews, hotels, vehicles, messages, notifications, hidden gems, and trip details.
- **Auth** — JWT with role-based access for tourists, hotel owners, guides, and admins.
- **AI & Recommendations** — Lightweight custom algorithms (travel assistant, mood-based destination suggestions, trip planning recommendations, hidden gem ranking, weighted scoring) with no dependency on external or paid AI services.

## Getting Started

### Prerequisites

- Node.js and npm
- MySQL

### Installation

```bash
git clone <repository-url>
cd project
npm install
```

### Configuration

Create a `.env` file in the project root with your database credentials and JWT secret (see `.env` for the expected keys).

### Run the Project

```bash
npm run dev
```

Or double-click `start-project.bat` to launch the development environment.

## Testing

The project includes unit tests and Selenium-based automation scripts covering key flows such as viewing destinations, booking vehicles, and recommendation features.

## Future Works

- Real AI and personalisation for travel recommendations
- Secure payment and checkout system
- Improved mobile experience
- More scalable backend
- Analytics and reporting for admins
- ML-based search and recommendation
- Expanded coverage of cities, local guides, and real-time tourism info
- Expanded end-to-end testing and reliable cloud deployment

**Possible new features:** real-time booking availability, live weather and travel alerts, multilingual support, route planning on maps, trust ratings, AI-generated itineraries, WhatsApp/SMS notifications, and subscriptions for local guides.

## Team

| Name | Student ID |
| --- | --- |
| Md. Hasibul Hossain | 0112230293 |
| Tarneem Zaman | 0112230263 |
| M. D. Alif | 0112230033 |
| Sadia Afrin | 0112320092 |
| Lamisha Tasnim | 0112330431 |

## License

This project is developed as a university coursework project for the Software Engineering Laboratory, United International University.
