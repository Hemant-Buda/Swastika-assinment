import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/Home/HomePage";
import ArtPage from "../Pages/Art/ArtPage";
import DramaPuppetryPage from "../Pages/Darama/DramaPuppetryPage";
import MovementMusicPage from "../Pages/MomentAndMusic/MomentAndMusic";
import LanguageLiteracyPage from "../Pages/LangaugeAndLiteracy/language-literacy-page";
import SciencePage from "../Pages/Science/science-page";
import EngineeringPage from "../Pages/Engineering/engineering-page";
import TechnologiesPage from "../Pages/Technologies/technologies-page";
import MathematicsNumeracyPage from "../Pages/MathematicsAndNumeracy/mathematics-numeracy-page";
import HumanitiesSocialSciencesPage from "../Pages/HumanitiesAndSocialScience/humanities-social-sciences-page";
import IntegratedCurriculumPage from "../Pages/IntegratedCurriculum/integrated-curriculum-page";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/art" element={<ArtPage />} />
      <Route path="/drama-puppetry" element={<DramaPuppetryPage />} />
      <Route path="/movement-music" element={<MovementMusicPage />} />
      <Route path="/language-literacy" element={<LanguageLiteracyPage />} />
      <Route path="/science" element={<SciencePage />} />
      <Route path="/engineering" element={<EngineeringPage />} />
      <Route path="/technologies" element={<TechnologiesPage />} />
      <Route
        path="/mathematics-numeracy"
        element={<MathematicsNumeracyPage />}
      />
      <Route
        path="/humanities-social-sciences"
        element={<HumanitiesSocialSciencesPage />}
      />
      <Route
        path="/integrated-curriculum"
        element={<IntegratedCurriculumPage />}
      />
    </Routes>
  );
}
