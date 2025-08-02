# 🧩 Custom Select Component (React + TypeScript + SCSS)

This project is a reusable custom `Select` component built using **React**, **TypeScript**, **SCSS**, and **Vite**. It fetches user data from an external API and displays the options in a dropdown without using the native HTML `<select>` and `<option>` tags.

---

## 🎯 Objective

Create a responsive and reusable Select component that:

- ✅ Fetches option values from API
- ✅ Displays loading and error states
- ✅ Opens and closes on click
- ✅ Triggers a callback (`onChange`) with the selected value
- ✅ Does **not** use native select/option elements

---

## 📦 Tech Stack

- **React**
- **TypeScript**
- **SCSS Modules**
- **Vite**

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/custom-select.git
cd custom-select

1. Create Env File

cp .env.example .env

Set VITE_API_URL as "https://jsonplaceholder.typicode.com/users"

2․ Install dependencies

npm install

3. Run the development server

npm run dev

📁 Project Structure

src/
├── Components/
│   ├── Select/
│   │   ├── Select.tsx
│   │   └── Select.module.scss
│   ├── Loader/
│   │   ├── Loader.tsx
│   │   └── Loader.module.scss
│   └── ErrorMessage/
│       ├── ErrorMessage.tsx
│       └── ErrorMessage.module.scss
├── api/
│   └── option.ts
├── assets/
│   ├── gifs/
│   │   └── loading.gif
│   └── icons/
│       └── down-arrow.png
├── types/
│   └── option.ts
├── App.tsx
└── main.tsx
```
