"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, GitFork, ExternalLink, CalendarDays, GitCommit, GitPullRequest, BookOpen } from "lucide-react";
import { GithubIcon as Github } from "../ui/SocialIcons";
import clsx from "clsx";

const YEARS = [2026, 2025, 2024, 2023, 2022];

const ACTIVITY_DATA: Record<number, any[]> = {
  2026: [
    { month: "June", year: 2026, commits: 41, reposCount: 4, prs: 21 },
    { month: "May", year: 2026, commits: 131, reposCount: 4, reposCreated: 2, prs: 31 },
    { month: "April", year: 2026, commits: 91, reposCount: 4, reposCreated: 1, prs: 33 },
    { month: "March", year: 2026, commits: 2, reposCount: 1, prs: 1 },
    { month: "February", year: 2026, commits: 72, reposCount: 2, prs: 36 },
    { month: "January", year: 2026, commits: 49, reposCount: 2, prs: 24 },
  ],
  2025: [
    { month: "December", year: 2025, commits: 13, reposCount: 2, prs: 6 },
    { month: "November", year: 2025, commits: 145, reposCount: 3, prs: 66 },
    { month: "October", year: 2025, commits: 151, reposCount: 1, prs: 114 },
    { month: "September", year: 2025, commits: 101, reposCount: 3, prs: 53 },
    { month: "August", year: 2025, commits: 85, reposCount: 2, prs: 28 },
    { month: "July", year: 2025, commits: 105, reposCount: 4, prs: 41 },
  ],
  2024: [
    { month: "December", year: 2024, commits: 54, reposCount: 2, prs: 15 },
    { month: "November", year: 2024, commits: 88, reposCount: 4, prs: 22 },
    { month: "October", year: 2024, commits: 42, reposCount: 2, prs: 8 },
    { month: "September", year: 2024, commits: 65, reposCount: 3, prs: 12 },
  ]
};

