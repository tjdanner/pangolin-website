import Image from "next/image";
import { MdSecurity, MdBugReport, MdEmergency } from "react-icons/md";

// ServiceCard component
function ServiceCard({
  title,
  description,
  icon,
  href,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}) {
  return (
    <div className="service-card flex flex-col items-start p-6 border-2 bg-background border-accent rounded-xl transition-all duration-400 hover:shadow-lg hover:shadow-accent/50 hover:-translate-y-2">
      <div className="text-accent text-6xl mb-3">{icon}</div>
      <h2 className="card-heading text-2xl">{title}</h2>
      <p>{description}</p>
      <a
        href={href}
        className="mt-6 inline-block bg-accent hover:bg-accent/80 text-white px-4 py-2 rounded-full transition-colors duration-350"
      >
        Learn More
      </a>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <section className="home-banner font-sans p-[5%] bg-black">
        <div className="banner-content flex flex-col gap-2">
          <h1 className="text-7xl font-semibold">Pangolin</h1>
          <p className="text-3xl font-semibold">
            Networking and Cybersecurity Services
          </p>
        </div>
      </section>

      <section className="text-section p-[5%] flex justify-center">
        <div className="text-content flex gap-16 justify-self-center max-w-screen-2xl">
          <div className="text-box flex flex-col gap-2 w-1/2">
            <h1 className="text-5xl font-semibold">
              Your Trusted Partner in Comprehensive Cybersecurity Solutions
            </h1>
            <p className="text-lg">
              Cyber threats don't operate on business hours, and neither do we.
              Pangolin delivers 24/7 cybersecurity monitoring and incident
              response services designed to keep your organization one step
              ahead of malicious actors.
            </p>
            <p className="text-lg">
              Our comprehensive security framework combines cutting-edge threat
              detection, penetration testing, and strategic consulting to create
              multiple layers of defense. When seconds matter and your
              reputation is on the line, trust Pangolin to defend what you've
              built.
            </p>
          </div>
          <Image
            src="/devices.svg"
            alt="description"
            width={400}
            height={300}
            className="w-1/2"
          />
        </div>
      </section>

      <section className="card-section p-[5%] flex justify-center bg-black">
        <div className="card-section-content max-w-screen-xl flex flex-col gap-8">
          <h1 className="text-5xl font-semibold">Our Services</h1>
          <div className="card-container flex gap-6">
            <ServiceCard
              icon={<MdSecurity />}
              title="Network Security"
              description="Comprehensive network monitoring, firewall configuration, and intrusion detection systems. We secure your infrastructure from external threats and unauthorized access."
              href="#"
            />
            <ServiceCard
              icon={<MdBugReport />}
              title="Penetration Testing"
              description="Ethical hacking and vulnerability assessments to identify security weaknesses before malicious actors do. Complete reports with remediation strategies included."
              href="#"
            />
            <ServiceCard
              icon={<MdEmergency />}
              title="Incident Response"
              description="24/7 rapid response team for security breaches. Immediate containment, forensic analysis, and recovery procedures to minimize downtime and data loss."
              href="#"
            />
          </div>
        </div>
      </section>

      <section className="text-section p-[5%] flex justify-center">
        <div className="text-content flex gap-16 items-center max-w-screen-2xl">
          <Image
            src="/dev-focus.svg"
            alt="description"
            width={400}
            height={300}
            className="w-1/2"
          />
          <div className="text-box flex flex-col gap-2 w-1/2">
            <h1 className="text-5xl font-semibold">
              Security That Works in the Background
            </h1>
            <p className="text-lg">
              The best cybersecurity is invisible to your daily operations. Our
              automated monitoring, threat detection, and incident response
              systems work quietly in the background, ensuring your business
              runs smoothly while staying protected from evolving cyber threats.
              You won't even notice we're there—until you need us.
            </p>
            <p className="text-lg">
              While your team focuses on serving customers and growing revenue,
              Pangolin's advanced security infrastructure continuously scans,
              analyzes, and responds to potential threats in real-time. Our
              seamless integration means no disruption to your workflow, no
              complex training requirements, and no security headaches—just
              peace of mind that lets you concentrate on what matters most.
            </p>
          </div>
        </div>
      </section>

      <section className="end-cta flex justify-center">
        <div className="end-cta-content p-[5%] bg-black flex flex-col items-center gap-2 text-center max-w-screen-lg">
          <h1 className="text-5xl font-semibold">Secure Your Business Today</h1>
          <p className="text-2xl">
            Companies across industries trust Pangolin to keep their operations
            secure and their data protected. Experience the peace of mind that
            comes with enterprise-grade cybersecurity tailored for your
            business.
          </p>
          <a className="mt-6 inline-block bg-accent hover:bg-accent/80 text-white px-4 py-2 rounded-full transition-colors duration-350">
            Contact
          </a>
        </div>
      </section>
    </div>
  );
}
