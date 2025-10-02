import { MdSecurity, MdBugReport, MdEmergency } from "react-icons/md";

import Banner from "./components/Banner";
import TextSection from "./components/TextSection";
import CardSection from "./components/CardSection";
import EndCTASection from "./components/EndCTASection";

export default function Home() {
  return (
    <div>
      <Banner
        title="Pangolin"
        subtitle="Networking and Cybersecurity Services"
      />

      <TextSection
        title="Your Trusted Partner in Comprehensive Cybersecurity Solutions"
        paragraphs={[
          "Cyber threats don't operate on business hours, and neither do we. Pangolin delivers 24/7 cybersecurity monitoring and incident response services designed to keep your organization one step ahead of malicious actors.",
          "Our comprehensive security framework combines cutting-edge threat detection, penetration testing, and strategic consulting to create multiple layers of defense. When seconds matter and your reputation is on the line, trust Pangolin to defend what you've built.",
        ]}
        imageSrc="/devices.svg"
        imageAlt="Description"
        imagePosition="right"
      />

      <CardSection
        title="Our Services"
        cards={[
          {
            icon: <MdSecurity />,
            title: "Network Security",
            description:
              "Comprehensive network monitoring, firewall configuration, and intrusion detection systems. We secure your infrastructure from external threats and unauthorized access.",
            href: "#",
          },
          {
            icon: <MdBugReport />,
            title: "Penetration Testing",
            description:
              "Ethical hacking and vulnerability assessments to identify security weaknesses before malicious actors do. Complete reports with remediation strategies included.",
            href: "#",
          },
          {
            icon: <MdEmergency />,
            title: "Incident Response",
            description:
              "24/7 rapid response team for security breaches. Immediate containment, forensic analysis, and recovery procedures to minimize downtime and data loss.",
            href: "#",
          },
        ]}
      />

      <TextSection
        title="Security That Works in the Background"
        paragraphs={[
          "The best cybersecurity is invisible to your daily operations. Our automated monitoring, threat detection, and incident response systems work quietly in the background, ensuring your business runs smoothly while staying protected from evolving cyber threats. You won't even notice we're there—until you need us.",
          "While your team focuses on serving customers and growing revenue, Pangolin's advanced security infrastructure continuously scans, analyzes, and responds to potential threats in real-time. Our seamless integration means no disruption to your workflow, no complex training requirements, and no security headaches—just peace of mind that lets you concentrate on what matters most.",
        ]}
        imageSrc="/dev-focus.svg"
        imageAlt="Description"
        imagePosition="left"
      />

      <EndCTASection
        title="Secure Your Business Today"
        paragraph="Companies across industries trust Pangolin to keep their operations secure and their data protected. Experience the peace of mind that comes with enterprise-grade cybersecurity tailored for your business."
        buttonText="Contact Us"
        buttonHref="#"
        backgroundImage="background-lights.jpg"
      />
    </div>
  );
}
