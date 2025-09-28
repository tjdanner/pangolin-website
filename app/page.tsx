import Image from "next/image";

// ServiceCard component
function ServiceCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="service-card p-6 border-2 border-accent rounded-xl transition-all duration-400 hover:shadow-lg hover:shadow-accent/50 hover:-translate-y-2">
      <h2 className="card-heading text-2xl font-semibold">{title}</h2>
      <p className="text-base">{description}</p>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <div className="home-banner font-sans p-[5%]">
        <div className="banner-content flex flex-col gap-2">
          <h1 className="text-7xl font-semibold">Pangolin</h1>
          <p className="text-3xl font-semibold">
            Networking and Cybersecurity Services
          </p>
        </div>
      </div>

      <div className="intro-section p-[5%] pt-0">
        <div className="text-box flex flex-col gap-2 max-w-2xl">
          <h1 className="text-5xl font-semibold">
            Your Trusted Partner in Comprehensive Cybersecurity Solutions
          </h1>
          <p className="text-lg">
            Cyber threats don't operate on business hours, and neither do we.
            Pangolin delivers 24/7 cybersecurity monitoring and incident
            response services designed to keep your organization one step ahead
            of malicious actors.
          </p>
          <p className="text-lg">
            Our comprehensive security framework combines cutting-edge threat
            detection, penetration testing, and strategic consulting to create
            multiple layers of defense. When seconds matter and your reputation
            is on the line, trust Pangolin to defend what you've built.
          </p>
        </div>
        <Image src="/devices.svg" alt="description" width={505} height={300} />
      </div>

      <div className="card-section p-[5%] pt-0">
        <div className="card-container flex gap-6">
          <ServiceCard
            title="Network Security"
            description="Comprehensive network monitoring, firewall configuration, and intrusion detection systems. We secure your infrastructure from external threats and unauthorized access."
          />
          <ServiceCard
            title="Penetration Testing"
            description="Ethical hacking and vulnerability assessments to identify security weaknesses before malicious actors do. Complete reports with remediation strategies included."
          />
          <ServiceCard
            title="Incident Response"
            description="24/7 rapid response team for security breaches. Immediate containment, forensic analysis, and recovery procedures to minimize downtime and data loss."
          />
        </div>
      </div>
    </div>
  );
}