export function GitHub() {
  const [selectedYear, setSelectedYear] = useState<number>(2026);

  // Generate mock heatmap data for a full year (52 weeks * 7 days)
  const generateMockHeatmap = (year: number) => {
    let seed = year * 10000;
    const random = () => {
      const x = Math.sin(seed++) * 10000;
      return x - Math.floor(x);
    };

    const weeks = [];
    let totalCommits = 0;

    const activityFactor = year === 2026 ? 0.4 : year === 2025 ? 0.7 : year === 2024 ? 0.5 : 0.2;

    for (let i = 0; i < 52; i++) {
      const days = [];
      for (let j = 0; j < 7; j++) {
        // Stop generating data after mid-June for 2026 to match reality
        if (year === 2026 && i > 23) {
          days.push(0);
          continue;
        }

        const rand = random();
        let level = 0;

        if (rand > (1 - activityFactor * 0.3)) {
          level = 4;
          totalCommits += Math.floor(random() * 5) + 8;
        } else if (rand > (1 - activityFactor * 0.5)) {
          level = 3;
          totalCommits += Math.floor(random() * 4) + 4;
        } else if (rand > (1 - activityFactor * 0.7)) {
          level = 2;
          totalCommits += Math.floor(random() * 3) + 2;
        } else if (rand > (1 - activityFactor * 0.9)) {
          level = 1;
          totalCommits += 1;
        }

        days.push(level);
      }
      weeks.push(days);
    }

    if (year === 2026) totalCommits = 386; 
    if (year === 2025) totalCommits = 600;
    if (year === 2024) totalCommits = 432;
    if (year === 2023) totalCommits = 210;
    if (year === 2022) totalCommits = 45;

    return { weeks, totalCommits };
  };

  const heatmapData = useMemo(() => generateMockHeatmap(selectedYear), [selectedYear]);
  const currentActivity = ACTIVITY_DATA[selectedYear] || [];

  const mockRepos = [
    { name: "healmb1/HMB", desc: "Enterprise application and core backend services for HMB Softwares.", stars: 45, forks: 8, lang: "Codeignter" },
    { name: "aaqibmustafa/nexus-api", desc: "A scalable and secure REST API architecture for modern applications.", stars: 32, forks: 5, lang: "Laravel" },
    { name: "healmb1/cosmochat", desc: "Backend infrastructure for the Cosmochat AI-powered platform.", stars: 28, forks: 12, lang: "Laravel" },
    { name: "hmbsoftwarespvt/hostaguest", desc: "Hostel management system backend with complete property management features.", stars: 15, forks: 3, lang: "Codeignter" },
  ];

  return (
    <section id="github" className="py-24 bg-bg-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row items-center justify-between mb-16"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-4 flex items-center gap-3">
              <Github className="w-10 h-10" /> Open Source
            </h2>
            <div className="w-20 h-1 bg-accent-primary rounded-full" />
            <p className="mt-6 text-text-secondary max-w-2xl text-lg">
              I love building in the open and contributing to the developer community.
            </p>
          </div>

          <a
            href="https://github.com/AAQIBMUSTAFA"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 md:mt-0 inline-flex items-center justify-center px-6 py-3 rounded-full bg-bg-secondary text-text-primary font-medium hover:bg-bg-secondary/80 transition-colors border border-text-secondary/20"
          >
            Follow on GitHub
            <ExternalLink className="ml-2 w-4 h-4" />
          </a>
        </motion.div>

        {/* Heatmap Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col lg:flex-row gap-6 mb-12"
        >
          {/* Heatmap Container */}
          <div className="bg-bg-secondary border border-text-secondary/10 rounded-2xl p-6 md:p-8 shadow-sm flex-1 overflow-hidden">
            <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
              <h3 className="text-xl font-bold text-text-primary">
                {heatmapData.totalCommits} contributions in {selectedYear}
              </h3>
              <div className="flex items-center gap-2 text-sm text-text-secondary">
                <CalendarDays className="w-4 h-4" />
                <span>Jan {selectedYear} - {selectedYear === 2026 ? 'Jun' : 'Dec'} {selectedYear}</span>
              </div>
            </div>

            <motion.div
              key={selectedYear} // forces re-animation when year changes
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full overflow-x-auto pb-4 custom-scrollbar"
            >
              <div className="inline-flex gap-1 min-w-max">
                {heatmapData.weeks.map((week, wIndex) => (
                  <div key={wIndex} className="flex flex-col gap-1">
                    {week.map((level, dIndex) => (
                      <div
                        key={`${wIndex}-${dIndex}`}
                        className={clsx(
                          "w-[11px] h-[11px] rounded-[2px]",
                          level === 0 && "bg-[var(--color-gh-0)]",
                          level === 1 && "bg-[var(--color-gh-1)]",
                          level === 2 && "bg-[var(--color-gh-2)]",
                          level === 3 && "bg-[var(--color-gh-3)]",
                          level === 4 && "bg-[var(--color-gh-4)]"
                        )}
                        title={`${level} contributions on this day`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="flex items-center justify-end gap-2 mt-4 text-xs text-text-secondary">
              <span>Less</span>
              <div className="flex gap-1">
                {[0, 1, 2, 3, 4].map(level => (
                  <div
                    key={level}
                    className={clsx(
                      "w-[11px] h-[11px] rounded-[2px]",
                      level === 0 && "bg-[var(--color-gh-0)]",
                      level === 1 && "bg-[var(--color-gh-1)]",
                      level === 2 && "bg-[var(--color-gh-2)]",
                      level === 3 && "bg-[var(--color-gh-3)]",
                      level === 4 && "bg-[var(--color-gh-4)]"
                    )}
                  />
                ))}
              </div>
              <span>More</span>
            </div>
          </div>

          {/* Year Selector Menu */}
          <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 shrink-0 lg:w-32 pr-4 lg:pr-0 custom-scrollbar">
            {YEARS.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={clsx(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-colors text-left whitespace-nowrap",
                  selectedYear === year
                    ? "bg-accent-primary text-white"
                    : "text-text-secondary hover:bg-bg-secondary hover:text-text-primary border border-transparent hover:border-text-secondary/10"
                )}
              >
                {year}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Top Repos */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold text-text-primary mb-6">Top Repositories</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mockRepos.map((repo, index) => (
                <motion.div
                  key={repo.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-bg-secondary p-5 rounded-xl border border-text-secondary/10 hover:border-accent-primary/50 transition-colors group flex flex-col h-full"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-base font-bold text-accent-primary group-hover:underline cursor-pointer break-all">
                      {repo.name}
                    </h4>
                  </div>
                  <p className="text-text-secondary text-sm mb-4 flex-grow">
                    {repo.desc}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex gap-4 text-xs text-text-secondary">
                      <span className="flex items-center gap-1"><Star className="w-3.5 h-3.5" /> {repo.stars}</span>
                      <span className="flex items-center gap-1"><GitFork className="w-3.5 h-3.5" /> {repo.forks}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-accent-secondary" />
                      <span className="text-xs text-text-primary">{repo.lang}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contribution Activity Timeline */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-text-primary mb-6">Contribution Activity</h3>
            <div className="bg-bg-secondary border border-text-secondary/10 rounded-xl p-5 shadow-sm h-[400px] overflow-y-auto custom-scrollbar relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedYear}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {currentActivity.length > 0 ? (
                    <div className="space-y-6 relative before:absolute before:inset-0 before:ml-2.5 before:-translate-x-px before:h-full before:w-0.5 before:bg-text-secondary/10">
                      {currentActivity.map((activity, idx) => (
                        <div key={idx} className="relative pl-8">
                          <div className="absolute left-0 top-1 w-5 h-5 rounded-full bg-bg-primary border-2 border-text-secondary/20 flex items-center justify-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent-primary" />
                          </div>
                          
                          <div className="mb-1">
                            <span className="text-sm font-bold text-text-primary">{activity.month} {activity.year}</span>
                          </div>
                          
                          <div className="space-y-3 mt-3">
                            {activity.commits > 0 && (
                              <div className="flex items-start gap-2 text-sm text-text-secondary">
                                <GitCommit className="w-4 h-4 mt-0.5 text-accent-primary shrink-0" />
                                <span>Created <strong>{activity.commits} commits</strong> in {activity.reposCount} {activity.reposCount === 1 ? 'repository' : 'repositories'}</span>
                              </div>
                            )}
                            
                            {activity.reposCreated && (
                              <div className="flex items-start gap-2 text-sm text-text-secondary">
                                <BookOpen className="w-4 h-4 mt-0.5 text-green-500 shrink-0" />
                                <span>Created <strong>{activity.reposCreated} {activity.reposCreated === 1 ? 'repository' : 'repositories'}</strong></span>
                              </div>
                            )}
                            
                            {activity.prs > 0 && (
                              <div className="flex items-start gap-2 text-sm text-text-secondary">
                                <GitPullRequest className="w-4 h-4 mt-0.5 text-purple-500 shrink-0" />
                                <span>Opened <strong>{activity.prs} pull {activity.prs === 1 ? 'request' : 'requests'}</strong> in {activity.reposCount} {activity.reposCount === 1 ? 'repository' : 'repositories'}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center text-text-secondary py-10">
                      No detailed activity data for {selectedYear}.
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
