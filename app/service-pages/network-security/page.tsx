import Banner from "../../components/Banner";
import TextSection from "../../components/TextSection";
import CardSection from "../../components/CardSection";
import ProcessSection from "../../components/ProcessSection";
import EndCTA from "../../components/EndCTASection";
import { MdSecurity, MdMonitorHeart, MdBugReport } from "react-icons/md";

export default function NetworkSecurity() {
  return (
    <div>
      <Banner
        title="Network Security"
        subtitle="Protecting your network from evolving cyber threats 24/7"
      />

      {/* Add your page content here using your components */}
      <TextSection
        title="Secure Your Network Infrastructure"
        paragraphs={[
          "Your network is the backbone of your business operations, and protecting it requires more than just basic firewalls. Our comprehensive network security solutions provide multi-layered defense against sophisticated cyber threats, unauthorized access, and data breaches. We deploy advanced monitoring systems, intrusion detection protocols, and real-time threat analysis to ensure your network remains secure 24/7.",
          "From small businesses to enterprise-level organizations, we design custom network security architectures that scale with your growth. Our team continuously monitors network traffic, identifies vulnerabilities before they can be exploited, and responds immediately to any suspicious activity. With our proactive approach, you can focus on running your business while we handle the complex task of keeping your digital infrastructure safe and compliant.",
        ]}
        imageSrc="/around-the-world.svg"
        imageAlt="Network Security"
        imagePosition="right"
      />

      <CardSection
        title="Network Security Services"
        cards={[
          {
            icon: <MdSecurity />,
            title: "Firewall Management",
            description:
              "Advanced firewall configuration and management to block unauthorized access while maintaining optimal network performance. Includes regular rule updates and threat analysis.",
          },
          {
            icon: <MdMonitorHeart />,
            title: "24/7 Network Monitoring",
            description:
              "Continuous monitoring of network traffic with real-time alerts for suspicious activity. Our SOC team responds immediately to potential threats and anomalies.",
          },
          {
            icon: <MdBugReport />,
            title: "Vulnerability Assessment",
            description:
              "Regular scanning and assessment of network infrastructure to identify security gaps before they can be exploited by malicious actors.",
          },
        ]}
      />

      <ProcessSection
        title="Our Process"
        paragraphs={[
          "Our systematic approach ensures comprehensive protection for your network infrastructure.",
        ]}
        steps={[
          {
            stepNumber: 1,
            title: "Assessment",
            description:
              "We analyze your current network setup and identify potential vulnerabilities.",
          },
          {
            stepNumber: 2,
            title: "Implementation",
            description:
              "Deploy tailored security solutions designed for your specific infrastructure.",
          },
          {
            stepNumber: 3,
            title: "Monitoring",
            description:
              "Continuous protection with real-time monitoring and threat response.",
          },
        ]}
      />
    </div>
  );
}
