const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// 'Aug 2023' -> months since year 0; 'Present' -> the current month
function toMonthIndex(label, now) {
  if (/present/i.test(label)) return now.getFullYear() * 12 + now.getMonth();
  const [mon, year] = label.trim().split(/\s+/);
  return Number(year) * 12 + MONTHS.indexOf(mon.slice(0, 3));
}

/**
 * Total work experience from job periods like 'May 2022 – Jun 2023'.
 * Months are counted inclusively (as LinkedIn does), and overlapping roles are
 * only counted once, so concurrent jobs don't inflate the total.
 */
export function totalExperience(jobs, now = new Date()) {
  const months = new Set();
  for (const { period } of jobs) {
    const [from, to] = period.split(/\s*[–-]\s*/);
    const start = toMonthIndex(from, now);
    const end = toMonthIndex(to ?? from, now);
    for (let m = start; m <= end; m++) months.add(m);
  }
  return { years: Math.floor(months.size / 12), months: months.size % 12 };
}
