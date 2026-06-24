import { cvData } from "./cvData";

export const navSectionConfig = [
  { id: "intro", labelKey: "intro", num: "01" },
  { id: "education", labelKey: "education", num: "02" },
  { id: "academic", labelKey: "academicExp", num: "03" },
  { id: "publications", labelKey: "publications", num: "04" },
  { id: "conferences", labelKey: "conferences", num: "05" },
  { id: "platforms", labelKey: "platforms", num: "06" },
  { id: "social", labelKey: "social", num: "07" },
  { id: "exhibitions", labelKey: "exhibitions", num: "08" },
  { id: "awards", labelKey: "awards", num: "09" },
  { id: "professional", labelKey: "professional", num: "10" },
  { id: "communities", labelKey: "communities", num: "11" },
  { id: "skills", labelKey: "skills", num: "12" },
];

export function getNavSections(lang) {
  const { sections } = cvData[lang];
  return navSectionConfig.map(({ id, labelKey, num }) => ({
    id,
    num,
    label: sections[labelKey],
  }));
}
