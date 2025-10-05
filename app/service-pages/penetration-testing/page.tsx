import ServicePageTemplate from "../../components/ServicePageTemplate";
import { MdBugReport, MdShield, MdSpeed } from "react-icons/md";

export default function PenetrationTesting() {
  return (
    <ServicePageTemplate
      title="Penetration Testing"
      subtitle="Identify vulnerabilities before attackers do"
      heroSection={{
        title: "Comprehensive Security Testing",
        paragraphs: [
          "Our penetration testing services simulate real-world cyber attacks to identify vulnerabilities in your systems before malicious actors can exploit them. Using industry-standard methodologies and cutting-edge tools, our certified ethical hackers thoroughly test your network, applications, and infrastructure to provide actionable insights for strengthening your security posture.",
          "We go beyond automated scanning tools by combining advanced techniques with human expertise to uncover complex security flaws that could put your organization at risk. Our detailed reports include not only identified vulnerabilities but also step-by-step remediation guidance, helping you prioritize fixes based on risk level and business impact.",
        ],
        imageSrc: "/security-testing.svg",
        imageAlt: "Penetration Testing",
        imagePosition: "left",
      }}
      cardsSection={{
        title: "Testing Services",
        cards: [
          {
            icon: <MdBugReport />,
            title: "Vulnerability Assessment",
            description:
              "Systematic identification and classification of security vulnerabilities across your entire IT infrastructure.",
            href: "/contact",
          },
          {
            icon: <MdShield />,
            title: "Network Penetration Testing",
            description:
              "Simulated attacks on your network infrastructure to identify entry points and potential breach scenarios.",
            href: "/contact",
          },
          {
            icon: <MdSpeed />,
            title: "Web Application Testing",
            description:
              "Comprehensive testing of web applications for common vulnerabilities like SQL injection and XSS attacks.",
            href: "/contact",
          },
        ],
      }}
      processSection={{
        title: "Our Testing Process",
        paragraphs: [
          "A systematic approach to identifying and reporting security vulnerabilities.",
        ],
        imageSrc: "/testing-process.svg",
        imageAlt: "Testing Process",
        steps: [
          {
            stepNumber: 1,
            title: "Planning & Reconnaissance",
            description:
              "Define scope, gather intelligence, and understand your systems architecture.",
          },
          {
            stepNumber: 2,
            title: "Vulnerability Discovery",
            description:
              "Identify potential entry points and security weaknesses using various techniques.",
          },
          {
            stepNumber: 3,
            title: "Exploitation & Reporting",
            description:
              "Safely exploit found vulnerabilities and provide detailed remediation guidance.",
          },
        ],
      }}
      showFormSection={true}
      formSection={{
        title: "Request Penetration Testing",
        subtitle:
          "Ready to test your security? Get a comprehensive assessment from our certified experts.",
        backgroundColor: "bg-gray-50",
      }}
    />
  );
}
