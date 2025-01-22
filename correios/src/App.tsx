import { ThemeProvider } from "@/components/theme-provider"
import { AppRoutes } from "@/routes/AppRoutes"
import { BrowserRouter as Router } from "react-router-dom"
import './App.css'


const App = () => {
    return (
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
            <Router>
                <AppRoutes />
            </Router>
        </ThemeProvider>
    )
}

export default App
