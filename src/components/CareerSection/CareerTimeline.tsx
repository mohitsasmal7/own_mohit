import { ScrollTimeline } from "../lightswind/scroll-timeline";
import { Briefcase, Award, Layers, Globe } from "lucide-react";

export const CareerTimeline = () => {
  const careerEvents = [
    {
      year: "2025 – Present",
      title: "India AI Impact Summit and Global Technology Summit",
      subtitle: "Delegator",
      description:
        "Representing India in multiple international summits. Served as a key bilateral delegate facilitating high-level discourse between Indian and Dutch stakeholders during the GTS Innovation Dialogue 2025. Leveraged technical expertise in digital infrastructure to align the Netherlands' advanced capabilities in semiconductors and ethical AI with India's scale in Digital Public Infrastructure (DPI).",
      icon: <Globe className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "2024 – Present",
      title: "Lead Full Stack Flutter Developer",
      subtitle: "Freelance",
      description:
        "Spearheading the development of next-generation cross-platform applications with a focus on performance optimization and scalability. With over 3 years of hands-on experience, I drive digital transformation by merging agile development methodologies with diverse domain expertise.",
      icon: <Briefcase className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "May 23-24, 2025",
      title: "Strategic Representative, Rising Northeast Summit 2025",
      subtitle: "Advancing the 'Act East' Policy & Digital Investment Frameworks | Ministry of DoNER",
      description:
        "Represented India's central policy interests at the inaugural Rising Northeast Investors Summit at Bharat Mandapam, New Delhi. Played a pivotal role in the B2G (Business-to-Government) track, bridging the gap between global investors and regional stakeholders to unlock the Northeast’s potential as India’s 'New Growth Engine.",
      icon: <Layers className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "April 10-11, 2025",
      title: "Special Invitee: Global Technology Summit 2025",
      subtitle: "Shaping 'Sambhavna': The Geopolitics of Technology & Future Frontiers | Carnegie India & Ministry of External Affairs",
      description:
        "Special Invitee to India's flagship geotechnology summit, co-hosted by the Ministry of External Affairs (MEA) and Carnegie India. Participated in high-level deliberations under the theme 'Sambhavna' (Possibilities), focusing on the strategic intersection of technology, democratic values, and international security.",
      icon: <Award className="h-4 w-4 mr-2 text-primary" />,
    },
  ];

  return (
    <div id="career">
      <ScrollTimeline
        events={careerEvents}
        title="Career Journey"
        subtitle="An evolving path of leadership, innovation, and impact"
        animationOrder="staggered"
        cardAlignment="alternating"
        cardVariant="elevated"
        parallaxIntensity={0.15}
        revealAnimation="fade"
        progressIndicator={true}
        lineColor="bg-primary/20"
        activeColor="bg-primary"
        progressLineWidth={3}
        progressLineCap="round"
      />
    </div>
  );
};
