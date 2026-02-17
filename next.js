# In your project root, restructure to:
mwangitrader2-design/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   │   └── page.tsx
│   │   └── signup/
│   │       └── page.tsx
│   ├── dashboard/
│   │   └── page.tsx          # Move dashboardpage here
│   ├── lessons/
│   │   └── [id]/
│   │       └── page.tsx      # Move lessonpage here
│   ├── layout.tsx             # Main layout
│   ├── page.tsx               # Move landingpage here
│   └── api/
│       └── ai/
│           └── route.ts       # Move ai-chats functionality here
├── components/
│   ├── ui/
│   └── shared/
├── lib/
│   ├── supabase/
│   │   ├── client.ts
│   │   └── server.ts
│   └── ai/
│       └── speech.ts          # Move speech-recognition here
├── public/
├── styles/
│   └── globals.css            # Move index.css here
├── supabase/
│   └── functions/
│       └── ai-tour/
│           └── index.ts
├── .env.local
├── next.config.js
├── package.json
├── tailwind.config.ts
└── tsconfig.json
