import { useState } from "react";
import { AdviserPortal } from "./components/AdviserPortal";
import { PortfolioPerformancePage } from "./components/PortfolioPerformancePage";

type AppPage = 'portal' | 'portfolio-performance';

export default function App() {
  const [currentPage, setCurrentPage] = useState<AppPage>('portal');

  const handleNavigate = (page: string) => {
    if (page === 'portfolio-performance') {
      setCurrentPage('portfolio-performance');
    }
    // Add other page navigation logic here as needed
  };

  const handleBackToPortal = () => {
    setCurrentPage('portal');
  };

  return (
    <div className="min-h-screen">
      {currentPage === 'portal' && (
        <AdviserPortal onNavigate={handleNavigate} />
      )}
      
      {currentPage === 'portfolio-performance' && (
        <PortfolioPerformancePage onBack={handleBackToPortal} />
      )}
    </div>
  );
}