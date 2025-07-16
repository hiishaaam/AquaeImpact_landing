import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

const columns = [
  { key: "category", label: "Goals" },
  { key: "biodiversity", label: "Biodiversity Credits" },
  { key: "carbon", label: "Carbon Credits" },
];

const data = [
  {
    category: "Unit of Measurement",
    biodiversity: "Biodiversity Preservation and Restoration",
    carbon: "Biodiversity Preservation and Restoration",
    extra: "Both credit types focus on preservation and restoration, but their measurement units may differ in context.",
  },
  {
    category: "Purpose of Use",
    biodiversity: "Species Habitat Ecosystem Integrity",
    carbon: "tCO2e",
    extra: "Biodiversity credits focus on ecosystem integrity, while carbon credits are measured in tons of CO2 equivalent.",
  },
  {
    category: "Community Focus",
    biodiversity: "Higher",
    carbon: "Lower",
    extra: "Biodiversity credits often have a greater community impact.",
  },
  {
    category: "Locality",
    biodiversity: "Higher",
    carbon: "Lower",
    extra: "Biodiversity credits are typically more localized.",
  },
  {
    category: "Tradability",
    biodiversity: "Lower",
    carbon: "Higher",
    extra: "Carbon credits are generally more tradable in global markets.",
  },
  {
    category: "Liquidity",
    biodiversity: "Lower",
    carbon: "Higher",
    extra: "Carbon credits tend to have higher liquidity.",
  },
  {
    category: "MRV",
    biodiversity: "More comprehensive",
    carbon: "Less comprehensive",
    extra: "MRV (Measurement, Reporting, Verification) is more comprehensive for biodiversity credits.",
  },
  {
    category: "Implementation Cost",
    biodiversity: "Higher",
    carbon: "Lower",
    extra: "Implementation costs are typically higher for biodiversity credits.",
  },
];

export default function OverlapWrapperSubsection() {
  const [expanded, setExpanded] = useState(null);

  return (
    <section className="py-12 px-2 bg-gradient-to-br from-[#e0f7fa]/40 to-[#b2dfdb]/30">
      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-2xl shadow-xl border border-white/30 bg-white/30 dark:bg-[#1a1a1a]/40 backdrop-blur-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table
              className="min-w-full font-sans"
              role="table"
              aria-label="Biodiversity vs Carbon Credits Comparison"
            >
              <thead className="sticky top-0 z-10">
                <tr>
                  <th className="py-4 px-6 text-left font-bold text-lg text-gray-800 dark:text-gray-100 bg-white/60 dark:bg-[#222]/60 backdrop-blur border-b border-white/20 rounded-tl-2xl">
                    GOALS
                  </th>
                  <th className="py-4 px-6 text-left font-bold text-lg text-white bg-[#8ed8d2] border-b border-white/20">
                    BIODIVERSITY CREDITS
                  </th>
                  <th className="py-4 px-6 text-left font-bold text-lg text-white bg-[#355b5a] border-b border-white/20 rounded-tr-2xl">
                    CARBON CREDITS
                  </th>
                  <th className="w-12 bg-white/60 dark:bg-[#222]/60 border-b border-white/20"></th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, idx) => (
                  <React.Fragment key={idx}>
                    <tr
                      tabIndex={0}
                      className="group hover:bg-white/40 dark:hover:bg-[#333]/40 transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
                      onClick={() => setExpanded(expanded === idx ? null : idx)}
                      aria-expanded={expanded === idx}
                    >
                      {columns.map((col) => (
                        <td
                          key={col.key}
                          className="py-4 px-6 text-gray-900 dark:text-gray-100"
                        >
                          {row[col.key]}
                        </td>
                      ))}
                      <td className="text-center">
                        {expanded === idx ? (
                          <ChevronUpIcon className="w-5 h-5 inline" />
                        ) : (
                          <ChevronDownIcon className="w-5 h-5 inline" />
                        )}
                      </td>
                    </tr>
                    <AnimatePresence>
                      {expanded === idx && (
                        <motion.tr
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="bg-white/60 dark:bg-[#222]/60"
                        >
                          <td colSpan={columns.length + 1} className="py-4 px-6">
                            <span className="text-gray-700 dark:text-gray-200">
                              {row.extra || "More details about this row..."}
                            </span>
                          </td>
                        </motion.tr>
                      )}
                    </AnimatePresence>
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
