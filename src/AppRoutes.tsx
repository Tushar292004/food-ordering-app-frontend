import { ThemeProvider } from "@/components/theme-provider"
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout";
import HomePage from "./pages/HomePage";
import AuthCallbackPage from "./pages/AuthCallbackPage";
import UserProfilePage from "./pages/UserProfilePage";
import ProtectedRoute from "./auth/ProtectedRoute";
import ManageRestaurantPage from "./pages/ManageRestaurantPage";
import SearchPage from "./pages/SearchPage";

const AppRoutes = () => {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <Routes>

                <Route
                    path='/'
                    element={
                        <Layout showHero={true}><HomePage /></Layout>
                    } />

                <Route
                    path="/auth-callback"
                    element={
                        <AuthCallbackPage />
                    } />
                
                <Route
                    path="/search/:city"
                    element={
                    <Layout showHero={false}>
                        <SearchPage />
                    </Layout>}
                />


                <Route element={<ProtectedRoute />}>
                    <Route
                        path='/user-profile'
                        element={
                            <Layout><UserProfilePage /></Layout>
                        } />

<Route
                        path='/manage-restaurant'
                        element={
                            <Layout>
                                <ManageRestaurantPage /></Layout>
                        } />
                </Route>


                <Route
                    path='*'
                    element={
                        <Navigate to="/" />
                    } />

            </Routes>
        </ThemeProvider>
    )
}

export default AppRoutes;