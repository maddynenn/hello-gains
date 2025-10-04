import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CheckoutPage from "./pages/CheckoutPage";
import FAQ from "./pages/FAQ";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import Onboarding from "./pages/Onboarding";
import ProductPage from "./pages/ProductPage";
import YourBox from "./pages/YourBox";
import "./App.css";
import NavBar from "./components/NavBar";

function App() {
	return (
		<>
			<BrowserRouter>
				<nav>
					<NavBar></NavBar>
				</nav>
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="/products" element={<ProductPage />} />
					<Route path="/checkout" element={<CheckoutPage />} />
					<Route path="/faq" element={<FAQ />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/onboarding" element={<Onboarding />} />
					<Route path="/your-box" element={<YourBox />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}
export default App;
