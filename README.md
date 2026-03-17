# UMAANG: Right Stimulation. Right Time.

UMAANG is a unified platform built for tracking early childhood development, supporting families, and empowering volunteers across Maharashtra. It acts as an early intervention tracking system to measure and forecast children's developmental milestones while managing volunteer home visits.

## 🚀 Features by Role

### 1. Admin Portal
A high-level command center for program coordinators to analyze platform-wide metrics and identify at-risk children/families.
* **Child Growth Velocity Indicator**: An advanced analytical tool analyzing month-over-month milestone progress across 4 key domains (Cognitive, Language, Motor Skills, Social-Emotional) to determine if a child's development is Accelerating, Steady, Slowing, or Declining.
* **Family Engagement Heatmap**: A live tracking matrix visualizing the engagement levels of families over the last 4 weeks. Instantly highlights parents who are consistently active vs. quietly fading away.
* **AI Early Delay Detection**: ML-backed flags highlighting children who are diverging significantly from the standard developmental curve, alongside recommended interventions.
* **Aggregated Statistics**: Overview of enrolled children, home visits completed, and active volunteers.

### 2. Parent Portal
A customized, accessible interface for parents to track their child's progress.
* **Child Profile & Growth Velocity**: Individualized, real-time feedback on their child's performance with target predictions (e.g., "On track to reach 80% by May 2025").
* **Recommended Activities**: Curated stimulation activities tailored to the child's identified developmental weaknesses (such as language stimulation games for speech delays).
* **Multi-Language Access**: Parents can seamlessly toggle the entire dashboard into their native language (English, Hindi, Marathi, Tamil, Telugu, Bengali) to ensure maximum accessibility.

### 3. Volunteer Portal
A dedicated workspace for community health workers or volunteers managing assigned families.
* **Caseload Management**: Easy overview of all assigned children, risk levels, and next scheduled home visits.
* **Training Hub**: Track progression through foundational modules such as "Understanding Child Development (0 to 3 years)" and "Conducting Effective Home Visits".
* **Interactive AI Assistant**: An integrated Chatbot designed to assist volunteers by generating on-demand play activities or translating physical guides dynamically.

## 🛠️ Technology Stack
* **Framework**: React 18, Next.js (App Router)
* **Styling**: Tailwind CSS
* **Language**: TypeScript
* **State Management**: React Context API (`AppContext.tsx`)
* **Internationalization (i18n)**: Custom-built translation engine mapping strings across 6 localized dictionaries.

## 🏃‍♂️ How to Run the Project Locally

1. **Install Dependencies:**
   Ensure you have Node.js installed, then run:
   ```bash
   npm install
   ```
2. **Start the Development Server:**
   ```bash
   npm run dev
   ```
3. **Open the Application:**
   Navigate to `http://localhost:3000` (or the port specified in your terminal, sometimes `3001` if 3000 is occupied).

## 🔑 Login Instructions

The landing page features the portal entry points:
* **Parent Login**: Click the "Parent" card to enter the mock Parent Dashboard.
* **Volunteer Login**: Click the "Volunteer" card to enter the mock Volunteer Dashboard.
* **Admin Login**:
  1. Click on **"Admin Access"** located in the bottom right corner of the landing screen.
  2. In the modal, use the password: `admin123` (or simply leave it blank and hit enter).
  3. You will be authenticated and redirected to the Admin Overview tab where the Heatmap and Growth Indicators are located.

## 🌐 Language Localization
The platform is designed with deep i18n support. The navigation bar (`Navbar.tsx`) allows users to swap languages on the fly. The entire context provider (`AppContext`) automatically passes the new `currentLanguage` down to the `lib/i18n.ts` hooks, instantly translating the UI, widgets, and even AI Chatbot responses!
