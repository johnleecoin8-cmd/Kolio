import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Data from './pages/Data';
import InfluencerDatabase from './pages/InfluencerDatabase';
import InfluencerDatabaseTiktok from './pages/InfluencerDatabaseTiktok';
import InfluencerDatabaseYoutube from './pages/InfluencerDatabaseYoutube';
import FeaturesDiscovery from './pages/FeaturesDiscovery';
import FeaturesDiscoveryTiktok from './pages/FeaturesDiscoveryTiktok';
import FeaturesAnalytics from './pages/FeaturesAnalytics';
import FeaturesEmailFinder from './pages/FeaturesEmailFinder';
import FeaturesManagement from './pages/FeaturesManagement';
import FeaturesTracking from './pages/FeaturesTracking';
import FeaturesVetting from './pages/FeaturesVetting';
import Api from './pages/Api';
import ApiRaw from './pages/ApiRaw';
import Payments from './pages/Payments';
import LookalikeTool from './pages/LookalikeTool';
import SearchEngine from './pages/SearchEngine';
import EngagementRateCalculator from './pages/EngagementRateCalculator';
import IgViewsCalculator from './pages/IgViewsCalculator';
import TiktokViewsCalculator from './pages/TiktokViewsCalculator';
import CustomerStories from './pages/CustomerStories';
import BlogIndex from './pages/BlogIndex';
import BlogPost from './pages/BlogPost';
import ContentLibrary from './pages/ContentLibrary';
import FindInfluencers from './pages/FindInfluencers';
import Academy from './pages/Academy';
import Careers from './pages/Careers';
import Podcast from './pages/Podcast';
import Legal from './pages/Legal';
import CreatorProfile from './pages/CreatorProfile';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/data" element={<Data />} />
        <Route path="/influencer-database" element={<InfluencerDatabase />} />
        <Route path="/influencer-database/tiktok" element={<InfluencerDatabaseTiktok />} />
        <Route path="/influencer-database/youtube" element={<InfluencerDatabaseYoutube />} />
        <Route path="/features/influencer-discovery" element={<FeaturesDiscovery />} />
        <Route path="/features/influencer-discovery/tiktok" element={<FeaturesDiscoveryTiktok />} />
        <Route path="/features/influencer-analytics" element={<FeaturesAnalytics />} />
        <Route path="/features/influencer-email-finder" element={<FeaturesEmailFinder />} />
        <Route path="/features/influencer-management" element={<FeaturesManagement />} />
        <Route path="/features/influencer-tracking" element={<FeaturesTracking />} />
        <Route path="/features/influencer-vetting" element={<FeaturesVetting />} />
        <Route path="/influencer-marketing-api" element={<Api />} />
        <Route path="/influencer-marketing-api/raw" element={<ApiRaw />} />
        <Route path="/influencer-payments" element={<Payments />} />
        <Route path="/influencer-lookalike-tool" element={<LookalikeTool />} />
        <Route path="/influencer-search-engine" element={<SearchEngine />} />
        <Route path="/engagement-rate-calculator" element={<EngagementRateCalculator />} />
        <Route path="/instagram-average-views-calculator" element={<IgViewsCalculator />} />
        <Route path="/tiktok-average-views-calculator" element={<TiktokViewsCalculator />} />
        <Route path="/customer-stories/nordvpn" element={<CustomerStories />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/influencer-marketing-platforms" element={<BlogPost />} />
        <Route path="/content-library/brands/red-bull-examples/influencers" element={<ContentLibrary />} />
        <Route path="/find-influencers/united-states/fitness" element={<FindInfluencers />} />
        <Route path="/academy" element={<Academy />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/podcast" element={<Podcast />} />
        <Route path="/legal/privacy-policy" element={<Legal />} />
        <Route path="/creator/:id" element={<CreatorProfile />} />
      </Routes>
    </Layout>
  );
}
