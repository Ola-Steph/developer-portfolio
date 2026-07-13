import { AnimatePresence, motion } from "framer-motion";
import { DocPage } from "./types";

import Overview from "./pages/Overview";
import Architecture from "./pages/Architecture";
import Features from "./pages/Features";
import API from "./pages/API";
import Authentication from "./pages/Authentication";
import Security from "./pages/Security";
import Database from "./pages/Database";
import Deployment from "./pages/Deployment";
import Gallery from "./pages/Gallery";
import Challenges from "./pages/Challenges";
import Lessons from "./pages/Lessons";

interface Props {
  active: DocPage;
}

export default function Content({ active }: Props) {
  const renderPage = () => {
    switch (active) {
      case "overview":
        return <Overview />;

      case "architecture":
        return <Architecture />;

      case "features":
        return <Features />;

      case "api":
        return <API />;

      case "authentication":
        return <Authentication />;

      case "security":
        return <Security />;

      case "database":
        return <Database />;

      case "deployment":
        return <Deployment />;

      case "gallery":
        return <Gallery />;

      case "challenges":
        return <Challenges />;

      case "lessons":
        return <Lessons />;

      default:
        return <Overview />;
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={active}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.25 }}
      >
        {renderPage()}
      </motion.div>
    </AnimatePresence>
  );
}