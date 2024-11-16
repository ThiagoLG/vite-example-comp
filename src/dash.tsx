import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HabitsList from './HabitsList.tsx'

createRoot(document.getElementById('root-list')!).render(
  <StrictMode>
    <HabitsList />
  </StrictMode>,
)